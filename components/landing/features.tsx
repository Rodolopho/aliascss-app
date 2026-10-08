import Card from "../ui/Card"

        export default function Features() {
          return (
        <section
          id="features"
          className="padding-block-80px padding-inline-24px max-width-1280px margin-inline-auto"
        >
          <div className="text-align-center margin-bottom-64px">
            <span className="font-size-12px font-weight-700 color-6366f1 text-transform-uppercase letter-spacing-0.08em">
              Architectural Superiority
            </span>
            <h2 className="@base-font-size-36px @md-font-size-48px font-weight-800 color-ffffff letter-spacing--0.03em margin-top-8px margin-bottom-16px">
              Built for total developer autonomy.
            </h2>
            <p className="font-size-16px color-94a3b8 max-width-600px margin-inline-auto">
              Every limitation found in legacy utility frameworks has been
              solved with rigorous compiler design.
            </p>
          </div>

          <div className="display-grid @base-grid-template-columns-1fr @md-grid-template-columns-1fr-1fr @lg-grid-template-columns-1fr-1fr-1fr  gap-24px">
            {/* Card 1: In-line Keyframes */}
            <Card className="">
              <div className="width-44px height-44px border-radius-10px background-color-6366f1/0.15 display-flex align-items-center justify-content-center color-818cf8 margin-bottom-20px font-size-20px">
                ✦
              </div>
              <h3 className="font-size-20px font-weight-700 color-ffffff margin-0 margin-bottom-12px">
                In-Line Keyframe DSL
              </h3>
              <p className="font-size-14px color-94a3b8 line-height-1.6 margin-0">
                Declare full multi-step keyframe timelines directly on the HTML
                element via{" "}
                <code className="color-a5b4fc">keyframes-[name]</code>. Supports
                grouped percentage timelines (
                <code className="color-a5b4fc">@[0,50,100]-...</code>) with zero
                external config.
              </p>
            </Card>

            {/* Card 2: 3D Chaining (__) */}
            <div className="padding-32px border-radius-20px background-color-111827/0.7 border-1px-solid-ffffff/0.08 display-flex flex-direction-column">
              <div className="width-44px height-44px border-radius-10px background-color-ec4899/0.15 display-flex align-items-center justify-content-center color-f472b6 margin-bottom-20px font-size-20px">
                ⚡
              </div>
              <h3 className="font-size-20px font-weight-700 color-ffffff margin-0 margin-bottom-12px">
                Chaining Operator (<code className="color-f472b6">__</code>)
              </h3>
              <p className="font-size-14px color-94a3b8 line-height-1.6 margin-0">
                Chain multiple 2D/3D transforms (
                <code className="color-a5b4fc">tf-rx-20deg__ry-30deg</code>),
                multi-property transitions, and complex filters without creating
                CSS variable soup or utility conflicts.
              </p>
            </div>

            {/* Card 3: Magic & Anchor */}
            <div className="padding-32px border-radius-20px background-color-111827/0.7 border-1px-solid-ffffff/0.08 display-flex flex-direction-column">
              <div className="width-44px height-44px border-radius-10px background-color-10b981/0.15 display-flex align-items-center justify-content-center color-34d399 margin-bottom-20px font-size-20px">
                ⚓
              </div>
              <h3 className="font-size-20px font-weight-700 color-ffffff margin-0 margin-bottom-12px">
                Magic &amp; Anchor
              </h3>
              <p className="font-size-14px color-94a3b8 line-height-1.6 margin-0">
                Invert context effortlessly. Style elements based on ancestors,
                parent hover states, or preceding siblings (
                <code className="color-a5b4fc">
                  ___input--checked&amp;-c-blue
                </code>
                ) without custom CSS files or wrapper hacks.
              </p>
            </div>

            {/* Card 4: Right-to-Left Grammar */}
            <div className="padding-32px border-radius-20px background-color-111827/0.7 border-1px-solid-ffffff/0.08 display-flex flex-direction-column">
              <div className="width-44px height-44px border-radius-10px background-color-f59e0b/0.15 display-flex align-items-center justify-content-center color-fbbf24 margin-bottom-20px font-size-20px">
                ◄
              </div>
              <h3 className="font-size-20px font-weight-700 color-ffffff margin-0 margin-bottom-12px">
                Right-to-Left Grammar
              </h3>
              <p className="font-size-14px color-94a3b8 line-height-1.6 margin-0">
                Deterministic evaluation:{" "}
                <code className="color-a5b4fc">
                  [Block @-Scope] + [Selector] + [Property-Value]
                </code>
                . Every class anchors on a real CSS property, making it 100%
                predictable for humans and AI agents.
              </p>
            </div>

            {/* Card 5: In-Line Component Export */}
            <div className="padding-32px border-radius-20px background-color-111827/0.7 border-1px-solid-ffffff/0.08 display-flex flex-direction-column">
              <div className="width-44px height-44px border-radius-10px background-color-06b6d4/0.15 display-flex align-items-center justify-content-center color-22d3ee margin-bottom-20px font-size-20px">
                📦
              </div>
              <h3 className="font-size-20px font-weight-700 color-ffffff margin-0 margin-bottom-12px">
                Semantic Export (<code className="color-22d3ee">--as-</code>)
              </h3>
              <p className="font-size-14px color-94a3b8 line-height-1.6 margin-0">
                End class-string bloat. Bundle atomic utilities and export them
                into named CSS classes (
                <code className="color-a5b4fc">[...]--as-btn btn</code>)
                directly from the markup. Supports multi-target exports and
                specificity bumping.
              </p>
            </div>

            {/* Card 6: Programmable Compilers */}
            <div className="padding-32px border-radius-20px background-color-111827/0.7 border-1px-solid-ffffff/0.08 display-flex flex-direction-column">
              <div className="width-44px height-44px border-radius-10px background-color-8b5cf6/0.15 display-flex align-items-center justify-content-center color-c084fc margin-bottom-20px font-size-20px">
                ⚙️
              </div>
              <h3 className="font-size-20px font-weight-700 color-ffffff margin-0 margin-bottom-12px">
                Programmable Design System
              </h3>
              <p className="font-size-14px color-94a3b8 line-height-1.6 margin-0">
                Not a closed vocabulary. Extend or replace native property
                compilers, or create group compilers (
                <code className="color-a5b4fc">type: &apos;group&apos;</code>) that emit
                entire design-system contracts from a single class.
              </p>
            </div>
          </div>
        </section>
        )
    }