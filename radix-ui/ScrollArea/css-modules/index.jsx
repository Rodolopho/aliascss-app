import * as React from "react";
import { ScrollArea } from "radix-ui";
// import styles from "./styles.module.css";

const TAGS = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const ScrollAreaDemo = () => (
	<ScrollArea.Root className="w-200px h-225px br-4px oh bxs-0px-2px-10px-0000000000d4 bgc-fff --x-scrollbar-size:10px">
		<ScrollArea.Viewport className="w-100p h-100p br-inherit">
			<div style={{ padding: "15px 20px" }}>
				<div className="c-gray-800 fs-15px fw5 lh-18px">Tags</div>
				{TAGS.map((tag) => (
					<div className="c-gray-800 fs-13px lh-18px mt-10px bt-1px-solid-gray-400 pt-10px" key={tag}>
						{tag}
					</div>
				))}
			</div>
		</ScrollArea.Viewport>
		<ScrollArea.Scrollbar className="df  usn touch-action-none p-2px bg-gray-300 tn-background-160ms-ease-out --h-bg-gray-400 [data-orientation=vertical]-w--x-scrollbar-size [data-orientation=horizontal][fdc,h--x-scrollbar-size]" orientation="vertical">
			<ScrollArea.Thumb className="flex-1 bgc-gray-700 br--x-scrollbar-size pr --bf[cont,pa,t-50p,l-50p,tf-t--50p--50p,w-100p,h-100p,mw-44px,mh-44px]" />
		</ScrollArea.Scrollbar>
		<ScrollArea.Scrollbar className="df usn touch-action-none p-2px bg-gray-300 tn-background-160ms-ease-out --h-bg-gray-400 [data-orientation=vertical]-w--x-scrollbar-size [data-orientation=horizontal][fdc,h--x-scrollbar-size]" orientation="horizontal">
			<ScrollArea.Thumb className="flex-1 bgc-gray-700 br--x-scrollbar-size pr --bf[cont,pa,t-50p,l-50p,tf-t--50p--50p,w-100p,h-100p,mw-44px,mh-44px]" />
		</ScrollArea.Scrollbar>
		<ScrollArea.Corner className="bgc-gray-300" />
	</ScrollArea.Root>
);

export default ScrollAreaDemo;
