import "./globals.css";

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='16' height='32' fill='%23A9772A'/%3E%3Crect x='16' width='16' height='32' fill='%23204B52'/%3E%3C/svg%3E";

export const metadata = {
  metadataBase: new URL("https://stratumaegis.com"),
  title: {
    default: "CU-BOM — The Decision Operating Model for Fast and Slow Thinking",
    template: "%s | Stratum Aegis",
  },
  description:
    "CU-BOM is a free operating model for business decisions: the Premortem, the DWA Protocol, the Structural Pause, and the Friction Dial, each with a safeguard that says when it's actually safe to use. Written in New Zealand.",
  icons: { icon: FAVICON },
  openGraph: {
    type: "website",
    siteName: "Stratum Aegis",
    locale: "en_NZ",
  },
  twitter: { card: "summary" },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stratum Aegis",
  alternateName: "CU-BOM",
  url: "https://stratumaegis.com/",
  description:
    "Stratum Aegis publishes CU-BOM, a free decision operating model combining the Premortem, the DWA Protocol, the Structural Pause, and the Friction Dial, developed in New Zealand.",
  areaServed: "NZ",
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NZ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,500&family=Source+Sans+3:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
      </head>
      <body>
        <nav className="topnav">
          <div className="frame">
            <a href="/" className="brand">
              <span className="mark">
                <span className="a"></span>
                <span className="b"></span>
              </span>
              Stratum Aegis
            </a>
            <div className="navlinks">
              <a href="/#tools">The tools</a>
              <a href="/vs-kepner-tregoe">vs. Kepner-Tregoe</a>
              <a href="/playbook">Playbook</a>
            </div>
            <a className="navcta" href="/playbook">
              Read the playbook
            </a>
          </div>
        </nav>

        {children}

        <footer>
          <div className="frame">
            <span>Stratum Aegis &middot; New Zealand</span>
            <div className="foot-links">
              <a href="/playbook">Playbook</a>
              <a href="/vs-kepner-tregoe">vs. Kepner-Tregoe</a>
              <a href="/tools/premortem">Premortem</a>
              <a href="/tools/dwa-protocol">DWA Protocol</a>
              <a href="/tools/structural-pause">Structural Pause</a>
              <a href="/tools/friction-dial">Friction Dial</a>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
