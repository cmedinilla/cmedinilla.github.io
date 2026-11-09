import { forwardRef } from "react";

// How much of the employment history makes it onto the one-page version.
const DETAILED_JOBS = 4;
const BULLETS_PER_JOB = 3;

function Bullet({ text }) {
  const [label, ...rest] = text.split(": ");
  if (rest.length === 0) return <li>{text}</li>;
  return (
    <li>
      <span className="font-semibold">{label}:</span> {rest.join(": ")}
    </li>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="text-[10.5pt] font-bold uppercase tracking-wider text-indigo-700 border-b border-gray-300 pb-0.5 mb-1.5">
      {children}
    </h3>
  );
}

const ResumeCompact = forwardRef(function ResumeCompact({ data }, ref) {
  const detailed = data.employmentHistory.slice(0, DETAILED_JOBS);
  const earlier = data.employmentHistory.slice(DETAILED_JOBS);
  const links = data.links.filter((link) => !link.url.startsWith("mailto:"));

  return (
    <div
      ref={ref}
      className="bg-white text-gray-800 text-[9pt] leading-snug"
    >
      <header className="flex items-end justify-between border-b-2 border-indigo-700 pb-2 mb-2.5">
        <div>
          <h1 className="text-[20pt] font-extrabold leading-none tracking-wide">
            {data.name}
          </h1>
          <p className="mt-1 text-[11pt] font-medium text-indigo-700">
            {data.title}
          </p>
        </div>
        <div className="text-right text-[8.5pt] text-gray-600">
          <p>
            {data.location} · {data.phone}
          </p>
          <p>{data.email}</p>
          <p>
            {links.map((link, i) => (
              <span key={link.url}>
                {i > 0 && " · "}
                <a href={link.url}>{link.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</a>
              </span>
            ))}
          </p>
        </div>
      </header>

      <section className="mb-2.5">
        <SectionTitle>Profile</SectionTitle>
        <p>{data.profile}</p>
      </section>

      <section className="mb-2.5">
        <SectionTitle>Experience</SectionTitle>
        <ul className="space-y-1.5">
          {detailed.map((job) => (
            <li key={job.position + job.date} className="break-inside-avoid">
              <div className="flex justify-between gap-4">
                <p className="font-semibold">
                  {job.position}, {job.company}
                </p>
                <p className="shrink-0 text-gray-600">{job.date}</p>
              </div>
              {job.responsibilities?.length > 0 && (
                <ul className="mt-0.5 list-disc pl-4">
                  {job.responsibilities.slice(0, BULLETS_PER_JOB).map((item) => (
                    <Bullet key={item} text={item} />
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {earlier.length > 0 && (
          <div className="mt-2">
            <p className="font-semibold mb-0.5">Earlier roles</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {earlier.map((job) => (
                <li
                  key={job.position + job.date}
                  className="flex justify-between gap-2"
                >
                  <span className="truncate">
                    {job.position}, {job.company}
                  </span>
                  <span className="shrink-0 text-gray-600">
                    {job.date.replace(
                      /^\w+ (\d{4}) — \w+ (\d{4})$/,
                      (_, from, to) => (from === to ? from : `${from}–${to}`)
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="mb-2.5">
        <SectionTitle>Skills</SectionTitle>
        <p>{data.skills.join(" · ")}</p>
      </section>

      <div className="grid grid-cols-2 gap-6">
        <section>
          <SectionTitle>Education</SectionTitle>
          <p>
            <span className="font-semibold">{data.education.degree}</span>,{" "}
            {data.education.institution} · {data.education.date}
          </p>
        </section>
        <section>
          <SectionTitle>Languages</SectionTitle>
          <p>English · Spanish</p>
        </section>
      </div>
    </div>
  );
});

export default ResumeCompact;
