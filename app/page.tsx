export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For B2B SaaS Product Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Score customer feedback<br />by <span className="text-[#58a6ff]">revenue impact</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing which feedback matters. Feedback Priority Scorer enriches every request with contract size, churn risk, and customer value — then ranks them so you always work on what moves the needle.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get started — $28/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Ingest via API or CSV", body: "Upload feedback in bulk or push it from your CRM in real time." },
            { title: "Enrich with customer data", body: "Attach ARR, contract size, and churn risk score to every item." },
            { title: "Prioritized impact list", body: "A ranked list with composite scores so your roadmap reflects real revenue risk." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$28<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to prioritize smarter</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              "Unlimited feedback items",
              "CSV upload + REST API access",
              "Customer enrichment fields",
              "Composite impact scoring",
              "Exportable prioritized reports",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-5">
          {[
            {
              q: "How does the scoring algorithm work?",
              a: "Each feedback item receives a composite score combining feedback frequency, the submitting customer's ARR, contract size, and a churn risk multiplier. Higher-value customers with urgent signals rank at the top."
            },
            {
              q: "Can I connect my existing CRM or support tool?",
              a: "Yes. You can push feedback via our REST API from any tool that supports webhooks or HTTP requests — including Intercom, Zendesk, and HubSpot. CSV upload is also available for bulk imports."
            },
            {
              q: "Is there a free trial?",
              a: "We offer a 7-day money-back guarantee. If Feedback Priority Scorer doesn't help your team focus on the right work, contact support for a full refund — no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Feedback Priority Scorer. All rights reserved.
      </footer>
    </main>
  );
}
