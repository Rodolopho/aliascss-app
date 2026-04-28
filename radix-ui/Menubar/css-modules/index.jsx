import * as React from "react";
import { Menubar } from "radix-ui";
import {
	CheckIcon,
	ChevronRightIcon,
	DotFilledIcon,
} from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenubarDemo = () => {
	const [checkedSelection, setCheckedSelection] = React.useState([
		CHECK_ITEMS[1],
	]);
	const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);
	const itemCommonStyles=String("@base-all-unset fs-13px lh-1 c-gray-800 br-4px df aic h-25px p-0px-10px pr [class~=inset]-pl-20px usn oln [data-disabled][pen,c-gray-300] [data-highlighted][background-color-gray-600,color-gray-100]");
	const contentStyles=String("mw-220px bgc-fff br-6px p-5px bxs-0px-10px-38px--10px-0220230240d35__0px-10px-20px--15px-0220230240d2 adu-400ms atf--atf:cubic-bezier(0.16,1,0.3,1) will-change-transform__opacity") ;// [data-side=top]-an-slideDownAndFade [data-side=right]-an-slideLeftAndFade [data-side=bottom]-an-slideUpAndFade [data-side=left]-an-slideRightAndFade");


	return (
		<Menubar.Root className="df bgc-white p-3px br-6px bxs-0px-2px-10px-0000000000d7">
			<Menubar.Menu>
				<Menubar.Trigger className="@base-all-unset [p-8px-12px,oln,usn,fw5,lh-1,br-4px,c-gray-800,fs-13px,df,aic,jcsb,g-2px]--as-mb-trigger [data-highlighted]-bgc-gray-200--as-mb-trigger [data-state=open]-bgc-gray-200--as-mb-trigger mb-trigger">File</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className={contentStyles}
						align="start"
						sideOffset={5}
						alignOffset={-3}
					>
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
							New Tab <div className="[ml-auto,pl-20px,c-gray-600]--as-mb-right-slot
						__[data-highlighted]&-c-gray800--as-mb-right-slot
						[data-disabled]&-c-gray-600--as-mb-right-slot mb-right-slot">⌘ T</div>
						</Menubar.Item>
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
							New Window <div className="mb-right-slot">⌘ N</div>
						</Menubar.Item>
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles} disabled>
							New Incognito Window
						</Menubar.Item>
						<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
						<Menubar.Sub>
							<Menubar.SubTrigger className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
								Share
								<div className="mb-right-slot">
									<ChevronRightIcon />
								</div>
							</Menubar.SubTrigger>
							<Menubar.Portal>
								<Menubar.SubContent
									className="
								mw-220px bgc-fff br-6px p-5px bxs-0px-10px-38px--10px-0220230240d35__0px-10px-20px--15px-0220230240d2
								adu-400ms atf--atf:cubic-bezier(0.16,1,0.3,1)will-change-transform__opacity
								[data-side=top]-an-slideDownAndFade [data-side=right]-an-slideLeftAndFade [data-side=bottom]-an-slideUpAndFade [data-side=left]-an-slideRightAndFade"

									alignOffset={-5}
								>
									<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
										Email Link
									</Menubar.Item>
									<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>Messages</Menubar.Item>
									<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>Notes</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Portal>
						</Menubar.Sub>
						<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
							Print… <div className="mb-right-slot">⌘ P</div>
						</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger className="@base-all-unset mb-trigger">Edit</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className={contentStyles}
						align="start"
						sideOffset={5}
						alignOffset={-3}
					>
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
							Undo <div className="mb-right-slot">⌘ Z</div>
						</Menubar.Item>
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
							Redo <div className="mb-right-slot">⇧ ⌘ Z</div>
						</Menubar.Item>
						<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
						<Menubar.Sub>
							<Menubar.SubTrigger className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
								Find
								<div className="mb-right-slot">
									<ChevronRightIcon />
								</div>
							</Menubar.SubTrigger>

							<Menubar.Portal>
								<Menubar.SubContent
									className={contentStyles}
									alignOffset={-5}
								>
									<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
										Search the web…
									</Menubar.Item>
									<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
									<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>Find…</Menubar.Item>
									<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>Find Next</Menubar.Item>
									<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>
										Find Previous
									</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Portal>
						</Menubar.Sub>
						<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>Cut</Menubar.Item>
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>Copy</Menubar.Item>
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +itemCommonStyles}>Paste</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger className="@base-all-unset mb-trigger">View</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className={contentStyles}
						align="start"
						sideOffset={5}
						alignOffset={-14}
					>
						{CHECK_ITEMS.map((item) => (
							<Menubar.CheckboxItem
								className={`${itemCommonStyles} inset`}
								key={item}
								checked={checkedSelection.includes(item)}
								onCheckedChange={() =>
									setCheckedSelection((current) =>
										current.includes(item)
											? current.filter((el) => el !== item)
											: current.concat(item),
									)
								}
							>
								<Menubar.ItemIndicator className="[pa,l-0px,w-25px,dif,aic,jcc]">
									<CheckIcon />
								</Menubar.ItemIndicator>
								{item}
							</Menubar.CheckboxItem>
						))}
						<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +`${itemCommonStyles} inset`}>
							Reload <div className="mb-right-slot">⌘ R</div>
						</Menubar.Item>
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +`${itemCommonStyles} inset`} disabled>
							Force Reload <div className="mb-right-slot">⇧ ⌘ R</div>
						</Menubar.Item>
						<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +`${itemCommonStyles} inset`}>
							Toggle Fullscreen
						</Menubar.Item>
						<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
						<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +`${itemCommonStyles} inset`}>
							Hide Sidebar
						</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger className="@base-all-unset mb-trigger">Profiles</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className={contentStyles}
						align="start"
						sideOffset={5}
						alignOffset={-14}
					>
						<Menubar.RadioGroup
							value={radioSelection}
							onValueChange={setRadioSelection}
						>
							{RADIO_ITEMS.map((item) => (
								<Menubar.RadioItem
									className={`${itemCommonStyles} inset`}
									key={item}
									value={item}
								>
									<Menubar.ItemIndicator className="[pa,l-0px,w-25px,dif,aic,jcc]">
										<DotFilledIcon />
									</Menubar.ItemIndicator>
									{item}
								</Menubar.RadioItem>
							))}
							<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
							<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +`${itemCommonStyles} inset`}>
								Edit…
							</Menubar.Item>
							<Menubar.Separator className="[m-5px,h-1px,bgc-gray-300]" />
							<Menubar.Item className={String("[data-state=open]-[bgc-gray-200,c-gray-800]")+' ' +`${itemCommonStyles} inset`}>
								Add Profile…
							</Menubar.Item>
						</Menubar.RadioGroup>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>
		</Menubar.Root>
	);
};

export default MenubarDemo;
