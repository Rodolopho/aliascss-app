"use client";
import { useState } from "react";
import Logo from "../logo";
import "./home.jsx.css";
export  function AnimatedBackground() {
  return (
    <aside
      aria-hidden="true"
      className="color-scheme-light-dark scroll-behavior-smooth position-fixed inset-0 width-100vw height-100vh z-index--10 pointer-events-none overflow-hidden background-color-f8fafc _html[class~=dark]&-background-color-090d16 @media-prefers-color-scheme-dark-background-color-090d16 transition-background-color-500ms"
    >
      {/* 3D Rotating Astroid Mesh */}
      <div
        keyframes-drift3d="@0-[tf-rotateX-15deg__rotateY-0deg__translateZ-0px] @50-[tf-rotateX-35deg__rotateY-180deg__translateZ-80px] @100-[tf-rotateX-15deg__rotateY-360deg__translateZ-0px]"
        className="position-absolute top-10% left-5% width-550px height-550px border-radius-40% border-1px-solid-6366f1/0.3 _html[class~=dark]&-border-1px-solid-818cf8/0.25 background-color-6366f1/0.06 _html[class~=dark]&-background-color-6366f1/0.12 filter-blur-40px tf-perspective-1200px an-drift3d adu-24s atf-linear aici"
      />

      {/* Floating Gradient Orb */}
      <div
        keyframes-orbDrift="@0-[tf-translate3d(0px,0px,0px)] @50-[tf-translate3d(-100px,-90px,50px)] @100-[tf-translate3d(0px,0px,0px)]"
        className="position-absolute bottom-5% right-5% width-450px height-450px border-radius-50% background(radial-gradient(circle,rgba(236,72,153,0.18),transparent_70%))_ _html[class~=dark]&-background(radial-gradient(circle,rgba(244,114,182,0.25),transparent_70%))_ filter-blur-60px an-orbDrift adu-16s atf-ease-in-out aici"
      />

      {/* Moving Floor Grid */}
      <div
        {...{
          "keyframes-floorGrid":
            "@0-[background-position-0px-0px] @100-[background-position-0px-40px]",
        }}
        className="position-absolute inset-0 width-100% height-100% opacity-30 _html[class~=dark]&-opacity-15 background-size-40px-40px background(linear-gradient(to_right,rgba(100,116,139,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.15)_1px,transparent_1px))_ _html[class~=dark]&-background(linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px))_ tf-perspective-600px__rotateX-65deg transform-origin-center-top an-floorGrid adu-5s atf-linear aici"
      />
    </aside>
  );
}

