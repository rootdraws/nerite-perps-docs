import Image from "next/image"

export default function StoryPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-eight-bit text-[#5E2605]">Problems & Solutions:</h2>
      
      {/* <div className="relative h-[33vh] w-full overflow-hidden rounded-lg border-2 border-[#DC940F]">
        <Image
          src="/placeholder-1.jpg"
          alt="Problems"
          fill
          className="object-cover"
        />
      </div> */}

      {/* Problems: Question 1 */}
      <h3 className="text-lg text-[#5E2605]/80">Q: What Problems does Nerite Perps Solve?</h3>

      {/* Problems: Answer 1 */}
      <pre className="font-mono text-sm text-[#5E2605]/80 bg-[#FFF5E1] p-4 rounded border-2 border-[#DC940F] whitespace-pre-wrap">
      {`The Problems that Nerite Perps solves are the problems of liquidity, volatility, and impermanent loss.`}
      </pre>
    </div>
  )
} 