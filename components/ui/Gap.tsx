export default function Gap({
  height = "10",
  className,
}: {
  height?: string;
  className?: string;
}) {
  return <div className={`w-full ${className ? className : `h-${height}`}`} />;
}
