import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Github, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  Heart,
  ArrowRight
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const footerLinks = {
    "Product": [
      { label: "Text Editor", href: "#" },
      { label: "Photo Editor", href: "#" },
      { label: "Video Editor", href: "#" },
      { label: "All Tools", href: "#" },
    ],
    "Company": [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
    "Resources": [
      { label: "Tutorials", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Templates", href: "#" },
    ],
    "Legal": [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
              Stay Updated with New Tools
            </h3>
            <p className="text-white/80 mb-6">
              Get notified when we launch new editing tools and features. No spam, just the good stuff.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-white/90 transition-smooth">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">EditorHub</span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Professional online editing tools for creators, developers, and businesses. 
              Edit anything, anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background transition-smooth text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-background/70 text-sm mb-4 sm:mb-0">
            <span>© 2024 EditorHub. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for creators worldwide.</span>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-background/70 hover:text-background transition-smooth">
              Status
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-smooth">
              Security
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-smooth">
              <Mail className="h-4 w-4 inline mr-1" />
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}