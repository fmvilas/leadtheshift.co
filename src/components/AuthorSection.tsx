const AuthorSection = () => {
  return (
    <section id="author" className="relative py-16 md:py-18 bg-slate-900">
      <img src="/portrait.png" alt="Fran Mendez" className="hidden lg:block absolute top-0 left-0 h-full" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[3fr_4fr] lg:gap-16 xl:grid-cols-[1fr_2fr] items-center">
          <div></div>
          <div className="space-y-6 opacity-0 animate-slide-up animate-delay-300">
            <div>
              <h4 className="text-book-lightGreen/70 text-lg font-medium">Meet the Author</h4>
              <h2 className="text-book-lightGreen/90 text-3xl font-bold tracking-tighter mt-1">Fran M&eacute;ndez</h2>
              <p className="text-book-lightGreen/90 mt-2">
                Creator of AsyncAPI
              </p>
            </div>
            <div className="space-y-4 text-slate-400">
              <p className="leading-relaxed">
                My journey with event-driven architecture wasn't theoretical. I created <a href="https://asyncapi.com" target="_blank" rel="noopener noreferrer" className="text-book-lightGreen font-bold no-underline hover:underline decoration-1 underline-offset-2 transition-colors">AsyncAPI</a> because I was dealing with the real-world mess of distributed systems and couldn't find a good way to manage it. I needed a way to bring order to the chaos.
              </p>
              <p className="leading-relaxed">
                Turning that idea into the AsyncAPI Initiative, and eventually a Linux Foundation project, taught me a ton. The biggest lesson? Building great technology is only half the battle. The other half—the harder half—is getting people to understand, adopt, and agree on it. I had to learn how to navigate corporate pushback, build a community, and create a standard from scratch.
              </p>
              <p className="leading-relaxed">
                This book is where I share everything I learned from that process. It's not just about the tech; it's the playbook of battle-tested strategies that helped teams all over the world succeed with EDA, even when it felt like an uphill climb. You can learn more about my work at <a href="https://fmvilas.me" target="_blank" rel="noopener noreferrer" className="text-book-lightGreen font-bold no-underline hover:underline decoration-1 underline-offset-2 transition-colors">fmvilas.me</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
