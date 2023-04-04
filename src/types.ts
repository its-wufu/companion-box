export type Setter = React.Dispatch<React.SetStateAction<number>>;

export type BoxProps = {
  width: number;
  height: number;
  scale: number;
  setWidth: Setter;
  setHeight: Setter;
  setScale: Setter;
};
