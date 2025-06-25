import { products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import { Leaf } from 'lucide-react';

export default function ProductsSection() {
  return (
    <section id="products" className="py-12 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <Leaf className="mx-auto h-12 w-12 text-accent" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary mt-4">
            Our Fresh Produce
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Hand-picked and harvested with care, our produce is guaranteed to be fresh, nutritious, and delicious.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
