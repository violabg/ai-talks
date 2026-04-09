import { Redis } from "@upstash/redis"

const kvAvailable = !!(
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
)

const redis = kvAvailable
  ? new Redis({
      url: process.env.KV_REST_API_URL!,
      token: process.env.KV_REST_API_TOKEN!,
    })
  : null

// Store as native boolean — Upstash auto-parses JSON so string "true"
// would come back as boolean true anyway, breaking === "true" comparisons.
export async function getArticlePublished(slug: string): Promise<boolean | null> {
  if (!redis) return null
  try {
    const val = await redis.get<boolean>(`article:published:${slug}`)
    if (val === null || val === undefined) return null
    return Boolean(val)
  } catch {
    return null
  }
}

export async function setArticlePublished(
  slug: string,
  published: boolean
): Promise<void> {
  if (!redis) throw new Error("KV not configured")
  await redis.set(`article:published:${slug}`, published)
}

export async function getAllArticlePublishedStates(): Promise<
  Record<string, boolean>
> {
  if (!redis) return {}
  try {
    const keys = await redis.keys("article:published:*")
    if (!keys.length) return {}
    const values = await redis.mget<(boolean | null)[]>(...keys)
    return Object.fromEntries(
      keys
        .map((k, i) => [k.replace("article:published:", ""), values[i]])
        .filter(([, v]) => v !== null && v !== undefined)
        .map(([k, v]) => [k, Boolean(v)])
    )
  } catch {
    return {}
  }
}

/**
 * SecondaryStorage adapter for better-auth.
 * better-auth stores/retrieves serialized JSON strings.
 * We wrap values in an extra JSON.stringify so Upstash round-trips
 * them back as strings rather than parsed objects.
 */
export const kvSecondaryStorage = {
  get: async (key: string): Promise<string | null> => {
    if (!redis) return null
    try {
      const val = await redis.get<string>(key)
      if (val === null || val === undefined) return null
      // Upstash may have parsed the stored JSON — re-serialize if needed
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
