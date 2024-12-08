"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure the component is only rendered on the client
  }, []);

  return (
    <div className="relative flex flex-col h-[850px] z-0 w-full">
      {isMounted && (
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
};

export default Hero;
