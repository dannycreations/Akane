import { clsx } from 'clsx';
import { memo } from 'react';

import { useStore } from '../../stores/useStore';

import type { ReactNode } from 'react';

interface MockupScreenProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly backgroundColor?: string;
}

export const MockupScreen = memo(({ children, className, backgroundColor }: MockupScreenProps) => (
  <div
    className={clsx('relative flex h-full w-full flex-col overflow-hidden font-sans', className)}
    style={backgroundColor ? { backgroundColor } : undefined}
  >
    {children}
  </div>
));

interface MockupContentProps {
  readonly children: ReactNode;
  readonly className?: string;
}

export const MockupContent = memo(({ children, className }: MockupContentProps) => (
  <div className={clsx('flex-1 overflow-y-auto no-scrollbar', className)}>{children}</div>
));

interface PerspectiveMap {
  readonly [key: string]: ReactNode;
}

interface PerspectiveSwitcherProps {
  readonly screens: PerspectiveMap;
}

export const PerspectiveSwitcher = memo(({ screens }: PerspectiveSwitcherProps) => {
  const perspective = useStore((state) => state.perspective);

  // Return the specific screen for the current perspective,
  // or the first available screen as a fallback.
  return <div className="relative h-full w-full">{screens[perspective] ?? Object.values(screens)[0]}</div>;
});
