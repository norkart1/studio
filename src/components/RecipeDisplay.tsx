import type { Recipe } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type RecipeDisplayProps = {
  recipe: Recipe;
};

export default function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  return (
    <Card className="shadow-lg transition-all duration-300 animate-in fade-in-50">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="font-headline text-2xl text-primary">{recipe.name}</CardTitle>
                <CardDescription className="mt-1">{recipe.description}</CardDescription>
            </div>
            <Badge variant="outline" className="bg-accent/20 border-accent/50 text-accent-foreground shrink-0">Powered by AI</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold text-secondary-foreground mb-3">Ingredients</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="h-1 w-1 bg-accent rounded-full mr-3 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-headline text-lg font-semibold text-secondary-foreground mb-3">Instructions</h3>
            <ol className="space-y-3 text-sm list-decimal list-inside text-muted-foreground">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
