type TitleProps = {
  value: string;
};

export function Title({ value }: TitleProps) {
  return <h2 className="text-[#FF9000] font-bold mb-2">{value}</h2>;
}
