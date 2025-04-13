export type AwardType = "best-paper" | "honorable-mention";

interface ProjectProps {
  venue?: string;
  award?: AwardType;
  title: string;
  authors: { name: string; me?: boolean }[];
  image?: {
    url: string;
    alt: string;
  };
  description: string;
  acmdl?: string;
  paper?: string;
  report?: string;
  website?: string;
  video?: string;
}

export function Project({ title, authors, image, description, venue, award }: ProjectProps) {
  return (
    <div className="rounded-sm p-4 shadow-sm hover:shadow-md transition">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {image && <img src={image.url} alt={image.alt} className="w-full md:w-48 h-auto rounded-md object-contain" />}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex flex-wrap items-center mt-2">
            {authors.map((author, idx) => {
              const name = author.me ? (
                <span className="text-gray-900 font-bold">{author.name}</span>
              ) : (
                <span className="text-gray-700">{author.name}</span>
              );
              return (
                <span key={idx} className="text-sm">
                  {name}
                  {idx < authors.length - 1 && <span>,&nbsp;</span>}
                </span>
              );
            })}
          </div>
          {venue && (
            <p className="text-sm text-gray-600 mt-2 font-bold mb-2">
              {venue}
              {award && (
                <span
                  className={`text-sm font-bold rounded-md px-2 py-1 ml-2 ${
                    award === "best-paper" ? "text-yellow-900 bg-yellow-300" : "text-blue-900 bg-blue-200"
                  }`}
                >
                  {award === "best-paper" ? "Best Paper" : "Honorable Mention"}
                </span>
              )}
            </p>
          )}
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
