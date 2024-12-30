import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neuralnetics Private Limited",
  description: "Discover powerful scraping tools designed for extracting valuable data from Google search results, maps, documents, and more. Efficiently gather and organize web content with our versatile scrapers for enhanced data analysis and business insights.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne layout={"right"}/>
      <AboutSectionOne layout={"left"}/>
      <Blog />
    </>
  );
}
