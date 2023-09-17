"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const LoadingIndicator: React.FC<any> = ({ state, children }) => {
  const pathname = usePathname();

  useEffect(() => {
    state.setLoading(false);
  }, [pathname]);

  return (
    <div>
      {state.loading ? (
        <div className="h-screen flex items-center justify-center">
          <img src="./loader.gif" alt="wait until the page loads" />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default LoadingIndicator;
