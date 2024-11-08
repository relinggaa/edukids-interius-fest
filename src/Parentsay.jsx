import React, { useState, useEffect } from "react";
import TextReveal from "./components/ui/text-reveal.jsx";

export default function TextRevealDemo() {
  return (
    <div
      id="Parentsay"
      className="z-10 flex min-h-64 items-center justify-center rounded-lg  bg-white dark:bg-black"
    >
      <TextReveal text="What parents say after using the edukids platform for their children" />
    </div>
  );
}
