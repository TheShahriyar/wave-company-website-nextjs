import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container">
        <SectionTitle title="Latest Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="relative overflow-hidden group">
            <Image
              src="/images/projects/10.jpg"
              alt="Project image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="project-details bg-white py-4 px-2 sm:absolute bottom-0 left-0 w-full  text-center transition-all duration-500 sm:translate-y-full sm:group-hover:translate-y-0">
              <div className="caption">
                <h4 className="font-bold uppercase">
                  Aliquam tincidunt mauris eu risus.
                </h4>
                <span>Photography</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/images/projects/2.jpg"
              alt="Project image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="project-details bg-white py-4 px-2 sm:absolute bottom-0 left-0 w-full  text-center transition-all duration-500 sm:translate-y-full sm:group-hover:translate-y-0">
              <div className="caption">
                <h4 className="font-bold uppercase">
                  Aliquam tincidunt mauris eu risus.
                </h4>
                <span>Travel</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/images/projects/6.jpg"
              alt="Project image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="project-details bg-white py-4 px-2 sm:absolute bottom-0 left-0 w-full  text-center transition-all duration-500 sm:translate-y-full sm:group-hover:translate-y-0">
              <div className="caption">
                <h4 className="font-bold uppercase">
                  Aliquam tincidunt mauris eu risus.
                </h4>
                <span>E-commerce</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/images/projects/7.jpg"
              alt="Project image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="project-details bg-white py-4 px-2 sm:absolute bottom-0 left-0 w-full  text-center transition-all duration-500 sm:translate-y-full sm:group-hover:translate-y-0">
              <div className="caption">
                <h4 className="font-bold uppercase">
                  Aliquam tincidunt mauris eu risus.
                </h4>
                <span>Oil industry</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/images/projects/8.jpg"
              alt="Project image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="project-details bg-white py-4 px-2 sm:absolute bottom-0 left-0 w-full  text-center transition-all duration-500 sm:translate-y-full sm:group-hover:translate-y-0">
              <div className="caption">
                <h4 className="font-bold uppercase">
                  Aliquam tincidunt mauris eu risus.
                </h4>
                <span>Web service</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/images/projects/11.jpg"
              alt="Project image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="project-details bg-white py-4 px-2 sm:absolute bottom-0 left-0 w-full  text-center transition-all duration-500 sm:translate-y-full sm:group-hover:translate-y-0">
              <div className="caption">
                <h4 className="font-bold uppercase">
                  Aliquam tincidunt mauris eu risus.
                </h4>
                <span>Factory</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/images/projects/13.jpg"
              alt="Project image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="project-details bg-white py-4 px-2 sm:absolute bottom-0 left-0 w-full  text-center transition-all duration-500 sm:translate-y-full sm:group-hover:translate-y-0">
              <div className="caption">
                <h4 className="font-bold uppercase">
                  Aliquam tincidunt mauris eu risus.
                </h4>
                <span>Powerplant</span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/images/projects/16.jpg"
              alt="Project image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="project-details bg-white py-4 px-2 sm:absolute bottom-0 left-0 w-full  text-center transition-all duration-500 sm:translate-y-full sm:group-hover:translate-y-0">
              <div className="caption">
                <h4 className="font-bold uppercase">
                  Aliquam tincidunt mauris eu risus.
                </h4>
                <span>Construction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
