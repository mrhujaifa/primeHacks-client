const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent">
      <div className="rounded-full border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
        <span className="loading loading-ring loading-xl text-cyan-400"></span>
      </div>
    </div>
  );
};

export default Loading;
