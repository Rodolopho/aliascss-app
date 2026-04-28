import * as React from "react";
import { Select } from "radix-ui";
import classnames from "classnames";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";
// import styles from "./styles.module.css";

const SelectDemo = () => (
	<Select.Root>
		<Select.Trigger className="@base-all-unset x-inline-flex-center br-4px p-0-15px fs-13px lh-1 h-35px g-5px  bgc-fff c-gray-700  bxs-0px-2px-10px-00000000000d7 --ho-bgc-gray-300 --fo-bxs-0px-0px-0px-2px-black [data-placeholder]-c-gray-800" aria-label="Food">
			<Select.Value placeholder="Select a fruit…" />
			<Select.Icon className="c-gray-800 ">
				<ChevronDownIcon />
			</Select.Icon>
		</Select.Trigger>
		<Select.Portal>
			<Select.Content className="oh bgc-white br-6px box-shadow-0px-10px-38px--10px-0220230240d35__0px-10px-20px--15px-0220230240d2">
				<Select.ScrollUpButton className="df aic jcc h-25px bgc-white c-gray-800 cursor-default">
					<ChevronUpIcon />
				</Select.ScrollUpButton>
				<Select.Viewport className="p-5px">
					<Select.Group>
						<Select.Label className="p-0-25px fs-12px lh-25px c-gray-500">Fruits</Select.Label>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectItem value="pineapple">Pineapple</SelectItem>
					</Select.Group>

					<Select.Separator className="h-1px bgc-gray-400 m-5px" />

					<Select.Group>
						<Select.Label className="p-0-25px fs-12px lh-25px c-gray-500">Vegetables</Select.Label>
						<SelectItem value="aubergine">Aubergine</SelectItem>
						<SelectItem value="broccoli">Broccoli</SelectItem>
						<SelectItem value="carrot" disabled>
							Carrot
						</SelectItem>
						<SelectItem value="courgette">Courgette</SelectItem>
						<SelectItem value="leek">Leek</SelectItem>
					</Select.Group>

					<Select.Separator className="h-1px bgc-gray-400 m-5px" />

					<Select.Group>
						<Select.Label className="p-0-25px fs-12px lh-25px c-gray-500">Meat</Select.Label>
						<SelectItem value="beef">Beef</SelectItem>
						<SelectItem value="chicken">Chicken</SelectItem>
						<SelectItem value="lamb">Lamb</SelectItem>
						<SelectItem value="pork">Pork</SelectItem>
					</Select.Group>
				</Select.Viewport>
				<Select.ScrollDownButton className="df aic jcc h-25px bgc-white c-gray-800 cursor-default">
					<ChevronDownIcon />
				</Select.ScrollDownButton>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
);

const SelectItem = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => {
		return (
			<Select.Item
				className={classnames(String("fs-13px lh-1 c-gray-800 br-3px df aic h-25px p-0-35px-0-25px pr usn [data-disabled]-c-gray-400 [data-highlighted][bgc-gray-200,c-gray-800]"), className)}
				{...props}
				ref={forwardedRef}
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator className="pa l-0 w-25px x-inline-flex-center">
					<CheckIcon />
				</Select.ItemIndicator>
			</Select.Item>
		);
	},
);

export default SelectDemo;
