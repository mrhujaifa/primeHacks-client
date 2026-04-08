"use client";

import { SubmissionForm } from "./SubmissionForm";
import { SubmissionHighlights } from "./SubmissionHighlights";

export const ProjectSubmissionModal = ({
  hackathonId,
}: {
  hackathonId: string;
}) => {
  return (
    <dialog id="project_submission_modal" className="modal">
      <div className="modal-box max-w-5xl rounded-[30px] p-0">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-20 border border-border/70 bg-card/70 text-muted">
            ✕
          </button>
        </form>

        <div className="p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Submit Your Project
            </h2>
            <p className="mt-2 text-sm text-muted">
              Add your project details, useful links, and tech stack.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <SubmissionHighlights />
            <SubmissionForm hackathonId={hackathonId} />
          </div>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
