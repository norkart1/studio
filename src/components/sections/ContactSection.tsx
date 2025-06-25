import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactMethods = [
  {
    icon: MapPin,
    title: 'Our Farm',
    value: '123 Farm Road, Greenfield, USA',
    href: '#',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '(123) 456-7890',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@harvesthub.com',
    href: 'mailto:info@harvesthub.com',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have questions or want to learn more about our farm? We'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <a key={index} href={method.href} className="group">
              <Card className="h-full text-center p-6 transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl mt-4">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{method.value}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
