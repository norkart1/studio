"use client";

import { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { products, recipes, type Recipe } from '@/lib/data';
import RecipeDisplay from '@/components/RecipeDisplay';

export default function RecipeSection() {
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0].id);

  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
  };

  const selectedRecipe = recipes.find(recipe => recipe.productId === selectedProductId);

  return (
    <section id="recipes" className="py-12 md:py-24 bg-secondary/20">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <ChefHat className="mx-auto h-12 w-12 text-accent" />
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary mt-4">
            AI-Powered Recipe Ideas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Don't know what to cook? Select a product and let our AI suggest a delicious recipe for you.
          </p>
        </div>
        <div className="max-w-sm mx-auto mb-8">
          <Select onValueChange={handleProductChange} defaultValue={selectedProductId}>
            <SelectTrigger className="w-full text-lg h-12">
              <SelectValue placeholder="Select a produce..." />
            </SelectTrigger>
            <SelectContent>
              {products.map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="mt-8">
          {selectedRecipe ? (
            <RecipeDisplay recipe={selectedRecipe} />
          ) : (
            <p className="text-center text-muted-foreground">Select a product to see a recipe.</p>
          )}
        </div>
      </div>
    </section>
  );
}
