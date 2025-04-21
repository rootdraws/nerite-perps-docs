export default function MediaKitPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Media Kit</h1>
        <p className="mt-4 text-lg text-sticky-brown/80">Official brand assets and guidelines for STICKY.MONEY.</p>
      </div>

      <div className="space-y-8">
        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Brand Assets</h2>
          <p>
            Below you'll find official STICKY.MONEY brand assets. These assets should be used according to our brand
            guidelines to ensure consistent representation of our brand.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Logos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4 flex flex-col items-center">
              <div className="h-32 w-32 bg-sticky-brown flex items-center justify-center mb-4">
                <span className="sticky-logo text-xl">STICKY.MONEY</span>
              </div>
              <p className="text-center font-medium">Primary Logo (Dark)</p>
              <div className="mt-2 flex space-x-2">
                <button className="text-sm px-3 py-1 border rounded hover:bg-muted">PNG</button>
                <button className="text-sm px-3 py-1 border rounded hover:bg-muted">SVG</button>
              </div>
            </div>
            <div className="rounded-lg border p-4 flex flex-col items-center">
              <div className="h-32 w-32 bg-sticky-cream flex items-center justify-center mb-4">
                <span className="sticky-logo text-xl">STICKY.MONEY</span>
              </div>
              <p className="text-center font-medium">Primary Logo (Light)</p>
              <div className="mt-2 flex space-x-2">
                <button className="text-sm px-3 py-1 border rounded hover:bg-muted">PNG</button>
                <button className="text-sm px-3 py-1 border rounded hover:bg-muted">SVG</button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Color Palette</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border overflow-hidden">
              <div className="h-24 bg-sticky-brown"></div>
              <div className="p-3">
                <p className="font-medium">Brown</p>
                <p className="text-sm text-sticky-brown/80">#5C2E0B</p>
                <p className="text-sm text-sticky-brown/80">RGB: 92, 46, 11</p>
              </div>
            </div>
            <div className="rounded-lg border overflow-hidden">
              <div className="h-24 bg-sticky-cream"></div>
              <div className="p-3">
                <p className="font-medium">Cream</p>
                <p className="text-sm text-sticky-brown/80">#FFEBBA</p>
                <p className="text-sm text-sticky-brown/80">RGB: 255, 235, 186</p>
              </div>
            </div>
            <div className="rounded-lg border overflow-hidden">
              <div className="h-24 bg-[#8B4513]"></div>
              <div className="p-3">
                <p className="font-medium">Accent Brown</p>
                <p className="text-sm text-sticky-brown/80">#8B4513</p>
                <p className="text-sm text-sticky-brown/80">RGB: 139, 69, 19</p>
              </div>
            </div>
            <div className="rounded-lg border overflow-hidden">
              <div className="h-24 bg-[#FFF8E1]"></div>
              <div className="p-3">
                <p className="font-medium">Light Cream</p>
                <p className="text-sm text-sticky-brown/80">#FFF8E1</p>
                <p className="text-sm text-sticky-brown/80">RGB: 255, 248, 225</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Typography</h2>
          <p>STICKY.MONEY uses the following typography:</p>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-mono font-bold text-2xl">STICKY.MONEY</p>
              <p className="text-sticky-brown/80 mt-1">Logo Font: Monospace, Bold</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-sans text-2xl font-semibold">Primary Heading</p>
              <p className="text-sticky-brown/80 mt-1">Headings: Inter, Semi-Bold</p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-sans">
                Body text sample. STICKY.MONEY is a BSC-Native Lending Co-Operative providing the deepest liquidity for
                BTCFi on Binance Smart Chain.
              </p>
              <p className="text-sticky-brown/80 mt-1">Body: Inter, Regular</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Brand Guidelines</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always use the official logo files provided in this media kit</li>
            <li>Maintain the aspect ratio of the logo when resizing</li>
            <li>Ensure sufficient contrast when placing the logo on colored backgrounds</li>
            <li>Do not modify the colors of the logo</li>
            <li>Maintain a minimum clear space around the logo equal to the height of the "S" in STICKY</li>
            <li>When referring to the protocol in text, always use all caps: STICKY.MONEY</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Press Contact</h2>
          <p>For press inquiries or additional brand assets, please contact:</p>
          <p className="font-medium">press@sticky.money</p>
        </section>
      </div>
    </div>
  )
}
