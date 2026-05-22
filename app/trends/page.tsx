export default function TrendsPage() {

  const trends = [
    {
      name: "AI Automation",
      growth: "+420%",
    },
    {
      name: "AI Influencers",
      growth: "+380%",
    },
    {
      name: "Faceless YouTube",
      growth: "+350%",
    },
    {
      name: "AI SaaS",
      growth: "+500%",
    },
  ];

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-6xl font-bold text-cyan-400 mb-6">
        AI Trends
      </h1>

      <p className="text-zinc-400 text-xl mb-12">
        Real-time AI market intelligence and future opportunities.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {trends.map((trend, index) => (

          <div
            key={index}
            className="bg-zinc-900 border border-cyan-500 rounded-3xl p-8"
          >

            <h2 className="text-3xl font-bold mb-4">
              {trend.name}
            </h2>

            <p className="text-green-400 text-2xl font-bold">
              Growth: {trend.growth}
            </p>

          </div>

        ))}

      </div>

    </main>

  );

}
