import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const Blog = ({heading, description})=>{
  return (
    <div className="flex flex-col gap-3 my-10">
      <h4 className="text-gray-700">{heading}</h4>
      <p>
        {description}
      </p>
    </div>
  )
}

const Privacy = () => {
  interface Data {
    heading: string;
    description: string;
  }
  const content: Data[] = [
    {
      heading: "Last Updated: 25-11-2024",
      description: "Your privacy is important to us at Neural Netics. This Privacy Policy explains how we handle your information when you use our website and products."
    },
    {
      heading: "Information We Collect",
      description: "We collect your name, email address, and other details during the registration process. While users must create an account, we do not store passwords. Our system uses secure methods to verify login credentials. PayU Money may collect your payment details during the purchase process. Neural Netics does not store any payment information."
    },
    {
      heading: "How We Use Your Information",
      description: "o create your account, authenticate your identity, and grant access to our tools. To send verification emails, account updates, and respond to your inquiries. To manage and verify payments made through PayU Money."
    },
    {
      heading: "Data Security",
      description: "Neural Netics uses industry-standard encryption to protect your data. We do not store passwords or payment information, ensuring an additional layer of security for your account."
    },
    {
      heading: "Sharing of Information",
      description: "We do not sell, rent, or share your information with third parties for marketing purposes. Your information may be shared with PayU Money for payment processing. Your information may also be shared to comply with legal obligations or to protect the rights and safety of Neural Netics."
    },
    {
      heading: "Your Rights",
      description: "You can update or delete your account information at any time by contacting us. You can opt out of any communications by following the unsubscribe link in our emails."
    },
    {
      heading: "Third-Party Websites",
      description: "Our website may link to external product websites to use our tools. Neural Netics is not responsible for the privacy practices of these websites."
    },
    {
      heading: "Updates to Privacy Policy",
      description: "We may update this Privacy Policy from time to time. We will notify users of significant changes via email or through our website."
    },
    {
      heading: "Secure Payments",
      description: "All transactions made on Neural Netics are securely processed through PayU Money. PayU Money ensures your payment information is encrypted and protected. Neural Netics does not have access to your payment details."
    },
    {
      heading: "Contact",
      description: "For any questions or concerns, please contact us at [Insert Contact Email]."
    },
    {
      heading: "",
      description: "By using Neural Netics, you consent to these Terms and Conditions and Privacy Policy."
    }
  ];
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Learn how we collect, use, and protect your information securely."
      />
      <div className="container text-body-color">
          {content.map(({heading, description}, ind) => (
            <Blog key={ind} heading={heading} description={description}/>
          ))}
      </div>
    </>
  );
};

export default Privacy;
