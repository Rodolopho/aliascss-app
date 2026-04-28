import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const DialogDemo = () => (
	<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className="@base-all-unset button bgc-violet-200 c-violet-800 --fo--not(--fv)-oln --fo-bxs-0px-0px-0px-2px-black --fv-ol-2px-solid-violet700">Edit profile</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="bgc-0000000000d7 pf inset-0 an-overlayShow adu-150ms atf--atf:cubic(0.16,1,0.3,1)" />
			<Dialog.Content className="bgc-gray-50 br-6px x-shadow-md pf t-50p l-50p tf-t--50p--50p w-90vw xw-500px xh-85vh p-25px --fo-oln an-contentShow atf--atf:cubic(0.16,1,0.3,1)">
				<Dialog.Title className="m-0 fw5 c-gray-800 fs-17px">Edit profile</Dialog.Title>
				<Dialog.Description className="m-10px-0px-20px c-gray-600 fs-15px lh-1d5">
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
				<fieldset className="@base-all-unset df g-20px aic mb-8px">
					<label className="fs-15px c-violet-800 w-90px tar" htmlFor="name">
						Name
					</label>
					<input
						className=" w-100p flex-1 x-inline-flex-center br-4px p-0px-10px fs-15px lh-1 c-violet-800 bxs-0px-0px-0px-1px-violet-500 h-35px --fo-bxs-0px-0px-0px-2px-violet-600 @base-all-unset"
						id="name"
						defaultValue="Pedro Duarte"
					/>
				</fieldset>
				<fieldset className="@base-all-unset df g-20px aic mb-8px">
					<label className="fs-15px c-violet-800 w-90px tar" htmlFor="username">
						Username
					</label>
					<input
						className="@base-all-unset w-100p flex-1 x-inline-flex-center br-4px p-0px-10px fs-15px lh-1 c-violet-800 bxs-0px-0px-0px-1px-violet-500 h-35px --fo-bxs-0px-0px-0px-2px-violet-600 "
		
						id="username"
						defaultValue="@peduarte"
					/>
				</fieldset>
				<div
					style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
				>
					<Dialog.Close asChild>
						<button className="@base-all-unset button --h-bgc-success-200 bgc-success-100 c-success-700">Save changes</button>
					</Dialog.Close>
				</div>
				<Dialog.Close asChild>
					<button className="@base-all-unset ff-inherit br-100p x-square-25px x-inline-flex-center c-violet-800 
	pa t-10px r-10px bgc-gray-300 --h-bgc-violet-100 --fo-bxs-0-0-2px-violet-500" aria-label="Close">
						<Cross2Icon />
					</button>
				</Dialog.Close>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
);

export default DialogDemo;
