export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-zero-day-detection-works",
    title: "How Zero-Day Detection Works: A Technical Overview",
    description:
      "Learn how asset-specific tech fingerprinting and upstream intelligence (GitHub, Exploit-DB) deliver alerts 3–7 days before CVE publication.",
    date: "2025-02-01",
    author: "Fusionstek",
    content: `
      <p>Traditional security tools wait for a CVE to be published before they can tell you you're affected. That leaves a critical window—often 7 to 14 days—where exploits are already in the wild but your CVE-based dashboards show nothing.</p>
      <h2>Our approach</h2>
      <p>We fingerprint your attack surface once (tech stack + versions from web fingerprinting) and store it in a baseline snapshot. Then we don't re-scan your infrastructure every hour. Instead, we continuously check upstream sources:</p>
      <ul>
        <li><strong>GitHub Releases</strong> — Security releases and CVE mentions in release notes for the exact technologies you run.</li>
        <li><strong>Exploit-DB</strong> — New exploit entries that match your detected tech stack.</li>
      </ul>
      <p>When a security release is <em>newer</em> than the version we detected on your asset, we raise a high-confidence alert. That's version-aware precision: we're not just matching product names, we're comparing semantic versions so you only get alerted when you're likely affected.</p>
      <h2>Why it matters</h2>
      <p>You get 3–7 days earlier visibility without running more scans or deploying agents. Zero infrastructure overhead, and alerts that are 100% relevant to what you actually run.</p>
    `,
  },
  {
    slug: "why-cve-only-detection-fails",
    title: "Why CVE-Only Detection Fails for Zero-Days",
    description:
      "CVE feeds are reactive. Here's why monitoring GitHub and Exploit-DB gives you a head start—and how to reduce false positives with asset-specific correlation.",
    date: "2025-01-28",
    author: "Fusionstek",
    content: `
      <p>Most vulnerability and EASM tools rely on CVE feeds: NVD, vendor advisories, and threat intel that references published CVEs. That's essential, but it's also reactive. By the time a CVE is assigned and published, attackers may have been exploiting the issue for days or weeks.</p>
      <h2>The gap</h2>
      <p>Maintainers often publish security releases and patch notes on GitHub (or elsewhere) before a CVE is assigned. Exploit-DB and other sources list new exploits that may not yet have a CVE. If your tooling only reacts to CVEs, you're always behind.</p>
      <h2>Asset-specific correlation</h2>
      <p>Generic threat feeds also create alert fatigue: you get notified about every new WordPress CVE even if you don't run WordPress. We only correlate threats with technologies we actually detect on your attack surface. So you see pre-CVE signals only for what you run—dramatically fewer false positives.</p>
      <h2>Bottom line</h2>
      <p>CVE-only detection is necessary but not sufficient. Adding upstream monitoring (GitHub, Exploit-DB) and asset-specific correlation gives you earlier visibility and actionable alerts.</p>
    `,
  },
  {
    slug: "roi-of-early-zero-day-detection",
    title: "The ROI of Early Zero-Day Detection",
    description:
      "Quantify the value: shorter exposure windows, lower scan costs, and less alert fatigue when zero-day detection runs ahead of CVEs.",
    date: "2025-01-15",
    author: "Fusionstek",
    content: `
      <p>Security leaders need to justify every tool. Here's how early zero-day detection translates into measurable outcomes.</p>
      <h2>Shorter exposure window</h2>
      <p>Industry data suggests 7–14 days from first exploit visibility to CVE publication is common. Detecting and patching 3–7 days earlier can cut your exposure window by 50–70%. That directly reduces breach and incident risk during the most critical period.</p>
      <h2>Scan cost reduction</h2>
      <p>If continuous zero-day monitoring required hourly or daily full scans, cost would balloon. Our approach uses one baseline scan; checks run every 10 minutes against that snapshot. So you get continuous monitoring with roughly 99% fewer scans than an hourly-scan model—saving time and infrastructure load.</p>
      <h2>Less alert fatigue</h2>
      <p>When alerts are asset-specific and version-aware, false positive rates drop. Teams spend less time triaging irrelevant alerts and more time fixing real risk. That's harder to put a number on, but it improves mean time to remediate and team morale.</p>
      <h2>Summary</h2>
      <p>Early zero-day detection isn't just "nice to have." It shortens exposure, cuts scan costs, and makes alerts actionable—all with zero agents or performance impact.</p>
    `,
  },
  {
    slug: "what-is-easm-and-why-verification-matters",
    title: "What Is EASM—and Why Verification Matters",
    description:
      "External Attack Surface Management isn't just scanning. It's discovery, monitoring, and evidence that stands up to regulators and insurers.",
    date: "2025-01-10",
    author: "Fusionstek",
    content: `
      <p>EASM—External Attack Surface Management—is the practice of discovering, monitoring, assessing, and reporting on everything your organisation exposes to the internet. Domains, subdomains, IPs, apps, APIs, cloud. The goal is continuous visibility and risk reduction, not a one-off scan.</p>
      <h2>Discovery vs. scanning</h2>
      <p>Discovery means finding what's there: enumerating assets attackers can reach, building a verified map. Scanning is one way to assess those assets for vulnerabilities. But if your "EASM" is only scanning a static list you maintain, you're missing drift—what's new, changed, or gone. Real EASM includes continuous discovery and drift detection.</p>
      <h2>Why verification matters</h2>
      <p>Findings without proof don't hold up to auditors, insurers, or post-incident reviews. Verification means only reporting what can be reproduced and validated. That's the difference between "we think you're exposed" and "we verified this endpoint and here's the evidence." For compliance and risk transfer, the latter is non-negotiable.</p>
      <h2>Summary</h2>
      <p>EASM done right is attacker-grade discovery plus evidence-grade visibility. Verification and audit-ready deliverables are what make it defensible over time.</p>
    `,
  },
  {
    slug: "regulator-assurance-verification-ledger-and-due-care",
    title: "Regulator Assurance: Verification Ledger and Due Care",
    description:
      "How a verification ledger and due-care timeline help you prove to regulators and insurers that you exercised reasonable care over your external surface.",
    date: "2025-01-05",
    author: "Fusionstek",
    content: `
      <p>Regulators and insurers increasingly expect evidence of continuous security oversight—not just a point-in-time report. That means you need a clear record of what was tested, when, and what was done about it.</p>
      <h2>Verification ledger</h2>
      <p>A verification ledger is a structured record of tests and outcomes. Each finding ties back to a specific asset, a specific time, and a specific verification step. When an auditor asks "how do you know that was fixed?" you can point to the ledger: we verified it on this date, with this result.</p>
      <h2>Due-care timeline</h2>
      <p>Due care means acting as a reasonable organisation would. A timeline that shows regular discovery, monitoring, and remediation—with evidence—demonstrates that you didn't ignore your external surface. That's what regulators and insurers look for when assessing whether you met your obligations.</p>
      <h2>Policy-driven guardrails</h2>
      <p>Assurance should be compliance-safe from day one. Scope allowlists, consent enforcement, and prohibited-action controls ensure that testing stays within what you've authorised. The same policies that protect you operationally also support your narrative in an audit.</p>
    `,
  },
  {
    slug: "breach-visibility-without-the-legal-gray-areas",
    title: "Breach Visibility Without the Legal Gray Areas",
    description:
      "How to get domain-level breach and credential exposure visibility from trusted, enterprise-grade sources you can stand behind in audits.",
    date: "2024-12-20",
    author: "Fusionstek",
    content: `
      <p>Knowing which of your domains or identities have appeared in breaches is essential for prioritising credential rotation and incident response. But not all breach data is created equal—sources and methods matter for compliance and legal defensibility.</p>
      <h2>Trusted sources</h2>
      <p>Enterprise-trusted breach and credential exposure data is used by major vendors, governments, and large enterprises. The key is transparency: you know where the data comes from, how it's used, and that no password values are exposed. That makes it something you can rely on in dashboards and reports without legal or reputational risk.</p>
      <h2>Domain-level visibility</h2>
      <p>You need to see which of your domains have exposed credentials, which breaches they came from, when the breach occurred, and the type of data exposed. Aggregated dashboards and timelines help security and compliance prioritise and report—without handling raw breach dumps or questionable sources.</p>
      <h2>Summary</h2>
      <p>Breach visibility belongs in your assurance programme, but it has to be defensible. Use trusted, transparent sources and present the data in a way that supports both ops and audit.</p>
    `,
  },
  {
    slug: "why-drift-detection-beats-one-off-scans",
    title: "Why Drift Detection Beats One-Off Scans",
    description:
      "One-off scans go stale the next day. Baseline snapshots and drift detection give you a continuous view—and proof for auditors.",
    date: "2024-12-12",
    author: "Fusionstek",
    content: `
      <p>A single scan tells you what was there at one moment. The day after, a new subdomain might go live, a service might change, or something might disappear. If you only run scans quarterly or annually, you're blind to change for most of the year.</p>
      <h2>Baseline + refresh</h2>
      <p>The answer is a baseline snapshot—an authoritative view of your surface at a point in time—plus regular refresh runs. Each refresh is compared to the baseline so you see exactly what's new, changed, or gone. That's drift detection. It turns "we scanned once" into "we know what changed and when."</p>
      <h2>Continuous assurance</h2>
      <p>For regulators and insurers, continuous assurance means you can show a timeline of monitoring and response. Drift events and refresh cadence (e.g. daily) prove you didn't set and forget. That narrative is what they're looking for when assessing due care.</p>
      <h2>Summary</h2>
      <p>Drift detection isn't a nice-to-have—it's how you turn EASM into a defensible, continuous programme instead of a point-in-time snapshot that goes stale.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
