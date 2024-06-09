export function FormattedDate({ date }: { date: string }) {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return <span className="text-sm text-greyText">{formattedDate}</span>;
}
