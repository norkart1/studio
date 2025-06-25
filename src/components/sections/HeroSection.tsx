import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center text-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A vibrant, sunlit farm with rows of fresh produce"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        data-ai-hint="farm produce"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 container px-4 md:px-6 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            From Our Farm to Your Table
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            Experience the taste of freshness. We deliver locally-sourced, organic produce right to your doorstep.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary-foreground/50 transition-all duration-300 hover:scale-105 hover:border-primary-foreground">
              <Link href="#products">Explore Our Produce</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
