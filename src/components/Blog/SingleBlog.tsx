import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, videoURL, demoURL } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={demoURL}
          target="_blank"
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={demoURL}
              target="_blank"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-center">
            <div className="w-full md:w-auto mr-0 sm:mr-5 flex items-center border-r border-body-color border-opacity-10 pr-0 sm:pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <Link
                href="https://webcrawlerspider.com/signup"
                target="_blank"
                className="w-full md:w-auto text-center rounded-sm bg-primary py-4 px-8 sm:p-4 lg:px-6 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Try It Now
              </Link>
            </div>
            <div className="inline-block w-full md:w-auto">
              <Link
                href={videoURL}
                target="_blank"
                className="flex gap-2 justify-center items-center text-center rounded-sm border py-4 px-8 sm:p-4 lg:px-6 text-base font-semibold text-black duration-300 ease-in-out hover:border-red-500"
              >
                Watch on <FaYoutube className="text-red-500 text-2xl"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
