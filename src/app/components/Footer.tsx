import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <span>by Adam</span>
          </div>

          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
