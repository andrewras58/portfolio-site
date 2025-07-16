"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const WelcomeToast = () => {
  useEffect(() => {
    if (!sessionStorage.getItem("hasClosedControls")) {
      toast.info("Controls", {
        description: "Click on the planets to explore different sections.",
        action: {
          label: "Close",
          onClick: () => sessionStorage.setItem("hasClosedControls", "true"),
        },
      });
    }
  }, []);
  return null;
};

export default WelcomeToast;
