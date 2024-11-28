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

const Terms = () => {
  interface Data {
    heading: string;
    description: string;
  }
  
  const content: Data[] = [
    {
      heading: "Registration and Account",
      description: "Users are required to register, verify their email, and log in to access our tools. During registration, users must provide accurate and up-to-date information. We do not store passwords. Authentication is conducted securely using encrypted methods to ensure your privacy., Users are responsible for maintaining the confidentiality of their accounts and all activities performed under their account."
    },
    {
      heading: "Use of Tools",
      description: "Users must comply with all applicable laws and regulations while using our scraping tools. Our tools are provided strictly for lawful purposes. Misuse of the tools for unauthorized data scraping or activities that violate third-party rights is prohibited. Neural Netics reserves the right to restrict or terminate access to users found violating these Terms."
    },
    {
      heading: "Purchases and Payments",
      description: "To access certain tools or features, users may be required to purchase a subscription or license via PayU Money, a secure and trusted payment platform. All payment transactions are encrypted and managed by PayU Money. Neural Netics does not store your payment details. By purchasing through PayU Money, users agree to abide by its terms and conditions. Purchases are final and non-refundable unless otherwise stated."
    },
    {
      heading: "Limitations of Liability",
      description: "Neural Netics provides tools on an as is and as available basis. We are not liable for any data loss, damage, or other issues arising from the use of our tools or services. Users understand and acknowledge that scraping third-party websites may be subject to their respective terms and policies."
    },
    {
      heading: "Intellectual Property",
      description: "All content on the Neural Netics website, including software, logos, and text, is the intellectual property of Neural Netics. Unauthorized reproduction, distribution, or modification of our content is strictly prohibited."
    },
    {
      heading: "Modifications to Terms",
      description: "Neural Netics reserves the right to update or modify these Terms at any time. Continued use of our services constitutes acceptance of any changes."
    },
    {
      heading: "Termination",
      description: "We reserve the right to suspend or terminate your account at any time if you violate these Terms."
    },
    {
      heading: "Contact",
      description: "For any questions or concerns, please contact us at support@neuralnetics.io."
    }
  ];

  const tableData = [
    {title: "Our Services", description:"Our services encompass a wide range of tools and solutions designed to meet the needs of our users. These include digital tools for data extraction, lead generation, and web development resources, such as templates, scripts, and design assets. We also provide customized services tailored to individual requirements, along with reliable customer support to address technical issues and inquiries."},
    {title: "User Registration", description:
      <span>
        To access and use our services, users are required to complete the registration process by providing accurate and up-to-date information. As part of this process, we collect and securely store specific details, including your name, email address, phone number, and address. Your name helps us identify and personalize your experience, while your email address is used for communication purposes, such as sending updates, notifications, and support-related messages. We use your phone number to facilitate direct communication and verification when necessary, and your address is stored to ensure proper service delivery and to accommodate any location-specific requirements.
        <br />
        By submitting this information during registration, you consent to its collection, storage, and use in compliance with our privacy policy. It is your responsibility to ensure the accuracy of the information provided and to update it whenever necessary. Providing inaccurate or outdated details may result in restricted access to our services.
      </span>
    },
    {title: "Purchase and Payment", description:
      <span>
        When making a purchase or completing a payment on our platform, you agree to provide accurate and complete payment details to ensure the successful processing of your transaction. We collect and securely store necessary information, such as billing details, transaction records, and payment confirmation data, in accordance with our privacy policy and applicable legal standards.
        <br />
        All payments are processed through secure channels, and we utilize PayU Money as our payment gateway to facilitate transactions. It is the user&apos;s responsibility to ensure that the payment method used is valid, and sufficient funds are available to complete the transaction. In the event of a failed payment, access to the purchased services or products may be restricted until the issue is resolved.
        <br />
        We reserve the right to modify prices, apply taxes, or introduce additional charges as required. By completing a payment, you acknowledge and accept these terms and agree that all purchases are subject to our refund and cancellation policies.
      </span>
    },
    {title: "Subcriptions", description:
      <span>
        We offer flexible subscription plans to cater to the diverse needs of our users. You have the option to choose from monthly, six-month, or annual subscription plans based on your preferences and requirements. Each subscription grants you access to our services and features as outlined during the sign-up process.
        <br />
        By selecting a subscription plan, you agree to make timely payments for the chosen duration. Subscriptions are billed in advance, and the payment amount depends on the plan you select. For ease of use, all payments are processed securely, with the option to renew your subscription automatically at the end of the billing period, unless canceled prior to the renewal date.
        <br />
        You may upgrade, downgrade, or cancel your subscription at any time, subject to the terms outlined in our refund and cancellation policy. We recommend reviewing your subscription details regularly to ensure they align with your usage and preferences. By subscribing, you agree to these terms and conditions as part of your continued access to our services.
      </span>
    },
    {title: "Privacy Policy", description:
      <span>
        We are committed to protecting your personal information and ensuring transparency in how we handle your data. Our privacy policies outline the details of data collection, usage, storage, and security measures we take to safeguard your information.
        <br />
        We encourage you to review our privacy policy to better understand your rights and our practices. You can easily access it by navigating to the Privacy Policy section on our website. By using our platform, you acknowledge and agree to the terms stated in our privacy policy.
      </span>
    },
    {title: "User Data", description:
      <span>
        We prioritize the secure collection and storage of user data to provide a seamless and personalized experience on our platform. The details we save include your name, email address, phone number, and address. These details are essential for identification, communication, and service delivery.
        <br />
        Your name helps us personalize your experience, while your email address is used for account-related notifications, updates, and customer support. The phone number facilitates direct communication or verification when needed, and your address is stored to fulfill any location-specific service requirements.
        <br />
        By using our platform, you consent to the collection and storage of this data in accordance with our privacy policy, ensuring compliance with data protection standards. It is your responsibility to ensure the accuracy and currency of the information provided.
      </span>
    },
    {title: "Contact us", description:
      <span>
        We value open communication and are here to assist you with any questions, concerns, or support requests related to our services. If you need to reach out to us, you can do so through the contact details provided below or on our website.
        <br />
        You can email us directly at <b>support@designcollection.com</b> for any assistance or inquiries. Our team is committed to responding promptly and ensuring a smooth user experience. For more detailed information or specific concerns, please navigate to the Contact Us section on our website. We look forward to hearing from you and assisting in any way we can.
      </span>
    }
  ]
  return (
    <>
      <Breadcrumb
        pageName="Terms & Conditions"
        description="Understand the rules and guidelines for accessing Neural Netics and its tools."
      />
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Agreement to our Legal Terms
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
                  We are <b>Neural Netics Private Limited</b> Company, a company registered in India at Madhumilan, Indore, Madhya Pradesh 452010.
                  We operate the website https://nueralnetics.com, as well as any other related products and services that refer or link to these legal terms.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/50]">
                      <Image
                        src={getImagePath("/images/terms/terms.png")}
                        alt="image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Our Services provide multi-scraping tools, accessible only after registration, login, and email verification. These tools are hosted on a separate domain and require users to register and authenticate to ensure secure access. <br />

                  You can contact us by email at <b className="text-primary underline dark:text-white">support@neuralnetics.com</b> or by mail at Madhumilan, Indore, Madhya Pradesh 452010, India. <br />

                  These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Neural Netics, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                  </p>

                  {
                    content.map(({heading, description}, ind)=>(
                    <div className="my-5" key={ind}>
                      <h4 className="font-xl mb-3 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">{heading}</h4>
                      <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                        {description}
                      </p>
                    </div>
                    ))
                  }

                  {/* table context */}
                    <TableContext data={tableData}/>
                  {/* table context */}

                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  By using our platform, you agree to abide by these terms and conditions. For any questions or clarifications, please feel free to contact us.
                  </p>
                  {/* <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        <Image src={"/images/terms/signature.png"} alt="" width={100} height={50}/>
                        Vijay Nagar, Indore <br />
                        Madhya Pradesh 452010
                      </h4>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        <Image src={"/images/terms/certified.png"} alt="" width={120} height={100}/>
                      </h5>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
