import * as React from "react";
import { ContextMenu } from "radix-ui";
import {
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";
// import styles from "./styles.module.css";

const ContextMenuDemo = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");
	const itemCommonStyles=String("fs-13px lh-1 c-violet-800 br-3px df aic h-25px p-0px-5px pr pl-25px usn oln [data-disabled][pen,c-gray-300] [data-highlighted][background-color-violet-600,color-violet-100]");

	return (
		<ContextMenu.Root>
			<ContextMenu.Trigger className="db b-2px-dashed-gray-800 c-gray-800 br-4px fs-15px usn py-45px w-300px tac">
				Right-click here.
			</ContextMenu.Trigger>
			<ContextMenu.Portal>
				<ContextMenu.Content
					className="mw-220px bgc-white br-6px p-5px bxs-0px-10px-38px--10px-0220230240d35__0px-10px-20px--15px-0220230240d2"
					sideOffset={5}
					align="end"
				>
					<ContextMenu.Item className={itemCommonStyles}>
						Back <div 
						className="
						[ml-auto,pl-20px,c-gray-600]--as-cm-right-slot 
						__[data-highlighted]&-c-white--as-cm-right-slot
						[data-disabled]&-c-gray-600--as-cm-right-slot
						cm-right-slot
						
						"
						>⌘+[</div>
					</ContextMenu.Item>
					<ContextMenu.Item className={itemCommonStyles} disabled>
						Forward <div className="cm-right-slot">⌘+]</div>
					</ContextMenu.Item>
					<ContextMenu.Item className={itemCommonStyles}>
						Reload <div className="cm-right-slot">⌘+R</div>
					</ContextMenu.Item>
					<ContextMenu.Sub>
						<ContextMenu.SubTrigger className={itemCommonStyles + ' '+ String('[data-state=open]--not([data-highlighted],[data-disabled])-[bgc-violet-300,c-violet-800]')}>
							More Tools
							<div className="cm-right-slot">
								<ChevronRightIcon />
							</div>
						</ContextMenu.SubTrigger>
						<ContextMenu.Portal>
							<ContextMenu.SubContent
								className="mw-220px bgc-white br-6px p-5px bxs-0px-10px-38px--10px-0220230240d35__0px-10px-20px--15px-0220230240d2"
								sideOffset={2}
								alignOffset={-5}
							>
								<ContextMenu.Item className={itemCommonStyles}>
									Save Page As… <div className="cm-right-slot">⌘+S</div>
								</ContextMenu.Item>
								<ContextMenu.Item className={itemCommonStyles}>
									Create Shortcut…
								</ContextMenu.Item>
								<ContextMenu.Item className={itemCommonStyles}>
									Name Window…
								</ContextMenu.Item>
								<ContextMenu.Separator className="[m-5px,h-1px,bgc-violet-300]--as-cm-seperator cm-seperator" />
								<ContextMenu.Item className={itemCommonStyles}>
									Developer Tools
								</ContextMenu.Item>
							</ContextMenu.SubContent>
						</ContextMenu.Portal>
					</ContextMenu.Sub>

					<ContextMenu.Separator className="cm-seperator" />

					<ContextMenu.CheckboxItem
						className={itemCommonStyles}
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<ContextMenu.ItemIndicator className="[pa,l-0px,w-25px,dif,aic,jcc]--as-cm-item-indicator cm-item-indicator">
							<CheckIcon />
						</ContextMenu.ItemIndicator>
						Show Bookmarks <div className="cm-right-slot">⌘+B</div>
					</ContextMenu.CheckboxItem>
					<ContextMenu.CheckboxItem
						className={itemCommonStyles}
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<ContextMenu.ItemIndicator className="cm-item-indicator">
							<CheckIcon />
						</ContextMenu.ItemIndicator>
						Show Full URLs
					</ContextMenu.CheckboxItem>

					<ContextMenu.Separator className="cm-seperator" />

					<ContextMenu.Label className="pl-25px fs-12px lh-25px c-gray-500">People</ContextMenu.Label>
					<ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
						<ContextMenu.RadioItem className={itemCommonStyles} value="pedro">
							<ContextMenu.ItemIndicator className="cm-item-indicator">
								<DotFilledIcon />
							</ContextMenu.ItemIndicator>
							Pedro Duarte
						</ContextMenu.RadioItem>
						<ContextMenu.RadioItem className={itemCommonStyles} value="colm">
							<ContextMenu.ItemIndicator className="cm-item-indicator">
								<DotFilledIcon />
							</ContextMenu.ItemIndicator>
							Colm Tuite
						</ContextMenu.RadioItem>
					</ContextMenu.RadioGroup>
				</ContextMenu.Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	);
};

export default ContextMenuDemo;
