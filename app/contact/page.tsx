import NavigationMenuDemo from '../components/Header';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-background w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavigationMenuDemo />
      <div className="contact-section container flex flex-col mx-auto sm:gap-20 gap-12 px-4 md:py-16 lg:py-20 py-12">
        <ContactForm />
      </div>
    </div>
  );
}

