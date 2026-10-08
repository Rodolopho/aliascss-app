import type { Metadata } from 'next';
// import "./master.css";
import "./globals.css"
import "../../public/main.css"

export const metadata: Metadata = {
  title: 'Welcome to Aliasccs',
  description: 'Welcome to AliasCSS, A si,ple dertministic CSS Compiler for next generation AI and  Developer.',
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Your custom site Header / Navigation */}
        <main>{children}</main>
        {/* Your custom site Footer */}
      </body>
    </html>
  )
}