import * as React from "react";
import { Tooltip } from "radix-ui";
import { PlusIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const TooltipDemo = () => {
	return (
		<Tooltip.Provider>
			<Tooltip.Root
      keyframes-slideUpAndFade='@0-[opacity-0,transform-translateY-2px] @100-[opacity-1,transform-translateY-0]'

		keyframes-slideRightAndFade='@0-[opacity-0,transform-translateX--2px] @100-[opacity-1,transform-translateX-0]'

		keyframes-slideDownAndFade='@0-[opacity-0,transform-translateY--2px] @100-[opacity-1,transform-translateY-0]'

		keyframes-slideLeftAndFade='@0-[opacity-0,transform-translateX-2px] @100-[opacity-1,transform-translateX-0]'
		>
				<Tooltip.Trigger asChild>
					<button className="@base-all-unset ff-inherit br-100p x-square-35px x-inline-flex-center c-primary-800 bxs-0px-2px-10px-0000000000d7 usn --ho-bgc-primary-300 --fo-bxs-0px-0px-0px-2px-black">
						<PlusIcon />
					</button>
				</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content className="br-4px p-10px-15px fs-12px lh-1 c-primary-700 bgc-fff bxs-0px-10px-38px--10px-gray700 usn adu-400ms atf--atf:cubic-bezier(0.16,1,0.3,1)
          will-change-transform__opacity [data-state=open][data-side=top]-an-slideDownAndFade
          [data-state=open][data-side=right]-an-slideLeftAndFade
          [data-state=open][data-side=bottom]-an-slideUpAndFade
          [data-state=open][data-side=left]-an-slideRightAndFade
          " sideOffset={5}>
						Add to library
						<Tooltip.Arrow className="fill-white" />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};

export default TooltipDemo;
