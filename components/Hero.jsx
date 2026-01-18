import { Button } from "@/components/ui/button";
import Link from "next/link"
import {ArrowUpRight, Compass} from "lucide-react"

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-28 py-14 text-center">
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
            Share What You&apos;ve Built, Discover What&apos;s Launching
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            A community platform for creators to showcase their apps, AI tools,
            SaaS products, and creative projects. Authentic launches, real
            builders, genuine feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="text-base px-8 shadow-lg">
              <Link href="/submit">
                <Compass className="size-5" />
                WorkSpace
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-base px-8 shadow-lg"
              variant="secondary"
            >
              <Link href="/explore">
                Github <ArrowUpRight  className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero