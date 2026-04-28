import * as React from "react";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";
// import styles from "./styles.module.css";

const OneTimePasswordFieldDemo = () => (
	<OneTimePasswordField.Root className="df g-0d5rem flex-wrap-nowrap">
		<OneTimePasswordField.Input className="@base-all-unset [bsbb,x-inline-flex-center,tac,br-4px,fs-15px,c-gray-800,bgc-fff,bxs-0px-0px-0px-1px-0000000000d4,p-0,h-35px,w-24px,lh-1,--h-bxs-0px-0px-0px-1px-black,--fo-bxs-0px-0px-0px-2px-black,--selection-[bgc-0000000000d6,c-fff]]--as-one-time-password-field-input one-time-password-field-input" />
		<OneTimePasswordField.Input className="@base-all-unset one-time-password-field-input" />
		<OneTimePasswordField.Input className="@base-all-unset one-time-password-field-input" />
		<OneTimePasswordField.Input className="@base-all-unset one-time-password-field-input" />
		<OneTimePasswordField.Input className="@base-all-unset one-time-password-field-input" />
		<OneTimePasswordField.Input className="@base-all-unset one-time-password-field-input" />
		<OneTimePasswordField.HiddenInput />
	</OneTimePasswordField.Root>
);

export default OneTimePasswordFieldDemo;
