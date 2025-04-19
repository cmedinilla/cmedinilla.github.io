const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <header className="text-center border-b pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Christian Medinilla</h1>
        <p className="text-lg text-gray-600">Full Stack Developer</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://medinilla.is-a.dev" className="text-blue-500 hover:underline">
            medinilla.is-a.dev
          </a>
          <a href="https://github.com/ronanru" className="text-blue-500 hover:underline">
            github.com/cmedinilla
          </a>
          <a href="mailto:cu.medinilla@gmail.com" className="text-blue-500 hover:underline">
            cu.medinilla@gmail.com
          </a>
        </div>
      </header>

      {/* Technical Skills Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-700">Programming Languages:</h3>
            <p className="text-gray-600">JavaScript, C#, NodeJS, Ruby, Typescript</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Frontend Development:</h3>
            <p className="text-gray-600">
              React, Angular, Tailwind CSS
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Agile:</h3>
            <p className="text-gray-600">
              Srum, Kanban, Agile Methodologies
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Other Technologies:</h3>
            <p className="text-gray-600">Docker, Git, SQL, AWS, Lamdba, Azure, GCP</p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Work Experience
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Practice Director
            </h3>
            <p className="text-sm text-gray-500">Apex Systems | 2022 - Present </p>
            <p className="text-gray-600">
              Head of Front-End Practice Area Led the entire Front-End practice within the organization, managing a large organizational structure that included 3+ managers and 6 supervisors. Responsible for overseeing operations, driving technical excellence, and ensuring alignment with client expectations. Key responsibilities included: Handling client escalations and contributing to pre-sales and new business development. Collaborating with Talent Acquisition for hiring strategies and recruiting top-tier front-end professionals. Providing coaching and professional development for leaders and teams within the practice. Partnering with Delivery Management to ensure optimal resource allocation and staff planning across multiple projects. Played a strategic role in building and scaling a high-performing front-end organization, fostering a culture of continuous improvement and collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Tech Manager</h3>
            <p className="text-sm text-gray-500">Apex Systems | 2020 - 2022</p>
            <p className="text-gray-600">
              Front End Tech Manager – E-Commerce & Talent Development Managed a team of 15 front-end consultants, overseeing their performance, career development, and allocation across projects. Led the interviewing and hiring process to ensure technical excellence and cultural fit. Directed a technical team of 5 developers on a high-impact E-Commerce project, working with a modern tech stack including Ruby (back-end) and React (front-end), ensuring timely delivery and code quality. Additionally, led the New Graduates Program for the front-end area, coordinating the selection, onboarding, technical training, and placement of newly hired consultants. Acted as a key player in nurturing early career talent and integrating them into client projects successfully.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Technical Lead</h3>
            <p className="text-sm text-gray-500">Apex Systems | 2020 - 2020</p>
            <p className="text-gray-600">
              Fullstack Technical Lead Directed a technical team of 5 developers on a high-impact E-Commerce project, working with a modern tech stack including Ruby (back-end) and React (front-end), ensuring timely delivery and code quality.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Senior Full Stack Developer</h3>
            <p className="text-sm text-gray-500">Intersys Consulting Inc | 2019 - 2020</p>
            <p className="text-gray-600">
              Front-End Developer – Angular & React Multi-Industry Project Experience Worked as a Front-End Developer across various industries, including E-Commerce, Building Security, and Healthcare. Utilized Angular and React frameworks to develop and maintain responsive, user-friendly web applications. Collaborated with cross-functional teams to translate business requirements into technical solutions, ensuring optimal performance and user experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Specialist Software Developer</h3>
            <p className="text-sm text-gray-500">Hewlett-Packard Enterprise | 2017 - 2017</p>
            <p className="text-gray-600">
              .NET & Angular Developer – Application Lifecycle Management (ALM) Tools Internal Systems & DevOps Enablement Served as a full-stack developer specializing in .NET and Angular to enhance internal Application Lifecycle Management (ALM) systems. Focused on improving development workflows, deployment automation, and system integration to support the organization's software development processes.​Additionally, participated in a cross-functional Tiger Team dedicated to the strategic implementation of GitHub Enterprise across the company. Contributed to the design and execution of version control strategies, CI/CD pipelines, and developer onboarding processes, facilitating a seamless transition to modern DevOps practices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Senior Full Stack Developer</h3>
            <p className="text-sm text-gray-500">Softtek | 2013 - 2017</p>
            <p className="text-gray-600">
            .NET Developer – Legal Data Archiving Project Consultant for Technology Firm Engaged as a .NET Developer consultant for a technology company, focusing on the development of a secure legal data archiving system. Responsibilities included designing and implementing robust backend solutions to ensure data integrity, compliance with legal standards, and efficient retrieval processes. Collaborated closely with cross-functional teams to translate complex legal requirements into technical specifications, delivering a reliable and scalable application tailored to client needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Senior Full Stack Developer</h3>
            <p className="text-sm text-gray-500">Integracorp and H consulting | 2012 - 2013</p>
            <p className="text-gray-600">
            Assigned Consultant at a Manufacturing Company Worked as a consultant and software developer for the company’s proprietary ERP system, supporting and enhancing multiple modules including Accounting, Inventory, and Invoicing. Responsibilities included analyzing business requirements, implementing new features, and maintaining existing functionalities to ensure operational efficiency. Technologies used included Genexus, Visual Basic 6.0, and .NET frameworks. Collaborated closely with cross-functional teams to align system development with business processes, contributing to the continuous improvement of the company’s internal tools.
            </p>
          </div>
        </div>
      </section>

      {/* Open-Source Projects Section */}
      {/* <section>
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
          Open-Source Projects
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://github.com/ronix"
              className="text-blue-500 hover:underline font-semibold"
            >
              Ronix
            </a>
            <span className="text-gray-600"> - Linux music player and library manager</span>
          </li>
          <li>
            <a
              href="https://github.com/faq"
              className="text-blue-500 hover:underline font-semibold"
            >
              My FAQ Page
            </a>
            <span className="text-gray-600"> - An FAQ Page generator web app</span>
          </li>
          <li>
            <a
              href="https://github.com/unopack"
              className="text-blue-500 hover:underline font-semibold"
            >
              UnoPack
            </a>
            <span className="text-gray-600"> - Minecraft modpack bundler</span>
          </li>
        </ul>
      </section> */}
    </div>
  );
};

export default Resume;
