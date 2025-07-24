import { ArrowRight, BookOpen, Users, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-books.jpg";

const HeroSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "10,000+ Books",
      description: "Vast collection"
    },
    {
      icon: Users,
      title: "50K+ Readers",
      description: "Trusted community"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Across Kenya"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "M-Pesa & More"
    }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Smave Books Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                🇰🇪 Proudly Kenyan
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                Discover Your
                <span className="text-primary block">Next Great</span>
                <span className="gradient-hero bg-clip-text text-transparent">Read</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                From bestselling novels to educational resources, find the perfect book 
                to ignite your imagination and expand your knowledge. Shop with confidence 
                at Kenya's premier online bookstore.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-hero text-lg px-8 py-6">
                Browse Our Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
                Digital Books
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured books preview */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Mock book covers - these would be replaced with real book data */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`aspect-[3/4] bg-gradient-card rounded-lg book-shadow book-hover ${
                    i % 2 === 0 ? 'mt-8' : ''
                  }`}
                >
                  <div className="w-full h-full bg-book-page rounded-lg flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-primary/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;