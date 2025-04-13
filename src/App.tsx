import data from "./data/data.json";
import { AwardType, Project } from "./components/Project";
import { SocialLink } from "./components/SocialLink";

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
            <SocialLink url="cv-james-smith.pdf" title="CV" />
            <SocialLink url="https://github.com/jamesdsmith" title="GitHub" />
            <SocialLink url="https://linkedin.com/in/jdsmithcoder" title="LinkedIn" />
            <SocialLink url="https://scholar.google.com/citations?user=qm5jHocAAAAJ" title="Google Scholar" />
            <SocialLink url="mailto:james.smith@berkeley.edu" title="Email" />
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

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="space-y-4">
          {data.projects.map((project, idx) => (
            <Project key={idx} {...project} award={project.award as AwardType} />
          ))}
        </div>
      </section>
      <section>
        {/* mentees, listed in data.mentees */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mentorship</h2>
        <p className="mb-4">
          I am always interested in hearing from undergraduates who are interested in doing AR/VR related research. My
          goal is to support undergraduate researchers that are interested in pursuing graduate education.
        </p>
        <div className="space-y-4">
          <ul className="space-y-2">
            {data.mentees.map((mentee) => (
              <li key={mentee.url}>
                <a
                  href={mentee.url}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {mentee.name}
                </a>{" "}
                <span className="text-gray-500">({mentee.outcome})</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
