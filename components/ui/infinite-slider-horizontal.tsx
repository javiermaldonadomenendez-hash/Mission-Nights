'use client';

import { cn } from '@/lib/utils';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const isHorizontal = direction === 'horizontal';
  const animationName = isHorizontal
    ? reverse ? 'slider-x-reverse' : 'slider-x'
    : reverse ? 'slider-y-reverse' : 'slider-y';

  return (
    <div
      className={cn('overflow-hidden', className)}
      style={{ WebkitMaskImage: undefined }}
    >
      <div
        className={isHorizontal ? 'flex w-max' : 'flex flex-col'}
        style={{
          gap: `${gap}px`,
          animation: `${animationName} ${duration}s linear infinite`,
          willChange: 'transform',
          ...(durationOnHover && {
            ['--duration-hover' as string]: `${durationOnHover}s`,
          }),
        }}
        onMouseEnter={
          durationOnHover
            ? (e) => {
                (e.currentTarget as HTMLElement).style.animationDuration = `${durationOnHover}s`;
              }
            : undefined
        }
        onMouseLeave={
          durationOnHover
            ? (e) => {
                (e.currentTarget as HTMLElement).style.animationDuration = `${duration}s`;
              }
            : undefined
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
}
