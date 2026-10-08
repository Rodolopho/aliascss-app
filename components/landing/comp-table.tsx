export default function CompTable() {
  return (
    <section
      id="comparison"
      className="padding-block-80px padding-inline-24px max-width-1100px margin-inline-auto"
    >
      <div className="text-align-center margin-bottom-48px">
        <span className="font-size-12px font-weight-700 c-indigo500 text-transform-uppercase letter-spacing-0.08em">
          Feature Matrix
        </span>
        <h2 className="font-size-36px font-weight-800 c-ffffff letter-spacing--0.03em margin-top-8px">
          What developers get out of the Box?
        </h2>
      </div>

      <div className="overflow-x-auto border-radius-16px border-1px-solid-ffffff/0.1 bgc-slate950/60 backdrop-filter-blur-12px">
        <table className="width-100% border-collapse text-align-left font-size-14px">
          <thead>
            <tr className="bgc-ffffff/0.03 border-b-1px-solid-ffffff/0.1">
              <th className="padding-18px-24px c-ffffff font-weight-700 width-25%">
                Features
              </th>
              <th className="padding-18px-24px c-slate400 font-weight-600 width-35%">
                AliasCSS
              </th>
              <th className="padding-18px-24px c-indigo400 font-weight-700 width-40% bgc-indigo500/0.05">
                Example
              </th>
            </tr>
          </thead>
          <tbody className="line-height-1.6 vertical-align-top">
            {/* 1. Custom Keyframes */}
            <tr className="border-b-1px-solid-ffffff/0.05">
              <td className="padding-18px-24px c-ffffff font-weight-600">
                Custom Keyframes
              </td>
              <td className="padding-18px-24px c-emerald400 font-weight-500">
                In-line Timelines:
                <div className="margin-top-6px font-family-monospace font-size-12px c-indigo300">
                  keyframes-pop=&quot;@0-[...] @100-[...]&quot;
                </div>
              </td>
              <td className="padding-18px-24px bgc-indigo500/0.02">
                <pre className="font-family-monospace font-size-12px line-height-1.5 bgc-020617/80 border-1px-solid-ffffff/0.1 border-radius-8px padding-12px overflow-x-auto margin-0 max-width-440px">
                  <code className="c-38bdf8">
{`<div
  keyframes-spin="@0-transform-rotate-0 @100-transform-rotate-360deg"
  class="an-spin adu-1s ait-infinite tf-linear display-inline-block"
>
  Spin
</div>`}
                  </code>
                </pre>
              </td>
            </tr>

            {/* 2. 3D Transform Stacking */}
            <tr className="border-b-1px-solid-ffffff/0.05">
              <td className="padding-18px-24px c-ffffff font-weight-600">
                3D Transform Stacking
              </td>
              <td className="padding-18px-24px c-emerald400 font-weight-500">
                Native Multi-Chaining:
                <div className="margin-top-6px font-family-monospace font-size-12px c-indigo300">
                  tf-rx-20deg__ry-40deg
                </div>
              </td>
              <td className="padding-18px-24px bgc-indigo500/0.02">
                <pre className="font-family-monospace font-size-12px line-height-1.5 bgc-020617/80 border-1px-solid-ffffff/0.1 border-radius-8px padding-12px overflow-x-auto margin-0 max-width-440px">
                  <code className="c-38bdf8">
{`<div class="transform-rotate-45deg__scale-1.2__translateY-30px">
  Transformed Card
</div>`}
                  </code>
                </pre>
              </td>
            </tr>

            {/* 3. Ancestor / Sibling Context */}
            <tr className="border-b-1px-solid-ffffff/0.05">
              <td className="padding-18px-24px c-ffffff font-weight-600">
                Ancestor/Sibling Context
              </td>
              <td className="padding-18px-24px c-emerald400 font-weight-500">
                Magic Anchor Selectors:
                <div className="margin-top-6px font-family-monospace font-size-12px c-indigo300">
                  _html[class~=dark]&amp;- , ___input[checked]&amp;-
                </div>
              </td>
              <td className="padding-18px-24px bgc-indigo500/0.02">
                <pre className="font-family-monospace font-size-12px line-height-1.5 bgc-020617/80 border-1px-solid-ffffff/0.1 border-radius-8px padding-12px overflow-x-auto margin-0 max-width-440px">
                  <code className="c-38bdf8">
{`<button
  class="_html[class~=dark]&bgc-black/0.8 --focus&b-2px-solid-blue700/0.4"
>
  Theme Aware Button
</button>`}
                  </code>
                </pre>
              </td>
            </tr>

            {/* 4. Semantic Class Export */}
            <tr className="border-b-1px-solid-ffffff/0.05">
              <td className="padding-18px-24px c-ffffff font-weight-600">
                Semantic Class Export
              </td>
              <td className="padding-18px-24px c-emerald400 font-weight-500">
                In-Markup Component Aliasing:
                <div className="margin-top-6px font-family-monospace font-size-12px c-indigo300">
                  [p-16px,br-8px]--as-card card
                </div>
              </td>
              <td className="padding-18px-24px bgc-indigo500/0.02">
                <pre className="font-family-monospace font-size-12px line-height-1.5 bgc-020617/80 border-1px-solid-ffffff/0.1 border-radius-8px padding-12px overflow-x-auto margin-0 max-width-440px">
                  <code className="c-38bdf8">
{`<button
  className="@base[all-unset,b-0,px-12px,py-8px,border-radius-4px,font-weight-600,cursor-pointer]--as-btn btn"
>
  Button-Base
</button>

<button className="btn bgc-primary600 --hover-bgc-primary700">
  Primary
</button>`}
                  </code>
                </pre>
              </td>
            </tr>

            {/* 5. Custom Compilers & Config */}
            <tr>
              <td className="padding-18px-24px c-ffffff font-weight-600">
                Grammar &amp; Compilers
              </td>
              <td className="padding-18px-24px c-emerald400 font-weight-500">
                Programmable Grammar:
                <div className="margin-top-6px font-family-monospace font-size-12px c-indigo300">
                  extend &amp; type: &apos;group&apos;
                </div>
              </td>
              <td className="padding-18px-24px bgc-indigo500/0.02">
                <pre className="font-family-monospace font-size-12px line-height-1.5 bgc-020617/80 border-1px-solid-ffffff/0.1 border-radius-8px padding-12px overflow-x-auto margin-0 max-width-440px">
                  <code className="c-38bdf8">
{`const config = {
  custom: {
    colors: {
      themeTextColor: 'var(--theme-text-color, #c3c3c3)',
      themeBgcolor: 'var(--theme-bg-color, #0e0e0e)',
      primary: 'rgba(124, 143, 234, 1)',
    },
  },
};

export default config;`}
                  </code>
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}