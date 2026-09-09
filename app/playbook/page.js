export const metadata = {
  title: "The CU-BOM Playbook — Full Decision Operating Model",
  description:
    "The complete CU-BOM playbook: the routing matrix, the safeguard for each tool, the weekly operating rhythm, and ready-to-send templates for the Premortem, DWA Protocol, Structural Pause, and Friction Dial.",
  alternates: { canonical: "https://stratumaegis.com/playbook" },
  openGraph: {
    title: "The CU-BOM Playbook — Full Decision Operating Model",
    description: "The routing matrix, the safeguards, and every ready-to-send template for running CU-BOM yourself.",
    url: "https://stratumaegis.com/playbook",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "The CU-BOM Playbook",
  description: "The complete decision operating model combining the Premortem, DWA Protocol, Structural Pause, and Friction Dial.",
  url: "https://stratumaegis.com/playbook",
  inLanguage: "en-NZ",
};

const PAGE_STYLE = `
  .rail-layout{ display:grid; grid-template-columns:200px minmax(0,1fr); gap:56px; padding:48px 0 100px; align-items:start; }
  nav.rail{ position:sticky; top:80px; display:flex; flex-direction:column; gap:2px; font-size:13.5px; }
  nav.rail a{ text-decoration:none; color:var(--ink-faint); padding:7px 0; border-left:2px solid transparent; padding-left:14px; }
  nav.rail a:hover{ color:var(--ink); border-left-color:var(--line-strong); }
  nav.rail .rail-num{ font-family:"IBM Plex Mono",monospace; color:var(--ink-faint); font-size:11px; margin-right:6px; }
  article{ min-width:0; max-width:760px; }
  article section{ padding-top:56px; padding-bottom:0; }
  article section:first-of-type{ padding-top:0; }
  .flow{ background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:26px 24px; margin:26px 0 30px; }
  .flow-row{ display:flex; gap:14px; flex-wrap:wrap; }
  .flow-node{ flex:1 1 200px; border:1px solid var(--line-strong); border-radius:8px; padding:14px 16px; background:var(--surface); }
  .flow-node .t{ font-weight:600; font-size:14.5px; }
  .flow-node .s{ font-size:12.5px; color:var(--ink-faint); margin-top:3px; }
  .flow-arrow{ display:flex; align-items:center; justify-content:center; color:var(--ink-faint); font-size:18px; padding:6px 0; }
  .flow-tools{ display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:14px; }
  .flow-tool{ text-align:center; padding:12px 8px; border-radius:8px; font-family:"IBM Plex Mono",monospace; font-size:12px; font-weight:500; text-decoration:none; }
  .flow-tool.t1{ background:var(--system1-bg); color:var(--system1); }
  .flow-tool.t2{ background:var(--red-bg); color:var(--red); }
  .flow-tool.t3{ background:var(--system2-bg); color:var(--system2); }
  .flow-tool.t4{ background:var(--green-bg); color:var(--green); }
  .grid2{ display:grid; grid-template-columns:1fr 1fr; gap:20px; }
  @media (max-width:600px){ .grid2{ grid-template-columns:1fr; } }
  .tool{ border:1px solid var(--line); border-radius:12px; background:var(--surface); margin-bottom:28px; overflow:hidden; }
  .tool-head{ display:flex; align-items:center; justify-content:space-between; gap:16px; padding:20px 24px; border-bottom:1px solid var(--line); }
  .tool-head h3{ font-size:21px; margin:0; }
  .tool-head a{ font-size:12.5px; font-family:"IBM Plex Mono",monospace; color:var(--system2); text-decoration:none; white-space:nowrap; }
  .tool-body{ padding:22px 24px 24px; }
  .tool-body h4{ font-family:"IBM Plex Mono",monospace; font-weight:600; font-size:11.5px; letter-spacing:0.08em; text-transform:uppercase; color:var(--ink-faint); margin:20px 0 8px; }
  .tool-body h4:first-child{ margin-top:0; }
  .cadence{ display:flex; flex-direction:column; gap:0; margin-top:6px; }
  .cadence-item{ display:grid; grid-template-columns:120px 1fr; gap:18px; padding:16px 0; border-top:1px solid var(--line); }
  .cadence-item:first-child{ border-top:none; }
  .cadence-item .when{ font-family:"IBM Plex Mono",monospace; font-size:12px; color:var(--system1); font-weight:600; padding-top:2px; }
  .cadence-item .what strong{ display:block; margin-bottom:3px; }
  @media (max-width:880px){
    .rail-layout{ grid-template-columns:1fr; }
    nav.rail{ position:static; flex-direction:row; flex-wrap:wrap; gap:4px 18px; padding-bottom:20px; border-bottom:1px solid var(--line); margin-bottom:12px; }
    nav.rail a{ border-left:none; padding-left:0; }
    .flow-tools{ grid-template-columns:repeat(2,1fr); }
  }
`;

const BODY_HTML = `
<div class="frame" style="padding-top:40px;">
  <div class="breadcrumbs"><a href="/">Home</a> / Playbook</div>
  <h1 style="font-size:clamp(30px,4vw,44px);max-width:20ch;">The CU-BOM Playbook</h1>
  <p style="max-width:60ch;font-size:17px;margin-top:14px;">The full routing matrix, the safeguard for each tool, the weekly rhythm it runs on, and every ready-to-send template &mdash; free to copy into your own team's docs.</p>
</div>

<div class="frame rail-layout">
  <nav class="rail">
    <a href="#model"><span class="rail-num">01</span>The Model</a>
    <a href="#matrix"><span class="rail-num">02</span>Decision Matrix</a>
    <a href="#premortem"><span class="rail-num">03</span>Premortem</a>
    <a href="#dwa"><span class="rail-num">04</span>DWA Protocol</a>
    <a href="#pause"><span class="rail-num">05</span>Structural Pause</a>
    <a href="#friction"><span class="rail-num">06</span>Friction Dial</a>
    <a href="#cadence"><span class="rail-num">07</span>Operating Rhythm</a>
    <a href="#templates"><span class="rail-num">08</span>Ready-to-Send</a>
  </nav>

  <article>

    <section id="model">
      <div class="eyebrow"><span class="bar"></span>THE MODEL</div>
      <h2>Two engines, one business</h2>
      <p style="font-size:17px;max-width:66ch;margin-bottom:20px;">Unconscious Thought Theory splits cognition into two engines that run on every decision a company makes. Neither is the "good" one &mdash; each is correct for a different shape of problem.</p>
      <div class="grid2">
        <div><h4 style="color:var(--system1);font-family:'IBM Plex Mono',monospace;text-transform:uppercase;font-size:12px;letter-spacing:0.06em;">System 1 &middot; Intuition</h4><p>Fast, automatic, associative. High capacity &mdash; a vast library of pattern and experience. Best for complex, many-variable problems, but blind to its own bias.</p></div>
        <div><h4 style="color:var(--system2);font-family:'IBM Plex Mono',monospace;text-transform:uppercase;font-size:12px;letter-spacing:0.06em;">System 2 &middot; Attention</h4><p>Slow, rule-following, deliberate. Low capacity &mdash; overloads fast under complex data. Best for simple choices, or wherever a rule must be followed.</p></div>
      </div>
      <div class="flow">
        <div class="flow-row">
          <div class="flow-node"><div class="t">Internal &middot; Operations &amp; Strategy</div><div class="s">Pre-launch risk, sudden crisis</div></div>
          <div class="flow-node"><div class="t">External &middot; Go-to-Market</div><div class="s">Funnel UX, lead quality</div></div>
        </div>
        <div class="flow-arrow">&#8595;</div>
        <div class="flow-tools">
          <a class="flow-tool t1" href="#premortem">PREMORTEM</a>
          <a class="flow-tool t2" href="#pause">STRUCTURAL PAUSE</a>
          <a class="flow-tool t3" href="#friction">FRICTION-MAPPING</a>
          <a class="flow-tool t4" href="#friction">INTENTIONAL FRICTION</a>
        </div>
      </div>
      <p style="font-size:13.5px;color:var(--ink-faint);">The DWA Protocol sits inside the Internal branch alongside the Premortem &mdash; routed separately below because it carries its own strict eligibility check.</p>
    </section>

    <section id="matrix">
      <div class="eyebrow"><span class="bar"></span>DECISION MATRIX</div>
      <h2>Which tool, for which problem</h2>
      <p style="margin-bottom:16px;">Find your scenario in the matrix, then confirm the tool is cleared in its safeguard box before running it.</p>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Tool</th><th>Business situation</th><th>System 1 lever</th><th>System 2 guardrail</th></tr></thead>
          <tbody>
            <tr><td class="tool-name">Premortem</td><td>Major, high-stakes launch or project kickoff</td><td>Overrides team optimism &amp; groupthink</td><td>Structured, prospective risk analysis</td></tr>
            <tr><td class="tool-name">DWA Protocol</td><td>High-complexity call with many variables</td><td>Unconscious multi-variable pattern-matching</td><td>Scored matrix + enforced 24-hour blackout</td></tr>
            <tr><td class="tool-name">Structural Pause</td><td>Sudden operational crisis or heated conflict</td><td>Inhibits the panic / emotional reflex</td><td>Forces three written analytical options</td></tr>
            <tr><td class="tool-name">Friction-Mapping</td><td>Conversion-rate / UX optimization</td><td>Enables smooth, habitual buying action</td><td>Audits &amp; removes needless cognitive hurdles</td></tr>
            <tr><td class="tool-name">Intentional Friction</td><td>Low-quality inbound leads or post-signup churn</td><td>Filters out autopilot, low-intent users</td><td>Forces a conscious act of self-selection</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="premortem">
      <div class="tool">
        <div class="tool-head"><h3>The Premortem</h3><a href="/tools/premortem">Full guide &#8594;</a></div>
        <div class="tool-body">
          <h4>What it does</h4>
          <p>Before a launch, the team is told the project has already failed catastrophically and works backward to explain why &mdash; swapping optimistic System 1 autopilot for a cold System 2 audit while the outcome is still fictional.</p>
          <h4>Evidence</h4>
          <p class="evidence">Developed by Gary Klein, popularized by <em>Harvard Business Review</em>; Kahneman has called it his favorite de-biasing tool. In use at the World Bank and, as "prospective hindsight," at NASA. Raises accuracy in identifying causes of a future outcome by <span class="stat">~30%</span> over standard risk review.</p>
          <h4>Safeguard &mdash; psychological safety</h4>
          <div class="safeguard-pair">
            <div class="safeguard red"><div class="sg-title">&#128683; Red &middot; score &le; 3.0</div><p>Don't run an open room. Use the Anonymous Inbox variant (&sect;08).</p></div>
            <div class="safeguard green"><div class="sg-title">&#9989; Green &middot; score &gt; 4.0</div><p>Clear to run a standard, open-room Premortem.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section id="dwa">
      <div class="tool">
        <div class="tool-head"><h3>The DWA Protocol</h3><a href="/tools/dwa-protocol">Full guide &#8594;</a></div>
        <div class="tool-body">
          <h4>What it does</h4>
          <p>System 2 scores the options against a fixed criteria matrix, the decision is frozen for 24 hours of total distraction, then System 1 casts a blind, gut-level vote against that matrix.</p>
          <h4>Evidence</h4>
          <p class="evidence">Originated by Ap Dijksterhuis in <em>Science</em>. The most disputed tool here: replication attempts (Nieuwenstein et al.) found no reliable advantage over conscious deliberation, and a <em>BMC Medical Education</em> study found experts do <span class="stat">better</span> thinking consciously &mdash; DWA only helped novices.</p>
          <h4>Safeguard &mdash; expert-only caveat</h4>
          <div class="safeguard-pair">
            <div class="safeguard green"><div class="sg-title">&#9989; Green &middot; 3+ yrs domain expertise</div><p>Safe to run &mdash; the unconscious has a real pattern library to draw on.</p></div>
            <div class="safeguard red"><div class="sg-title">&#128683; Red &middot; novice team</div><p>Don't run DWA. Use a System 2 expert panel instead.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section id="pause">
      <div class="tool">
        <div class="tool-head"><h3>The Structural Pause</h3><a href="/tools/structural-pause">Full guide &#8594;</a></div>
        <div class="tool-body">
          <h4>What it does</h4>
          <p>On an unexpected crisis, the leader takes a mandatory ten-minute solo pause and writes down three distinct ways to respond before speaking &mdash; interrupting the automatic System 1 script.</p>
          <h4>Evidence</h4>
          <p class="evidence">The same logic underwrites aviation Crew Resource Management. Bridgewater Associates enforces a version of it through internal tooling the moment an error or heated argument surfaces on the floor.</p>
          <h4>Safeguard &mdash; time pressure</h4>
          <div class="safeguard-pair">
            <div class="safeguard green"><div class="sg-title">&#9989; Green &middot; strategic, hours to decide</div><p>Enforce the full pause and the three-option write-up.</p></div>
            <div class="safeguard red"><div class="sg-title">&#128683; Red &middot; real-time, seconds to decide</div><p>Don't pause &mdash; fall back to trained emergency procedure.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section id="friction">
      <div class="tool">
        <div class="tool-head"><h3>Friction Dial</h3><a href="/tools/friction-dial">Full guide &#8594;</a></div>
        <div class="tool-body">
          <h4>What it does</h4>
          <p><strong>Friction-Mapping</strong> strips System 2 hesitation out of a purchase path. <strong>Intentional Friction</strong> reintroduces a small conscious checkpoint on purpose, to filter out low-intent traffic.</p>
          <h4>Evidence</h4>
          <p class="evidence">Amazon patented 1-Click Buying to delete System 2 friction; CRO teams see conversion jump from <span class="stat">50%</span> to over <span class="stat">120%</span> cutting an 11-field form to 4. The flip side: a frictionless demo form floods a pipeline with unqualified leads.</p>
          <h4>Safeguard &mdash; which lever to pull</h4>
          <div class="safeguard-pair">
            <div class="safeguard green"><div class="sg-title">Bottleneck = volume</div><p>Deploy Friction-Mapping: open the funnel.</p></div>
            <div class="safeguard green"><div class="sg-title">Bottleneck = junk leads</div><p>Deploy Intentional Friction: add one checkpoint.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section id="cadence">
      <div class="eyebrow"><span class="bar"></span>OPERATING RHYTHM</div>
      <h2>Where this lives in a normal week</h2>
      <p style="margin-bottom:6px;">CU-BOM sits inside three pivot points your calendar already has.</p>
      <div class="cadence">
        <div class="cadence-item"><div class="when">KICKOFF</div><div class="what"><strong>Sprint planning / project kickoff</strong>Run the Premortem before a dollar is spent.</div></div>
        <div class="cadence-item"><div class="when">ONGOING</div><div class="what"><strong>Every operating week</strong>Apply Friction-Mapping or Intentional Friction based on lead-quality data. Trigger a Structural Pause the moment a metric drops or conflict appears.</div></div>
        <div class="cadence-item"><div class="when">MON&ndash;WED</div><div class="what"><strong>Major procurement / strategy reviews</strong>Score Monday, blackout Tuesday, blind ballot Wednesday.</div></div>
      </div>
    </section>

    <section id="templates">
      <div class="eyebrow"><span class="bar"></span>READY-TO-SEND</div>
      <h2>Copy, paste, run</h2>
      <p>Fill in the <span class="fill">italic</span> fields and send.</p>

      <h4 style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-faint);margin-top:22px;">Psychological safety survey</h4>
      <div class="tmpl">
        <div class="tmpl-title">5 questions &middot; 1 (strongly disagree) to 5 (strongly agree) &middot; anonymous</div>
        <ol>
          <li>If you make a mistake on this team, it is rarely held against you.</li>
          <li>People here can raise problems without fear of blame.</li>
          <li>No one on this team undermines a colleague's efforts.</li>
          <li>It is safe to take a calculated professional risk here.</li>
          <li>No one would ridicule someone for a dissenting opinion.</li>
        </ol>
        <hr style="border:none;border-top:1px solid var(--line);margin:12px 0;">
        <p style="margin:0;">1.0&ndash;3.0 &#8594; Anonymous Inbox only. 3.1&ndash;4.0 &#8594; run it, keep it anonymous. 4.1&ndash;5.0 &#8594; open room.</p>
      </div>

      <h4 style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-faint);">Premortem invite</h4>
      <div class="tmpl">
        <dl>
          <dt>Subject</dt><dd>Project Premortem: <span class="fill">[Project Name]</span> &middot; 45&ndash;60 min</dd>
          <dt>Body</dt><dd>Before we launch <span class="fill">[Project Name]</span>, we're imagining the project has already failed catastrophically, then working backward to find the risks we're blind to. No prep needed.</dd>
        </dl>
      </div>

      <h4 style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-faint);">DWA blind-ballot poll</h4>
      <div class="tmpl">
        <dl>
          <dt>Prompt</dt><dd>"Don't look at the scoring matrix yet. Based purely on gut instinct &mdash; which option do you believe is right?"</dd>
          <dt>Options</dt><dd><span class="fill">[Option A]</span> &middot; <span class="fill">[Option B]</span> &middot; <span class="fill">[Option C]</span> &middot; Abstain</dd>
        </dl>
      </div>

      <h4 style="font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-faint);">Intentional-friction qualification field</h4>
      <div class="tmpl"><p style="margin:0;">Add one mandatory text field to the demo-request form: <em>"What's the single biggest bottleneck you need this to solve in the next 30 days?"</em></p></div>
    </section>

  </article>
</div>
`;

export default function PlaybookPage() {
  return (
    <>
      <style>{PAGE_STYLE}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}
