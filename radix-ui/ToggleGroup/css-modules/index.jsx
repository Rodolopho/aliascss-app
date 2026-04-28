import * as React from "react";
import { ToggleGroup } from "radix-ui";
import {
	TextAlignLeftIcon,
	TextAlignCenterIcon,
	TextAlignRightIcon,
} from "@radix-ui/react-icons";
 // import styles from "./styles.module.css";

const ToggleGroupDemo = () => (
	<ToggleGroup.Root
		className="dif bgc-gray-300 br-4px bxs-0px-2px-10px-0000000000d7"
		type="single"
		defaultValue="center"
		aria-label="Text alignment"
	>
		<ToggleGroup.Item
			className="@base-all-unset bgc-fff x-square-35px flex-center fs-15px ml-1px usn --fc[ml-0,btlr-4px,bblr-4px] --lc[btrr-4px,bbrr-4px] --h-bgc-primary-300 [data-state=on][c-primary-700,bgc-primary-300] --fo[pr,bxs-0px-0px-0px-2px-black]"
			value="left"
			aria-label="Left aligned"
		>
			<TextAlignLeftIcon />
		</ToggleGroup.Item>
		<ToggleGroup.Item
			className="@base-all-unset bgc-fff x-square-35px flex-center fs-15px ml-1px usn --fc[ml-0,btlr-4px,bblr-4px] --lc[btrr-4px,bbrr-4px] --h-bgc-primary-300 [data-state=on][c-primary-700,bgc-primary-300] --fo[pr,bxs-0px-0px-0px-2px-black]"
			value="center"
			aria-label="Center aligned"
		>
			<TextAlignCenterIcon />
		</ToggleGroup.Item>
		<ToggleGroup.Item
			className="@base-all-unset bgc-fff x-square-35px flex-center fs-15px ml-1px usn --fc[ml-0,btlr-4px,bblr-4px] --lc[btrr-4px,bbrr-4px] --h-bgc-primary-300 [data-state=on][c-primary-700,bgc-primary-300] --fo[pr,bxs-0px-0px-0px-2px-black]"
			value="right"
			aria-label="Right aligned"
		>
			<TextAlignRightIcon />
		</ToggleGroup.Item>
	</ToggleGroup.Root>
);

export default ToggleGroupDemo;
