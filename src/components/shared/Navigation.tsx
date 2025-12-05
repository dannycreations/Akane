import { memo } from 'react';

import type { ReactNode } from 'react';

interface NavigationProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly safeAreaClassName?: string;
}

export const Navigation = memo(({ children, className = '', safeAreaClassName = 'pb-8' }: NavigationProps) => {
  return <div className={`w-full shrink-0 z-50 ${className} ${safeAreaClassName}`}>{children}</div>;
});
