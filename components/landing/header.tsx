import Link from "next/link";
import Logo from "../logo";
function Header() {
    return (
        <>
            <header className="position-sticky top-0 z-index-50 width-100% height-70px background-color-0b0f19/0.8 backdrop-filter-blur-16px border-bottom-1px-solid-ffffff/0.08 display-flex align-items-center justify-content-space-between padding-inline-24px @lg-padding-inline-48px">
                    <Link href="/" className="display-flex align-items-center gap-10px text-decoration-none">
                        <Logo />

                    {/* <span className="font-size-22px font-weight-800 letter-spacing--0.03em color-ffffff">
                        Alias<span className="color-6366f1">CSS</span>
                    </span>
                    <span className="font-size-11px font-weight-700 background-color-6366f1/0.15 color-818cf8 padding-3px-8px border-radius-9999px border-1px-solid-6366f1/0.3">
                        v2.0
                    </span> */}
                    </Link>

                <nav className="@base-display-none @md-display-flex align-items-center gap-28px font-size-14px font-weight-500">
                    <Link
                        href="/playground"
                        className="
                        color-94a3b8  --hover-color-ffffff text-decoration-none transition-color-150ms"
                    >
                        Playground
                    </Link>
                    <Link
                        href="/quick-compiler"
                        className="color-94a3b8 --hover-color-ffffff text-decoration-none transition-color-150ms"
                    >
                        Live Compiler
                    </Link>
                    <Link
                        href="/docs/introduction"
                        className="color-94a3b8 --hover-color-ffffff text-decoration-none transition-color-150ms"
                    >
                        Documentation
                    </Link>
                    <Link
                        href="https://github.com/aliascss"
                        target="_blank"
                        rel="noreferrer"
                        className="color-94a3b8 --hover-color-ffffff text-decoration-none transition-color-150ms"
                    >
                        GitHub
                    </Link>
                </nav>

                <div className="display-flex align-items-center gap-14px">
                    <Link
                        href="/docs/introduction"
                        className="display-inline-flex align-items-center justify-content-center padding-8px-18px border-radius-10px font-size-14px font-weight-600 background-color-6366f1 color-ffffff text-decoration-none tn-background-color-150ms__transform-150ms --hover-[background-color-4f46e5,transform-translateY--1px]"
                    >
                        Get Started →
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;