"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function ScrollToTop({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window?.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return <>{children}</>;
}

export default ScrollToTop;
