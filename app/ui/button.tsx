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
        className="w-36 h-12 border border-slate-200 rounded-xl bg-[#84c0f6] text-white font-medium hover:opacity-70"
      >
        {children}
      </button>
    </>
  );
}
