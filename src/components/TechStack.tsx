const categories = [
  {
    title: '💻 Languages',
    icons: ['python', 'typescript', 'go', 'cs', 'dart', 'php', 'bash', 'markdown', 'pytorch', 'js', 'html', 'css'],
    perline: 4,
  },
  {
    title: '🗄️ Databases',
    icons: ['postgresql', 'mysql', 'sqlite', 'cassandra', 'mongodb', 'firebase'],
    perline: 3,
  },
  {
    title: '🧱 Frameworks & Libraries',
    icons: ['react', 'nextjs', 'nestjs', 'angular', 'tailwind', 'bootstrap', 'django', 'flask', 'laravel', 'dotnet', 'unity', 'astro'],
    perline: 4,
  },
  {
    title: '🔧 Dev Tools',
    icons: ['git', 'github', 'docker', 'kubernetes', 'nodejs', 'npm', 'pnpm', 'powershell', 'postman', 'vite'],
    perline: 5,
  },
  {
    title: '🎨 Design & Productivity',
    icons: ['figma', 'notion', 'obsidian'],
    perline: 6,
  },
  {
    title: '🧑‍💻 IDEs',
    icons: ['vscode', 'visualstudio', 'arduino', 'neovim', 'vim', 'sublime'],
    perline: 3,
  },
  {
    title: '🖥️ Operating Systems',
    icons: ['linux', 'ubuntu', 'arch', 'debian', 'kali', 'windows'],
    perline: 6,
  },
  {
    title: '📚 Learning',
    icons: ['flutter', 'solidity', 'fastapi'],
    perline: 6,
  },
];

const TechStack = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8">🧰 Tech Toolbox</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="flex-1 min-w-[280px] max-w-[320px] md:basis-[45%] lg:basis-[40%] xl:basis-[30%] p-2"
          >
            <div
              className="bg-[#0C0E1A] rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40"
            >
              <h3 className="text-xl font-semibold mb-2 text-center text-white">{cat.title}</h3>
              <a href="https://skillicons.dev" target="_blank" rel="noreferrer">
                <img
                  src={`https://skillicons.dev/icons?i=${cat.icons.join(',')}&perline=${cat.perline}`}
                  alt={cat.title}
                  className="mx-auto"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
