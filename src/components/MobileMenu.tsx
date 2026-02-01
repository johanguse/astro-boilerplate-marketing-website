import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function MobileMenu({ navLinks }: { navLinks: Array<{ href: string; label: string }> }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col gap-4 mt-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
            <Button variant="ghost" className="w-full justify-start">
              Sign In
            </Button>
            <Button className="w-full">Start Free</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
