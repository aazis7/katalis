'use client';

import { cn } from '~/lib/utils';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MaxWidthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'max-w-breakpoint-3xl mx-auto px-4 py-6 lg:px-6 lg:py-8',
        className,
      )}
      {...props}
    />
  );
};
