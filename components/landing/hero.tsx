'use client';
import { useState } from "react";
export default function Hero(){
    const [copied, setCopied] = useState(false);
    
      const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText("npm i -D aliascss");
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2000);
        } catch {
          setCopied(false);
        }
      };

      return(

   
<section className="padding-top-80px padding-bottom-60px padding-inline-24px max-width-1280px margin-inline-auto display-flex flex-direction-column align-items-center text-align-center">
  {/* Status Notification Pill */}
  <div className="display-inline-flex align-items-center gap-8px padding-6px-16px border-radius-9999px background-color-ffffff/0.05 border-1px-solid-ffffff/0.1 margin-bottom-24px">
    <span className="width-8px height-8px border-radius-50% background-color-10b981 box-shadow-0px-0px-8px-10b981" />
    <span className="font-size-13px font-weight-600 color-cbd5e1">
      The Deterministic Right-to-Left CSS Compiler
    </span>
  </div>

  {/* Main Headline */}
  <h1 className="@base-font-size-44px @md-font-size-64px @lg-font-size-76px font-weight-800 letter-spacing--0.04em line-height-1.08 max-width-980px margin-0 color-ffffff">
    Write CSS directly in markup. <br />
    <span className="background(linear-gradient(to_right,#818cf8,#c084fc,#f472b6))_ background-clip-text color-transparent">
      Without limits.
    </span>
  </h1>

  {/* Subtitle */}
  <p className="@base-font-size-18px @md-font-size-20px line-height-1.6 color-94a3b8 max-width-680px margin-top-24px margin-bottom-36px">
    Stop context-switching to configuration files. In-line{" "}
    <code className="font-family-monospace color-a5b4fc background-color-ffffff/0.08 padding-2px-6px border-radius-4px">
      keyframes
    </code>
    , 3D transform chaining with{" "}
    <code className="font-family-monospace color-a5b4fc background-color-ffffff/0.08 padding-2px-6px border-radius-4px">
      __
    </code>
    , true ancestor inversion via{" "}
    <code className="font-family-monospace color-a5b4fc background-color-ffffff/0.08 padding-2px-6px border-radius-4px">
      &amp;
    </code>
    , and programmable custom compilers.
  </p>

  {/* CTA Buttons & Quick Install */}
  <div className="display-flex flex-direction-column @base-flex-direction-row align-items-center gap-16px margin-bottom-64px">
    <a
      href="/docs/introduction"
      className="display-inline-flex align-items-center justify-content-center padding-14px-32px border-radius-12px font-size-16px font-weight-600 background-color-6366f1 color-ffffff text-decoration-none box-shadow-0px-8px-24px-6366f1/0.3 tn-all-150ms --hover-[background-color-4f46e5,transform-translateY--2px,box-shadow-0px-12px-32px-6366f1/0.4]"
    >
      Documentation
    </a>

    {/* Interactive CLI Copy Pill */}
    <button
      type="button"
      id="copy-npm-btn"
      onClick={handleCopy}
      className="display-inline-flex align-items-center gap-12px padding-12px-20px border-radius-12px font-family-monospace font-size-14px background-color-111827 border-1px-solid-ffffff/0.12 color-cbd5e1 cursor-pointer tn-border-color-150ms --hover-border-color-6366f1 outline-none"
    >
      {copied ? (
        <span className="color-10b981 font-weight-700">
          ✓ Copied to clipboard!
        </span>
      ) : (
        <>
          <span className="color-818cf8 font-weight-700">$</span>
          <span>npm i -D aliascss</span>
          <svg
            className="width-16px height-16px color-64748b"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </>
      )}
    </button>
  </div>

  {/* ==================================================================
               HERO LIVE COMPILER PLAYGROUND (Split-Screen Window)
               ================================================================== */}
  <div className="width-100% max-width-1100px text-align-left border-radius-20px background-color-111827/0.9 backdrop-filter-blur-20px border-1px-solid-ffffff/0.1 box-shadow-0px-24px-64px-000000/0.6 overflow-hidden">
    {/* Terminal Chrome Bar */}
    <div className="height-44px background-color-0b0f19/0.8 border-bottom-1px-solid-ffffff/0.08 padding-inline-16px display-flex align-items-center justify-content-space-between">
      <div className="display-flex align-items-center gap-8px">
        <span className="width-11px height-11px border-radius-50% background-color-ef4444/0.8" />
        <span className="width-11px height-11px border-radius-50% background-color-f59e0b/0.8" />
        <span className="width-11px height-11px border-radius-50% background-color-10b981/0.8" />
        <span className="font-size-12px font-family-monospace color-64748b margin-left-10px">
          InteractiveCard.html
        </span>
      </div>
      <div className="font-size-11px font-weight-700 color-10b981 text-transform-uppercase letter-spacing-0.08em display-flex align-items-center gap-6px">
        <span className="width-6px height-6px border-radius-50% background-color-10b981" />
        Live Compiled Output
      </div>
    </div>

    {/* Split Viewport: Left is Code, Right is Rendered Result */}
    <div className="display-flex @base-flex-direction-column @lg-flex-direction-row">
      {/* Code Editor Side */}
      <div className="flex-1 padding-24px font-family-monospace font-size-13px line-height-1.7 border-bottom-1px-solid-ffffff/0.08 @lg-border-bottom-none @lg-border-right-1px-solid-ffffff/0.08 overflow-x-auto background-color-0e1320">
        <pre className="margin-0 padding-0 background-color-transparent">
          <code className="color-94a3b8">
            <span className="color-ec4899">&lt;article</span>
            {"\n"}
            {"  "}
            <span className="color-818cf8">keyframes-pulse</span>=
            <span className="color-fde68a">
              &quot;@[0,100]-[box-shadow-0px-0px-0px-000000/0]
              @50-[box-shadow-0px-0px-30px-6366f1/0.4]&quot;
            </span>
            {"\n"}
            {"  "}
            <span className="color-818cf8">class</span>=
            <span className="color-fde68a">
              &quot;{"\n"}
              {"    "}
              [p-32px,br-20px,bgc-white/0.05,bf-blur-12px,b-1px-s-white/0.1]--as-glass-card
              {"\n"}
              {"    "}glass-card{"\n"}
              {"    "}tf-rotateX-10deg__rotateY--10deg{"\n"}
              {"    "}tn-transform-0.2s-ease__box-shadow-0.2s-ease{"\n"}
              {"    "}
              --hover-[tf-rotateX-0deg__rotateY-0deg,box-shadow-0px-20px-40px-6366f1/0.2]
              {"\n"}
              {"    "}an-pulse adu-3s aici{"\n"}
              {"  "}&quot;
            </span>
            <span className="color-ec4899">&gt;</span>
            {"\n"}
            {"  "}
            <span className="color-ec4899">&lt;h3</span>{" "}
            <span className="color-818cf8">class</span>=
            <span className="color-fde68a">&quot;fs-24px fw-700 c-white m-0&quot;</span>
            <span className="color-ec4899">&gt;</span>Realtime Engine
            <span className="color-ec4899">&lt;/h3&gt;</span>
            {"\n"}
            {"  "}
            <span className="color-ec4899">&lt;p</span>{" "}
            <span className="color-818cf8">class</span>=
            <span className="color-fde68a">&quot;fs-14px c-gray400 lh-1.5&quot;</span>
            <span className="color-ec4899">&gt;</span>Chained 3D transforms
            &amp; in-line motion.
            <span className="color-ec4899">&lt;/p&gt;</span>
            {"\n"}
            <span className="color-ec4899">&lt;/article&gt;</span>
          </code>
        </pre>
      </div>

      {/* Live Interactive Render Side */}
      <div className="flex-1 padding-40px display-flex align-items-center justify-content-center background-color-0b0f19 perspective-1000px">
        <article
          keyframes-heropulse="@0-[box-shadow-0px-0px-0px-000000/0] @50-[box-shadow-0px-0px-30px-6366f1/0.4] @100-[box-shadow-0px-0px-0px-000000/0]"
          className="[padding-32px,border-radius-20px,background-color-ffffff/0.05,backdrop-filter-blur-12px,border-1px-solid-ffffff/0.1]--as-hero-glass-card hero-glass-card width-100% max-width-320px tf-rotateX-10deg__rotateY--10deg tn-transform-0.2s-ease__box-shadow-0.2s-ease --hover-[tf-rotateX-0deg__rotateY-0deg,box-shadow-0px-20px-40px-6366f1/0.2] an-heropulse adu-3s atf-linear aici cursor-pointer"
        >
          <div className="display-inline-flex align-items-center gap-8px padding-4px-10px border-radius-9999px background-color-10b981/0.1 border-1px-solid-10b981/0.3 margin-bottom-16px">
            <span className="width-6px height-6px border-radius-50% background-color-10b981" />
            <span className="font-size-11px font-weight-700 color-10b981 text-transform-uppercase">
              Live Interactive
            </span>
          </div>
          <h3 className="font-size-22px font-weight-700 color-ffffff margin-0">
            Realtime Engine
          </h3>
          <p className="font-size-14px color-94a3b8 line-height-1.5 margin-top-8px margin-bottom-20px">
            Hover to see 3D un-tilt &amp; chained transition smoothly execute.
          </p>
          <button
            type="button"
            className="[border-none,outline-none,padding-8px-16px,border-radius-8px,background-color-6366f1,color-ffffff,font-size-13px,font-weight-600]--as-mini-btn mini-btn cursor-pointer"
          >
            Interactive Surface
          </button>
        </article>
      </div>
    </div>
  </div>
</section>

   )
}
