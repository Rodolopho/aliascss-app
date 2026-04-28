import * as React from "react";
import { Label } from "radix-ui";
//import styles from "./styles.module.css";

const LabelDemo = () => (
	<div
		style={{
			display: "flex",
			padding: "0 20px",
			flexWrap: "wrap",
			gap: 15,
			alignItems: "center",
		}}
	>
		<Label.Root className="fs-15px fw-5 lh-35px c-gray-800" htmlFor="firstName">
			First name
		</Label.Root>
		<input
			className="@base-all-unset w-200px x-inline-flex-center br-4px p-0-10px h-35px fs-15px lh-1 c-gray-800 bgc-fff bxs-0px-0px-0px-1px-0000000000d6 --fo-bxs-0px-0px-0px-2px-black --selection[bgc-0000000000d6,c-white]"
			type="text"
			id="firstName"
			defaultValue="Pedro Duarte"
		/>
	</div>
);

export default LabelDemo;
