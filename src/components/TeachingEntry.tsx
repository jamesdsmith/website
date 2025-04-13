type Props = {
  title: string;
  location: string;
  semester: string;
  role: string;
  award?: string;
};

export default function TeachingEntry({ title, location, semester, award }: Props) {
  return (
    <li className="group border-l-4 border-gray-300 pl-4 mb-4 hover:border-green-500 transition-colors duration-200">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm text-gray-600">
        {semester}, {location}
      </div>
      {award && <div className="text-sm text-gray-500 italic">{award}</div>}
    </li>
  );
}
