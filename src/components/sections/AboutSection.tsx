import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 bg-secondary/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
              Our Story of Growth
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Harvest Hub began with a simple idea: everyone deserves access to fresh, healthy, and sustainably grown food. What started as a small family farm has blossomed into a community of growers and food lovers, all dedicated to the principles of organic farming and environmental stewardship.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe in transparency from seed to harvest. Our farming practices are designed to enrich the soil, promote biodiversity, and deliver produce that is not only delicious but also packed with nutrients. We invite you to taste the difference that passion and care can make.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Smiling farmer holding a basket of fresh vegetables"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="farmer vegetables"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
