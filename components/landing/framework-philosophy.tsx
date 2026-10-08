
interface FeatureCardProps {
  number: string;
  title: string;
  summary: string;
  codeSnippet?: string;
  points: { title: string; desc: string }[];
}

const features: FeatureCardProps[] = [
  {
    number: "01",
    title: "Zero New Vocabulary to Memorize",
    summary:
      "Directly mirrors standard CSS property names and values rather than introducing arbitrary terminology.",
    points: [
      {
        title: "For Developers",
        desc: "Write native CSS declarations directly as classes without memorizing lookup tables for properties like letter-spacing or line-height.",
      },
      {
        title: "For AI Assistants",
        desc: "Leverages standard web specifications and MDN naming conventions so models generate accurate classes on the first try without hallucinating custom syntax.",
      },
    ],
  },
  {
    number: "02",
    title: "Predictable Structural Grammar",
    summary:
      "A 1:1 serialization from native CSS declarations directly into inline class tokens.",
    codeSnippet: "@md-flex-direction-column",
    points: [
      {
        title: "Direct Mapping",
        desc: "Follows an intuitive [property]-[value] format like display-flex, opacity-0.5, and color-red.",
      },
      {
        title: "Native Functions",
        desc: "Accepts standard CSS functions like calc(), min(), clamp(), and oklch() inline.",
      },
      {
        title: "Transparent At-Rules",
        desc: "Directly mirrors native @layer, @media, and @container blocks right at the prefix level.",
      },
    ],
  },
  {
    number: "03",
    title: "Clear Intent for AI & Automation",
    summary:
      "Eliminates translation layers between what CSS does and what a framework calls it.",
    points: [
      {
        title: "Effortless Prompting",
        desc: "Simple instructions like 'Apply native CSS using AliasCSS tokens' work instantly across any LLM.",
      },
      {
        title: "Forward Compatibility",
        desc: "Supports new CSS specifications like subgrid, container queries, and relative colors immediately without waiting for framework updates.",
      },
    ],
  },
  {
    number: "04",
    title: "Self-Documenting Readability",
    summary:
      "Code remains clear, human-readable, and auditable across long-term project lifecycles.",
    codeSnippet: "letter-spacing-wide line-height-1.5 flex-shrink-0 aspect-ratio-16/9",
    points: [
      {
        title: "No Mental Lookup",
        desc: "Classes explain their exact purpose inline without needing a translation guide or external cheat sheet.",
      },
      {
        title: "Cascade Order",
        desc: "Keeps inline convenience while automatically compiling into deduplicated, organized CSS cascade layers.",
      },
    ],
  },
  {
    number: "05",
    title: "Seamless Component-Level Abstraction",
    summary:
      "Promotes atomic utilities into reusable, semantic patterns without leaving the markup[cite: 1].",
    codeSnippet: "[p-16px,br-8px]--as-card card",
    points: [
      {
        title: "In-Markup Bundling (--as-)",
        desc: "Bundle multi-rule utility groups into clean semantic classes on the fly directly inside your template[cite: 1].",
      },
      {
        title: "Scoped Modules",
        desc: "Compile component-specific styles into isolated [file].module.css files with zero side effects.",
      },
      {
        title: "Frictionless Coexistence",
        desc: "Integrates with native stylesheets, design systems, and external UI libraries by leveraging CSS @layer components.",
      },
    ],
  },
];

export default function FrameworkPhilosophy() {
  return (
    <section className="bg-rgb(10,12,16) c-rgb(240,243,246) p-48px_24px padding-block-80px padding-inline-24px max-width-1280px margin-inline-auto">
      <div className="max-w-1100px m-0_auto">
        <header className="m-b-48px ta-center">
          <p className="c-rgb(56,189,248) fs-14px tt-uppercase fw-600 ls-1px m-b-8px">
            Design Philosophy
          </p>
          <h2 className="fs-36px fw-700 m-b-16px ls--0.5px">
            Native CSS, Amplified for Humans & AI
          </h2>
          <p className="fs-16px c-rgb(148,163,184) max-w-680px m-0_auto lh-1.6">
            An open compiler built to feel like another way of writing native CSS—interoperable with modern specifications, design systems, and existing workflows.
          </p>
        </header>

        <div className="d-grid grid-template-columns-repeat(auto-fit,minmax(320px,1fr)) gap-24px">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-rgb(17,21,28) bd-1px_solid_rgb(30,41,59) br-12px p-28px d-flex  jc-space-between"
            >
              <div>
                <span className="c-rgb(56,189,248) fs-14px fw-700 font-mono m-b-12px d-block">
                  {feature.number}
                </span>
                <h3 className="fs-20px fw-600 m-b-12px c-rgb(248,250,252)">
                  {feature.title}
                </h3>
                <p className="fs-14px c-rgb(148,163,184) lh-1.6 m-b-20px">
                  {feature.summary}
                </p>

                {feature.codeSnippet && (
                  <div className="bg-rgb(10,12,16) bd-1px_solid_rgb(51,65,85) br-6px p-8px_12px m-b-20px font-mono fs-13px c-rgb(226,232,240) of-x-auto">
                    <code>{feature.codeSnippet}</code>
                  </div>
                )}
              </div>

              <div className="bd-t-1px_solid_rgb(30,41,59) p-t-16px d-flex fdc gap-12px">
                {feature.points.map((pt, idx) => (
                  <div key={idx}>
                    <p className="fs-13px fw-600 c-rgb(203,213,225) m-b-2px">
                      {pt.title}
                    </p>
                    <p className="fs-12px c-rgb(100,116,139) lh-1.5">
                      {pt.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}