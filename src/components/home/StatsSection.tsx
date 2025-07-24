import { BookOpen, Users, Award, Truck } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "10,000+",
      label: "Books Available",
      description: "Carefully curated collection"
    },
    {
      icon: Users,
      value: "50,000+",
      label: "Happy Readers",
      description: "Satisfied customers nationwide"
    },
    {
      icon: Award,
      value: "500+",
      label: "Local Authors",
      description: "Supporting Kenyan literature"
    },
    {
      icon: Truck,
      value: "24hrs",
      label: "Fast Delivery",
      description: "Within Nairobi metro area"
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Why Choose Smave Books?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of book lovers who trust us for quality books, 
            exceptional service, and unmatched convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-foreground">
                  {stat.value}
                </h3>
                <p className="font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;