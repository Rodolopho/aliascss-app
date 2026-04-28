import * as React from "react";
import { Toolbar } from "radix-ui";
import {
	StrikethroughIcon,
	TextAlignLeftIcon,
	TextAlignCenterIcon,
	TextAlignRightIcon,
	FontBoldIcon,
	FontItalicIcon,
} from "@radix-ui/react-icons";
// import styles from "./styles.module.css";
const commonStyles=String('@base-all-unset flex-0-0-auto  c-gray-800 h-25px p-0-5px br-4px dif aic jcc fs-13px --hover[bgc-primary-200,c-gray-600] --fo[pr,bxs-0px-0px-0px-2px-primary-200]')

const ToolbarDemo = () => (
	<Toolbar.Root className="df p-10px w-100p mw-max-content br-6px bgc-white bxs-0px-2px-10px-0000000000d7" aria-label="Formatting options">
		<Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
			<Toolbar.ToggleItem
				className={commonStyles +' '+String('bgc-white ml-2px --fc-ml-0 [data-state=on][bgc-primary-400,c-primary-800]')}
				value="bold"
				aria-label="Bold"
			>
				<FontBoldIcon />
			</Toolbar.ToggleItem>
			<Toolbar.ToggleItem
				className={commonStyles +' '+String('bgc-white ml-2px --fc-ml-0 [data-state=on][bgc-primary-400,c-primary-800]')}
				value="italic"
				aria-label="Italic"
			>
				<FontItalicIcon />
			</Toolbar.ToggleItem>
			<Toolbar.ToggleItem
				className={commonStyles +' '+String('bgc-white ml-2px --fc-ml-0 [data-state=on][bgc-primary-400,c-primary-800]')}
				value="strikethrough"
				aria-label="Strike through"
			>
				<StrikethroughIcon />
			</Toolbar.ToggleItem>
		</Toolbar.ToggleGroup>
		<Toolbar.Separator className="w-1px bgc-gray-300 m-0-10px" />
		<Toolbar.ToggleGroup
			type="single"
			defaultValue="center"
			aria-label="Text alignment"
		>
			<Toolbar.ToggleItem
				className={commonStyles +' '+String('bgc-white ml-2px --fc-ml-0 [data-state=on][bgc-primary-400,c-primary-800]')}
				value="left"
				aria-label="Left aligned"
			>
				<TextAlignLeftIcon />
			</Toolbar.ToggleItem>
			<Toolbar.ToggleItem
				className={commonStyles +' '+String('bgc-white ml-2px --fc-ml-0 [data-state=on][bgc-primary-400,c-primary-800]')}
				value="center"
				aria-label="Center aligned"
			>
				<TextAlignCenterIcon />
			</Toolbar.ToggleItem>
			<Toolbar.ToggleItem
				className={commonStyles +' '+String('bgc-white ml-2px --fc-ml-0 [data-state=on][bgc-primary-400,c-primary-800]')}
				value="right"
				aria-label="Right aligned"
			>
				<TextAlignRightIcon />
			</Toolbar.ToggleItem>
		</Toolbar.ToggleGroup>
		<Toolbar.Separator className="w-1px bgc-gray-300 m-0-10px" />
		<Toolbar.Link
			className={commonStyles+' '+String('bg-transparent c-gary-800 df aic jcc --ho-bg-transparent --ho-cp sm-dif')}
			href="#"
			target="_blank"
			style={{ marginRight: 10 }}
		>
			Edited 2 hours ago
		</Toolbar.Link>
		<Toolbar.Button className={commonStyles+' '+String('px-10px c-fff bgc-primary-600 --ho-bgc-primary-700 --ho-c-fff')} style={{ marginLeft: "auto" }}>
			Share
		</Toolbar.Button>
	</Toolbar.Root>
);

export default ToolbarDemo;
