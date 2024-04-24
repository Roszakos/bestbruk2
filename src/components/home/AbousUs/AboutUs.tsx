import Image from "next/image";

import SectionTitle from "../SectionTitle";
import AboutUsItem from "./AboutUsItem";

// Icons
import { RiStarSLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <div className="bg-[#F9F9F9] py-20">
        <SectionTitle text="Dlaczego my?" />
        <div className="mt-20 flex flex-col md:flex-row gap-4 justify-stretch items-stretch max-w-[1000px] px-4 sm:px-8 m-auto">
          <AboutUsItem
            title="Doświadczenie"
            text="Przez 10 lat działalności zrealizowaliśmy około 300 prac i ułozyliśmy ponad 
                        200&nbsp;000 m2 kostki brukowej"
          >
            <RiStarSLine size="fill" />
          </AboutUsItem>
          <AboutUsItem
            title="Profesjonalizm"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra leo id massa accumsan, sit amet."
          >
            <FaPeopleGroup size="fill" />
          </AboutUsItem>
          <AboutUsItem
            title="Precyzja"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra leo id massa accumsan, sit amet."
          >
            <FaRulerCombined size="fill" />
          </AboutUsItem>
        </div>
      </div>
    </>
  );
}
