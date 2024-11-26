import { Blog } from "@/types/blog";
import { getImagePath } from "../image_basepath";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Google Search Scraper",
    paragraph:
      "Effortlessly collect valuable business information by searching Google for company websites, email addresses, phone numbers, and other essential data using this powerful web scraper tool.",
    image: getImagePath("/images/blog/blog-01.jpg"),
    videoURL:"https://www.youtube.com/watch?v=xJsktXJfZZ8",
    demoURL:"https://webcrawlerspider.com/signup"
  },
  {
    id: 2,
    title: "Google Maps Scraper",
    paragraph:
      "Maximize your business outreach by extracting contact details, including emails, phone numbers, and websites from Google Maps using this advanced scraping tool for better targeting results.",
    image: getImagePath("/images/blog/blog-02.jpg"),
    videoURL:"https://www.youtube.com/watch?v=BhI2KKoSj3Y",
    demoURL:"https://webcrawlerspider.com/signup"
  },
  {
    id: 3,
    title: "Website Data Scraper",
    paragraph:
      "Leverage our efficient data scraping software to gather vast amounts of country-specific web records, including domain names, contact emails, and phone numbers for research purposes.",
    image: getImagePath("/images/blog/blog-03.jpg"),
    videoURL:"https://www.youtube.com/watch?v=_sXWe4U2Cz8",
    demoURL:"https://webcrawlerspider.com/signup"
  },
];
export default blogData;
