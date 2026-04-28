import * as React from "react";
import { Collapsible } from "radix-ui";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
// import styles from "./styles.module.css";

const CollapsibleDemo = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<Collapsible.Root
			className="w-300px"
			open={open}
			onOpenChange={setOpen}
		>
			<div className="df aic jc-sb">
				<span className="[c-violet-800,fs-15px,lh-25px]--as-repo-text repo-text c-gray-700-i" style={{ color: "white" }}>
					@peduarte starred 3 repositories
				</span>
				<Collapsible.Trigger asChild>
					<button className="@base-all-unset [dif,aic,jcc,x-square-25px,ff-inherit,br-100p,c-violet-800,bxs-0px-2px-10px-000000] --fo-bxs-0px-0px-0px-2px-black --hover-bgc-violet-200 [data-state=open]-bgc-violet-200 [data-state=closed]-bgc-white">
						{open ? <Cross2Icon /> : <RowSpacingIcon />}
					</button>
				</Collapsible.Trigger>
			</div>

			<div className="[bgc-fff,br-4px,m-10px-0px,p-10px,bxs-0px-2px-10px-0000000000d6]--as-repository repository">
				<span className="repo-text">@radix-ui/primitives</span>
			</div>

			<Collapsible.Content>
				<div className="repository">
					<span className="repo-text">@radix-ui/colors</span>
				</div>
				<div className="repository">
					<span className="repo-text">@radix-ui/themes</span>
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
};

export default CollapsibleDemo;
