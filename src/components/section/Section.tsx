export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold uppercase">{title}</h2>

      {children}
    </div>
  );
}
