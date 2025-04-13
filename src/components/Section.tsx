interface Props {
  title: string;
  children?: React.ReactNode;
}

export function Section({ title, children }: Props) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {children}
    </section>
  );
}
