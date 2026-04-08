type HackathonTagProps = {
  label: string;
};

export default function HackathonTag({ label }: HackathonTagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary backdrop-blur-sm">
      {label}
    </span>
  );
}
