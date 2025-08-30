import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="h-32 w-32 rounded-full bg-white/10 blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <div className="h-48 w-48 rounded-full bg-white/10 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">Professional Online Editing Tools</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-heading">
            Edit Everything
            <br />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Anywhere
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional text, photo, and video editing tools in your browser. 
            No downloads required. Start creating amazing content in seconds.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <Input
                placeholder="What do you want to edit today?"
                className="pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 rounded-full text-center"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-smooth px-8 py-3 rounded-full font-semibold">
              Start Editing Free
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10 transition-smooth px-8 py-3 rounded-full font-semibold">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">1M+</div>
              <div className="text-sm text-white/70">Projects Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-white/70">Editing Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">99%</div>
              <div className="text-sm text-white/70">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}