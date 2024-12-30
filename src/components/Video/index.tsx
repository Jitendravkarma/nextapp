"use client";

// import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

// import ModalVideo from "react-modal-video";
// import { getImagePath } from "../image_basepath";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are here to help"
          paragraph="We’re here to help you—watch our video below to learn more about our work and our company!"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative md:aspect-[77/40] items-center justify-center">
                <iframe src="https://www.youtube.com/embed/ZqcsxURdYxU?si=nVFhsXNDipYosGZE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-60 sm:h-72 md:h-96 lg:h-[26rem]"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
