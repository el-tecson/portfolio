import ContactForm from "@/components/ui/contact-form";

export default function Contact() {
  return (
    <main className="flex flex-col gap-[50px] justify-start bg-bg min-h-screen px-mobile-scr-mg-x py-25 pt-35 sm:px-scr-mg-x">
      <h1 className="text-2xl text-txt font-bold">Contact</h1>
      <section className="w-full max-w-[800px] px-4 py-8 rounded-2xl bg-overlay shadow-sm flex flex-col sm:px-10 sm:rounded-4xl mx-auto items-stretch" id="contact-view">
        <ContactForm />
      </section>
    </main>
  );
}
