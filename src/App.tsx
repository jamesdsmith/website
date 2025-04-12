import data from "./data/data.json";
import { AwardType, Project } from "./components/Project";

function App() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-10 flex flex-col sm:flex-row items-start sm:space-x-6">
        <img src="/img/james-lisbon.png" alt="James Smith" className="w-48 h-48 rounded-xl object-cover sm:mb-0 mb-4" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">James Smith</h1>
          <p className="text-gray-600 mt-2">PhD student in Human-Computer Interaction at UC Berkeley</p>

          {/* Social links */}
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/jamesdsmith" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/jdsmithcoder" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a
              href="https://scholar.google.com/citations?user=qm5jHocAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:" + "james.smith" + "@" + "berkeley.edu";
              }}
            >
              Email
            </a>
          </div>

          <p className="text-gray-700 mt-4">
            I am a Computer Science PhD student at UC Berkeley, advised by{" "}
            <a href="https://people.eecs.berkeley.edu/~bjoern/">Björn Hartmann</a>. I completed my MS and BS in
            Electrical Engineering and Computer Science at UC Berkeley.
          </p>
          <p className="text-gray-700 mt-2">
            During my PhD, I participated in a research internship at Microsoft Research working with{" "}
            <a href="https://www.microsoft.com/en-us/research/people/awilson/">Andy Wilson</a>. I was supported by
            Accenture Labs from 2021-2024 working with <a href="https://www.linkedin.com/in/mikek">Mike Kuniavsky</a>{" "}
            and the Digital Experiences team.
          </p>
          <p className="text-gray-700 mt-2">
            As an undergrad researcher my mentor was <a href="https://eldon.io/">Eldon Schoop</a>.
          </p>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="space-y-4">
          {data.projects.map((project, idx) => (
            <Project key={idx} {...project} award={project.award as AwardType} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
