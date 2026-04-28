import * as React from "react";
import { Avatar } from "radix-ui";
// import styles from "./styles.module.css";

const AvatarDemo = () => (
	<div style={{ display: "flex", gap: 20 }}>
		<Avatar.Root className="avatar-root [inline-flex-center,vam,oh,usn,x-square-45px,br-100p,bgc-blackA3]--as-avatar-root ">
			<Avatar.Image
				className="[x-square-100%,object-fit-cover,br-inherit]--as-avatar-image avatar-image"
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="Colm Tuite"
			/>
			<Avatar.Fallback className="[x-square-100%,flex-center,bgc-gray-200,c-violet11,fs-15px,lh-1,fw5]--as-avatar-fallback" delayMs={600}>
				CT
			</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root className="avatar-root">
			<Avatar.Image
				className="avatar-image"
				src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
				alt="Pedro Duarte"
			/>
			<Avatar.Fallback className="avatar-fallback" delayMs={600}>
				JD
			</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root className="avatar-root">
			<Avatar.Fallback className="avatar-fallback">PD</Avatar.Fallback>
		</Avatar.Root>
	</div>
);

export default AvatarDemo;
