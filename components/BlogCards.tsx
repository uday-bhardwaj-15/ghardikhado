"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Tips for First-Time Home Buyers in 2025",
    excerpt:
      "Essential advice for navigating the property market as a first-time buyer",
    author: "Priya Sharma",
    date: "Jan 15, 2025",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    category: "Buying Guide",
  },
  {
    id: 2,
    title: "Understanding Property Valuations",
    excerpt:
      "Learn how property valuations work and what factors affect your home's worth",
    author: "Rajesh Kumar",
    date: "Jan 12, 2025",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    category: "Investment",
  },
  {
    id: 3,
    title: "Top 10 Emerging Localities in Delhi NCR",
    excerpt:
      "Discover the most promising areas for property investment in the capital region",
    author: "Anita Desai",
    date: "Jan 10, 2025",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    category: "Market Trends",
  },
];

export function BlogCards() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Latest Insights
            </h2>
            <p className="text-muted-foreground">
              Stay updated with real estate trends and tips
            </p>
          </div>
          <Button variant="outline">
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer border-border"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
