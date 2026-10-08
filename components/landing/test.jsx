'use client';
import { useState } from "react";
import Link from "next/link";

export default function AliasCSSLanding() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npm i -D aliascss");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
    </>
  );
}
