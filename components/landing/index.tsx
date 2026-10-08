
import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import Features from "./features";
import CompTable from "./comp-table";
import FrameworkPhilosophy from "./framework-philosophy";
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
        keyframes-orbdrift="@0-[tf-translate3d(0px,0px,0px)] @50-[tf-translate3d(-100px,-90px,50px)] @100-[tf-translate3d(0px,0px,0px)]"
        className="position-absolute bottom-5% right-5% width-450px height-450px border-radius-50% background(radial-gradient(circle,rgba(236,72,153,0.18),transparent_70%))_ _html[class~=dark]&-background(radial-gradient(circle,rgba(244,114,182,0.25),transparent_70%))_ filter-blur-60px an-orbdrift adu-16s atf-ease-in-out aici"
      />

      {/* Moving Floor grid */}
      <div
       keyframes-floorgrid=
            "@0-[background-position-0px-0px] @100-[background-position-0px-40px]"
        className="position-absolute inset-0 width-100% height-100% opacity-30 _html[class~=dark]&-opacity-15 background-size-40px-40px background(linear-gradient(to_right,rgba(100,116,139,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.15)_1px,transparent_1px))_ _html[class~=dark]&-background(linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px))_ tf-perspective-600px__rotateX-65deg transform-origin-center-top an-floorgrid adu-5s atf-linear aici"
      />
    </aside>
  );
}

export default function Landing() {
 

  return (
    <div className="position-relative top-0 r-0 l-0 width-100% min-height-100vh background-color-0b0f19 color-ffffff overflow-x-hidden">
      {/* Ambient Gradient Backdrops */}
      <div className="position-absolute top-0 left-50% transform-translateX--50% width-100% max-width-1200px height-600px background(radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_70%))_ pointer-events-none z-index-0" />
      <div className="position-absolute top-400px right--200px width-500px height-500px border-radius-50% background-color-ec4899/0.08 filter-blur-120px pointer-events-none" />

      {/* Navigation Header */}
      <Header/>

      <main className="position-relative z-index-1">
        <Hero/>
       

        {/* ====================================================================
             CORE ARCHITECTURAL PILLARS (3-COLUMN MATRIX)
             ==================================================================== */}
          <Features/>

          <FrameworkPhilosophy/>

        {/* ====================================================================
             SIDE-BY-SIDE FRAMEWORK COMPARISON TABLE
             ==================================================================== */}
        <CompTable/>
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
      <Footer/>
      <AnimatedBackground />
    </div>
  );
}

