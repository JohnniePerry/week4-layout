export default function Card({ project }) {
  return (
    <article className="flex min-h-48 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h2 className="mb-3 text-2xl font-bold text-gray-950">
        {project.title}
      </h2>

      <p className="mb-3 text-lg font-medium text-blue-700">
        {project.category}
      </p>

      <p className="text-sm text-gray-600">
        Client: {project.client}
      </p>
    </article>
  );
}