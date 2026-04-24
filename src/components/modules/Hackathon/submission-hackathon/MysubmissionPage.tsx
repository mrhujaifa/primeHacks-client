"use client";

import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { getMySubmissionsClientQueryFn } from "@/hooks/hackathon/hackathon.queries.client";
import { useQuery } from "@tanstack/react-query";
import SubmissionCard from "./SubmissionCard";

const Mysubmission = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: hackathonKeys.mySubmissions(),
    queryFn: () => {
      return getMySubmissionsClientQueryFn();
    },
  });

  console.log(data);
  if (isLoading) {
    return <div className="text-sm text-slate-400">Loading submissions...</div>;
  }

  if (isError) {
    return (
      <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 text-sm text-rose-200">
        Failed to load submissions.
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 text-center">
        <h2 className="text-lg font-semibold text-white">
          No submissions found
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Your submitted projects will appear here.
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white md:text-3xl">
          My Submissions
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          All your submitted hackathon projects in one place.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {data?.map((submission) => (
          <SubmissionCard key={submission.id} submission={submission} />
        ))}
      </div>
    </section>
  );
};

export default Mysubmission;
