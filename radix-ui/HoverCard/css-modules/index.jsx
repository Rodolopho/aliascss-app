import * as React from "react";
import { HoverCard } from "radix-ui";
// import styles from "./styles.module.css";

const HoverCardDemo = () => (
	<HoverCard.Root
		keyframes-slideUpAndFade='@0-[opacity-0,transform-translateY-2px] @100-[opacity-1,transform-translateY-0]'

		keyframes-slideRightAndFade='@0-[opacity-0,transform-translateX--2px] @100-[opacity-1,transform-translateX-0]'

		keyframes-slideDownAndFade='@0-[opacity-0,transform-translateY--2px] @100-[opacity-1,transform-translateY-0]'

		keyframes-slideLeftAndFade='@0-[opacity-0,transform-translateX-2px] @100-[opacity-1,transform-translateX-0]'
	>
		<HoverCard.Trigger asChild>
			<a
				className="@base-all-unset cp br-100p dib --fo-bxs-0px-0px-0px-2px-white"
				href="https://twitter.com/radix_ui"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img
					className="db br-100p x-square-45px"
					src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
					alt="Radix UI"
				/>
			</a>
		</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content 
			className="w-300px bgc-fff br-6px p-20px bxs-0px-10px-38px--10px-0220230240d35__0px-10px-20px--15px-0220230240d2
							adu-400ms atf--atf:cubic-bezier(0.16,1,0.3,1)will-change-transform__opacity
							[data-side=top]-an-slideDownAndFade [data-side=right]-an-slideLeftAndFade [data-side=bottom]-an-slideUpAndFade [data-side=left]-an-slideRightAndFade" 
			sideOffset={5}>
				<div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
					<img
						className="db br-100p x-square-60px"
						src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
						alt="Radix UI"
					/>
					<div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
						<div>
							<div className="m-0 c-gray-700 lh-1d5 fs-15px fw5">Radix</div>
							<div className="m-0  lh-1d5 fs-15px c-gray-400">@radix_ui</div>
						</div>
						<div className="m-0 c-gray-700 fs-15px lh-1d5">
							Components, icons, colors, and templates for building
							high-quality, accessible UI. Free and open-source.
						</div>
						<div style={{ display: "flex", gap: 15 }}>
							<div style={{ display: "flex", gap: 5 }}>
								<div className="m-0 c-gray-700 lh-1d5 fs-15px fw5">0</div>{" "}
								<div className="m-0  lh-1d5 fs-15px c-gray-400">Following</div>
							</div>
							<div style={{ display: "flex", gap: 5 }}>
								<div className="m-0 c-gray-700 lh-1d5 fs-15px fw5">2,900</div>{" "}
								<div className="m-0  lh-1d5 fs-15px c-gray-400">Followers</div>
							</div>
						</div>
					</div>
				</div>

				<HoverCard.Arrow className="fill-white" />
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
);

export default HoverCardDemo;
