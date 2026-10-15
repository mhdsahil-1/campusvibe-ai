
type RecommendationsPageProps = {
  searchParams: Promise<{
    event?: string;
    audience?: string;
    location?: string;
    budget?: string;
  }>;
};

export default async function RecommendationsPage({
  searchParams,
}: RecommendationsPageProps) {
  const params = await searchParams;

  const event = params.event || "College Fest";
  const audience = params.audience || "College students";
  const location = params.location || "Your campus";
  const budget = params.budget || "Not specified";

  return (
    <main className="min-h-screen bg-[#080b12] px-6 py-12 text-white md:px-12">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm text-violet-400 hover:text-violet-300"
        >
          ← Back to CampusVibe AI
        </a>

        <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-violet-400">
          Your event brief
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Let's create your campus vibe.
        </h1>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold">Event details</h2>

          <dl className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-gray-400">Event type</dt>
              <dd className="mt-1 font-medium">{event}</dd>
            </div>

            <div>
              <dt className="text-sm text-gray-400">Audience</dt>
              <dd className="mt-1 font-medium">{audience}</dd>
            </div>

            <div>
              <dt className="text-sm text-gray-400">Location</dt>
              <dd className="mt-1 font-medium">{location}</dd>
            </div>

            <div>
              <dt className="text-sm text-gray-400">Budget</dt>
              <dd className="mt-1 font-medium">
                {budget === "Not specified" ? budget : `₹${budget}`}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-400/5 p-6">
          <h2 className="text-xl font-semibold">Next: personalized ideas</h2>
          <p className="mt-3 leading-7 text-gray-300">
            Your event brief is ready. The next step is to connect Qloo
            so CampusVibe AI can use cultural taste insights to help
            develop relevant music, theme, food, and activity ideas.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Qloo is not connected yet. These details are being displayed
            from your form, not from an AI recommendation engine.
          </p>
        </div>
      </div>
    </main>
  );
}

