"use client";

import React from "react";
import { Header, Paragraph, Points, SubHeading } from "./AllTags";
import BannerImage from "./BannerImage";
import { useParams } from "next/navigation";
import { uzbekistanUniversities, chinaUniversities } from "@/data/universities";
import InfoTable from "../countries/InfoTable";

const Description = () => {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const allUniversities = [...uzbekistanUniversities, ...chinaUniversities];
  const university = allUniversities.find((item) => item.slug === slug);

  if (!university) {
    return <div>University not found</div>;
  }

  const content = university.descriptionContent;

  if (!content) {
    return <div className="p-4 text-gray-500">Description not available.</div>;
  }

  return (
    <div className="p-2">
      {/* Placement */}
      <Header title={content.placement.title} />
      {content.placement.paragraphs.map((para, i) => (
        <Paragraph key={i} para={para} />
      ))}

      {/* Alumni */}
      <SubHeading subheading={content.alumni.subheading} />
      {content.alumni.paragraphs.map((para, i) => (
        <Paragraph key={i} para={para} />
      ))}
      <Header title={university.tableheder} />
      <InfoTable data={university.tableData} />

      {/* Loan */}
      <Header title={content.loan.title} />
      <Paragraph para={content.loan.intro} />

      {/* Eligibility */}
      <SubHeading subheading={content.loan.eligibility.subheading} />
      {content.loan.eligibility.points.map((point, i) => (
        <Paragraph key={i} para={point} />
      ))}

      {/* Loan Amount */}
      <SubHeading subheading={content.loan.amount.subheading} />
      <Paragraph para={content.loan.amount.text} />

      {/* Documents */}
      <SubHeading subheading={content.loan.documents.subheading} />
      <ul className="list-disc pl-5 mt-2">
        {content.loan.documents.list.map((item, i) => (
          <Points key={i} heading={item.heading} child={item.child} />
        ))}
      </ul>

      {/* Interest */}
      <SubHeading subheading={content.loan.interest.subheading} />
      <Paragraph para={content.loan.interest.text} />

      {/* Collateral */}
      <SubHeading subheading={content.loan.collateral.subheading} />
      <Paragraph para={content.loan.collateral.text} />

      {/* Processing */}
      <SubHeading subheading={content.loan.processing.subheading} />
      <Paragraph para={content.loan.processing.text} />

      {/* Assistance */}
      <SubHeading subheading={content.loan.assistance.subheading} />
      <Paragraph para={content.loan.assistance.text} />

      {/* Banner */}
      <BannerImage image={university.collegeimg} />

      {/* FAQ */}
      <Header title={content.faq.title} />
      <Paragraph para={content.faq.text} />
    </div>
  );
};

export default Description;
