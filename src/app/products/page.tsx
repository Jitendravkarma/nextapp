import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const Products = () => {
  return (
    <>
      <Breadcrumb
        pageName="Product"
        description="Explore our two premium products designed to meet all your needs—browse now and find your perfect match."
      />
      <AboutSectionOne />
      <Features />
      <div className="text-center mb-14 flex px-9">
        <img src={"/images/product/grow-webcrawler.png"} alt="Product brief" className="border border-gray-500 mx-auto w-[700px]"/>
      </div>
    </>
  );
};

export default Products;
