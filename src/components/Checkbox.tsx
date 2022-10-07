interface CheckboxProps {
  name: string;
  value: number;
  isChecked: boolean;
  onClick: () => void;
}

export function Checkbox({ name, value, isChecked, onClick }: CheckboxProps) {
  return (
    <button
      className="flex items-center justify-start w-full text-white"
      onClick={onClick}
    >
      <input className="mr-2" type="checkbox" checked={isChecked} />
      <span className="mr-1 font-semibold">{`${name}:`}</span>
      <span>{`${value}`}</span>
    </button>
  );
}
