export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <p className="font-extrabold text-3xl mb-16">{children}</p>
    </div>
  );
}
