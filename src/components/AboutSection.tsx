const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-6 opacity-0 animate-slide-up">
            <h2 className="text-book-darkGray text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Book</h2>
            <div className="space-y-4 text-book-darkGray">
              <p className="leading-relaxed">
                Most tech books get straight to the code. They show you how to implement a thing, but not how to convince anyone it's a good idea in the first place. I wanted to write something different.
              </p>
              <p className="leading-relaxed">
                If you're an engineer, architect, or leader trying to push for Event-Driven Architecture (EDA), this book is for you. <span className="font-semibold text-book-secondary">Shift</span> is the playbook I wish I’d had. It’s packed with the strategies I figured out while creating AsyncAPI and working to make it a global standard.
              </p>
              <p className="leading-relaxed">
              I learned that having the best tech doesn't matter if you can't get people on board. This book closes that gap. It links the technical vision of EDA to the practical, human challenge of changing how your company builds software. It’s your guide to leading that change successfully.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-book-darkGray text-2xl font-bold">This book uniquely equips you to:</h3>
              <ul className="space-y-4">
                {[
                  <span><strong>Win the argument for change.</strong> You’ll learn how to effectively champion EDA inside your organization. I'll give you the talking points and strategies to convince stakeholders that this is a change worth making.</span>,
                  <span><strong>Stop creating technical debt.</strong> Forget about ad-hoc solutions that will bite you later. I'll teach you how to design event-driven systems with foresight, using the core ideas from AsyncAPI to make sure they're robust and play well with everything else.</span>,
                  <span><strong>Navigate the implementation maze.</strong> Pushing code is one thing; making it work in a big enterprise is another. You'll get practical insights drawn from how AsyncAPI is evolving and being used today, so you can launch with impact.</span>,
                ].map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-book-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-book-darkGray">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-book-darkGray text-2xl font-bold">Key Topics</h3>
              <ul className="space-y-4">
                {[
                  "Selling the Vision: How to get buy-in from leadership by talking about business impact, not just tech.",
                  "Winning Over the Skeptics: How to manage organizational friction and turn resistance into support.",
                  "Adopting EDA Without Breaking Everything: Practical technical strategies for a gradual and safe rollout.",
                  "Picking the Right Tech Stack: How to make smart choices on brokers, protocols, and tools for your company’s needs.",
                  "Showing the Real Value: How to measure what matters and prove that the shift to EDA is paying off.",
                  "Learning from Common Mistakes: A breakdown of where teams usually get stuck and how you can get ahead of it.",
                  "Going from One Team to an Entire Org: How to effectively scale your practices and expertise as you grow."
                ].map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-book-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    </div>
                    <span className="text-book-darkGray">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-8 opacity-0 animate-slide-up animate-delay-300">
            <div className="space-y-2">
              <h3 className="text-book-darkGray text-2xl font-bold">Table of Contents</h3>
              <p className="text-book-darkGray text-md">Get a sneak peek at what's inside.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {/* Foreword & Introduction */}
                <div className="space-y-2">
                  <h4 className="text-book-darkGray text-md font-semibold">Foreword</h4>
                  <h4 className="text-book-darkGray text-md font-semibold">Introduction</h4>
                </div>

                {/* Foundational Strategies */}
                <div className="space-y-3">
                  <h4 className="text-book-darkGray text-md font-semibold">Foundational Strategies: Setting the Stage for Success</h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-book-darkGray">Strategy 1: Discovering Strategic Value</li>
                    <li className="text-book-darkGray">Strategy 2: Mapping the Stakeholder Landscape</li>
                    <li className="text-book-darkGray">Strategy 3: Crafting a Compelling Narrative</li>
                  </ul>
                </div>

                {/* Persuasion Strategies */}
                <div className="space-y-3">
                  <h4 className="text-book-darkGray text-md font-semibold">Persuasion Strategies: Winning Hearts, Minds, and Budgets</h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-book-darkGray">Strategy 4: Engaging the Engineering Team</li>
                    <li className="text-book-darkGray">Strategy 5: Addressing Developer Concerns</li>
                    <li className="text-book-darkGray">Strategy 6: Securing Leadership Backing</li>
                  </ul>
                </div>

                {/* Early Win & Proof Point Strategies */}
                <div className="space-y-3">
                  <h4 className="text-book-darkGray text-md font-semibold">Early Win & Proof Point Strategies: Designing for Initial Impact</h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-book-darkGray">Strategy 7: Selecting the Strategic Pilot</li>
                    <li className="text-book-darkGray">Strategy 8: Maximizing Pilot Project Impact</li>
                    <li className="text-book-darkGray">Strategy 9: Broadcasting Early Successes</li>
                    <li className="text-book-darkGray">Strategy 10: Communicating Early Failures</li>
                    <li className="text-book-darkGray">Strategy 11: Building Trust with Clear Contracts & Documentation</li>
                    <li className="text-book-darkGray">Strategy 12: Implementing Incremental Schema Governance</li>
                  </ul>
                </div>

                {/* Implementation & Scaling Strategies */}
                <div className="space-y-3">
                  <h4 className="text-book-darkGray text-md font-semibold">Implementation & Scaling Strategies: Making EDA Stick and Grow</h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-book-darkGray">Strategy 13: Navigating Legacy System Integration</li>
                    <li className="text-book-darkGray">Strategy 14: Managing EDA Complexity</li>
                    <li className="text-book-darkGray">Strategy 15: Championing Internal Developer Platforms</li>
                    <li className="text-book-darkGray">Strategy 16: Establishing Practical EDA Governance</li>
                    <li className="text-book-darkGray">Strategy 17: Fostering a Community of Practice</li>
                    <li className="text-book-darkGray">Strategy 18: Demonstrating Ongoing Value</li>
                  </ul>
                </div>

                {/* Cultural & Long-Term Strategies */}
                <div className="space-y-3">
                  <h4 className="text-book-darkGray text-md font-semibold">Cultural & Long-Term Strategies: Embedding the Shift Organization-Wide</h4>
                  <ul className="space-y-2 ml-6">
                    <li className="text-book-darkGray">Strategy 19: Enabling Organization-Wide Adoption</li>
                    <li className="text-book-darkGray">Strategy 20: Amplifying Success Stories</li>
                    <li className="text-book-darkGray">Strategy 21: Cultivating Psychological Safety</li>
                    <li className="text-book-darkGray">Strategy 22: Leading Continuous Evolution</li>
                  </ul>
                </div>

                {/* Conclusion & Resources */}
                <div className="space-y-2">
                  <h4 className="text-book-darkGray text-md font-semibold">Conclusion: Your Enduring Role as an EDA Catalyst</h4>
                  <h4 className="text-book-darkGray text-md font-semibold">Resources</h4>
                  <h4 className="text-book-darkGray text-md font-semibold">Acknowledgments</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
