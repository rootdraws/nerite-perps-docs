export default function StrategicPartnersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Strategic Partners</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">
          Learn about the key partnerships that help power STICKY.MONEY.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Partners</h2>
          <p>
            STICKY.MONEY has established strategic partnerships with leading organizations in the blockchain and DeFi
            space to enhance our lending co-operative and provide the best experience for our users.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Technology Partners</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="text-xl font-medium">Partner Name</h3>
              <p className="text-sticky-brown/80">Description of partnership and integration details.</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-xl font-medium">Partner Name</h3>
              <p className="text-sticky-brown/80">Description of partnership and integration details.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Ecosystem Partners</h2>
          <p>
            Our ecosystem partners help expand the utility and reach of STICKY.MONEY within the broader blockchain
            ecosystem.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Partner 1</strong> - Description of partnership and benefits
            </li>
            <li>
              <strong>Partner 2</strong> - Description of partnership and benefits
            </li>
            <li>
              <strong>Partner 3</strong> - Description of partnership and benefits
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
