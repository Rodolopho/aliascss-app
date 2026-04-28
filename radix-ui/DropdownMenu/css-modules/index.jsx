import * as React from "react";
import { DropdownMenu } from "radix-ui";
import {
	HamburgerMenuIcon,
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";
// import styles from "./styles.module.css";

const DropdownMenuDemo = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");
	const itemCommonStyles=String("fs-13px lh-1 c-violet-800 br-3px df aic h-25px p-0px-5px pr pl-25px usn oln [data-disabled][pen,c-gray-300] [data-highlighted][background-color-violet-600,color-violet-100]");

	return (
		<DropdownMenu.Root
		keyframes-slideUpAndFade='@0-[opacity-0,transform-translateY-2px] @100-[opacity-1,transform-translateY-0]'

		keyframes-slideRightAndFade='@0-[opacity-0,transform-translateX--2px] @100-[opacity-1,transform-translateX-0]'

		keyframes-slideDownAndFade='@0-[opacity-0,transform-translateY--2px] @100-[opacity-1,transform-translateY-0]'

		keyframes-slideLeftAndFade='@0-[opacity-0,transform-translateX-2px] @100-[opacity-1,transform-translateX-0]'
		>
			<DropdownMenu.Trigger asChild>
				<button className="@base-all-unset [dif,aic,jcc,x-square-35px,ff-inherit,br-100p,c-violet-800,bxs-0px-2px-10px-0000000000d7] --fo-bxs-0px-0px-0px-2px-black --hover-bgc-violet-200 [data-state=open]-bgc-violet-200 [data-state=closed]-bgc-white" aria-label="Customise options">
					<HamburgerMenuIcon />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content 
				className="mw-220px bgc-fff br-6px p-5px bxs-0px-10px-38px--10px-0220230240d35__0px-10px-20px--15px-0220230240d2
							adu-400ms atf--atf:cubic-bezier(0.16,1,0.3,1)will-change-transform__opacity
							[data-side=top]-an-slideDownAndFade [data-side=right]-an-slideLeftAndFade [data-side=bottom]-an-slideUpAndFade [data-side=left]-an-slideRightAndFade"
				sideOffset={5}>
					<DropdownMenu.Item className={itemCommonStyles}>
						New Tab <div className="[ml-auto,pl-20px,c-gray-600]--as-dm-right-slot 
						__[data-highlighted]&-c-white--as-dm-right-slot
						[data-disabled]&-c-gray-600--as-dm-right-slot
						dm-right-slot">⌘+T</div>
					</DropdownMenu.Item>
					<DropdownMenu.Item className={itemCommonStyles}>
						New Window <div className="dm-right-slot">⌘+N</div>
					</DropdownMenu.Item>
					<DropdownMenu.Item className={itemCommonStyles} disabled>
						New Private Window <div className="dm-right-slot">⇧+⌘+N</div>
					</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger className={itemCommonStyles + ' '+ String('[data-state=open]--not([data-highlighted],[data-disabled])-[bgc-violet-300,c-violet-800]')}>
							More Tools
							<div className="dm-right-slot">
								<ChevronRightIcon />
							</div>
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent
								className="
								mw-220px bgc-fff br-6px p-5px bxs-0px-10px-38px--10px-0220230240d35__0px-10px-20px--15px-0220230240d2
								adu-400ms atf--atf:cubic-bezier(0.16,1,0.3,1)will-change-transform__opacity
								[data-side=top]-an-slideDownAndFade [data-side=right]-an-slideLeftAndFade [data-side=bottom]-an-slideUpAndFade [data-side=left]-an-slideRightAndFade"
								sideOffset={2}
								alignOffset={-5}
							>
								<DropdownMenu.Item className={itemCommonStyles}>
									Save Page As… <div className="dm-right-slot">⌘+S</div>
								</DropdownMenu.Item>
								<DropdownMenu.Item className={itemCommonStyles}>
									Create Shortcut…
								</DropdownMenu.Item>
								<DropdownMenu.Item className={itemCommonStyles}>
									Name Window…
								</DropdownMenu.Item>
								<DropdownMenu.Separator className="[m-5px,h-1px,bgc-violet-300]--as-dm-seperator dm-seperator" />
								<DropdownMenu.Item className={itemCommonStyles}>
									Developer Tools
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>

					<DropdownMenu.Separator className="dm-seperator" />

					<DropdownMenu.CheckboxItem
						className={itemCommonStyles}
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<DropdownMenu.ItemIndicator className="[pa,l-0px,w-25px,dif,aic,jcc]--as-dm-item-indicator dm-item-indicator">
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Show Bookmarks <div className="dm-right-slot">⌘+B</div>
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem
						className={itemCommonStyles}
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<DropdownMenu.ItemIndicator className="dm-item-indicator">
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Show Full URLs
					</DropdownMenu.CheckboxItem>

					<DropdownMenu.Separator className="dm-seperator" />

					<DropdownMenu.Label className="pl-25px fs-12px lh-25px c-gray-500">
						People
					</DropdownMenu.Label>
					<DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
						<DropdownMenu.RadioItem className={itemCommonStyles} value="pedro">
							<DropdownMenu.ItemIndicator className="dm-item-indicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Pedro Duarte
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem className={itemCommonStyles} value="colm">
							<DropdownMenu.ItemIndicator className="dm-item-indicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Colm Tuite
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>

					<DropdownMenu.Arrow className="fill-white" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default DropdownMenuDemo;

	
	
