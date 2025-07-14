"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const WelcomeToast = () => {
  useEffect(() => {
    toast.info("Controls", {
      description: "Click on the planets to explore different sections.",
      duration: 8000,
    })
  }, []);
  return null;
}

export default WelcomeToast