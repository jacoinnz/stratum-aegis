export const metadata = {
  title: "CU-BOM — The Decision Operating Model for Fast and Slow Thinking",
  description:
    "CU-BOM is a free operating model for business decisions: the Premortem, the DWA Protocol, the Structural Pause, and the Friction Dial, each with a safeguard that says when it's actually safe to use. Written in New Zealand.",
  alternates: { canonical: "https://stratumaegis.com/" },
  openGraph: {
    title: "CU-BOM — The Decision Operating Model for Fast and Slow Thinking",
    description:
      "A free, working model for when to trust intuition and when to force the data — the Premortem, DWA Protocol, Structural Pause, and Friction Dial, each with its own safeguard.",
    url: "https://stratumaegis.com/",
  },
  twitter: {
    title: "CU-BOM — The Decision Operating Model",
    description:
      "Free routing matrix for business decisions: know when to trust the gut and when to force the data.",
  },
};

const HOME_STYLE = `
  .hero{ padding:64px 0 56px; }
  .hero-grid{ display:grid; grid-template-columns:1.1fr 0.9fr; gap:56px; align-items:center; }
  @media (max-width:900px){ .hero-grid{ grid-template-columns:1fr; } }
  .hero h1{ font-size:clamp(34px,5vw,54px); line-height:1.05; letter-spacing:-0.01em; }
  .hero .g{ color:var(--system1); font-style:italic; font-weight:500; }
  .hero .t{ color:var(--system2); font-style:italic; font-weight:500; }
  .hero .dek{ margin-top:22px; font-size:18.5px; max-width:46ch; }
  .hero .ctarow{ margin-top:32px; display:flex; gap:14px; flex-wrap:wrap; align-items:center; }
  .hero .microcopy{ margin-top:14px; font-size:13px; color:var(--ink-faint); }
  .hero-diagram{ position:relative; width:100%; aspect-ratio:1/1; max-width:400px; margin:0 auto; border-radius:16px; overflow:hidden; border:1px solid var(--line); box-shadow:var(--shadow); }
  .hero-diagram .half{ position:absolute; inset:0; display:flex; flex-direction:column; justify-content:flex-end; padding:22px; }
  .hero-diagram .half.left{ clip-path:polygon(0 0,100% 0,0 100%); background:var(--system1); }
  .hero-diagram .half.right{ clip-path:polygon(100% 0,100% 100%,0 100%); background:var(--system2); }
  .hero-diagram .lbl{ font-family:"IBM Plex Mono",monospace; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.92); font-weight:600; }
  .hero-diagram .lbl small{ display:block; font-family:"Source Sans 3",sans-serif; text-transform:none; letter-spacing:0; font-weight:400; opacity:0.85; margin-top:3px; font-size:12.5px; }
  .hero-diagram .seam{ position:absolute; inset:0; display:flex; align-items:center; justify-content:center; }
  .hero-diagram .seam-dot{ width:52px; height:52px; border-radius:50%; background:var(--surface); border:1px solid var(--line); display:flex; align-items:center; justify-content:center; font-family:"IBM Plex Mono",monospace; font-size:11px; font-weight:600; color:var(--ink); box-shadow:var(--shadow); text-align:center; }
  .strip{ border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:24px 0; }
  .strip .frame{ display:flex; flex-wrap:wrap; gap:12px 34px; align-items:center; justify-content:space-between; }
  .strip .item{ font-size:13px; color:var(--ink-faint); }
  .strip .item strong{ color:var(--ink-soft); font-weight:600; }
  .steps{ display:grid; gap:0; }
  .step{ display:grid; grid-template-columns:56px 1fr; gap:20px; padding:26px 0; border-top:1px solid var(--line); }
  .step:first-child{ border-top:none; padding-top:0; }
  .step .num{ font-family:"Newsreader",serif; font-size:30px; color:var(--system1); font-style:italic; }
  .step h3{ font-size:19px; margin-bottom:6px; }
  .step p{ font-size:15px; max-width:56ch; }
  .nz-band{ background:var(--system2); color:var(--on-system2); }
  .nz-band .frame{ display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
  @media (max-width:820px){ .nz-band .frame{ grid-template-columns:1fr; } }
  .nz-band h2{ color:var(--on-system2); font-size:28px; }
  .nz-band p{ color:color-mix(in srgb, var(--on-system2) 82%, transparent); font-size:16px; }
  .nz-band .eyebrow{ color:color-mix(in srgb, var(--on-system2) 70%, transparent); }
  .nz-facts{ display:grid; gap:0; }
  .nz-fact{ display:flex; gap:12px; align-items:baseline; padding:14px 0; border-top:1px solid color-mix(in srgb, var(--on-system2) 25%, transparent); }
  .nz-fact:first-child{ border-top:none; }
  .nz-fact .k{ font-family:"IBM Plex Mono",monospace; font-size:12px; color:color-mix(in srgb, var(--on-system2) 65%, transparent); flex:0 0 90px; }
  .nz-fact .v{ font-size:15px; font-weight:500; }
`;

const TOOLS = [
  { slug: "premortem", idx: "01", name: "Premortem", blurb: "Kill a project on paper before you kill it for real — surface hidden risk while it's still fictional." },
  { slug: "dwa-protocol", idx: "02", name: "DWA Protocol", blurb: "Freeze your scoring matrix, sleep on it, then compare the gut vote against the score." },
  { slug: "structural-pause", idx: "03", name: "Structural Pause", blurb: "A forced ten minutes between a crisis and your response, borrowed from aviation crew training." },
  { slug: "friction-dial", idx: "04", name: "Friction Dial", blurb: "Strip friction to convert volume; add it back deliberately to filter for lead quality." },
];

