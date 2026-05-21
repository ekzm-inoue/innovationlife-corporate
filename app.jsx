// ============================================================
// Innovation Life — main App
// ============================================================

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#00704A",
  "hero_auto": true,
  "show_marquee": true,
  "english_brand_mark": true
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  '#00704A', // Kaguraku green (default)
  '#1F5944', // deeper forest
  '#0B5563', // teal
  '#1A0A1F', // ink (mono)
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent color to CSS variables on root
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--il-green', t.accent);

    // Derive deeper/soft from accent. For non-default accents, compute a darker shade.
    const darken = (hex, amount = 0.18) => {
      const n = parseInt(hex.slice(1), 16);
      let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
      r = Math.max(0, Math.round(r * (1 - amount)));
      g = Math.max(0, Math.round(g * (1 - amount)));
      b = Math.max(0, Math.round(b * (1 - amount)));
      return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    };
    root.style.setProperty('--il-green-deep', darken(t.accent, 0.20));
    root.style.setProperty('--il-green-press', darken(t.accent, 0.32));
  }, [t.accent]);

  return (
    <>
      <ILHeader />
      <ILHero auto={t.hero_auto} />
      {t.show_marquee && <ILMarquee />}
      <ILTargets />
      <ILPartners />
      <ILCases />
      <ILCompany />
      <ILNews />
      <ILDualCTA />
      <ILFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection label="ブランドカラー">
          <TweakColor
            label="Accent"
            value={t.accent}
            options={ACCENT_OPTIONS}
            onChange={(v) => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection label="ヒーロー">
          <TweakToggle
            label="スライド自動再生"
            value={t.hero_auto}
            onChange={(v) => setTweak('hero_auto', v)}
          />
        </TweakSection>
        <TweakSection label="補助要素">
          <TweakToggle
            label="マーキー（流れるテキスト）"
            value={t.show_marquee}
            onChange={(v) => setTweak('show_marquee', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
