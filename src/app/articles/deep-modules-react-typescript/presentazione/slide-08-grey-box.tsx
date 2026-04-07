import * as motion from "motion/react-client";
import { SlideTitle } from "./slide-shared";

export function Slide08GreyBox() {
  return (
    <div className="space-y-8">
      <SlideTitle
        eyebrow="Grey Box Testing"
        title="I test proteggono il contratto pubblico, non l'implementazione"
      />

      <div className="gap-5 grid lg:grid-cols-[1.2fr_1fr] mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-[var(--pres-bg-surface)] p-4 border border-[var(--pres-border)] rounded-xl"
        >
          <pre className="bg-[var(--pres-bg-card)] p-3 rounded overflow-x-auto text-[var(--pres-text-sub)] text-[12px] leading-relaxed">
            {`describe('useCart', () => {
  it('aggiunge prodotto', () => {
    const { result } = renderHook(() => useCart());
    act(() => result.current.addItem({ id: '1', price: 10, quantity: 1 }));
    expect(result.current.total).toBe(10);
  });

  it('applica sconto', () => {
    const { result } = renderHook(() => useCart());
    act(() => result.current.applyDiscount({ type: 'percentage', value: 20 }));
    expect(result.current.total).toBe(160);
  });
});`}
          </pre>
        </motion.div>

        <div className="space-y-3">
          {[
            ["Interfaccia pubblica", "useCart()"],
            ["Implementazione", "libera di cambiare"],
            ["Garanzia", "test verdi = contratto integro"],
          ].map(([a, b], i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 + i * 0.12 }}
              className="bg-[var(--pres-success-dim)] px-4 py-3 border border-[var(--pres-success)]/30 rounded-lg"
            >
              <p className="font-mono text-[var(--pres-success)] text-xs uppercase">{a}</p>
              <p className="mt-1 text-[var(--pres-success-fg)] text-sm">{b}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-[var(--pres-accent-dim)] px-4 py-3 border border-[var(--pres-accent)]/35 rounded-lg text-[var(--pres-text)] text-sm"
          >
            L'agente AI puo rifattorizzare _internal senza supervisione
            continua, ma con feedback oggettivo.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
