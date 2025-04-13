import data from "./data/data.json";
import { AwardType, Project } from "./components/Project";
import { SocialLink } from "./components/SocialLink";
import TeachingEntry from "./components/TeachingEntry";
import { Section } from "./components/Section";

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

      <Section title="Research">
        <p className="mt-2">
          My research broadly examines how emerging technologies give rise to new forms of media and the unique
          affordances these mediums offer. I am particularly interested in exploring how these technologies can foster
          new modes of interactivity and enhance human creativity.
        </p>
        <p className="mt-2">
          My dissertation work explores the sense of presence and embodiment in computer systems, focusing on how
          digital tools can feel like extensions of our bodies, particularly in <strong>Virtual Reality</strong>{" "}
          interfaces. I study multi-body VR interfaces that allow users to extend their body schema into multiple bodies
          and perform coordinated tasks, connecting theories from Human-Computer Interaction, Embodied Cognition, and
          Phenomenology.
        </p>
        <p className="mt-2">
          Lately I have been interested in what new types of media <strong>Generative AI</strong> can enable. I have
          explored Large Lanuage Models as a co-creator of interactive experiences, and new ways for artists to express
          their intent with diffusion models.
        </p>
      </Section>

      <Section title="Projects">
        <div className="space-y-4">
          {data.projects.map((project, idx) => (
            <Project key={idx} {...project} award={project.award as AwardType} />
          ))}
        </div>
      </Section>

      <Section title="Mentorship">
        <div className="space-y-4 mb-4">
          <p>
            My goal is to support undergraduates that want to pursue graduate education. I am always interested in
            hearing from undergraduates who would like to help contribute to my research. If you plan to reach out,
            please let me know something specific about one of my projects that you find interesting!
          </p>
          <p>I have mentored the following undergrads</p>
        </div>
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
      </Section>

      <Section title="Teaching">
        <div className="space-y-4 mb-4">
          <p>
            I have taught the following courses at UC Berkeley. I am always looking for new ways to improve my teaching
            and would love to hear from students about their experience in my classes.
          </p>
        </div>
        <div>
          <ul className="space-y-2">
            {data.teaching.map((entry, idx) => (
              <TeachingEntry key={idx} {...entry} />
            ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}

export default App;
