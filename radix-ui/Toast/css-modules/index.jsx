import * as React from "react";
import { Toast } from "radix-ui";
import styles from "./styles.module.css";

const ToastDemo = () => {
	const [open, setOpen] = React.useState(false);
	const eventDateRef = React.useRef(new Date());
	const timerRef = React.useRef(0);
	const Button=String('@base-all-unset x-inline-flex-center br-4px fw5 usn [class~=small][fs-12px,p-0-10px,lh-25px,h-25px] [class~=large][fs-15px,p-0-15px,lh-35px,h-35px] [class~=green][bgc-green-100,c-green-800,bxs-inset-0px-0px-0px-1px-green400,--h-bxs-0px-0px-0px-1px-green-500,--fo-bxs-0px-0px-0px-2px-green-500] ')

	React.useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
		<Toast.Provider swipeDirection="right">
			<button
				className={`${Button} large ${String('bgc-gray-200 --hover-bxs-0px-0px-0px-1px-gray500 --fo-bxs-0px-0px-0px-2px-gray500')}`}
				onClick={() => {
					setOpen(false);
					window.clearTimeout(timerRef.current);
					timerRef.current = window.setTimeout(() => {
						eventDateRef.current = oneWeekAway();
						setOpen(true);
					}, 100);
				}}
			>
				Add to calender
			</button>

			<Toast.Root
				className="bgc-fff br-6px p-15px dg gta-title_action-description_action gtc-auto-max-content cg-15px aic
				bxs-0px-10px-38px--10px-00000000000d6__0px-10px-20px--15px-0000000000d5
				[data-state=open][an-slideIn,adu-150ms,atf--atf:cubic-bezier(0.16,1,0.3,1)]
				[data-state=closed][an-hide,adu-100ms,atf-ei]
				[data-swipe=move][tf-tx--radix-toast-swipe-move-x]
				[data-swipe=cancel][tf-tx-0,tn-transform-200ms-ease-out]
				[data-swipe=end][animation-swipeOut-100ms-ease-out]
				"

				open={open} onOpenChange={setOpen}
				keyframes-swipeOut="[@0][tf-tx--radix-toast-swipe-end-x] @100-[tf-tx--viewport-padding-plus-100p]"
				keyframes-slideIn="[@100][tf-tx-0px] @0-[tf-tx--viewport-padding-plus-100p]"
				keyframes-hide="@0-opacity-1 @100-opacity-0"
			>
				<Toast.Title className="ga-title mb-5px fw-5 c-gray-700 fs-15px ">Scheduled: Catch up</Toast.Title>
				<Toast.Description asChild>
					<time
						className="grid-area-description m-0 c-gray-600 fs-13px lh-1d3"
						dateTime={eventDateRef.current.toISOString()}
					>
						{prettyDate(eventDateRef.current)}
					</time>
				</Toast.Description>
				<Toast.Action
					className="grid-area-action"
					asChild
					altText="Goto schedule to undo"
				>
					<button className={`${Button} small green`}>Undo</button>
				</Toast.Action>
			</Toast.Root>
			<Toast.Viewport className="pf btm-0 r-0 df fdc p--viewport-padding g-10px w-390px xw-100vw m-0 lsn zi-214567456 oln --viewport-padding:25px"
      style={{"--viewport-padding-plus-100p":'calc(100% + var(--viewport-padding))'}} />
		</Toast.Provider>
	);
};

function oneWeekAway(date) {
	const now = new Date();
	const inOneWeek = now.setDate(now.getDate() + 7);
	return new Date(inOneWeek);
}

function prettyDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
		timeStyle: "short",
	}).format(date);
}

export default ToastDemo;
