
const eventTypes = [
  "College Fest",
  "Tech Event",
  "Cultural Night",
  "Freshers' Party",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <div className="text-xl font-bold tracking-tight">
          CampusVibe<span className="text-violet-400"> AI</span>
        </div>
        <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
          CULTURE × AI
        </span>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          ✦ Your campus. Your culture. Your vibe.
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Create campus events
          <span className="block text-violet-400">
            people actually love.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Discover the right music, themes, food, and activities for your
          campus community with culturally aware AI recommendations powered
          by Qloo.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <h2 className="text-xl font-semibold">Plan your next event</h2>
            <p className="mt-2 text-sm text-gray-400">
              Tell us what you are organizing.
            </p>

            <form action="/recommendations" method="GET" className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="event"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Event type
                </label>
                <select
                  id="event"
                  name="event"
                  defaultValue="College Fest"
                  className="w-full rounded-xl border border-white/10 bg-[#111521] px-4 py-3 outline-none focus:border-violet-400"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="audience"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Who is your audience?
                </label>
                <input
                  id="audience"
                  name="audience"
                  placeholder="e.g. 500 college students"
                  className="w-full rounded-xl border border-white/10 bg-[#111521] px-4 py-3 outline-none placeholder:text-gray-600 focus:border-violet-400"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Campus location
                </label>
                <input
                  id="location"
                  name="location"
                  placeholder="e.g. Bengaluru, India"
                  className="w-full rounded-xl border border-white/10 bg-[#111521] px-4 py-3 outline-none placeholder:text-gray-600 focus:border-violet-400"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Budget (₹)
                </label>
                <input
                  id="budget"
                  name="budget"
                  type="number"
                  min="0"
                  placeholder="e.g. 25000"
                  className="w-full rounded-xl border border-white/10 bg-[#111521] px-4 py-3 outline-none placeholder:text-gray-600 focus:border-violet-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-violet-500 px-5 py-4 font-semibold transition hover:bg-violet-400"
              >
                Generate Event Ideas →
              </button>
            </form>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-indigo-500/5 p-7">
              <p className="text-sm font-medium text-violet-300">
                THE CAMPUSVIBE APPROACH
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                More than random suggestions.
              </h2>
              <p className="mt-3 leading-7 text-gray-400">
                Build event concepts around audience interests, cultural
                affinities, and your event's practical constraints.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-2xl">🎵</div>
                <h3 className="mt-3 font-semibold">Music & Artists</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Explore music directions that fit your audience.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-2xl">🎨</div>
                <h3 className="mt-3 font-semibold">Event Themes</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Find creative themes for your campus.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-2xl">🍜</div>
                <h3 className="mt-3 font-semibold">Food & Culture</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Explore food and cultural experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="text-2xl">✨</div>
                <h3 className="mt-3 font-semibold">Activities</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Discover ideas to bring students together.
                </p>
              </div>
            </div>

            <p className="px-1 text-xs leading-5 text-gray-500">
              Qloo-powered recommendations will be connected in the next
              development step. The current page is the interface, not the
              finished recommendation engine.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-gray-500">
        CampusVibe AI · Designed for better campus experiences
      </footer>
    </main>
  );
}
