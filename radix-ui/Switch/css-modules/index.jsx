import * as React from "react";
import { Switch } from "radix-ui";
// import styles from "./styles.module.css";

const SwitchDemo = () => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<label
				className="c-gray-800 fs-15px lh-1 usn"
				htmlFor="airplane-mode"
				style={{ paddingRight: 15 }}
			>
				Airplane mode
			</label>
			<Switch.Root className="@base-all-unset w-42px h-25px bgc-0000000000d8 br-9999px pr bxs-0px-2px-10px-0000000000d7 webkit-tap-highlight-color-rgba-0-0-0-0  --fo-bxs-0px-0px-0px-2px-black [data-state=checked]-bgc-black" id="airplane-mode">
				<Switch.Thumb className="db w-21px h-21px bgc-fff br-9999px bxs-0px-2px-2px-0000000000d7 tn-transform-100ms tf-tx-2px will-change-transform [data-state=checked]-tf-tx-19px" />
			</Switch.Root>
		</div>
	</form>
);

export default SwitchDemo;
