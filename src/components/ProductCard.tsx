import Image from 'next/image';
import type { Product } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
      <CardHeader>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full h-full"
              data-ai-hint={product.aiHint}
            />
        </div>
        <CardTitle className="mt-4 font-headline text-xl">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm">Detailed Info</AccordionTrigger>
            <AccordionContent className="text-sm space-y-2 text-muted-foreground">
              <p><strong>Origin:</strong> {product.origin}</p>
              <p><strong>Farming:</strong> {product.farmingPractices}</p>
              <p><strong>Nutrition:</strong> {product.nutritionalInfo}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        <p className="text-lg font-semibold text-primary w-full text-right">{product.price}</p>
      </CardFooter>
    </Card>
  );
}
