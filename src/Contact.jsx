"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./components/ui/animated-beam.jsx";
import whatsappIcon from "./assets/img/whatsapp.png";
import instagramIcon from "./assets/img/instagram.png";
import tiktokIcon from "./assets/img/tiktok.png";
import facebookIcon from "./assets/img/facebook.png";
import xIcon from "./assets/img/x.png"; // Sesuaikan dengan nama file ikon X

const Circle = forwardRef(({ className, href, children }, ref) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "z-10 flex size-24 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
      ref={ref}
    >
      {children}
    </a>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null); // Seventh circle reference

  return (
    <div
      className="mt-10 relative flex h-full contact w-full items-center justify-center overflow-hidden bg-background p-10 "
      id="contact"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg h-96 items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle href="https://wa.me/yourwhatsappnumber" ref={div1Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle href="https://www.instagram.com/yourusername" ref={div5Ref}>
            <Icons.instagram />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle href="https://www.tiktok.com/@yourusername" ref={div2Ref}>
            <Icons.tiktok />
          </Circle>
          <Circle ref={div4Ref} className="size-24">
            <span className="contact-text bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Contact
            </span>
          </Circle>
          <Circle href="https://www.facebook.com/yourusername" ref={div6Ref}>
            <Icons.facebook />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle href="https://www.instagram.com/yourusername" ref={div3Ref}>
            <Icons.instagram />
          </Circle>
          {/* New Circle added here */}
          <Circle href="https://www.x.com/yourusername" ref={div7Ref}>
            <Icons.x />
          </Circle>
        </div>
      </div>

      {/* Animated beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      {/* Beam for the new seventh circle */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

// Komponen Icons menggunakan elemen img dengan ukuran 150px
// Komponen Icons menggunakan elemen img dengan ukuran yang lebih besar (1000px)
const Icons = {
  whatsapp: () => (
    <img src={whatsappIcon} alt="WhatsApp" width="1000" height="1000" />
  ),
  instagram: () => (
    <img src={instagramIcon} alt="Instagram" width="1000" height="1000" />
  ),
  tiktok: () => (
    <img src={tiktokIcon} alt="TikTok" width="1000" height="1000" />
  ),
  facebook: () => (
    <img src={facebookIcon} alt="Facebook" width="1000" height="1000" />
  ),
  x: () => <img src={xIcon} alt="X" width="1000" height="1000" />,
};
