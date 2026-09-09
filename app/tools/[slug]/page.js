import { notFound } from "next/navigation";

const TOOLS = {
  premortem: {
    title: "The Premortem: A Step-by-Step Guide for Business Teams",
    description:
      "How to run a Premortem: imagine the project has already failed, surface the real risks your team is currently blind to, and check the psychological-safety safeguard before you run it.",
    ogDescription:
      "Imagine the project has already failed catastrophically, then work backward to find the risks you're currently blind to.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to run a Premortem",
      description:
        "Imagine the project has already failed catastrophically, then work backward to find the risks you're currently blind to.",
      step: [
        { "@type": "HowToStep", name: "Check psychological safety", text: "Run the 5-question survey before deciding whether to run an open-room session." },
        { "@type": "HowToStep", name: "Set the premise", text: "Tell the team the project has failed catastrophically three years from now." },
        { "@type": "HowToStep", name: "Silent individual brainstorm", text: "Each person writes their own failure grid for 10 minutes without talking." },
        { "@type": "HowToStep", name: "Consolidate and assign action", text: "Group the risks by theme and assign an owner and deadline to the top three." },
      ],
    },
    body: `
    <div class="breadcrumbs"><a href="/">Home</a> / <a href="/#tools">Tools</a> / Premortem</div>
    <div class="eyebrow"><span class="bar"></span>TOOL 01 &#183; STRATEGIC DECISION-MAKING</div>
    <h1>The Premortem</h1>
    <p class="dek">Before you launch, imagine the project has already failed catastrophically &#8212; then work backward to find the risks your team is currently blind to.</p>

    <h2>What it is</h2>
    <p>A Premortem inverts the usual project review. Instead of asking "what could go wrong," the facilitator declares the project has already failed, completely and publicly, some years from now, and asks the team to explain how. That small fictional distance is what makes it work: it swaps optimistic System 1 autopilot for a cold System 2 audit while the outcome is still safe to discuss, because nothing has actually happened yet.</p>

    <h2>Where it came from</h2>
    <p>The method was developed by cognitive psychologist Gary Klein and popularized by <em>Harvard Business Review</em>. Daniel Kahneman has called it his favorite single tool for de-biasing a decision. It's used at the World Bank, and in "prospective hindsight" form at NASA and in complex healthcare rollouts, precisely because those are environments where optimism bias is expensive.</p>

    <h2>The evidence</h2>
    <p class="evidence">Studies on prospective hindsight &#8212; imagining an outcome has already occurred, then explaining it &#8212; show it raises a team's ability to correctly identify the causes of a future outcome by roughly <span class="stat">30%</span> compared to a standard risk assessment.</p>

    <h2>Run the safeguard check first</h2>
    <p>The single most common way a Premortem fails is running it in a room where people don't feel safe naming the real risk. Before you schedule one, run this 5-question survey anonymously (1 = strongly disagree, 5 = strongly agree):</p>
    <div class="tmpl">
      <ol>
        <li>If you make a mistake on this team, it is rarely held against you.</li>
        <li>People here can raise problems or tough issues without fear of blame.</li>
        <li>No one on this team acts to undermine or discredit a colleague's efforts.</li>
        <li>It is safe to take a calculated professional risk on this team.</li>
        <li>No one would ridicule someone here for voicing a dissenting opinion.</li>
      </ol>
    </div>
    <div class="safeguard-pair">
      <div class="safeguard red"><div class="sg-title">&#128683; Red &#183; average score &#8804; 3.0</div><p>Don't run an open-room session &#8212; people will hide real risk to protect themselves. Use the Anonymous Inbox variant below instead.</p></div>
      <div class="safeguard green"><div class="sg-title">&#9989; Green &#183; average score &gt; 4.0</div><p>Clear to run a standard, collaborative, open-room Premortem.</p></div>
    </div>

    <h2>How to run it</h2>
    <h3>1. Set the premise</h3>
    <p>Read this to the room: <em>"Imagine we are three years into the future. Despite all our excitement, budget, and hard work, this project has failed catastrophically, completely, and publicly. For the next ten minutes, work in absolute silence and write a comprehensive history of exactly how and why we failed."</em></p>
    <h3>2. Silent, individual brainstorm</h3>
    <p>Every team member fills out their own grid, alone, across four categories: operational &amp; tech, market &amp; customer, team &amp; culture, and external threats. No talking during this phase &#8212; that's what protects the quieter, more honest answers.</p>
    <h3>3. Consolidate and assign action</h3>
    <p>Share the points, group them by theme on a shared board, then take the top three and assign each one a preventative action, an owner, and a deadline.</p>
    <h3>4. Lock it in within 24 hours</h3>
    <p>Send a short follow-up naming the top threats, the action, the owner, and the date, and check on it at your normal weekly sync &#8212; a Premortem that isn't followed up becomes a slide nobody re-reads.</p>

    <h2>If your safety score came back low</h2>
    <p>Don't cancel the exercise &#8212; change the format. Set up a completely anonymous digital submission link and ask: <em>"If you were secretly forced to bet $1,000 that this project will fail, what specific flaw would you bet on?"</em> The facilitator reads the anonymous answers aloud during the session, which shifts the focus from who said it to whether the risk is real.</p>

    <h2>Where it breaks</h2>
    <p>Left untimed, a Premortem tips into analysis paralysis and over-inflated minor risks. Cap the silent-brainstorm phase at ten minutes and chair the consolidation strictly.</p>

    <div class="related">
      <h2>Continue reading</h2>
      <ul>
        <li><a href="/tools/structural-pause">The Structural Pause &#8594; for when the crisis is already happening</a></li>
        <li><a href="/tools/dwa-protocol">The DWA Protocol &#8594; for complex, multi-variable calls</a></li>
        <li><a href="/vs-kepner-tregoe">How this fits next to Kepner-Tregoe &#8594;</a></li>
        <li><a href="/playbook">The full CU-BOM playbook &#8594;</a></li>
      </ul>
    </div>
    `,
  },
  "dwa-protocol": {
    title: "The DWA Protocol: Sleep-On-It Decisions, Done Properly",
    description:
      "How to run the Deliberation-Without-Attention protocol: score the data, freeze the decision, sleep on it, then compare the gut vote to the matrix — and the expert-only rule that decides if it's safe to use.",
    ogDescription:
      "Score the data, freeze it, sleep on it, then compare the gut vote against the matrix — but only if your team has the expertise for it.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to run the Deliberation-Without-Attention Protocol",
      description: "Score the data, freeze the decision, sleep on it, then compare the gut vote against the matrix.",
      step: [
        { "@type": "HowToStep", name: "Confirm expertise", text: "Check the team has 3+ years of direct domain expertise before using this tool." },
        { "@type": "HowToStep", name: "Spotlight phase", text: "Score every option against 5-8 explicit criteria, then freeze the decision." },
        { "@type": "HowToStep", name: "Incubation phase", text: "Enforce a 24-hour blackout on the topic; the team works on something unrelated and sleeps on it." },
        { "@type": "HowToStep", name: "Verdict phase", text: "Take a blind gut-level vote before revealing the matrix, then compare the two." },
      ],
    },
    body: `
    <div class="breadcrumbs"><a href="/">Home</a> / <a href="/#tools">Tools</a> / DWA Protocol</div>
    <div class="eyebrow"><span class="bar"></span>TOOL 02 &#183; COMPLEX, MULTI-VARIABLE CHOICES</div>
    <h1>The DWA Protocol</h1>
    <p class="dek">Score the options, freeze the decision, sleep on it, then compare your gut vote to the matrix &#8212; but only if your team has earned the right to trust its gut.</p>

    <h2>What it is</h2>
    <p>Deliberation-Without-Attention (DWA) is built for decisions with too many variables for System 2 to hold at once &#8212; a vendor choice, an acquisition target, a pricing model with a dozen interacting factors. System 2 does the scoring; System 1 gets a deliberate window, away from the topic entirely, to integrate the pattern before a final call is made.</p>

    <h2>Where it came from &#8212; and why it's disputed</h2>
    <p>The theory was originated by Ap Dijksterhuis and published in <em>Science</em>: for multi-attribute choices, a period of unconscious processing can outperform continued conscious deliberation. Pixar's alternating "Braintrust review, then time away from the script" rhythm runs on the same principle.</p>
    <p class="evidence">This is the most heavily disputed tool in the CU-BOM model. Large replication attempts (Nieuwenstein et al.) found no reliable evidence that a brief distraction task consistently outperforms conscious thought. A study in <em>BMC Medical Education</em> found that while DWA helped novices with simple options, trained experts made <span class="stat">better</span> decisions thinking consciously about complex problems.</p>

    <h2>The safeguard &#8212; run this check before you use it</h2>
    <p>Ask one question: does the team making this call have a minimum of three years of direct domain expertise in this specific problem?</p>
    <div class="safeguard-pair">
      <div class="safeguard green"><div class="sg-title">&#9989; Green &#183; expert team</div><p>Safe to run. The unconscious has a real pattern library from lived experience to draw on during incubation.</p></div>
      <div class="safeguard red"><div class="sg-title">&#128683; Red &#183; novice team</div><p>Don't run DWA. A gut check here is uneducated guesswork &#8212; use a System 2 expert panel or bring in outside expertise instead.</p></div>
    </div>

    <h2>How to run it</h2>
    <h3>1. The Spotlight Phase (Monday)</h3>
    <p>Define the exact decision, choose 5&#8211;8 core criteria &#8212; no more, or System 2 overloads &#8212; and score every option against them using only documented facts. Once the matrix is filled, freeze it: no debating the winner, no looking at totals.</p>
    <h3>2. The Incubation Phase (Tuesday)</h3>
    <p>Enforce a strict 24-hour blackout on the topic. The team moves to a completely unrelated, engaging task. No casual chat about it over coffee or Slack. Sleep on it &#8212; the overnight gap is doing real work.</p>
    <h3>3. The Verdict Phase (Wednesday)</h3>
    <p>Before anyone looks at the scoring matrix again, take an anonymous blind ballot of everyone's immediate gut-level choice. Then reveal the matrix and compare.</p>
    <div class="tmpl">
      <div class="tmpl-title">If the vote and the matrix agree</div>
      <p style="margin:0;">Maximum cognitive consensus &#8212; proceed immediately.</p>
    </div>
    <div class="tmpl">
      <div class="tmpl-title">If the vote and the matrix diverge</div>
      <p style="margin:0;">Your unconscious has likely spotted an unquantified variable the matrix didn't capture &#8212; hidden team friction, a reputational risk, a cultural mismatch. Spend 15 minutes consciously diagnosing what the data missed before deciding.</p>
    </div>

    <h2>Where it breaks</h2>
    <p>Skip the expertise check and this becomes a coin flip dressed up as intuition. It's also not a substitute for a structured scoring method &#8212; it runs on top of whatever matrix you already use, including a Kepner-Tregoe-style Decision Analysis.</p>

    <div class="related">
      <h2>Continue reading</h2>
      <ul>
        <li><a href="/vs-kepner-tregoe">How the DWA Protocol slots into an existing Kepner-Tregoe matrix &#8594;</a></li>
        <li><a href="/tools/premortem">The Premortem &#8594; for pre-launch risk, not mid-decision paralysis</a></li>
        <li><a href="/playbook">The full CU-BOM playbook &#8594;</a></li>
      </ul>
    </div>
    `,
  },
  "structural-pause": {
    title: "The Structural Pause: A Crisis Response Method From Aviation",
    description:
      "How to run the Structural Pause: a forced ten-minute gap between a crisis and your response, adapted from aviation crew resource management — and when the time pressure is too high to use it.",
    ogDescription: "A forced ten-minute gap between a crisis and your response, adapted from aviation crew training.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to run a Structural Pause",
      description: "A forced ten-minute gap between a crisis and your response.",
      step: [
        { "@type": "HowToStep", name: "Check time pressure", text: "Confirm the crisis is strategic (hours to decide), not real-time (seconds to decide)." },
        { "@type": "HowToStep", name: "Enforce the pause", text: "Step away from the keyboard or conversation for ten minutes." },
        { "@type": "HowToStep", name: "Write three options", text: "Generate three distinct written responses before speaking or acting." },
        { "@type": "HowToStep", name: "Respond", text: "Choose from the written options rather than reacting on impulse." },
      ],
    },
    body: `
    <div class="breadcrumbs"><a href="/">Home</a> / <a href="/#tools">Tools</a> / Structural Pause</div>
    <div class="eyebrow"><span class="bar"></span>TOOL 03 &#183; LEADERSHIP &amp; CRISIS RESPONSE</div>
    <h1>The Structural Pause</h1>
    <p class="dek">A forced ten minutes between a crisis and your response &#8212; long enough to stop System 1 panic from making the call for you.</p>

    <h2>What it is</h2>
    <p>When something breaks unexpectedly, the instinct is to react immediately &#8212; and that instinct is usually wrong, because it's an emotional survival reflex, not a considered judgment. The Structural Pause interrupts that reflex with one rule: before you respond to a crisis, you must first write down three distinct ways to handle it. Generating three options, in writing, forces System 2 logic back online.</p>

    <h2>Where it came from</h2>
    <p>The same principle underwrites aviation Crew Resource Management: when an engine fails, pilots are trained to resist the panic reaction to grab the controls, and instead read through a structured checklist together. In business, Bridgewater Associates enforces a version of this through internal tooling &#8212; the moment an error or a heated argument surfaces on the trading floor, the process forces a written, analytical root-cause note before anyone reacts.</p>

    <h2>The safeguard &#8212; check the time pressure first</h2>
    <p>This is the one tool on this site that can actively make things worse if you use it in the wrong moment. Ask: is this crisis measured in seconds, or in hours?</p>
    <div class="safeguard-pair">
      <div class="safeguard green"><div class="sg-title">&#9989; Green &#183; strategic, hours to decide</div><p>A PR problem, an executive resignation, a bad client email. Enforce the full ten-minute pause.</p></div>
      <div class="safeguard red"><div class="sg-title">&#128683; Red &#183; real-time, seconds to decide</div><p>A safety incident, a live systems outage threatening data loss. Don't pause &#8212; fall back to your trained emergency procedure. System 1 reflex is correct here.</p></div>
    </div>

    <h2>How to run it</h2>
    <h3>1. Stop</h3>
    <p>The moment the crisis surfaces &#8212; in a channel, a call, a hallway conversation &#8212; the leader calls a hard stop. Nobody responds publicly yet.</p>
    <h3>2. Step away for ten minutes</h3>
    <p>The person closest to the problem steps away from the keyboard or the conversation. Not to calm down in the abstract &#8212; to do the next step.</p>
    <h3>3. Write three distinct options</h3>
    <p>Force yourself to generate three genuinely different responses, in writing, before you're allowed to act on any of them. The act of generating alternatives is what breaks the automatic script.</p>
    <h3>4. Respond from the list</h3>
    <p>Pick from what you wrote, not from what you felt like doing in the first thirty seconds.</p>

    <h2>Where it breaks</h2>
    <p>Two failure modes: using it on a genuine real-time emergency (a velocity tax you can't afford), and using it so often on minor friction that people start quietly bypassing it. Reserve it for real strategic pivots and crises, not routine disagreements.</p>

    <div class="related">
      <h2>Continue reading</h2>
      <ul>
        <li><a href="/tools/premortem">The Premortem &#8594; catch the risk before the crisis exists</a></li>
        <li><a href="/tools/friction-dial">The Friction Dial &#8594; for funnel and UX decisions</a></li>
        <li><a href="/playbook">The full CU-BOM playbook &#8594;</a></li>
      </ul>
    </div>
    `,
  },
  "friction-dial": {
    title: "The Friction Dial: Friction-Mapping and Intentional Friction",
    description:
      "How to use Friction-Mapping to lift conversion and Intentional Friction to filter for lead quality — two opposite tools for the same dial, and how to tell which one your funnel needs.",
    ogDescription: "Strip friction to convert volume; add it back deliberately to filter for lead quality.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "The Friction Dial: Friction-Mapping and Intentional Friction",
      description: "Strip friction to convert volume; add it back deliberately to filter for lead quality.",
      url: "https://stratumaegis.com/tools/friction-dial",
    },
    body: `
    <div class="breadcrumbs"><a href="/">Home</a> / <a href="/#tools">Tools</a> / Friction Dial</div>
    <div class="eyebrow"><span class="bar"></span>TOOL 04 &#183; GO-TO-MARKET &amp; FUNNEL DESIGN</div>
    <h1>The Friction Dial</h1>
    <p class="dek">Friction-Mapping and Intentional Friction are two ends of the same dial &#8212; one strips System 2 hesitation out of a purchase, the other adds a small piece of it back on purpose.</p>

    <h2>What it is</h2>
    <p>Every extra field, click, or wait in a funnel forces a visitor's System 2 online &#8212; and System 2 hesitates, second-guesses, and drops off. <strong>Friction-Mapping</strong> finds and removes that friction so System 1 can act on autopilot. <strong>Intentional Friction</strong> is the deliberate opposite: reintroducing one small conscious checkpoint to filter out visitors who were never going to buy.</p>

    <h2>The evidence</h2>
    <p class="evidence">Amazon patented 1-Click Buying explicitly to delete System 2 friction from checkout. Conversion-rate teams routinely see jumps from <span class="stat">50%</span> to over <span class="stat">120%</span> just from cutting an 11-field form down to 4, and some 2026 digital-commerce studies show automating out journey friction can cut cart abandonment by up to <span class="stat">25%</span>. The flip side is well documented too: a frictionless demo-request form floods a sales pipeline with unqualified, low-intent leads who never had to think before submitting it.</p>

    <h2>The safeguard &#8212; diagnose the actual bottleneck first</h2>
    <p>Before touching the funnel, work out which constraint is actually binding.</p>
    <div class="safeguard-pair">
      <div class="safeguard green"><div class="sg-title">Bottleneck = volume</div><p>Traffic and signups are too low. Deploy Friction-Mapping: audit the funnel for every unnecessary field, click, or wait and remove it.</p></div>
      <div class="safeguard green"><div class="sg-title">Bottleneck = junk leads</div><p>Volume is fine but the sales team is drowning in unqualified calls. Deploy Intentional Friction: add one deliberate checkpoint.</p></div>
    </div>

    <h2>Running Friction-Mapping</h2>
    <p>Have someone on the team complete your own checkout or signup flow while logging every moment they had to stop and think &#8212; "is shipping included," "where do I enter this code," "why is this form so long." Each of those is a System 2 trigger. Eliminate or automate it.</p>

    <h2>Running Intentional Friction</h2>
    <p>Three proven patterns:</p>
    <div class="tmpl">
      <dl>
        <dt>Self-selection micro-quiz</dt><dd>Replace a generic contact form with a short interactive quiz ("what's your monthly ad spend?"). Unqualified leads drop off on their own.</dd>
        <dt>Skin-in-the-game application field</dt><dd>Require a text answer: <em>"What's the single biggest bottleneck you need this to solve in the next 30 days?"</em> Browsers won't bother typing it; real buyers will.</dd>
        <dt>Micro-commitment onboarding</dt><dd>Before a new signup reaches an empty dashboard, have them choose a goal or invite a teammate &#8212; a small conscious investment that lowers early churn.</dd>
      </dl>
    </div>

    <h2>Where it breaks</h2>
    <p>Optimizing only for Friction-Mapping eventually floods the pipeline with tyre-kickers; optimizing only for Intentional Friction eventually strangles top-of-funnel volume. Watch lead volume, sales-cycle speed, and cost per acquisition together &#8212; the sweet spot is a moderate, predictable lead flow that your sales team can actually close.</p>

    <div class="related">
      <h2>Continue reading</h2>
      <ul>
        <li><a href="/tools/structural-pause">The Structural Pause &#8594; for the crisis this funnel change might trigger</a></li>
        <li><a href="/tools/premortem">The Premortem &#8594; for the launch this funnel supports</a></li>
        <li><a href="/playbook">The full CU-BOM playbook &#8594;</a></li>
      </ul>
    </div>
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(TOOLS).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const tool = TOOLS[params.slug];
  if (!tool) return {};
  const url = `https://stratumaegis.com/tools/${params.slug}`;
  return {
    title: tool.title,
    description: tool.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: tool.title,
      description: tool.ogDescription,
      url,
    },
    twitter: {
      title: tool.title,
      description: tool.ogDescription,
    },
  };
}

export default function ToolPage({ params }) {
  const tool = TOOLS[params.slug];
  if (!tool) {
    notFound();
  }
  return (
    <div className="frame" style={{ paddingTop: 40, paddingBottom: 64 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tool.jsonLd) }}
      />
      <article dangerouslySetInnerHTML={{ __html: tool.body }} />
    </div>
  );
}
