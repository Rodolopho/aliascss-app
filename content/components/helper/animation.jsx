import './animation.jsx.css';

export const Cube = () => {
  return (
    <div
      className="mh-50vh d-flex ai-center jc-center"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      {/* Scene wrapper: enables 3D perspective */}
      <div className="w-200px h-200px d-flex ai-center jc-center perspective-600px">
        {/* Cube root: preserve-3d + spin animation */}
        <div
          keyframes-spins="@0-[tf-rotateX-20deg__rotateY-0deg] @100-[tf-rotateX-20deg__rotateY-360deg]"
          className="pr w-120px h-120px transform-style-preserve-3d an-spins adu-8s atf-linear aici"
        >
          {/* Front */}
          <div
            className="
              [pa,w-120px,h-120px,bgc-white/0.06,b-1px-s-white/0.35,br-6px,bf-blur-6px]--as-cube-faced
              cube-faced
              tf-translateZ-60px
            "
          />

          {/* Back */}
          <div className="cube-faced tf-rotateY-180deg__translateZ-60px" />

          {/* Left */}
          <div className="cube-faced tf-rotateY--90deg__translateZ-60px" />

          {/* Right */}
          <div className="cube-faced tf-rotateY-90deg__translateZ-60px" />

          {/* Top (fixed from tf-rx-90deg__tz-60px) */}
          <div className="cube-faced tf-rotateX-90deg__translateZ-60px" />

          {/* Bottom */}
          <div className="cube-faced tf-rotateX--90deg__translateZ-60px" />
        </div>
      </div>
    </div>
  );
};

export const Orbital = () => (
    <>
      {/* 3D Perspective Viewport */}
      <div className="display-flex align-items-center justify-content-center min-height-600px width-100% background-color-0b0f19 padding-24px overflow-hidden">
        <div className="perspective-1200px width-100% max-width-440px position-relative">
          {/* Card Shell with Ambient Shadow Pulse */}
          <div
            keyframes-hullGlow="
  @0-[box-shadow-0px-20px-50px-000000/0.6]
  @50-[box-shadow-0px-25px-70px-6366f1/0.3]
  @100-[box-shadow-0px-20px-50px-000000/0.6]
"
            className="
  position-relative display-flex flex-direction-column align-items-center
  padding-48px-32px border-radius-32px background-color-111827/0.8
  backdrop-filter-blur-20px border-1px-solid-ffffff/0.1
  an-hullGlow adu-6s atf-linear aici
  tf-rotateX-10deg__rotateY-0deg
  tn-transform-0.4s-ease__box-shadow-0.4s-ease
  --hover-[tf-rotateX-0deg__rotateY-0deg,box-shadow-0px-30px-80px-6366f1/0.4]
  @motion-reduce-an-none
"
          >
            {/* Background Radial Particle Glow */}
            <div className="position-absolute top--100px left--100px width-300px height-300px border-radius-50% background-color-6366f1/0.2 filter-blur-80px pointer-events-none" />
            {/* Gyroscopic Stage (Preserves 3D Hierarchy) */}
            <div className="position-relative width-260px height-260px display-flex align-items-center justify-content-center transform-style-preserve-3d margin-block-20px">
              {/* Ring 1: Outer Celestial Gimbal (Yaw + Roll) */}
              <div
                keyframes-orbitAlpha="
      @0-[tf-rotateX(65deg)__rotateY(0deg)__rotateZ(0deg)]
      @100-[tf-rotateX(65deg)__rotateY(0deg)__rotateZ(360deg)]
    "
                className="
      position-absolute width-240px height-240px border-radius-50%
      border-2px-dashed-818cf8/0.7 transform-style-preserve-3d
      an-orbitAlpha adu-14s atf-linear aici @motion-reduce-an-none
    "
              >
                {/* Orbiting Satellite Node */}
                <div className="position-absolute top--6px left-50% width-12px height-12px border-radius-50% background-color-818cf8 box-shadow-0px-0px-14px-818cf8 transform-translateX--50%" />
              </div>
              {/* Ring 2: Interlocking Pitch Ring (Opposing Angle) */}
              <div
                keyframes-orbitBeta="
      @0-[tf-rotateX(-50deg)__rotateY(45deg)__rotateZ(0deg)]
      @100-[tf-rotateX(-50deg)__rotateY(45deg)__rotateZ(-360deg)]
    "
                className="
      position-absolute width-180px height-180px border-radius-50%
      border-2px-solid-ec4899/0.6 box-shadow-0px-0px-24px-ec4899/0.2
      transform-style-preserve-3d
      an-orbitBeta adu-9s atf-linear aici @motion-reduce-an-none
    "
              >
                {/* Secondary Ion Node */}
                <div className="position-absolute bottom--5px left-50% width-10px height-10px border-radius-50% background-color-ec4899 box-shadow-0px-0px-12px-ec4899 transform-translateX--50%" />
              </div>
              {/* Ring 3: Equatorial Spin Track */}
              <div
                keyframes-orbitGamma="
      @0-[tf-rotateX(15deg)__rotateY(-60deg)__rotateZ(0deg)]
      @100-[tf-rotateX(15deg)__rotateY(-60deg)__rotateZ(360deg)]
    "
                className="
      position-absolute width-120px height-120px border-radius-50%
      border-2px-dotted-06b6d4/0.8 transform-style-preserve-3d
      an-orbitGamma adu-5s atf-linear aici @motion-reduce-an-none
    "
              />
              {/* Center Plasma Singularity (Multi-Percentage Breathing Timeline) */}
              <div
                keyframes-plasmaSingularity="
      @[0,100]-[transform-scale-0.9,box-shadow-0px-0px-20px-6366f1/0.6]
      @50-[transform-scale-1.2,box-shadow-0px-0px-50px-a855f7/0.9]
    "
                className="
      position-relative width-48px height-48px border-radius-50%
      background-color-ffffff box-shadow-0px-0px-30px-a855f7
      an-plasmaSingularity adu-2.4s atf-ease-in-out aici
      display-flex align-items-center justify-content-center @motion-reduce-an-none
    "
              >
                <div className="width-24px height-24px border-radius-50% background-color-4f46e5 filter-blur-2px" />
              </div>
            </div>
            {/* Typography Block */}
            <div className="display-flex flex-direction-column align-items-center gap-6px text-align-center margin-top-12px">
              <h3 className="font-size-22px font-weight-700 color-ffffff margin-0 letter-spacing--0.02em">
                AliasCSS Inline 3D Anmation
              </h3>
              <p className="font-size-13px color-94a3b8 margin-0">
                Continuous 3-Axis Multi-Frequency Field
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

)