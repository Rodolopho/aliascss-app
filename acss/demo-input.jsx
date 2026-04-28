import React from "react";
import {
  Save ,
  Trash2 ,
  ArrowRight,
  Mail,
 } from "lucide-react";
 
import Input from "./components/input";
import "./demo-input.jsx.css";

export  function DemoInput() {
  return (
    <div className="d-f fd-c gap-16px p-32px">
      {/* Variants */}
      <Input name="name" placeholder="Name" type="text" variant="primary"/>
      <Input name="name" placeholder="Name" type="text" variant="secondary"/>
      <Input name="name" placeholder="Name" type="text" variant="underline"/>
      <Input name="name" placeholder="Name" type="text" variant="error"/>

      {/* Sizes */}
      <Input name="name" placeholder="Name" type="text" inputSize="sm"/>
      <Input name="name" placeholder="Name" type="text" inputSize="md"/>
      <Input name="name" placeholder="Name" type="text" inputSize="lg"/>

      {/* With Icons */}
      <Input name="email" placeholder="example@email.com" type="email" leftIcon={<Mail />}/>
      <Input name="name" placeholder="Name" type="text"  rightIcon={<ArrowRight/>}/>

  

      {/* Danger + Icon */}
      <Input name="name" placeholder="" type="text" variant="error" leftIcon={<Trash2 />}/>

      {/* Disabled */}
      <Input name="name" placeholder="" type="text" Value="Cannot be edited" disabled/>
    </div>
  );
}