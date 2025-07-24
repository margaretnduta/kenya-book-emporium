import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/data/mockData";

const CategoriesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection organized by genres and topics to help you 
            find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="group cursor-pointer book-hover bg-gradient-card border-0 book-shadow overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-48 bg-primary/5 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary/60" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {category.bookCount.toLocaleString()} books
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between p-0 h-auto text-primary hover:text-primary/80"
                  >
                    Explore Category
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2">
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;