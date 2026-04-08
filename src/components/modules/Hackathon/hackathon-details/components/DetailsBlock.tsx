function DetailBlock({
  icon,
  label,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-theme rounded-2xl p-4">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {icon ? <span className="text-primary">{icon}</span> : null}
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}

export default DetailBlock;
