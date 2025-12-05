import { memo } from 'react';

interface SliderProps {
  readonly label: string;
  readonly value: number;
  readonly min: number;
  readonly max: number;
  readonly step?: number;
  readonly onChange: (value: number) => void;
}

export const Slider = memo(({ label, value, min, max, step = 1, onChange }: SliderProps) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex justify-between text-xs font-medium text-slate-400">
        <span>{label}</span>
        <span>{value.toFixed(1)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 transition-all accent-indigo-500 hover:accent-indigo-400"
      />
    </div>
  );
});
