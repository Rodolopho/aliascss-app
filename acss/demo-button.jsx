import React from "react";
import {
  Save ,
  Trash2 ,
  ArrowRight,
 } from "lucide-react";
 
import Button from "./components/button";
import "./demo-button.jsx.css";

export  function DemoButton() {
  return (
    <div className="d-f fd-c gap-16px p-32px">
      {/* Variants */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>

      {/* Sizes */}
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>

      {/* With Icons */}
      <Button leftIcon={<Save />}>Save Changes</Button>
      <Button rightIcon={<ArrowRight />}>Continue</Button>

      {/* Loading */}
      <Button loading>Saving...</Button>

      {/* Danger + Icon */}
      <Button variant="danger" leftIcon={<Trash2 />}>
        Delete Account
      </Button>

      {/* Full Width */}
      <Button fullWidth variant="primary">
        Full Width Button
      </Button>

      {/* Disabled */}
      <Button disabled>Disabled</Button>
    </div>
  );
}