import * as React from "react";
import { Separator } from "radix-ui";
// import styles from "./styles.module.css";

const SeparatorDemo = () => (
	<div style={{ width: "100%", maxWidth: 300, margin: "0 15px" }}>
		<div className="c-gray-800 fs-15px lh-20px" style={{ fontWeight: 500 }}>
			Radix Primitives
		</div>
		<div className="c-gray-800 fs-15px lh-20px">An open-source UI component library.</div>
		<Separator.Root 
		className="bgc-gray-400 [data-orientation=horizontal][h-1px,w-100p] [data-orientation=vertical][w-1px,h-100p]"
 		style={{ margin: "15px 0" }} />
		<div style={{ display: "flex", height: 20, alignItems: "center" }}>
			<div className="c-gray-800 fs-15px lh-20px">Blog</div>
			<Separator.Root
				className="bgc-gray-400 [data-orientation=horizontal][h-1px,w-100p] [data-orientation=vertical][w-1px,h-100p]"
				decorative
				orientation="vertical"
				style={{ margin: "0 15px" }}
			/>
			<div className="c-gray-800 fs-15px lh-20px">Docs</div>
			<Separator.Root
				className="bgc-gray-400 [data-orientation=horizontal][h-1px,w-100p] [data-orientation=vertical][w-1px,h-100p]"
				decorative
				orientation="vertical"
				style={{ margin: "0 15px" }}
			/>
			<div className="c-gray-800 fs-15px lh-20px">Source</div>
		</div>
	</div>
);

export default SeparatorDemo;
