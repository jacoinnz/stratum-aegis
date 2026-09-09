export default function sitemap() {
  const base = "https://stratumaegis.com";
  const lastModified = "2026-09-09";

  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/playbook", priority: 0.9 },
    { path: "/vs-kepner-tregoe", priority: 0.8 },
    { path: "/tools/premortem", priority: 0.8 },
    { path: "/tools/dwa-protocol", priority: 0.8 },
    { path: "/tools/structural-pause", priority: 0.8 },
    { path: "/tools/friction-dial", priority: 0.8 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
