import Feature from "@/components/Feature";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import {
  FaBriefcase,
  FaRegPaperPlane,
  FaBullseye,
  FaBusinessTime,
  FaCircleRadiation,
  FaFlask,
} from "react-icons/fa6";

const FeatureSection = () => {
  return (
    <>
      <section className="feature-section py-14 lg:py-20">
        <div className="container">
          <SectionTitle title="Features" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <Feature
              icon={<FaBriefcase />}
              title="We are professional"
              desc="The great explorer the truth, the sed master builder human
                  happiness one rejects, dislikes pleasure."
            />
            <Feature
              icon={<FaBullseye />}
              title="We are expert"
              desc="The great explorer the truth, the sed master builder human
                  happiness one rejects, dislikes pleasure."
            />
            <Feature
              icon={<FaRegPaperPlane />}
              title="30 years of experience"
              desc="The great explorer the truth, the sed master builder human
                  happiness one rejects, dislikes pleasure."
            />
            <Feature
              icon={<FaBusinessTime />}
              title="We are professional"
              desc="The great explorer the truth, the sed master builder human
                  happiness one rejects, dislikes pleasure."
            />
            <Feature
              icon={<FaCircleRadiation />}
              title="We are expert"
              desc="The great explorer the truth, the sed master builder human
                  happiness one rejects, dislikes pleasure."
            />
            <Feature
              icon={<FaFlask />}
              title="30 years of experience"
              desc="The great explorer the truth, the sed master builder human
                  happiness one rejects, dislikes pleasure."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
