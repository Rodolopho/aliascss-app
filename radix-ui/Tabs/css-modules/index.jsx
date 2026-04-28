import * as React from "react";
import { Tabs } from "radix-ui";
// import styles from "./styles.module.css";

const TabsDemo = () => (
	<Tabs.Root className="df fdc w-300px bxs-0px-2px-10px-0000000000d4" defaultValue="tab1">
		<Tabs.List className="flex-shrink-0 df  bb-1px-s-gray-300" aria-label="Manage your account">
			<Tabs.Trigger className="@base-all-unset ff-inherit bgc-fff p-0-20px h-45px flex-1 flex-center fs-15px lh-1 c-gray-700 usn --fc-btlr-6px --lc-btrr-6px --h-c-primary-600 [data-state=active][c-primary600,bxs-inset-0px--1px-0px-0px-currentColor__0px-1px-0px-0px-currentColor] --fo[pr,bxs-0px-0px-0px-2px-black]" value="tab1">
				Account
			</Tabs.Trigger>
			<Tabs.Trigger className="@base-all-unset ff-inherit bgc-fff p-0-20px h-45px flex-1 flex-center fs-15px lh-1 c-gray-700 usn --fc-btlr-6px --lc-btrr-6px --h-c-primary-600 [data-state=active][c-primary600,bxs-inset-0px--1px-0px-0px-currentColor__0px-1px-0px-0px-currentColor] --fo[pr,bxs-0px-0px-0px-2px-black]" value="tab2">
				Password
			</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content className="flex-grow-1 p-20px bgc-fff bblr-6px bbrr-6px pln --fo-bxs-0px-0px-0px-2px-black" value="tab1">
			<p className="mt-0 mb-20px c-gray700 fs-15px lh-1d5">
				Make changes to your account here. Click save when you're done.
			</p>
			<fieldset className="@base-all-unset mb-15px w-100p df fdc jcfs">
				<label className="fs-13px lh-1 mb-10px c-gray-700 df usn" htmlFor="name">
					Name
				</label>
				<input className="@base-all-unset flex-1-0-auto br-4px p-0-10px fs-15px lh-1 bxs-0px-0px-0px-1px-primary700 h-35px --fo-bxs-0px-0px-0px-2px-primary800" id="name" defaultValue="Pedro Duarte" />
			</fieldset>
			<fieldset className="@base-all-unset mb-15px w-100p df fdc jcfs">
				<label className="fs-13px lh-1 mb-10px c-gray-700 df usn" htmlFor="username">
					Username
				</label>
				<input
					className="@base-all-unset flex-1-0-auto br-4px p-0-10px fs-15px lh-1 bxs-0px-0px-0px-1px-primary700 h-35px --fo-bxs-0px-0px-0px-2px-primary800"
					id="username"
					defaultValue="@peduarte"
				/>
			</fieldset>
			<div
				style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
			>
				<button className={`${String('@base-all-unset x-inline-flex-center br-4px p-0px-15px fs-15px lh-1 fw-5 h-35px')} ${String('bgc-success-200 c-success-700 --ho-bgc-success-300 --fo-bxs-0px-0px-0px-2px-success-900')}`}>Save changes</button>
			</div>
		</Tabs.Content>
		<Tabs.Content className="flex-grow-1 p-20px bgc-fff bblr-6px bbrr-6px pln --fo-bxs-0px-0px-0px-2px-black" value="tab2">
			<p className="mt-0 mb-20px c-gray700 fs-15px lh-1d5">
				Change your password here. After saving, you'll be logged out.
			</p>
			<fieldset className="@base-all-unset mb-15px w-100p df fdc jcfs">
				<label className="fs-13px lh-1 mb-10px c-gray-700 df usn" htmlFor="currentPassword">
					Current password
				</label>
				<input className="@base-all-unset flex-1-0-auto br-4px p-0-10px fs-15px lh-1 bxs-0px-0px-0px-1px-primary700 h-35px --fo-bxs-0px-0px-0px-2px-primary800" id="currentPassword" type="password" />
			</fieldset>
			<fieldset className="@base-all-unset mb-15px w-100p df fdc jcfs">
				<label className="fs-13px lh-1 mb-10px c-gray-700 df usn" htmlFor="newPassword">
					New password
				</label>
				<input className="@base-all-unset flex-1-0-auto br-4px p-0-10px fs-15px lh-1 bxs-0px-0px-0px-1px-primary700 h-35px --fo-bxs-0px-0px-0px-2px-primary800" id="newPassword" type="password" />
			</fieldset>
			<fieldset className="@base-all-unset mb-15px w-100p df fdc jcfs">
				<label className="fs-13px lh-1 mb-10px c-gray-700 df usn" htmlFor="confirmPassword">
					Confirm password
				</label>
				<input className="@base-all-unset flex-1-0-auto br-4px p-0-10px fs-15px lh-1 bxs-0px-0px-0px-1px-primary700 h-35px --fo-bxs-0px-0px-0px-2px-primary800" id="confirmPassword" type="password" />
			</fieldset>
			<div
				style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
			>
				<button className={`${String('@base-all-unset x-inline-flex-center br-4px p-0px-15px fs-15px lh-1 fw-5 h-35px')} ${String('bgc-success-200 c-success-700 --ho-bgc-success-300 --fo-bxs-0px-0px-0px-2px-success-900')}`}>Change password</button>
			</div>
		</Tabs.Content>
	</Tabs.Root>
);

export default TabsDemo;
