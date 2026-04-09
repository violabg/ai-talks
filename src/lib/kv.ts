import { Redis } from "@upstash/redis";
import { ENV } from "varlock/env";

const kvAvailable = !!(
  ENV.KV_REST_API_URL && ENV.KV_REST_API_TOKEN
)

const redis = kvAvailable
  ? new Redis({
      url: ENV.KV_REST_API_URL!,
      token: ENV.KV_REST_API_TOKEN!,
    })
  : null

// --- Generic helpers ---

async function getFlag(key: string): Promise<boolean | null> {
  if (!redis) return null
  try {
    const val = await redis.get<boolean>(key)
    if (val === null || val === undefined) return null
    return Boolean(val)
  } catch {
    return null
  }
}

async function setFlag(key: string, value: boolean): Promise<void> {
  if (!redis) throw new Error("KV not configured")
  await redis.set(key, value)
}

async function getAllFlags(prefix: string): Promise<Record<string, boolean>> {
  if (!redis) return {}
  try {
    const keys = await redis.keys(`${prefix}*`)
    if (!keys.length) return {}
    const values = await redis.mget<(boolean | null)[]>(...keys)
    return Object.fromEntries(
      keys
        .map((k, i) => [k.replace(prefix, ""), values[i]])
        .filter(([, v]) => v !== null && v !== undefined)
        .map(([k, v]) => [k, Boolean(v)])
    )
  } catch {
    return {}
  }
}

// --- Published ---

export async function getArticlePublished(slug: string): Promise<boolean | null> {
  return getFlag(`article:published:${slug}`)
}

export async function setArticlePublished(slug: string, published: boolean): Promise<void> {
  return setFlag(`article:published:${slug}`, published)
}

export async function getAllArticlePublishedStates(): Promise<Record<string, boolean>> {
  return getAllFlags("article:published:")
}

// --- Featured ---

export async function getArticleFeatured(slug: string): Promise<boolean | null> {
  return getFlag(`article:featured:${slug}`)
}

export async function setArticleFeatured(slug: string, featured: boolean): Promise<void> {
  return setFlag(`article:featured:${slug}`, featured)
}

export async function getAllArticleFeaturedStates(): Promise<Record<string, boolean>> {
  return getAllFlags("article:featured:")
}

// --- SecondaryStorage adapter for better-auth ---

export const kvSecondaryStorage = {
  get: async (key: string): Promise<string | null> => {
    if (!redis) return null
    try {
      const val = await redis.get<string>(key)
      if (val === null || val === undefined) return null
      return typeof val === "string" ? val : JSON.stringify(val)
    } catch {
      return null
    }
  },
  set: async (key: string, value: string, ttl?: number): Promise<void> => {
    if (!redis) return
    try {
      if (ttl) {
        await redis.set(key, value, { ex: ttl })
      } else {
        await redis.set(key, value)
      }
    } catch (err) {
      console.error("[kv] set error:", err)
    }
  },
  delete: async (key: string): Promise<void> => {
    if (!redis) return
    try {
      await redis.del(key)
    } catch (err) {
      console.error("[kv] delete error:", err)
    }
  },
}
