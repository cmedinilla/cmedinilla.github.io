import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function ResumeContent({ data }) {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-lg rounded-2xl p-8 print:p-8 print:shadow-none print:rounded-none">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-wide">
            {data.name.split(" ")[0]}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-600">
            {data.name.split(" ")[1]}
          </h2>
          <p className="mt-2 font-medium text-indigo-700">{data.title}</p>
        </div>

        <div className="text-sm text-gray-600 md:text-right">
          <p>{data.location}</p>
          <p className="mt-1">{data.email}</p>
          <p className="mt-1">{data.phone}</p>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column (main content) */}
        <section className="md:col-span-2">
          {/* Profile */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold border-b pb-1">Profile</h3>
            <p className="mt-3 text-sm leading-relaxed">{data.profile}</p>
          </div>

          {/* Employment history */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold border-b pb-1">
              Employment History
            </h3>
            <ul className="mt-3 space-y-4">
              {data.employmentHistory.map((job, index) => (
                <li key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">
                        {job.position}, {job.company}
                      </p>
                      <p className="text-sm text-gray-600">{job.date}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold border-b pb-1">Education</h3>
            <p className="mt-3 font-medium">
              {data.education.degree}, {data.education.institution}
            </p>
            <p className="text-sm text-gray-600">{data.education.date}</p>
          </div>
        </section>

        {/* Right column (sidebar) */}
        <aside className="md:col-span-1 bg-gray-50 p-4 rounded-lg">
          {/* Links */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm">Links</h4>
            <ul className="mt-2 text-sm text-indigo-700 space-y-1">
              {data.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm">Skills</h4>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              {data.skills.map((skill, index) => (
                <span key={index} className="inline-block">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-semibold text-sm">Languages</h4>
            <ul className="mt-2 text-sm">
              <li>English</li>
              <li>Spanish</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default function Resume({ data }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Christian_Medinilla_Resume",
  });

  return (
    <div className="py-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
        >
          Print to PDF
        </button>
      </div>
      <div ref={componentRef}>
        <ResumeContent data={data} />
      </div>
    </div>
  );
}
