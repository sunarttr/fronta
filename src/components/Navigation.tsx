import { useState, useEffect } from "react";
import { Sparkles, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Özellikler", href: "#features" },
    { name: "Sektörler", href: "#sectors" },
    { name: "Ön Kayıt", href: "https://calendly.com/dayyillc/30min", external: true },
  ];

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "w-[85%] max-w-3xl" 
          : "w-[90%] max-w-4xl"
      }`}
    >
      <div className={`rounded-2xl transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border border-border/50"
          : "bg-white/90 backdrop-blur-lg shadow-md border border-border/40"
      }`}>
        <div className="mx-auto h-16 px-6">
          <nav className="flex items-center justify-between h-full">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Asisteye
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
              <Button size="sm" className="rounded-xl text-sm font-semibold px-6 shadow-md hover:shadow-lg transition-all duration-300">
                Demo İzle
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-white/95 backdrop-blur-xl">
                  <div className="flex flex-col gap-6 mt-12">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Button className="rounded-xl mt-4">Demo İzle</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;