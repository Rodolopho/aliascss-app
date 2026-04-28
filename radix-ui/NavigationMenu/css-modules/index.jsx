import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
// import styles from "./styles.module.css";

const NavigationMenuDemo = () => {
	return (
		<NavigationMenu.Root className="pr df jcc w-100vw zi-1"
    keyframes-enterFromRight="@0-[o-0,tf-tx-200px] @100-[o-1,tf-tx-0]"
    keyframes-enterFromLeft="@0-[o-0,tf-tx--200px] @100-[o-1,tf-tx-0]"
    keyframes-exitToRight="@0-[o-1,tf-tx-0] @100-[o-0,tf-tx-200px]"
    keyframes-exitToLeft="@0-[o-1,tf-tx-0] @100-[o-0,tf-tx--200px]"
    keyframes-scaleIn="@0-[o-0,tf-rotateX--30deg__scale-0.9] @100-[o-1,tf-rotateX-0deg__scale-1]"
    keyframes-scaleOut="@0-[o-1,tf-rotateX-0deg__scale-1] @100-[o-0,tf-rotateX--10deg__scale-0.95]"
    keyframes-fadeIn="@0-[o-0] @100-[o-1]"
    keyframes-fadeOut="@0-[o-1] @100-[o-0]"
    >
			<NavigationMenu.List className="df jcc bgc-white p-4px br-6px lsn bxs-0px-2px-10px-0000000000d7">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className=" df aic jcsb g-2px @base-all-unset p-8px-12px oln usn fw5 lh-1 br-4px fs-15px c-gray-800 --fo-bxs-0px-0px-0px-2px-0000000000d7 --h-bgc-gray-200">
						Learn <CaretDownIcon className="pr c-gray-800 t-1px tn-transform-250ms-ease __[data-state=open]&-tf-r--180deg" aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="[pa,t-0,l-0,w-100p,adu-250ms,sm-w-auto]
          [data-motion=from-start]-an-enterFromLeft [data-motion=from-end]-an-enterFromRight [data-motion=to-start]-an-exitToLeft [data-motion=to-end]-an-exitToRight">
						<ul className="dg p-22px m-0 cg-10px lsn sm-w-500px sm-gtc-0d7fr-1fr">
							<li style={{ gridRow: "span 3" }}>
								<NavigationMenu.Link asChild>
									<a className="df jcfe fdc w-100p h-100p bg-lg-135deg-purple800_0p-indigo800_100p br-6px p-25px tdn oln usn --fo-bxs-0px-0px-0px-2px-violet600" href="/">
										<svg
											aria-hidden
											width="38"
											height="38"
											viewBox="0 0 25 25"
											fill="white"
										>
											<path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
											<path d="M12 0H4V8H12V0Z"></path>
											<path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
										</svg>
										<div className="c-white fs-18px fw5 lh-1d2 mb-7px">
											Radix Primitives
										</div>
										<p className="@base-all-unset c-gray-200 fs-14px lh-1d3">
											Unstyled, accessible components for React.
										</p>
									</a>
								</NavigationMenu.Link>
							</li>

							<ListItem href="https://stitches.dev/" title="Stitches">
								CSS-in-JS with best-in-class developer experience.
							</ListItem>
							<ListItem href="/colors" title="Colors">
								Beautiful, thought-out palettes with auto dark mode.
							</ListItem>
							<ListItem href="https://icons.radix-ui.com/" title="Icons">
								A crisp set of 15x15 icons, balanced and consistent.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className=" df aic jcsb g-2px @base-all-unset p-8px-12px oln usn fw5 lh-1 br-4px fs-15px c-gray-800 --fo-bxs-0px-0px-0px-2px-0000000000d7 --h-bgc-gray-200">
						Overview <CaretDownIcon className="pr c-gray-800 t-1px tn-transform-250ms-ease __[data-state=open]&-tf-r--180deg" aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="[pa,t-0,l-0,w-100p,adu-250ms,sm-w-auto]
          [data-motion=from-start]-an-enterFromLeft [data-motion=from-end]-an-enterFromRight [data-motion=to-start]-an-exitToLeft [data-motion=to-end]-an-exitToRight">
						<ul className="dg p-22px m-0 cg-10px lsn sm-w-600px sm-grid-auto-flow-column sm-gtr-repeat-3-1fr">
							<ListItem
								title="Introduction"
								href="/primitives/docs/overview/introduction"
							>
								Build high-quality, accessible design systems and web apps.
							</ListItem>
							<ListItem
								title="Getting started"
								href="/primitives/docs/overview/getting-started"
							>
								A quick tutorial to get you up and running with Radix
								Primitives.
							</ListItem>
							<ListItem title="Styling" href="/primitives/docs/guides/styling">
								Unstyled and compatible with any styling solution.
							</ListItem>
							<ListItem
								title="Animation"
								href="/primitives/docs/guides/animation"
							>
								Use CSS keyframes or any animation library of your choice.
							</ListItem>
							<ListItem
								title="Accessibility"
								href="/primitives/docs/overview/accessibility"
							>
								Tested in a range of browsers and assistive technologies.
							</ListItem>
							<ListItem
								title="Releases"
								href="/primitives/docs/overview/releases"
							>
								Radix Primitives releases and their changelogs.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="@base-all-unset p-8px-12px oln usn fw5 lh-1 br-4px fs-15px c-gray-800 --fo-bxs-0px-0px-0px-2px-0000000000d7 --h-bgc-gray-200 db tdn fs-15px lh-1"
						href="https://github.com/radix-ui"
					>
						Github
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="df aife jcc h-10px t-100p oh zi-1 tdu-250ms ttf-ease transition-property-width__transform">
					<div className="pr t-70p bgc-fff w-10px h-10px tf-r-45deg btlr-2px" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="pa df jcc w-100p l-0 t-100p perspective-2000px">
				<NavigationMenu.Viewport  data-state="open" className="pr totc mt-10px w-100p bgc-white br-6px oh bxs-0px-10px-38px--10px-0000000000d35__0px-10px-20px--15px-0000000000d2 h--radix-navigation-menu-viewport-height transition-property-width__height tdu-300ms ttf-ease [data-state=open]-[an-scaleIn,adu-200ms,atf-ease] [data-state=closed]-[an-scaleOut,adu-200ms,atf-ease] sm-w--radix-navigation-menu-viewport-width:100p" />
			</div>
		</NavigationMenu.Root>
	);
};

const ListItem = React.forwardRef(
	({ className, children, title, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={classNames(String("@base-all-unset cp db  oln tdn usn p-12px br-6px fs-15px lh-1 --fo-bxs-0px-0px-0px-2px-violet600 --h-bgc-gray-200"), className)}
					{...props}
					ref={forwardedRef}
				>
					<div className="c-gray-800 mb-5px fw5 lh-1d2">{title}</div>
					<p className="@base-all-unset c-gray-600  fw-initial lh-1d4">{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
);

export default NavigationMenuDemo;



