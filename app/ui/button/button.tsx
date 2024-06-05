export function Button({
  onClick,
  children,
}: {
  onClick: Function;
  children: React.ReactNode;
}) {
  return (
    <>
      <button
        onClick={() => {
          onClick();
        }}
        className="w-36 h-12 border border-greyBorders rounded bg-primary text-white font-medium hover:opacity-70"
      >
        {children}
      </button>
    </>
  );
}
