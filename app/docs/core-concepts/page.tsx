export default function CoreConceptsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Core Concepts</h1>
        <p className="mt-4 text-lg text-muted-foreground">Understanding the fundamental concepts of YourProtocol</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What is YourProtocol?</h2>
          <p>
            YourProtocol is a decentralized protocol that enables [describe your protocol's main function]. Built on
            [blockchain], it provides users with [key benefits].
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Components</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Component 1</strong> - Description of this component and its role in the protocol.
            </li>
            <li>
              <strong>Component 2</strong> - Description of this component and its role in the protocol.
            </li>
            <li>
              <strong>Component 3</strong> - Description of this component and its role in the protocol.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Protocol Mechanics</h2>
          <p>Explanation of how the protocol works, including key mechanisms, interactions, and processes.</p>
        </section>
      </div>
    </div>
  )
}
