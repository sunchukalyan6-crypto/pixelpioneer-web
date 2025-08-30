import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Type, 
  Image, 
  Video, 
  FileText, 
  Palette, 
  Crop,
  Music,
  Code,
  ArrowRight,
  Star
} from "lucide-react";

const editorCategories = [
  {
    title: "Text Editors",
    description: "Professional writing and document editing",
    icon: Type,
    tools: [
      { name: "Rich Text Editor", description: "Format and style your documents", popular: true },
      { name: "Markdown Editor", description: "Write in markdown with live preview", popular: false },
      { name: "Code Editor", description: "Syntax highlighting for developers", popular: true },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Photo Editors", 
    description: "Advanced image editing and enhancement",
    icon: Image,
    tools: [
      { name: "Photo Studio", description: "Professional photo editing suite", popular: true },
      { name: "Background Remover", description: "AI-powered background removal", popular: true },
      { name: "Image Resizer", description: "Resize and optimize images", popular: false },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Video Editors",
    description: "Create and edit stunning videos",
    icon: Video,
    tools: [
      { name: "Video Studio", description: "Timeline-based video editing", popular: true },
      { name: "Screen Recorder", description: "Record your screen with audio", popular: false },
      { name: "GIF Maker", description: "Create animated GIFs from videos", popular: true },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Design Tools",
    description: "Creative design and illustration",
    icon: Palette,
    tools: [
      { name: "Graphic Designer", description: "Create logos, posters, and more", popular: true },
      { name: "Icon Creator", description: "Design custom icons and symbols", popular: false },
      { name: "Color Palette", description: "Generate beautiful color schemes", popular: false },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Audio Editors",
    description: "Edit and enhance audio files",
    icon: Music,
    tools: [
      { name: "Audio Studio", description: "Multi-track audio editing", popular: false },
      { name: "Voice Recorder", description: "Record and edit voice notes", popular: true },
      { name: "Music Mixer", description: "Mix and master your tracks", popular: false },
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Developer Tools",
    description: "Code editing and development utilities",
    icon: Code,
    tools: [
      { name: "JSON Editor", description: "Format and validate JSON data", popular: true },
      { name: "CSS Generator", description: "Generate CSS styles visually", popular: false },
      { name: "Regex Tester", description: "Test regular expressions", popular: false },
    ],
    color: "from-teal-500 to-blue-500",
  },
];

export function EditorGrid() {
  return (
    <section id="tools" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
            Choose Your Editing Tool
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From text to video, we have the perfect editor for every creative project. 
            All tools run directly in your browser with no software installation required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {editorCategories.map((category) => (
            <Card key={category.title} className="group hover-lift border-border bg-card overflow-hidden">
              {/* Header with gradient */}
              <div className={`h-24 bg-gradient-to-r ${category.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative p-6 flex items-center justify-between h-full">
                  <category.icon className="h-8 w-8 text-white" />
                  <div className="h-16 w-16 bg-white/10 rounded-full blur-xl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {category.description}
                </p>

                {/* Tools list */}
                <div className="space-y-3 mb-6">
                  {category.tools.map((tool) => (
                    <div key={tool.name} className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-foreground">{tool.name}</span>
                          {tool.popular && (
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary/5 transition-smooth"
                >
                  Explore Tools
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All 50+ Tools
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}