export default function AliasCSSLanding() {
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

  return (
    <div className="position-relative top-0 r-0 l-0 width-100% min-height-100vh background-color-0b0f19 color-ffffff overflow-x-hidden">
      {/* Ambient Gradient Backdrops */}
      <div className="position-absolute top-0 left-50% transform-translateX--50% width-100% max-width-1200px height-600px background(radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_70%))_ pointer-events-none z-index-0" />
      <div className="position-absolute top-400px right--200px width-500px height-500px border-radius-50% background-color-ec4899/0.08 filter-blur-120px pointer-events-none" />

      {/* Navigation Header */}
      <header className="position-sticky top-0 z-index-50 width-100% height-70px background-color-0b0f19/0.8 backdrop-filter-blur-16px border-bottom-1px-solid-ffffff/0.08 display-flex align-items-center justify-content-space-between padding-inline-24px @lg-padding-inline-48px">
        <a
          href="/"
          className="display-flex align-items-center gap-10px text-decoration-none"
        >
          <Logo />

          {/* <span className="font-size-22px font-weight-800 letter-spacing--0.03em color-ffffff">
            Alias<span className="color-6366f1">CSS</span>
          </span>
          <span className="font-size-11px font-weight-700 background-color-6366f1/0.15 color-818cf8 padding-3px-8px border-radius-9999px border-1px-solid-6366f1/0.3">
            v2.0
          </span> */}
        </a>

        <nav className="@base-display-none @md-display-flex align-items-center gap-28px font-size-14px font-weight-500">
          <a
            href="#features"
            className="color-94a3b8 --hover-color-ffffff text-decoration-none transition-color-150ms"
          >
            Features
          </a>
          <a
            href="#comparison"
            className="color-94a3b8 --hover-color-ffffff text-decoration-none transition-color-150ms"
          >
            Tailwind vs Alias
          </a>
          <a
            href="/docs/introduction"
            className="color-94a3b8 --hover-color-ffffff text-decoration-none transition-color-150ms"
          >
            Documentation
          </a>
          <a
            href="https://github.com/aliascss"
            target="_blank"
            rel="noreferrer"
            className="color-94a3b8 --hover-color-ffffff text-decoration-none transition-color-150ms"
          >
            GitHub
          </a>
        </nav>

        <div className="display-flex align-items-center gap-14px">
          <a
            href="/docs/introduction"
            className="display-inline-flex align-items-center justify-content-center padding-8px-18px border-radius-10px font-size-14px font-weight-600 background-color-6366f1 color-ffffff text-decoration-none tn-background-color-150ms__transform-150ms --hover-[background-color-4f46e5,transform-translateY--1px]"
          >
            Get Started →
          </a>
        </div>
      </header>

      <main className="position-relative z-index-1">
        {/* ====================================================================
             HERO SECTION: VALUE PROPOSITION & LIVE INTERACTIVE SHOWCASE
             ==================================================================== */}
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
                      "@[0,100]-[box-shadow-0px-0px-0px-000000/0]
                      @50-[box-shadow-0px-0px-30px-6366f1/0.4]"
                    </span>
                    {"\n"}
                    {"  "}
                    <span className="color-818cf8">class</span>=
                    <span className="color-fde68a">
                      "{"\n"}
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
                      {"  "}"
                    </span>
                    <span className="color-ec4899">&gt;</span>
                    {"\n"}
                    {"  "}
                    <span className="color-ec4899">&lt;h3</span>{" "}
                    <span className="color-818cf8">class</span>=
                    <span className="color-fde68a">
                      "fs-24px fw-700 c-white m-0"
                    </span>
                    <span className="color-ec4899">&gt;</span>Realtime Engine
                    <span className="color-ec4899">&lt;/h3&gt;</span>
                    {"\n"}
                    {"  "}
                    <span className="color-ec4899">&lt;p</span>{" "}
                    <span className="color-818cf8">class</span>=
                    <span className="color-fde68a">
                      "fs-14px c-gray400 lh-1.5"
                    </span>
                    <span className="color-ec4899">&gt;</span>Chained 3D
                    transforms &amp; in-line motion.
                    <span className="color-ec4899">&lt;/p&gt;</span>
                    {"\n"}
                    <span className="color-ec4899">&lt;/article&gt;</span>
                  </code>
                </pre>
              </div>

              {/* Live Interactive Render Side */}
              <div className="flex-1 padding-40px display-flex align-items-center justify-content-center background-color-0b0f19 perspective-1000px">
                <article
                  keyframes-heroPulse="@0-[box-shadow-0px-0px-0px-000000/0] @50-[box-shadow-0px-0px-30px-6366f1/0.4] @100-[box-shadow-0px-0px-0px-000000/0]"
                  className="[padding-32px,border-radius-20px,background-color-ffffff/0.05,backdrop-filter-blur-12px,border-1px-solid-ffffff/0.1]--as-hero-glass-card hero-glass-card width-100% max-width-320px tf-rotateX-10deg__rotateY--10deg tn-transform-0.2s-ease__box-shadow-0.2s-ease --hover-[tf-rotateX-0deg__rotateY-0deg,box-shadow-0px-20px-40px-6366f1/0.2] an-heroPulse adu-3s atf-linear aici cursor-pointer"
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
                    Hover to see 3D un-tilt &amp; chained transition smoothly
                    execute.
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

        {/* ====================================================================
             CORE ARCHITECTURAL PILLARS (3-COLUMN MATRIX)
             ==================================================================== */}
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

          <div className="display-grid @base-grid-template-columns-1 @md-grid-template-columns-2 @lg-grid-template-columns-3 gap-24px">
            {/* Card 1: In-line Keyframes */}
            <div className="padding-32px border-radius-20px background-color-111827/0.7 border-1px-solid-ffffff/0.08 display-flex flex-direction-column">
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
            </div>

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
                <code className="color-a5b4fc">type: 'group'</code>) that emit
                entire design-system contracts from a single class.
              </p>
            </div>
          </div>
        </section>

        {/* ====================================================================
             SIDE-BY-SIDE FRAMEWORK COMPARISON TABLE
             ==================================================================== */}
        <section
          id="comparison"
          className="padding-block-80px padding-inline-24px max-width-1100px margin-inline-auto"
        >
          <div className="text-align-center margin-bottom-48px">
            <span className="font-size-12px font-weight-700 color-6366f1 text-transform-uppercase letter-spacing-0.08em">
              Feature Matrix
            </span>
            <h2 className="font-size-36px font-weight-800 color-ffffff letter-spacing--0.03em margin-top-8px">
              Why developers switch from Tailwind
            </h2>
          </div>

          <div className="overflow-x-auto border-radius-16px border-1px-solid-ffffff/0.1 background-color-111827/0.5">
            <table className="width-100% border-collapse-collapse text-align-left font-size-14px">
              <thead>
                <tr className="background-color-ffffff/0.03 border-bottom-1px-solid-ffffff/0.1">
                  <th className="padding-18px-24px color-ffffff font-weight-700">
                    Capability
                  </th>
                  <th className="padding-18px-24px color-64748b font-weight-600 width-35%">
                    Tailwind CSS
                  </th>
                  <th className="padding-18px-24px color-6366f1 font-weight-700 width-40% background-color-6366f1/0.05">
                    AliasCSS
                  </th>
                </tr>
              </thead>
              <tbody className="line-height-1.6">
                <tr className="border-bottom-1px-solid-ffffff/0.05">
                  <td className="padding-16px-24px color-ffffff font-weight-600">
                    Custom Keyframes
                  </td>
                  <td className="padding-16px-24px color-ef4444">
                    Requires external config file &amp;{" "}
                    <code className="color-ef4444">@keyframes</code> CSS
                  </td>
                  <td className="padding-16px-24px color-10b981 font-weight-600 background-color-6366f1/0.05">
                    In-line:{" "}
                    <code className="color-a5b4fc">
                      keyframes-pop="@0-[...] @100-[...]"
                    </code>
                  </td>
                </tr>
                <tr className="border-bottom-1px-solid-ffffff/0.05">
                  <td className="padding-16px-24px color-ffffff font-weight-600">
                    3D Transform Stacking
                  </td>
                  <td className="padding-16px-24px color-ef4444">
                    Complex CSS custom property juggling
                  </td>
                  <td className="padding-16px-24px color-10b981 font-weight-600 background-color-6366f1/0.05">
                    Native Chaining:{" "}
                    <code className="color-a5b4fc">tf-rx-20deg__ry-40deg</code>
                  </td>
                </tr>
                <tr className="border-bottom-1px-solid-ffffff/0.05">
                  <td className="padding-16px-24px color-ffffff font-weight-600">
                    Ancestor/Sibling Context
                  </td>
                  <td className="padding-16px-24px color-ef4444">
                    Awkward <code className="color-ef4444">group-hover/*</code>{" "}
                    hacks
                  </td>
                  <td className="padding-16px-24px color-10b981 font-weight-600 background-color-6366f1/0.05">
                    Magic Anchor:{" "}
                    <code className="color-a5b4fc">
                      _html[class~=dark]&amp;-
                    </code>
                    ,{" "}
                    <code className="color-a5b4fc">
                      ___input[checked]&amp;-
                    </code>
                  </td>
                </tr>
                <tr className="border-bottom-1px-solid-ffffff/0.05">
                  <td className="padding-16px-24px color-ffffff font-weight-600">
                    Semantic Class Export
                  </td>
                  <td className="padding-16px-24px color-ef4444">
                    None; requires <code className="color-ef4444">@apply</code>{" "}
                    in external CSS
                  </td>
                  <td className="padding-16px-24px color-10b981 font-weight-600 background-color-6366f1/0.05">
                    In-markup:{" "}
                    <code className="color-a5b4fc">
                      [p-16px,br-8px]--as-card card
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="padding-16px-24px color-ffffff font-weight-600">
                    Grammar &amp; Custom Compilers
                  </td>
                  <td className="padding-16px-24px color-ef4444">
                    Locked vocabulary; cannot alter compiler rules
                  </td>
                  <td className="padding-16px-24px color-10b981 font-weight-600 background-color-6366f1/0.05">
                    Fully programmable compiler via{" "}
                    <code className="color-a5b4fc">extend</code> &amp;{" "}
                    <code className="color-a5b4fc">type: 'group'</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* <section>
            <Doc />
        </section> */}

        {/* ====================================================================
             CALL TO ACTION FOOTER
             ==================================================================== */}
        <section className="padding-block-100px padding-inline-24px max-width-800px margin-inline-auto text-align-center">
          <h2 className="@base-font-size-36px @md-font-size-48px font-weight-800 color-ffffff letter-spacing--0.03em margin-bottom-16px">
            Ready to build without constraints?
          </h2>
          <p className="font-size-18px color-94a3b8 line-height-1.6 margin-bottom-36px">
            Switch to the CSS compiler built for modern web standards, complete
            dogfooding, and zero configuration friction.
          </p>

          <div className="display-flex justify-content-center gap-16px">
            <a
              href="/docs/introduction"
              className="padding-14px-32px border-radius-12px font-size-16px font-weight-600 background-color-6366f1 color-ffffff text-decoration-none tn-all-150ms --hover-[background-color-4f46e5,transform-translateY--2px]"
            >
              Read the Documentation →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-top-1px-solid-ffffff/0.08 padding-block-32px padding-inline-24px text-align-center font-size-14px color-64748b background-color-0b0f19">
        <p className="margin-0">
          Designed and built with 100% pure <strong>AliasCSS</strong>
          MIT {new Date().getFullYear()} ©(Bikram Thapa) AliasCSS.
          <a href="mailto:var.bikram@gmail.com" style={{ display: "block" }}>
            var.bikram@gmail.com
          </a>
        </p>
      </footer>
      <AnimatedBackground />
    </div>
  );
}

