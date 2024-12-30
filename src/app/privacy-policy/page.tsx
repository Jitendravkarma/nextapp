import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import { getImagePath } from "@/components/image_basepath";
import { FaPrint } from "react-icons/fa";
import TableContext from "@/components/Terms/tableContext";
import Print from "@/components/Terms/print";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const Privacy = () => {
  interface Data {
    heading: string;
    description: string;
  }
  const content: Data[] = [
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
  const tableData = [
    {title: "Shipping Policy", description:
      <span>
        At Neuralnetics Private Ltd, we are dedicated to providing immediate access to our services. Once your payment is successfully processed through PayU Money, you will receive an access code. This code can be applied in your dashboard&apos;s profile under the purchase key input. Upon activation, you can start using our services right away.
      </span>
    },
    {title: "Cancellation Policy", description:
      <span>
        Since access to our services is granted immediately after purchase, cancellations are only possible if the access code has not been used. If you wish to cancel your order, please contact our customer support at [contact information] before applying the access code. Once the code has been activated, cancellations are no longer possible.
      </span>
    },
    {title: "Return and Refund Policy", description:
      <span>
        Your satisfaction is important to us. If you&apos;re not completely satisfied with our services, we offer the following: <br />
        <b>Refund Eligibility:</b> Refund requests must be made within 3 to 5 days of purchase, and the access code must remain unused. Used access codes are not eligible for refunds. <br />
        <b>How to Request a Refund:</b> Contact us at [contact information] with your order details. We will verify that the access code has not been activated and process your refund accordingly. <br />
        <b>Refund Processing Time:</b> Approved refunds will be processed through PayU Money and may take [X] business days to reflect in your account.
      </span>
    }
  ]
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Your Privacy, Our Priority in Delivering Transparent and Secure Data Protection Practices."
      />
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Commitment to Your Privacy and Security
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            className="fill-current"
                          >
                            <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                            <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                            <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                            <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                            <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                            <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                            <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                            <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                          </svg>
                        </span>
                        25 Nov 2024
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <Print/>
                  </div>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Welcome to <b>Neuralnetics Private Ltd</b>. Your privacy is critically important to us, and this Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you disagree with any part of this Privacy Policy, you must discontinue using our services.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/50]">
                      <Image
                        src={getImagePath("/images/privacy/privacy.jpg")}
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {
                    content.map(({heading, description}, ind)=>(
                      <div className="my-5" key={ind}>
                        <h4 className="font-xl mb-3 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">{heading}</h4>
                        <p id={heading === "Contact" ? "privacy" : ""} className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                          {description}
                        </p>
                      </div>
                    ))
                  }

                  {/* table context */}
                    <TableContext data={tableData}/>
                  {/* table context */}

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  By using our services, you agree to this Privacy Policy. Thank you for trusting <b>Neuralnetics Privact Limited</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
