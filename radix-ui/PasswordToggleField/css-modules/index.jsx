import * as React from "react";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
// import styles from "./styles.module.css";

const PasswordToggleFieldDemo = () => (
	<PasswordToggleField.Root>
		<div className="df fwn flex-center br-4px c-gray-600 bgc-fff bxs-0px-0px-0px-1px-0000000000d3 p-0-0d75rem pr-9px h-36px gap-8px --ho-bxs-0px-0px-0px-1px-black --fw-bxs-0px-0px-0px-2px-black">
			<PasswordToggleField.Input className="@base-all-unset bsbb h-18px fs-15px c-inherit lh-1 --selection[c-fff,bgc-0000000000d6]" />
			<PasswordToggleField.Toggle className="@base-all-unset bsbb h-18px fs-15px c-inherit lh-1 flex-center aspect-ratio-1 br-0d5px --fv[ol-2px-solid-gray-200,outline-offset-2px]">
				<PasswordToggleField.Icon
					visible={<EyeOpenIcon />}
					hidden={<EyeClosedIcon />}
				/>
			</PasswordToggleField.Toggle>
		</div>
	</PasswordToggleField.Root>
);

export default PasswordToggleFieldDemo;