export function WithTheme() {
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
    return (
      <div className="position-relative top-0 r-0 l-0 width-100% min-height-100vh background-color-0b0f19 @light[class]-background-color-f8fafc color-ffffff @light[class]-color-0f172a overflow-x-hidden transition-background-color-300ms__color-300ms">
        {/* Ambient Gradient Backdrops */}
        <div className="position-absolute top-0 left-50% transform-translateX--50% width-100% max-width-1200px height-600px background(radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_70%))_ @light[class]-background(radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_70%))_ pointer-events-none z-index-0" />
        <div className="position-absolute top-400px right--200px width-500px height-500px border-radius-50% background-color-ec4899/0.08 @light[class]-background-color-ec4899/0.05 filter-blur-120px pointer-events-none" />

        {/* Navigation Header */}
        <header className="position-sticky top-0 z-index-50 width-100% height-70px background-color-0b0f19/0.8 @light[class]-background-color-ffffff backdrop-filter-blur-16px border-bottom-1px-solid-ffffff/0.08 @light[class]-border-bottom-1px-solid-000000/0.08 display-flex align-items-center justify-content-space-between padding-inline-24px @lg-padding-inline-48px transition-background-color-300ms__border-color-300ms">
          <a
            href="/"
            className="display-flex align-items-center gap-10px text-decoration-none"
          >
            <Logo />
          </a>

          <nav className="@base-display-none @md-display-flex align-items-center gap-28px font-size-14px font-weight-500">
            <a
              href="#features"
              className="color-94a3b8 @light[class]-color-64748b --hover-color-ffffff @light[class]---hover-color-0f172a text-decoration-none transition-color-150ms"
            >
              Features
            </a>
            <a
              href="#comparison"
              className="color-94a3b8 @light[class]-color-64748b --hover-color-ffffff @light[class]---hover-color-0f172a text-decoration-none transition-color-150ms"
            >
              Why Use AliasCSS?
            </a>
            <a
              href="/docs/introduction"
              className="color-94a3b8 @light[class]-color-64748b --hover-color-ffffff @light[class]---hover-color-0f172a text-decoration-none transition-color-150ms"
            >
              Documentation
            </a>
            <a
              href="https://github.com/aliascss"
              target="_blank"
              rel="noreferrer"
              className="color-94a3b8 @light[class]-color-64748b --hover-color-ffffff @light[class]---hover-color-0f172a text-decoration-none transition-color-150ms"
            >
              GitHub
            </a>
          </nav>

          <div className="display-flex align-items-center gap-14px">
            <a
              href="/docs/introduction"
              className="display-inline-flex align-items-center justify-content-center padding-8px-18px border-radius-10px font-size-14px font-weight-600 background-color-6366f1 color-ffffff text-decoration-none tn-background-color-150ms__transform-150ms --hover-[background-color-4f46e5,transform-translateY--1px]"
            >
              Get Started →
            </a>
          </div>
        </header>

        <main className="position-relative z-index-1">
          {/* ====================================================================
           HERO SECTION: VALUE PROPOSITION & LIVE INTERACTIVE SHOWCASE
           ==================================================================== */}
          <section className="padding-top-80px padding-bottom-60px padding-inline-24px max-width-1280px margin-inline-auto display-flex flex-direction-column align-items-center text-align-center @light[class]-bgc-ffffff">
            {/* Status Notification Pill */}
            <div className="display-inline-flex align-items-center gap-8px padding-6px-16px border-radius-9999px background-color-ffffff/0.05 @light[class]-background-color-000000/0.04 border-1px-solid-ffffff/0.1 @light[class]-border-1px-solid-000000/0.08 margin-bottom-24px">
              <span className="width-8px height-8px border-radius-50% background-color-10b981 box-shadow-0px-0px-8px-10b981" />
              <span className="font-size-13px font-weight-600 color-cbd5e1 @light[class]-color-334155">
                The Deterministic Right-to-Left CSS Compiler
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="@base-font-size-44px @md-font-size-64px @lg-font-size-76px font-weight-800 letter-spacing--0.04em line-height-1.08 max-width-980px margin-0 color-ffffff @light[class]-color-black/0.9">
              Write CSS directly in markup. <br />
              <span className="background(linear-gradient(to_right,#818cf8,#c084fc,#f472b6))_ @light[class][class]-background(linear-gradient(to_right,#4f46e5,#9333ea,#db2777))_ background-clip-text color-transparent">
                Without limits.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="@base-font-size-18px @md-font-size-20px line-height-1.6 color-94a3b8 @light[class]-color-475569 max-width-680px margin-top-24px margin-bottom-36px">
              Stop context-switching to configuration files. In-line{" "}
              <code className="font-family-monospace color-a5b4fc @light[class]-color-4f46e5 background-color-ffffff/0.08 @light[class]-background-color-6366f1/0.1 padding-2px-6px border-radius-4px">
                keyframes
              </code>
              , 3D transform chaining with{" "}
              <code className="font-family-monospace color-a5b4fc @light[class]-color-4f46e5 background-color-ffffff/0.08 @light[class]-background-color-6366f1/0.1 padding-2px-6px border-radius-4px">
                __
              </code>
              , true ancestor inversion via{" "}
              <code className="font-family-monospace color-a5b4fc @light[class]-color-4f46e5 background-color-ffffff/0.08 @light[class]-background-color-6366f1/0.1 padding-2px-6px border-radius-4px">
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
                className="display-inline-flex align-items-center gap-12px padding-12px-20px border-radius-12px font-family-monospace font-size-14px background-color-111827 @light[class]-background-color-ffffff border-1px-solid-ffffff/0.12 @light[class]-border-1px-solid-000000/0.12 color-cbd5e1 @light[class]-color-334155 box-shadow-none @light[class]-box-shadow-0px-4px-12px-000000/0.04 cursor-pointer tn-border-color-150ms__background-color-150ms --hover-border-color-6366f1 outline-none"
              >
                {copied ? (
                  <span className="color-10b981 font-weight-700">
                    ✓ Copied to clipboard!
                  </span>
                ) : (
                  <>
                    <span className="color-818cf8 @light[class]-color-6366f1 font-weight-700">
                      $
                    </span>
                    <span>npm i -D aliascss</span>
                    <svg
                      className="width-16px height-16px color-64748b @light[class]-color-94a3b8"
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
            <div className="width-100% max-width-1100px text-align-left border-radius-20px background-color-111827/0.9 @light[class]-background-color-ffffff/90 backdrop-filter-blur-20px border-1px-solid-ffffff/0.1 @light[class]-border-1px-solid-000000/0.08 box-shadow-0px-24px-64px-000000/0.6 @light[class]-box-shadow-0px-24px-64px-000000/0.08 overflow-hidden">
              {/* Terminal Chrome Bar */}
              <div className="height-44px background-color-0b0f19/0.8 @light[class]-background-color-f1f5f9/0.8 border-bottom-1px-solid-ffffff/0.08 @light[class]-border-bottom-1px-solid-000000/0.08 padding-inline-16px display-flex align-items-center justify-content-space-between">
                <div className="display-flex align-items-center gap-8px">
                  <span className="width-11px height-11px border-radius-50% background-color-ef4444/0.8" />
                  <span className="width-11px height-11px border-radius-50% background-color-f59e0b/0.8" />
                  <span className="width-11px height-11px border-radius-50% background-color-10b981/0.8" />
                  <span className="font-size-12px font-family-monospace color-64748b @light[class]-color-64748b margin-left-10px">
                    InteractiveCard.html
                  </span>
                </div>
                <div className="@base-font-size-11px @xs-fs-9px font-weight-700 color-10b981 text-transform-uppercase letter-spacing-0.08em display-flex align-items-center gap-6px">
                  <span className=" width-6px height-6px border-radius-50% background-color-10b981" />
                  Live Compiled Output
                </div>
              </div>

              {/* Split Viewport: Left is Code, Right is Rendered Result */}
              <div className="display-flex @base-flex-direction-column @lg-flex-direction-row">
                {/* Code Editor Side */}
                <div className="flex-1 padding-24px font-family-monospace font-size-13px line-height-1.7 border-bottom-1px-solid-ffffff/0.08 @light[class]-border-bottom-1px-solid-000000/0.08 @lg-border-bottom-none @lg-border-right-1px-solid-ffffff/0.08 @lg-@light[class]-border-right-1px-solid-000000/0.08 overflow-x-auto background-color-0e1320 @light[class]-background-color-1e293b">
                  <pre className="margin-0 padding-0 background-color-transparent">
                    <code className="color-94a3b8">
                      <span className="color-ec4899">&lt;article</span>
                      {"\n"}
                      {"  "}
                      <span className="color-818cf8">keyframes-pulse</span>=
                      <span className="color-fde68a">
                        "@[0,100]-[box-shadow-0px-0px-0px-000000/0]
                        @50-[box-shadow-0px-0px-30px-6366f1/0.4]"
                      </span>
                      {"\n"}
                      {"  "}
                      <span className="color-818cf8">class</span>=
                      <span className="color-fde68a">
                        "{"\n"}
                        {"    "}
                        [p-32px,br-20px,bgc-white/0.05,bf-blur-12px,b-1px-s-white/0.1]--as-glass-card
                        {"\n"}
                        {"    "}glass-card{"\n"}
                        {"    "}tf-rotateX-10deg__rotateY--10deg{"\n"}
                        {"    "}tn-transform-0.2s-ease__box-shadow-0.2s-ease
                        {"\n"}
                        {"    "}
                        --hover-[tf-rotateX-0deg__rotateY-0deg,box-shadow-0px-20px-40px-6366f1/0.2]
                        {"\n"}
                        {"    "}an-pulse adu-3s aici{"\n"}
                        {"  "}"
                      </span>
                      <span className="color-ec4899">&gt;</span>
                      {"\n"}
                      {"  "}
                      <span className="color-ec4899">&lt;h3</span>{" "}
                      <span className="color-818cf8">class</span>=
                      <span className="color-fde68a">
                        "fs-24px fw-700 c-white m-0"
                      </span>
                      <span className="color-ec4899">&gt;</span>Realtime Engine
                      <span className="color-ec4899">&lt;/h3&gt;</span>
                      {"\n"}
                      {"  "}
                      <span className="color-ec4899">&lt;p</span>{" "}
                      <span className="color-818cf8">class</span>=
                      <span className="color-fde68a">
                        "fs-14px c-gray400 lh-1.5"
                      </span>
                      <span className="color-ec4899">&gt;</span>Chained 3D
                      transforms &amp; in-line motion.
                      <span className="color-ec4899">&lt;/p&gt;</span>
                      {"\n"}
                      <span className="color-ec4899">&lt;/article&gt;</span>
                    </code>
                  </pre>
                </div>

                {/* Live Interactive Render Side */}
                <div className="flex-1 padding-40px display-flex align-items-center justify-content-center background-color-0b0f19 @light[class]-background-color-f8fafc perspective-1000px">
                  <article
                    keyframes-heroPulse="@0-[box-shadow-0px-0px-0px-000000/0] @50-[box-shadow-0px-0px-30px-6366f1/0.4] @100-[box-shadow-0px-0px-0px-000000/0]"
                    className="[padding-32px,border-radius-20px,background-color-ffffff/0.05,backdrop-filter-blur-12px,border-1px-solid-ffffff/0.1]--as-hero-glass-card @light[class]-[background-color-ffffff,border-1px-solid-000000/0.08,box-shadow-0px-12px-28px-000000/0.06] hero-glass-card width-100% max-width-320px tf-rotateX-10deg__rotateY--10deg tn-transform-0.2s-ease__box-shadow-0.2s-ease --hover-[tf-rotateX-0deg__rotateY-0deg,box-shadow-0px-20px-40px-6366f1/0.2] an-heroPulse adu-3s atf-linear aici cursor-pointer"
                  >
                    <div className="display-inline-flex align-items-center gap-8px padding-4px-10px border-radius-9999px background-color-10b981/0.1 border-1px-solid-10b981/0.3 margin-bottom-16px">
                      <span className="width-6px height-6px border-radius-50% background-color-10b981" />
                      <span className="font-size-11px font-weight-700 color-10b981 text-transform-uppercase">
                        Live Interactive
                      </span>
                    </div>
                    <h3 className="font-size-22px font-weight-700 color-ffffff @light[class]-color-0f172a margin-0">
                      Realtime Engine
                    </h3>
                    <p className="font-size-14px color-94a3b8 @light[class]-color-64748b line-height-1.5 margin-top-8px margin-bottom-20px">
                      Hover to see 3D un-tilt &amp; chained transition smoothly
                      execute.
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

          {/* ====================================================================
           CORE ARCHITECTURAL PILLARS (3-COLUMN MATRIX)
           ==================================================================== */}
          <section
            id="features"
            className="padding-block-80px padding-inline-24px max-width-1280px margin-inline-auto"
          >
            <div className="text-align-center margin-bottom-64px">
              <span className="font-size-12px font-weight-700 color-6366f1 text-transform-uppercase letter-spacing-0.08em">
                Architectural Superiority
              </span>
              <h2 className="@base-font-size-36px @md-font-size-48px font-weight-800 color-ffffff @light[class]-color-0f172a letter-spacing--0.03em margin-top-8px margin-bottom-16px">
                Built for total developer autonomy.
              </h2>
              <p className="font-size-16px color-94a3b8 @light[class]-color-64748b max-width-600px margin-inline-auto">
                Every limitation found in legacy utility frameworks has been
                solved with rigorous compiler design.
              </p>
            </div>

            <div className="display-grid @base-grid-template-columns-1 @md-grid-template-columns-2 @lg-grid-template-columns-3 gap-24px">
              {/* Card 1: In-line Keyframes */}
              <div className="padding-32px border-radius-20px background-color-111827/0.7 @light[class]-background-color-ffffff border-1px-solid-ffffff/0.08 @light[class]-border-1px-solid-000000/0.08 @light[class]-box-shadow-0px-8px-24px-000000/0.04 display-flex flex-direction-column">
                <div className="width-44px height-44px border-radius-10px background-color-6366f1/0.15 display-flex align-items-center justify-content-center color-818cf8 @light[class]-color-6366f1 margin-bottom-20px font-size-20px">
                  ✦
                </div>
                <h3 className="font-size-20px font-weight-700 color-ffffff @light[class]-color-0f172a margin-0 margin-bottom-12px">
                  In-Line Keyframe DSL
                </h3>
                <p className="font-size-14px color-94a3b8 @light[class]-color-64748b line-height-1.6 margin-0">
                  Declare full multi-step keyframe timelines directly on the
                  HTML element via{" "}
                  <code className="color-a5b4fc @light[class]-color-4f46e5">
                    keyframes-[name]
                  </code>
                  . Supports grouped percentage timelines (
                  <code className="color-a5b4fc @light[class]-color-4f46e5">
                    @[0,50,100]-...
                  </code>
                  ) with zero external config.
                </p>
              </div>

              {/* Card 2: 3D Chaining (__) */}
              <div className="padding-32px border-radius-20px background-color-111827/0.7 @light[class]-background-color-ffffff border-1px-solid-ffffff/0.08 @light[class]-border-1px-solid-000000/0.08 @light[class]-box-shadow-0px-8px-24px-000000/0.04 display-flex flex-direction-column">
                <div className="width-44px height-44px border-radius-10px background-color-ec4899/0.15 display-flex align-items-center justify-content-center color-f472b6 @light[class]-color-ec4899 margin-bottom-20px font-size-20px">
                  ⚡
                </div>
                <h3 className="font-size-20px font-weight-700 color-ffffff @light[class]-color-0f172a margin-0 margin-bottom-12px">
                  Chaining Operator (
                  <code className="color-f472b6 @light[class]-color-db2777">
                    __
                  </code>
                  )
                </h3>
                <p className="font-size-14px color-94a3b8 @light[class]-color-64748b line-height-1.6 margin-0">
                  Chain multiple 2D/3D transforms (
                  <code className="color-a5b4fc @light[class]-color-4f46e5">
                    tf-rx-20deg__ry-30deg
                  </code>
                  ), multi-property transitions, and complex filters without
                  creating CSS variable soup or utility conflicts.
                </p>
              </div>

              {/* Card 3: Magic & Anchor */}
              <div className="padding-32px border-radius-20px background-color-111827/0.7 @light[class]-background-color-ffffff border-1px-solid-ffffff/0.08 @light[class]-border-1px-solid-000000/0.08 @light[class]-box-shadow-0px-8px-24px-000000/0.04 display-flex flex-direction-column">
                <div className="width-44px height-44px border-radius-10px background-color-10b981/0.15 display-flex align-items-center justify-content-center color-34d399 @light[class]-color-059669 margin-bottom-20px font-size-20px">
                  ⚓
                </div>
                <h3 className="font-size-20px font-weight-700 color-ffffff @light[class]-color-0f172a margin-0 margin-bottom-12px">
                  Magic &amp; Anchor
                </h3>
                <p className="font-size-14px color-94a3b8 @light[class]-color-64748b line-height-1.6 margin-0">
                  Invert context effortlessly. Style elements based on
                  ancestors, parent hover states, or preceding siblings (
                  <code className="color-a5b4fc @light[class]-color-4f46e5">
                    ___input--checked&amp;-c-blue
                  </code>
                  ) without custom CSS files or wrapper hacks.
                </p>
              </div>

              {/* Card 4: Right-to-Left Grammar */}
              <div className="padding-32px border-radius-20px background-color-111827/0.7 @light[class]-background-color-ffffff border-1px-solid-ffffff/0.08 @light[class]-border-1px-solid-000000/0.08 @light[class]-box-shadow-0px-8px-24px-000000/0.04 display-flex flex-direction-column">
                <div className="width-44px height-44px border-radius-10px background-color-f59e0b/0.15 display-flex align-items-center justify-content-center color-fbbf24 @light[class]-color-d97706 margin-bottom-20px font-size-20px">
                  ◄
                </div>
                <h3 className="font-size-20px font-weight-700 color-ffffff @light[class]-color-0f172a margin-0 margin-bottom-12px">
                  Right-to-Left Grammar
                </h3>
                <p className="font-size-14px color-94a3b8 @light[class]-color-64748b line-height-1.6 margin-0">
                  Deterministic evaluation:{" "}
                  <code className="color-a5b4fc @light[class]-color-4f46e5">
                    [Block @-Scope] + [Selector] + [Property-Value]
                  </code>
                  . Every class anchors on a real CSS property, making it 100%
                  predictable for humans and AI agents.
                </p>
              </div>

              {/* Card 5: In-Line Component Export */}
              <div className="padding-32px border-radius-20px background-color-111827/0.7 @light[class]-background-color-ffffff border-1px-solid-ffffff/0.08 @light[class]-border-1px-solid-000000/0.08 @light[class]-box-shadow-0px-8px-24px-000000/0.04 display-flex flex-direction-column">
                <div className="width-44px height-44px border-radius-10px background-color-06b6d4/0.15 display-flex align-items-center justify-content-center color-22d3ee @light[class]-color-0891b2 margin-bottom-20px font-size-20px">
                  📦
                </div>
                <h3 className="font-size-20px font-weight-700 color-ffffff @light[class]-color-0f172a margin-0 margin-bottom-12px">
                  Semantic Export (
                  <code className="color-22d3ee @light[class]-color-0891b2">
                    --as-
                  </code>
                  )
                </h3>
                <p className="font-size-14px color-94a3b8 @light[class]-color-64748b line-height-1.6 margin-0">
                  End class-string bloat. Bundle atomic utilities and export
                  them into named CSS classes (
                  <code className="color-a5b4fc @light[class]-color-4f46e5">
                    [...]--as-btn btn
                  </code>
                  ) directly from the markup. Supports multi-target exports and
                  specificity bumping.
                </p>
              </div>

              {/* Card 6: Programmable Compilers */}
              <div className="padding-32px border-radius-20px background-color-111827/0.7 @light[class]-background-color-ffffff border-1px-solid-ffffff/0.08 @light[class]-border-1px-solid-000000/0.08 @light[class]-box-shadow-0px-8px-24px-000000/0.04 display-flex flex-direction-column">
                <div className="width-44px height-44px border-radius-10px background-color-8b5cf6/0.15 display-flex align-items-center justify-content-center color-c084fc @light[class]-color-7c3aed margin-bottom-20px font-size-20px">
                  ⚙️
                </div>
                <h3 className="font-size-20px font-weight-700 color-ffffff @light[class]-color-0f172a margin-0 margin-bottom-12px">
                  Programmable Design System
                </h3>
                <p className="font-size-14px color-94a3b8 @light[class]-color-64748b line-height-1.6 margin-0">
                  Not a closed vocabulary. Extend or replace native property
                  compilers, or create group compilers (
                  <code className="color-a5b4fc @light[class]-color-4f46e5">
                    type: 'group'
                  </code>
                  ) that emit entire design-system contracts from a single
                  class.
                </p>
              </div>
            </div>
          </section>

          {/* ====================================================================
           SIDE-BY-SIDE FRAMEWORK COMPARISON TABLE
           ==================================================================== */}
          <section
            id="comparison"
            className="padding-block-80px padding-inline-24px max-width-1100px margin-inline-auto"
          >
            <div className="text-align-center margin-bottom-48px">
              <span className="font-size-12px font-weight-700 color-6366f1 text-transform-uppercase letter-spacing-0.08em">
                Feature Matrix
              </span>
              <h2 className="font-size-36px font-weight-800 color-ffffff @light[class]-color-0f172a letter-spacing--0.03em margin-top-8px">
                Why developers Use AliasCSS from Other Frameworks.
              </h2>
            </div>

            <div className="overflow-x-auto border-radius-16px border-1px-solid-ffffff/0.1 @light[class]-border-1px-solid-000000/0.08 background-color-111827/0.5 @light[class]-background-color-ffffff @light[class]-box-shadow-0px-8px-24px-000000/0.04">
              <table className="width-100% border-collapse-collapse text-align-left font-size-14px">
                <thead>
                  <tr className="background-color-ffffff/0.03 @light[class]-background-color-000000/0.02 border-bottom-1px-solid-ffffff/0.1 @light[class]-border-bottom-1px-solid-000000/0.08">
                    <th className="padding-18px-24px color-ffffff @light[class]-color-0f172a font-weight-700">
                      Capability
                    </th>
                    {/* <th className="padding-18px-24px color-64748b font-weight-600 width-35%">
                      Tailwind CSS
                    </th> */}
                    <th className="padding-18px-24px color-6366f1 font-weight-700 width-40% background-color-6366f1/0.05 @light[class]-background-color-6366f1/0.08">
                      AliasCSS
                    </th>
                  </tr>
                </thead>
                <tbody className="line-height-1.6">
                  <tr className="border-bottom-1px-solid-ffffff/0.05 @light[class]-border-bottom-1px-solid-000000/0.05">
                    <td className="padding-16px-24px color-ffffff @light[class]-color-0f172a font-weight-600">
                      Custom Keyframes
                    </td>
                    {/* <td className="padding-16px-24px color-ef4444 @light[class]-color-dc2626">
                      Requires external config file &amp;{" "}
                      <code className="color-ef4444 @light[class]-color-dc2626">
                        @keyframes
                      </code>{" "}
                      CSS
                    </td> */}
                    <td className="padding-16px-24px color-10b981 @light[class]-color-059669 font-weight-600 background-color-6366f1/0.05 @light[class]-background-color-6366f1/0.08">
                      In-line:{" "}
                      <code className="color-a5b4fc @light[class]-color-4f46e5">
                        keyframes-pop="@0-[...] @100-[...]"
                      </code>
                    </td>
                  </tr>
                  <tr className="border-bottom-1px-solid-ffffff/0.05 @light[class]-border-bottom-1px-solid-000000/0.05">
                    <td className="padding-16px-24px color-ffffff @light[class]-color-0f172a font-weight-600">
                      3D Transform Stacking
                    </td>
                    {/* <td className="padding-16px-24px color-ef4444 @light[class]-color-dc2626">
                      Complex CSS custom property juggling
                    </td> */}
                    <td className="padding-16px-24px color-10b981 @light[class]-color-059669 font-weight-600 background-color-6366f1/0.05 @light[class]-background-color-6366f1/0.08">
                      Native Chaining:{" "}
                      <code className="color-a5b4fc @light[class]-color-4f46e5">
                        tf-rx-20deg__ry-40deg
                      </code>
                    </td>
                  </tr>
                  <tr className="border-bottom-1px-solid-ffffff/0.05 @light[class]-border-bottom-1px-solid-000000/0.05">
                    <td className="padding-16px-24px color-ffffff @light[class]-color-0f172a font-weight-600">
                      Ancestor/Sibling Context
                    </td>
                    {/* <td className="padding-16px-24px color-ef4444 @light[class]-color-dc2626">
                      Awkward{" "}
                      <code className="color-ef4444 @light[class]-color-dc2626">
                        group-hover/*
                      </code>{" "}
                      hacks
                    </td> */}
                    <td className="padding-16px-24px color-10b981 @light[class]-color-059669 font-weight-600 background-color-6366f1/0.05 @light[class]-background-color-6366f1/0.08">
                      Magic Anchor:{" "}
                      <code className="color-a5b4fc @light[class]-color-4f46e5">
                        _html[class~=dark]&amp;-
                      </code>
                      ,{" "}
                      <code className="color-a5b4fc @light[class]-color-4f46e5">
                        ___input[checked]&amp;-
                      </code>
                    </td>
                  </tr>
                  <tr className="border-bottom-1px-solid-ffffff/0.05 @light[class]-border-bottom-1px-solid-000000/0.05">
                    <td className="padding-16px-24px color-ffffff @light[class]-color-0f172a font-weight-600">
                      Semantic Class Export
                    </td>
                    {/* <td className="padding-16px-24px color-ef4444 @light[class]-color-dc2626">
                      None; requires{" "}
                      <code className="color-ef4444 @light[class]-color-dc2626">
                        @apply
                      </code>{" "}
                      in external CSS
                    </td> */}
                    <td className="padding-16px-24px color-10b981 @light[class]-color-059669 font-weight-600 background-color-6366f1/0.05 @light[class]-background-color-6366f1/0.08">
                      In-markup:{" "}
                      <code className="color-a5b4fc @light[class]-color-4f46e5">
                        [p-16px,br-8px]--as-card card
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="padding-16px-24px color-ffffff @light[class]-color-0f172a font-weight-600">
                      Grammar &amp; Custom Compilers
                    </td>
                    {/* <td className="padding-16px-24px color-ef4444 @light[class]-color-dc2626">
                      Locked vocabulary; cannot alter compiler rules
                    </td> */}
                    <td className="padding-16px-24px color-10b981 @light[class]-color-059669 font-weight-600 background-color-6366f1/0.05 @light[class]-background-color-6366f1/0.08">
                      Fully programmable compiler via{" "}
                      <code className="color-a5b4fc @light[class]-color-4f46e5">
                        extend
                      </code>{" "}
                      &amp;{" "}
                      <code className="color-a5b4fc @light[class]-color-4f46e5">
                        type: 'group'
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ====================================================================
           CALL TO ACTION FOOTER
           ==================================================================== */}
          <section className="padding-block-100px padding-inline-24px max-width-800px margin-inline-auto text-align-center">
            <h2 className="@base-font-size-36px @md-font-size-48px font-weight-800 color-ffffff @light[class]-color-0f172a letter-spacing--0.03em margin-bottom-16px">
              Ready to build without constraints?
            </h2>
            <p className="font-size-18px color-94a3b8 @light[class]-color-64748b line-height-1.6 margin-bottom-36px">
              Switch to the CSS compiler built for modern web standards,
              complete dogfooding, and zero configuration friction.
            </p>

            <div className="display-flex justify-content-center gap-16px">
              <a
                href="/docs/introduction"
                className="padding-14px-32px border-radius-12px font-size-16px font-weight-600 background-color-6366f1 color-ffffff text-decoration-none tn-all-150ms --hover-[background-color-4f46e5,transform-translateY--2px]"
              >
                Read the Documentation →
              </a>
            </div>
          </section>
        </main>

        {/* Footer
        <footer className="border-top-1px-solid-ffffff/0.08 @light[class]-border-top-1px-solid-000000/0.08 padding-block-32px padding-inline-24px text-align-center font-size-14px color-64748b @light[class]-color-64748b background-color-0b0f19 @light[class]-background-color-ffffff transition-background-color-300ms__border-color-300ms">
          <p className="margin-0">
            Designed and built with 100% pure <strong>AliasCSS</strong>. MIT{" "}
            {new Date().getFullYear()} ©(Bikram Thapa) AliasCSS.{" "}
            <a
              href="mailto:var.bikram@gmail.com"
              className="display-block color-6366f1 text-decoration-none margin-top-4px"
            >
              var.bikram@gmail.com
            </a>
          </p>
        </footer> */}
        <AnimatedBackground />
      </div>
    );
}