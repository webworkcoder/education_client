"use client";

import BannerImage from "@/components/common/readmore/BannerImage";
import Breadcrumb from "@/components/common/readmore/Breadcrumb";
import GuidanceCard from "@/components/common/readmore/GuidanceCard";
import LinkList from "@/components/common/readmore/LinkList";
import InfoCard from "@/components/common/readmore/InfoCard";
import UniversityHeroCard from "@/components/common/readmore/UniversityHeroCard";
import { uzbekistanUniversities, chinaUniversities } from "@/data/universities";
import { useParams } from "next/navigation";
import Description from "@/components/common/readmore/Desription";
import CountryFaq from "@/components/common/readmore/CountryFaq";
import Tags from "@/components/common/readmore/Tags";
import { useEffect, useRef, useState } from "react";

const UniversityDetails = () => {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const allUniversities = [...uzbekistanUniversities, ...chinaUniversities];

  const university = allUniversities.find((item) => item.slug === slug);

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current) return;

      const rect = sidebarRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When bottom of sidebar reaches viewport bottom
      if (rect.bottom <= windowHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!university) {
    return <div>University not found</div>;
  }

  return (
    <section>
      <UniversityHeroCard university={university} />

      <Breadcrumb
        items={[
          { label: "Home", href: "#/" },
          {
            label: university.location || "Unknown",
            href: "#/",
          },
          { label: university.title || "Unknown", href: "#/" },
        ]}
      />
      <div className="flex flex-col lg:flex-row items-start gap-6 px-4 md:px-8 mt-10 pb-25">
        <div className="w-full lg:w-2/3 mt-4">
          <BannerImage image={university.collegeimg} />
          <Description />
          <CountryFaq />
          {university.tags && <Tags tags={university.tags} />}
        </div>
        <div className="hidden lg:block w-px bg-gray-300 self-stretch mt-5"></div>
        {/* <div className="w-full lg:w-1/3 "> */}
        <div className="w-full lg:w-1/3 sticky top-20 self-start">
          <InfoCard
            university={{
              title: university.righttitle ?? "Default Title",
              description:
                university.rightdescription ?? "No description available",
              image: university.rightimage ?? "/logo.png",
              list: university.rightlist ?? [],
            }}
          />
          <LinkList
            title="Universities In Russia"
            items={university.rightlistlink ?? []}
          />
          {university.guidanceCard && (
            <GuidanceCard
              image={university.guidanceCard.image}
              title={university.guidanceCard.title}
              description={university.guidanceCard.description}
              buttonText={university.guidanceCard.buttonText}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default UniversityDetails;
