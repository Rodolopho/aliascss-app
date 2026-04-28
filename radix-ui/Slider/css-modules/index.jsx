import * as React from "react";
import { Slider } from "radix-ui";
// import styles from "./styles.module.css";

const SliderDemo = () => (
	<form>
		<Slider.Root className="pr df aic usn touch-action-none w-200px h-20px" defaultValue={[50]} max={100} step={1}>
			<Slider.Track className="bgc-primary-500 pr flex-grow-1 br-9999px h-3px">
				<Slider.Range className="pa bgc-primary-900 br-9999px h-100p" />
			</Slider.Track>
			<Slider.Thumb className="db w-20px h-20px bgc-primary-500 bxs-0px-2px-10px-0000000000d7 br-10px --ho-bgc-primary-700 --fo[oln,bxs-shadow-0px-0px-0px-5px-0000000000d5]" aria-label="Volume" />
		</Slider.Root>
	</form>
);

export default SliderDemo;
