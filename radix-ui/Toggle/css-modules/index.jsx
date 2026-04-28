import * as React from "react";
import { Toggle } from "radix-ui";
import { FontItalicIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const ToggleDemo = () => (
	<Toggle.Root className="@base-all-unset bgc-fff c-gray-500 x-square-35px br-4px df fs-15px lh-1 flex-center bxs-0px-2px-10px-00000000000d7 usn --h-bgc-primary-300 --fo-bxs-0px-0px-0px-2px-black [data-state=on][bgc-primary-600,c--violet-900]" aria-label="Toggle italic">
		<FontItalicIcon />
	</Toggle.Root>
);

export default ToggleDemo;
