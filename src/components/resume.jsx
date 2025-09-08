export default function resume() {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-lg rounded-2xl p-8 print:p-0 print:shadow-none">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-wide">CHRISTIAN</h1>
          <h2 className="text-2xl font-semibold text-gray-600">MEDINILLA</h2>
          <p className="mt-2 font-medium text-indigo-700">Software Engineer</p>
        </div>

        <div className="text-sm text-gray-600 md:text-right">
          <p>Guadalajara, Mexico</p>
          <p className="mt-1">cu.medinilla@gmail.com</p>
          <p className="mt-1">+52 3317780414</p>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column (main content) */}
        <section className="md:col-span-2">
          {/* Profile */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold border-b pb-1">Profile</h3>
            <p className="mt-3 text-sm leading-relaxed">
              Experienced Software Developer adept in bringing forth expertise in design,
              installation, testing and maintenance of software systems. Proficient in
              various platforms, languages, and front end frameworks. Experienced with the
              latest cutting edge development tools and procedures. Adept in making key
              decisions and working with other professionals to achieve goals and solve
              problems. Experienced in managing employee and dedicated to successfully directing
              business operations.
            </p>
          </div>

          {/* Employment history */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold border-b pb-1">Employment History</h3>
            <ul className="mt-3 space-y-4">
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Staff Engineer, Global Logic</p>
                    <p className="text-sm text-gray-600">July 2025 — Present</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Front End Engineer, Neighborbrite (Freelance)</p>
                    <p className="text-sm text-gray-600">May 2025 — August 2025</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Practice Director, Apex Systems</p>
                    <p className="text-sm text-gray-600">January 2022 — July 2025</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Tech manager, Apex Systems</p>
                    <p className="text-sm text-gray-600">November 2020 — December 2021</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Tech Lead, Apex Systems</p>
                    <p className="text-sm text-gray-600">January 2020 — December 2020</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Tech Lead, Intersys Inc.</p>
                    <p className="text-sm text-gray-600">April 2019 — December 2019</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Sr. Full Stack Developer, Intersys Inc.</p>
                    <p className="text-sm text-gray-600">August 2017 — March 2019</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Sr. Developer, DXC Technology</p>
                    <p className="text-sm text-gray-600">April 2017 — July 2017</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Specialist Software Engineer, Hewlett Packard Enterprise</p>
                    <p className="text-sm text-gray-600">April 2016 — March 2017</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">.Net Software Developer, Softtek</p>
                    <p className="text-sm text-gray-600">October 2013 — April 2016</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Developer, Integracorp & H Consulting</p>
                    <p className="text-sm text-gray-600">June 2012 — October 2013</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold border-b pb-1">Education</h3>
            <p className="mt-3 font-medium">Systems Engineering, UNID</p>
            <p className="text-sm text-gray-600">August 2006 — August 2010</p>
          </div>
        </section>

        {/* Right column (sidebar) */}
        <aside className="md:col-span-1 bg-gray-50 p-4 rounded-lg">
          {/* Links */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm">Links</h4>
            <ul className="mt-2 text-sm text-indigo-700 space-y-1">
              <li><a href="#">Github</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="mailto:cu.medinilla@gmail.com">cu.medinilla@gmail.com</a></li>
            </ul>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm">Skills</h4>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <span className="inline-block">Decision Making</span>
              <span className="inline-block">Teamwork</span>
              <span className="inline-block">Management</span>
              <span className="inline-block">Git</span>
              <span className="inline-block">React</span>
              <span className="inline-block">AngularJS</span>
              <span className="inline-block">Ruby</span>
              <span className="inline-block">Problem Solving</span>
              <span className="inline-block">Leadership</span>
              <span className="inline-block">Front End</span>
              <span className="inline-block">Software Architecture</span>
              <span className="inline-block">NodeJS</span>
              <span className="inline-block">Javascript</span>
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
