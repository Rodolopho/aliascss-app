import * as React from "react";
import { Progress } from "radix-ui";
import styles from "./styles.module.css";

const ProgressDemo = () => {
	const [progress, setProgress] = React.useState(95);

	React.useEffect(() => {
		const timer = setTimeout(() => setProgress(66), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Progress.Root className="pr oh x-shadow-md b-1px-s-gray700 br-99999px w-300px h-25px tf-tz-0" value={progress}>
			<Progress.Indicator
				className="bgc-gray-600 w-100p h-100p tn-transform-660ms ttf--ttf:cubic-bezier(0.65,0,0.35,1)"
				style={{ transform: `translateX(-${100 - progress}%)` }}
			/>
		</Progress.Root>
	);
};

export default ProgressDemo;
