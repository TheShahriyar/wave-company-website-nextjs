import TeamMember from "@/components/ TeamMember";
import SectionTitle from "@/components/SectionTitle";

const TeamSection = () => {
  return (
    <section className="py-14  lg:py-20 relative">
      <div className="container">
        <SectionTitle title="Meet our team" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          <TeamMember
            image="/images/team/5.png"
            name="jane doe"
            designation="CEO"
          />
          <TeamMember
            image="/images/team/6.png"
            name="John Doe"
            designation="Developer"
          />
          <TeamMember
            image="/images/team/3.png"
            name="John Doe"
            designation="Developer"
          />
          <TeamMember
            image="/images/team/2.png"
            name="John Doe"
            designation="Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
