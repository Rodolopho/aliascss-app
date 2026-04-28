import * as React from "react";
import { Form } from "radix-ui";
import './index.jsx.css'

const FormDemo = () => (
	<Form.Root className="w-260px _all-bsbb">
		<Form.Field className="d-grid mb-10px" name="email">
			<div className="df aib jcsb">
				<Form.Label className="fs-15px fw-500 lh-35px c-fff">Email</Form.Label>
				<Form.Message className="fs-13px c-gray-800 opacity-0d8" match="valueMissing">
					Please enter your email
				</Form.Message>
				<Form.Message className="fs-13px c-gray-800 opacity-0d8" match="typeMismatch">
					Please provide a valid email
				</Form.Message>
			</div>
			<Form.Control asChild>
				<input className="@base-all-unset [bgc-transparent,w-100p,x-inline-flex-center,br-4px,fs-15px,c-gray-800,bgc-fff,bxs-0px-0px-0px-1px-0000000000d6,--h-bxs-0px-0px-0px-1px-black,--fo-bxs-0px-0px-0px-2px-black,--selection-c-white,--selection-bgc-0000000000d6]--as-input input p-0-10px h-35px lh-1" type="email" required />
			</Form.Control>
		</Form.Field>
		<Form.Field className="d-grid mb-10px" name="question">
			<div className="df aib jcsb">
				<Form.Label className="fs-15px fw-500 lh-35px c-fff">Question</Form.Label>
				<Form.Message className="fs-13px c-error-600 opacity-0d8" match="valueMissing">
					Please enter a question
				</Form.Message>
			</div>
			<Form.Control asChild>
				<textarea className="@base-all-unset input resize-none p-10px" required />
			</Form.Control>
		</Form.Field>
		<Form.Submit asChild>
			<button className="x-button bgc-gray-800  w-100p c-gray-100  bxs-0px-2px-10px-2252252250d4 --h-bgc-gray-700 --fo-bxs-0px-0px-0px-2px-black" style={{ marginTop: 10 }}>
				Post question
			</button>
		</Form.Submit>
	</Form.Root>
);

export default FormDemo;
