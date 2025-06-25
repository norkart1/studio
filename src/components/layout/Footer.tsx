import Link from 'next/link';
import { Sprout, Mail, Phone, MapPin, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl text-primary">Harvest Hub</span>
            </Link>
            <p className="mt-4 text-secondary-foreground">
              Bringing the best of the farm to your table. We're passionate about fresh, sustainable, and delicious produce.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Farm Road, Greenfield, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@harvesthub.com" className="hover:text-primary">info@harvesthub.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-secondary-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-secondary-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Harvest Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
