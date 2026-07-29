import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const InterviewCard = ({
  interviewId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = new Date(createdAt ?? Date.now()).toLocaleDateString(
    "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div
            className={cn(
              "absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg",
              normalizedType === "Behavioral" ? "bg-light-400" : "bg-light-600"
            )}
          >
            <p className="badge-text">{normalizedType}</p>
          </div>

          <h3 className="mt-5 capitalize">{role} Interview</h3>

          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src="/calendar.svg"
                width={22}
                height={22}
                alt="calendar"
              />
              <p>{formattedDate}</p>
            </div>
          </div>

          <p className="line-clamp-2 mt-5">
            You haven&apos;t taken this interview yet. Take it now to improve
            your skills.
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 flex-wrap">
            {techstack.map((tech) => (
              <p key={tech} className="text-sm text-light-400">
                {tech}
              </p>
            ))}
          </div>

          <Button
            render={<Link href={`/interview/${interviewId}`} />}
            nativeButton={false}
            className="btn-primary"
          >
            View Interview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
