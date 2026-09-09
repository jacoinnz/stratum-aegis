export const metadata = {
  title: "CU-BOM and Kepner-Tregoe: Where Each One Fits",
  description:
    "Kepner-Tregoe is built to strip intuition out of a decision — by its own admission. CU-BOM is the layer that adds it back in safely. Here's exactly what each one covers.",
  alternates: { canonical: "https://stratumaegis.com/vs-kepner-tregoe" },
  openGraph: {
    type: "article",
    title: "CU-BOM and Kepner-Tregoe: Where Each One Fits",
    description:
      "Kepner-Tregoe strips intuition out of a decision by design. CU-BOM is the layer that adds it back in, safely, on top of whatever structured method you already run.",
    url: "https://stratumaegis.com/vs-kepner-tregoe",
  },
  twitter: {
    title: "CU-BOM and Kepner-Tregoe: Where Each One Fits",
    description:
      "Kepner-Tregoe strips intuition out of a decision by design. CU-BOM is the layer that adds it back in, safely.",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does CU-BOM replace Kepner-Tregoe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. CU-BOM is designed to run alongside Kepner-Tregoe, Six Sigma, or any structured decision method — it adds an intuition and safeguard layer those methods don't cover, rather than duplicating their scoring and analysis steps.",
      },
    },
    {
      "@type": "Question",
      name: "What does Kepner-Tregoe not cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By its own documentation, Kepner-Tregoe is built to minimize intuition and can overlook the emotional and subjective dimensions of a decision. It also has no dedicated live-crisis response step or funnel/UX design component.",
      },
    },
  ],
};

const BODY_HTML = `
    <div class="breadcrumbs"><a href="/">Home</a> / vs. Kepner-Tregoe</div>
    <div class="eyebrow"><span class="bar"></span>NOT A REPLACEMENT</div>
    <h1>Already running Kepner-Tregoe? Good &#8212; keep it.</h1>
    <p class="dek">Kepner-Tregoe is one of the most widely adopted structured problem-solving methods in business. It's also, by its own design, built to strip intuition out of a decision. That's not a flaw &#8212; it's the gap CU-BOM was built to fill.</p>

    <h2>What Kepner-Tregoe actually does</h2>
    <p>The Kepner-Tregoe method runs four sequential processes: Situation Appraisal (clarify and prioritize the problem), Problem Analysis (find the root cause), Decision Analysis (score alternatives against weighted criteria), and Potential Problem Analysis (anticipate what could go wrong and plan mitigations). It's a rigorous, rational, fact-based system, and it's used across manufacturing, IT, and healthcare precisely because it's rigorous.</p>

    <h2>What it says about itself</h2>
    <p>Documentation on the method is explicit about its scope: it aims to "minimize biases and enhance clarity" through structured, fact-based reasoning rather than emotional or intuitive judgment. That's a deliberate design choice. It's also, by the same account, a limitation &#8212; the framework "may overlook the emotional and subjective dimensions of decision-making, which are crucial in certain contexts," and its rigidity can be a poor fit for fast-moving or ambiguous situations.</p>

    <h2>Where CU-BOM sits</h2>
    <p>CU-BOM doesn't run a second Situation Appraisal or a competing Decision Analysis next to your first one. It plugs into the gap KT names in its own documentation &#8212; the intuitive and emotional dimension a purely rational framework isn't built to check.</p>

    <div class="table-wrap">
      <table>
        <thead><tr><th>Already covered by Kepner-Tregoe</th><th>What CU-BOM adds on top</th></tr></thead>
        <tbody>
          <tr><td>Situation Appraisal &#8212; clarify and prioritise the problem</td><td>A psychological-safety check: will your team tell the truth about the situation, or perform for leadership?</td></tr>
          <tr><td>Problem &amp; Decision Analysis &#8212; score options against weighted criteria</td><td>The <a href="/tools/dwa-protocol">DWA Protocol's</a> blind-ballot gut check against that same score, and a rule for when the divergence means the matrix missed something</td></tr>
          <tr><td>Potential Problem Analysis &#8212; anticipate what could go wrong</td><td>The <a href="/tools/premortem">Premortem's</a> "it already failed" framing, which surfaces risks people won't name in a normal risk register</td></tr>
          <tr><td>None &#8212; KT has no live-crisis or funnel-design component</td><td>The <a href="/tools/structural-pause">Structural Pause</a> and the <a href="/tools/friction-dial">Friction Dial</a>, for situations KT was never scoped to cover</td></tr>
        </tbody>
      </table>
    </div>

    <h2>The practical version</h2>
    <p>If your team already runs KT training, keep using it for Decision Analysis and Potential Problem Analysis &#8212; that's what it's for, and it's good at it. Add the safeguard check from whichever CU-BOM tool matches the moment: a Premortem before a launch, a blind ballot on top of a KT scoring matrix for a high-stakes vendor call, a Structural Pause when a KT session gets derailed by a heated argument.</p>

    <div class="related">
      <h2>Continue reading</h2>
      <ul>
        <li><a href="/tools/premortem">The Premortem &#8594;</a></li>
        <li><a href="/tools/dwa-protocol">The DWA Protocol &#8594;</a></li>
        <li><a href="/playbook">The full CU-BOM playbook &#8594;</a></li>
      </ul>
    </div>
`;

export default function VsKepnerTregoePage() {
  return (
    <div className="frame" style={{ paddingTop: 40, paddingBottom: 64 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <article dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </div>
  );
}
