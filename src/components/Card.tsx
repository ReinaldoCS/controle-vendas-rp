import { Title } from './Title';

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-[#3E3B47] drop-shadow-2xl p-4 rounded-xl flex flex-col items-center justify-center">
      <Title value={title} />
      {children}
    </div>
  );
}