export default function HomePage() {
  return (
    <>
      <style>{HOME_STYLE}</style>

      <header className="hero">
        <div className="frame hero-grid">
          <div>
            <div className="eyebrow">
              <span className="bar"></span>DECISION OPERATING MODEL
            </div>
            <h1>
              Run your business on <span className="g">fast</span> instinct <em>and</em>{" "}
              <span className="t">slow</span> analysis.
            </h1>
            <p className="dek">
              CU-BOM doesn&rsquo;t replace Kepner-Tregoe, Six Sigma, or your own decision matrix. It&rsquo;s the
              layer those methods were never built to have &mdash; the one that tells you when to trust the
              gut, and when your gut has spotted something the matrix missed.
            </p>
            <div className="ctarow">
              <a className="btn btn-primary" href="/playbook">
                Read the free playbook ↗
              </a>
              <a className="btn btn-ghost" href="#tools">
                See the four tools ↓
              </a>
            </div>
            <div className="microcopy">Free to read, no signup &mdash; written and maintained from New Zealand.</div>
          </div>
          <div className="hero-diagram" aria-hidden="true">
            <div className="half left">
              <div className="lbl">
                System 1<small>Fast, intuitive</small>
              </div>
            </div>
            <div className="half right">
              <div className="lbl" style={{ textAlign: "right" }}>
                System 2<small>Slow, deliberate</small>
              </div>
            </div>
            <div className="seam">
              <div className="seam-dot">
                CU
                <br />
                BOM
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="strip">
        <div className="frame">
          <div className="item">
            Built on <strong>Kahneman&rsquo;s</strong> dual-process research
          </div>
          <div className="item">
            <strong>Gary Klein&rsquo;s</strong> Premortem &mdash; used at NASA &amp; the World Bank
          </div>
          <div className="item">Grounded in cited decision science, not trend-chasing</div>
        </div>
      </div>

      <section id="tools">
        <div className="frame">
          <div className="section-head">
            <div className="eyebrow">
              <span className="bar"></span>THE MODEL
            </div>
            <h2>Four tools. One rule for each: know when you&rsquo;re allowed to use it.</h2>
            <p>
              Every tool below is real, independently documented, and imperfect on its own. CU-BOM&rsquo;s job
              is routing &mdash; matching the right tool to the right situation, and refusing to run it when
              the safeguard fails.
            </p>
          </div>
          <div className="tools-grid">
            {TOOLS.map((t) => (
              <a className="tool-card" href={`/tools/${t.slug}`} key={t.slug}>
                <div className="idx mono">{t.idx}</div>
                <h3>{t.name}</h3>
                <p>{t.blurb}</p>
                <div className="use">Read the guide →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-2)" }}>
        <div className="frame">
          <div className="section-head">
            <div className="eyebrow">
              <span className="bar"></span>SELF-SERVE
            </div>
            <h2>Run it yourself, no facilitator required</h2>
            <p>
              Everything on this site is meant to be used without hiring anyone &mdash; read it, check the
              safeguard, run the tool with your own team.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <div>
                <h3>Find your situation in the matrix</h3>
                <p>
                  Match what&rsquo;s actually happening &mdash; a launch, a stuck vendor call, a crisis, a
                  leaky funnel &mdash; to the tool built for it.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="num">2</div>
              <div>
                <h3>Run the safeguard check first</h3>
                <p>
                  Every tool has a go/no-go condition &mdash; a psychological-safety score, an expertise
                  threshold, a time-pressure read. Skipping this is the most common way these tools fail.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="num">3</div>
              <div>
                <h3>Copy the template and run it</h3>
                <p>
                  The playbook has the worksheet, the invite text, and the follow-up email already written
                  &mdash; fill in the brackets and send.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nz-band">
        <div className="frame">
          <div>
            <div className="eyebrow">FROM NEW ZEALAND</div>
            <h2>Built for small, flat teams &mdash; wherever you are</h2>
            <p>
              CU-BOM was written for businesses with a handful of people wearing several hats and no time for
              a six-week change program &mdash; the kind of team structure most NZ SMEs already run.
            </p>
          </div>
          <div className="nz-facts">
            <div className="nz-fact">
              <span className="k">COST</span>
              <span className="v">Free to read and reuse</span>
            </div>
            <div className="nz-fact">
              <span className="k">FORMAT</span>
              <span className="v">Web playbook + copy-paste templates</span>
            </div>
            <div className="nz-fact">
              <span className="k">ORIGIN</span>
              <span className="v">Written and maintained in New Zealand</span>
            </div>
            <div className="nz-fact">
              <span className="k">UPDATES</span>
              <span className="v">Revised as the model gets used and tested</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="frame">
          <div className="cta-block">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="bar"></span>NEXT STEP
            </div>
            <h2>Take the model, not a meeting.</h2>
            <p>
              The full playbook &mdash; the routing matrix, all four safeguards, and every ready-to-send
              template &mdash; is free to read. Bookmark it, share it, or copy it into your own team&rsquo;s
              docs.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="/playbook">
                Read the free playbook ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
