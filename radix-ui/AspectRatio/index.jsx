import * as React from "react";
import { AspectRatio } from "radix-ui";
// import styles from "./styles.module.css";

const AspectRatioDemo = () => (
	<div className="w-300px br-6px oh bxs-0px-2px-10px-blackA7">
		<AspectRatio.Root ratio={16/9}>
			<img
				className="object-fit-cover w-100p h-100p"
				src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
				alt="Landscape photograph by Tobias Tullius"
			/>
		</AspectRatio.Root>
	</div>
);

export default AspectRatioDemo;
