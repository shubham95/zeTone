"use client";
import React from "react";

const LoadingIndicator: React.FC<any> = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <img src="./loader.gif" alt="wait until the page loads" />
      </div>
    </div>
  );
};

export default LoadingIndicator;
