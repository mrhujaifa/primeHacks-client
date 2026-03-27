type HackathonTagProps = {
  label: string;
};

export default function HackathonTag({ label }: HackathonTagProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-orange-400/25 bg-orange-400/10 px-2.5 py-1 text-[11px] font-medium text-orange-200 backdrop-blur-sm">
      {label}
    </span>
  );
}
