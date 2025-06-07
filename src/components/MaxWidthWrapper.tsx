"use client";

import * as React from "react";
import { cn } from "~/lib/utils";

interface MaxWidthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "max-w-breakpoint-3xl mx-auto px-4 py-6 lg:px-6 lg:py-8",
        className,
      )}
      {...props}
    />
  );
};
