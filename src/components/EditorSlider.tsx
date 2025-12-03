interface SliderProps {
  readonly label: string;
  readonly value: number;
  readonly min: number;
  readonly max: number;
  readonly step?: number;
  readonly onChange: (value: number) => void;
}

export const Slider = ({ label, value, min, max, step = 1, onChange }: SliderProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
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
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 hover:accent-indigo-400 transition-all"
      />
    </div>
  );
};
