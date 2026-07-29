import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import InterviewCard from '@/components/InterviewCard';
import { dummyInterviews } from '@/constants';

const page = () => {
  const userInterviews = dummyInterviews;
  const allInterview = dummyInterviews;

  const hasPastInterviews = userInterviews.length > 0;
  const hasUpcomingInterviews = allInterview.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Describe your symptoms. Get the right orientation.</h2>
          <p className="text-lg">
            Urgentis helps you understand the most appropriate healthcare pathway.
          </p>
          <Button render={<Link href="/interview" />} nativeButton={false} className="btn-primary max-sm:w-full">
            Begin Orientation
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-dark-100">How can we help you</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={interview.userId}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-dark-100">Take Interviews</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={interview.userId}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>
    </>
  );
}

export default page
