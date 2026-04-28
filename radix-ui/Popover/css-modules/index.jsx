import * as React from "react";
import { Popover } from "radix-ui";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
// import styles from "./styles.module.css";

const PopoverDemo = () => (
	<Popover.Root
	keyframes-slideUpAndFade="@0-[o-0,tf-ty-2px] @100-[o-1,tf-ty-0]"
	keyframes-slideRightAndFade="@0-[o-0,tf-tx--2px] @100-[o-1,tf-tx-0]"
	keyframes-slideDownAndFade="@0-[o-0,tf-ty--2px] @100-[o-1,tf-ty-0]"
	keyframes-slideLeftAndFade="@0-[o-0,tf-tx-2px] @100-[o-1,tf-tx-0]"

	>
		<Popover.Trigger asChild>
			<button className="@base-all-unset [dif,aic,jcc,x-square-35px,ff-inherit,br-100p,c-gray-800,bxs-0px-2px-10px-0000000000d5] --fo-bxs-0px-0px-0px-2px-black --hover-bgc-gray-100" aria-label="Update dimensions">
				<MixerHorizontalIcon />
			</button>
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content className="
			br-4px p-20px w-260px bgc-white bxs-0px-10px-38px--10px-hsl-206-22p-7p-35p__0px-10px-20px--15px-hsl-206-22p-7p-20p
			adu-400ms atf--atf:cubic-bezier(0.16,1,0.3,1) will-change-transform__opacity --fo-bxs-0px-10px-38px--10px-hsl-206-22p-7p-35p__0px-10px-20px--15px-hsl-206-22p-7p-20p__0px-0px-0px-2px-gray800
			[data-state=open][data-side=top]-an-slideDownAndFade
			[data-state=open][data-side=right]-an-slideLeftAndFade
			[data-state=open][data-side=bottom]-an-slideUpAndFade
			[data-state=open][data-side=left]-an-slideRightAndFade
						" sideOffset={5}>
				<div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
					<p className="m-0 c-gray-900 fs-15px lh-19px fw5" style={{ marginBottom: 10 }}>
						Dimensions
					</p>
					<fieldset className="@base-all-unset df aic g-20px">
						<label className="fs-13px c-gray-800 w-75px" htmlFor="width">
							Width
						</label>
						<input className="@base-all-unset w-100p dif aic jcc flex-1 br-4px p-0-10px fs-13px lh-1 c-gray700 bxs-0px-0px-0px-1px-gray500 h-25px --fo-bxs-0px-0px-0px-2px-gray600" id="width" defaultValue="100%" />
					</fieldset>
					<fieldset className="@base-all-unset df aic g-20px">
						<label className="fs-13px c-gray-800 w-75px" htmlFor="maxWidth">
							Max. width
						</label>
						<input
							className="@base-all-unset w-100p dif aic jcc flex-1 br-4px p-0-10px fs-13px lh-1 c-gray700 bxs-0px-0px-0px-1px-gray500 h-25px --fo-bxs-0px-0px-0px-2px-gray600"
							id="maxWidth"
							defaultValue="300px"
						/>
					</fieldset>
					<fieldset className="@base-all-unset df aic g-20px">
						<label className="fs-13px c-gray-800 w-75px" htmlFor="height">
							Height
						</label>
						<input className="@base-all-unset w-100p dif aic jcc flex-1 br-4px p-0-10px fs-13px lh-1 c-gray700 bxs-0px-0px-0px-1px-gray500 h-25px --fo-bxs-0px-0px-0px-2px-gray600" id="height" defaultValue="25px" />
					</fieldset>
					<fieldset className="@base-all-unset df aic g-20px">
						<label className="fs-13px c-gray-800 w-75px" htmlFor="maxHeight">
							Max. height
						</label>
						<input
							className="@base-all-unset w-100p dif aic jcc flex-1 br-4px p-0-10px fs-13px lh-1 c-gray700 bxs-0px-0px-0px-1px-gray500 h-25px --fo-bxs-0px-0px-0px-2px-gray600"
							id="maxHeight"
							defaultValue="none"
						/>
					</fieldset>
				</div>
				<Popover.Close className="@base-all-unset br-100p ff-inherit w-25px h-25px dif aic jcc c-gray-800 pa t-5px r-5px --h-bgc-gray-200 --fo-bxs-0px-0px-0px-2px-gray600" aria-label="Close">
					<Cross2Icon />
				</Popover.Close>
				<Popover.Arrow className="fill-white" />
			</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
);

export default PopoverDemo;
