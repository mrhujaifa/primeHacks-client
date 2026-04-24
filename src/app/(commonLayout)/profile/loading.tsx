const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="card-theme flex w-full max-w-sm flex-col items-center rounded-[2rem] p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/18 bg-primary/10 shadow-glow-soft">
          <span className="loading loading-ring loading-xl text-primary"></span>
        </div>
        <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-muted">
          Loading profile
        </p>
      </div>
    </div>
  );
};

export default Loading;
