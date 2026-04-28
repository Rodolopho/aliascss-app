import * as React from "react";
import { RadioGroup } from "radix-ui";
// import styles from "./styles.module.css";

const RadioGroupDemo = () => (
	<form>
		<RadioGroup.Root
			className="df fdc g-10px "
			defaultValue="default"
			aria-label="View density"
		>
			<div style={{ display: "flex", alignItems: "center" }}>
				<RadioGroup.Item className="@base-all-unset bgc-primary700 x-square-25px br-100p x-shadow-sm --ho-bgc-primary700 --fo-bxs-shadow-0px-0px-0px-2px-primary900" value="default" id="r1">
					<RadioGroup.Indicator className="flex-center w-100p h-100p pr --af[cont,db,w-11px,h-11px,br-50p,bgc-gray-25]" />
				</RadioGroup.Item>
				<label className="c-gray-800 fs-15px lh-1 pl-15px" htmlFor="r1">
					Default
				</label>
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<RadioGroup.Item className="@base-all-unset bgc-primary700 x-square-25px br-100p x-shadow-sm --ho-bgc-primary300 --fo-bxs-shadow-0px-0px-0px-2px-black " value="comfortable" id="r2">
					<RadioGroup.Indicator className="flex-center w-100p h-100p pr --af[cont,db,w-11px,h-11px,br-50p,bgc-gray-25]" />
				</RadioGroup.Item>
				<label className="c-gray-800 fs-15px lh-1 pl-15px" htmlFor="r2">
					Comfortable
				</label>
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<RadioGroup.Item className="@base-all-unset bgc-primary700 x-square-25px br-100p x-shadow-sm --ho-bgc-primary300 --fo-bxs-shadow-0px-0px-0px-2px-black" value="compact" id="r3">
					<RadioGroup.Indicator className="flex-center w-100p h-100p pr --af[cont,db,w-11px,h-11px,br-50p,bgc-gray-25]" />
				</RadioGroup.Item>
				<label className="c-gray-800 fs-15px lh-1 pl-15px" htmlFor="r3">
					Compact
				</label>
			</div>
		</RadioGroup.Root>
	</form>
);

export default RadioGroupDemo;
