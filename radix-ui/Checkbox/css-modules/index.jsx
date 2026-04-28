import * as React from "react";
import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";
// import styles from "./styles.module.css";

const CheckboxDemo = () => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<Checkbox.Root className="@base-all-unset bgc-white x-square-25px br-4px flex-center bxs-0px-2px-10px-blackA7 --h-bgc-violet3 --fo-bxs-0px-0px-0px-2px-000" defaultChecked id="c1">
				<Checkbox.Indicator className="c-violet11">
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className="c-gray-600 pl-15px fs-15px lh-1" htmlFor="c1">
				Accept terms and conditions.
			</label>
		</div>
	</form>
);

export default CheckboxDemo;
