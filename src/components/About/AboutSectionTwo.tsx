import Image from "next/image";
import { getImagePath } from "../image_basepath";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src={getImagePath("/images/about/about-image.png")}
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Innovative Solutions
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Welcome to Neural Netics—where intelligence meets innovation. At Neural Netics, we are committed to developing advanced data scraping and automation solutions that empower businesses and professionals to unlock the full potential of data.
                </p> <br />
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our products, including Google Search Scraper, Google Maps Scraper, Document Data Scraper, and more, are designed to simplify data extraction and turn complex information into actionable insights.
                </p>
              </div>
              
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our mission is to revolutionize the way you interact with data. We strive to create powerful, efficient, and user-friendly tools that adapt to various industries and applications.
                </p> <br />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              What We Do
              </h3>
              <ul className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                <li><b>Data Scraping Solutions:</b> Extract valuable information from sources like Google Search and Google Maps to drive informed decision-making.</li>
                <li><b>Document Data Extraction:</b> Seamlessly gather and organize data from PDFs, Excel files, and other document formats.</li>
                <li><b>Automation Tools:</b> Streamline workflows and enhance productivity by automating repetitive tasks.</li>
                <li><b>Custom Solutions:</b> Offer tailored software development to meet your unique business needs.</li>
              </ul>
            </div>

            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Why Choose Neural Netics
              </h3>
              <ul className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                <li><b>Innovation:</b> We are at the forefront of technological advancements, continually updating our products to meet evolving industry demands.</li>
                <li><b>Expertise:</b> Our team consists of seasoned professionals with extensive experience in data science, machine learning, and software development.</li>
                <li><b>Customer-Centric Approach:</b> We prioritize your needs, offering exceptional support and services to ensure your success.</li>
                <li><b>Ethical Practices:</b> Committed to responsible data usage, we adhere to all legal guidelines and promote ethical standards in data handling.</li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
