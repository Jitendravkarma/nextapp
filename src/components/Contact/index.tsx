import Image from "next/image";
import ContactForm from "./form";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <ContactForm/>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <Image width={450} height={600} alt="contact" src={"/images/contact/contact.png"} className="w-full"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
