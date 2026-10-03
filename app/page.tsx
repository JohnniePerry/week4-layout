import Card from "./components/Card";
import projects from "./data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-xl font-bold italic">
            Perry&apos;s Digital Portfolio
          </h1>

          <nav className="flex items-center gap-6 text-sm">
            <a className="transition hover:text-blue-400" href="#">
              Home
            </a>

            <a className="transition hover:text-blue-400" href="#projects">
              About
            </a>

            <a className="transition hover:text-blue-400" href="#footer">
              Contact
            </a>

            <a
              href="#"
              className="rounded-full bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
            >
              Sign Up
            </a>

            <a
              href="#"
              className="rounded-full bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700"
            >
              Login
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-sky-300 px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-950 md:text-5xl">
            Projects That Make an Impact
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg italic text-gray-800 md:text-2xl">
            Explore a collection of digital experiences created for a variety
            of clients and industries.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-block rounded-full bg-blue-700 px-12 py-3 font-semibold text-white shadow-md transition hover:bg-blue-800 hover:shadow-lg"
          >
            View Projects
          </a>
        </section>

        <section
          id="projects"
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </section>
      </main>

      <footer
        id="footer"
        className="bg-slate-950 px-6 py-6 text-center text-sm text-white"
      >
        © 2026 Perry&apos;s Digital Portfolio | WDD325
      </footer>
    </div>
  );
}