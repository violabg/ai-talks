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
          className="bg-[rgba(30,41,59,0.8)] p-4 border border-[#334155] rounded-xl"
        >
          <pre className="bg-[#0b1222] p-3 rounded overflow-x-auto text-[#cbd5e1] text-[12px] leading-relaxed">
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
              className="bg-[#34d399]/10 px-4 py-3 border border-[#34d399]/30 rounded-lg"
            >
              <p className="font-mono text-[#34d399] text-xs uppercase">{a}</p>
              <p className="mt-1 text-[#d1fae5] text-sm">{b}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-[#a78bfa]/15 px-4 py-3 border border-[#a78bfa]/35 rounded-lg text-[#e2e8f0] text-sm"
          >
            L'agente AI puo rifattorizzare _internal senza supervisione
            continua, ma con feedback oggettivo.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
