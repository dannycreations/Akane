export interface EditorState {
  readonly zoom: number;
  readonly rotation: number;
  readonly x: number;
  readonly y: number;
}

export interface ImageSource {
  readonly url: string;
  readonly name: string;
}
