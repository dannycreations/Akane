import { useStore } from '../stores/useStore';

interface CroppedPreviewProps {
  readonly size?: number | string;
  readonly className?: string;
}

const FULL_SIZE = {
  width: '100%',
  height: '100%',
} as const;

export const CroppedPreview = ({ size, className }: CroppedPreviewProps) => {
  const image = useStore((state) => state.image);
  const editorState = useStore((state) => state.editorState);

  const style = size !== undefined ? { width: size, height: size } : FULL_SIZE;

  if (!image) return <div className={`bg-slate-700 ${className}`} style={style} />;

  const totalScale = editorState.zoom;

  return (
    <div className={`overflow-hidden relative bg-slate-800 flex-shrink-0 select-none ${className}`} style={style}>
      <div
        className="absolute origin-center w-full h-full"
        style={{
          transform: `rotate(${editorState.rotation}deg) scale(${totalScale}) translate(${editorState.x * 100}%, ${editorState.y * 100}%)`,
        }}
      >
        <img src={image.url} alt="preview" className="w-full h-full object-contain" draggable={false} />
      </div>
    </div>
  );
};
