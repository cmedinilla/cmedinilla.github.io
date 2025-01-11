const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <header className="text-center border-b pb-6 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Christian Medinilla</h1>
        <p className="text-lg text-gray-600">Full Stack Developer</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://rousruiz.com" className="text-blue-500 hover:underline">
            rousruiz.com
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
            <p className="text-gray-600">TypeScript, JavaScript, Rust</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Frontend Development:</h3>
            <p className="text-gray-600">
              React, Vue, Svelte, Solid, HTMX, Alpine.js, Tailwind CSS
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">JS/TS Ecosystem:</h3>
            <p className="text-gray-600">
              Fastify, Hono, Prisma, Drizzle, tRPC, Cloudflare Workers
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Other Technologies:</h3>
            <p className="text-gray-600">Docker, Git, GraphQL, SQL, WebSockets, Redis</p>
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
              Freelance Web Developer
            </h3>
            <p className="text-sm text-gray-500">2018 - 2021</p>
            <p className="text-gray-600">
              Delivered high-quality services, managed end-to-end web development projects
              for clients from all over the world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Full Stack Developer</h3>
            <p className="text-sm text-gray-500">SPWorlds | 2021 - 2022</p>
            <p className="text-gray-600">
              Led a small team developing and maintaining an interactive web application. Moved
              the project through breaking changes. Designed a public API and an npm library.
              Worked with TypeScript, SvelteKit, Tailwind.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Full Stack Developer</h3>
            <p className="text-sm text-gray-500">Vmeste | 2022 - 2023</p>
            <p className="text-gray-600">
              Migrated an old Node.js + React codebase to a modern stack (TypeScript, Next.js,
              tRPC, Tailwind CSS). Rapidly delivered new features to both backend and frontend.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Senior Full Stack Developer</h3>
            <p className="text-sm text-gray-500">Finally Founding | 2023 - Present</p>
            <p className="text-gray-600">
              Delivered multiple unique projects. Improved app performance by removing heavy
              dependencies. Worked with React, Next.js, Tailwind, React Native.
            </p>
          </div>
        </div>
      </section>

      {/* Open-Source Projects Section */}
      <section>
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
      </section>
    </div>
  );
};

export default Resume;
