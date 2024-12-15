import Link from "next/link";
import Image from "next/image";
import aboutImg from "../../../public/images/about/side-image.png";
import founder from "../../../public/images/about/member1.png";
import manager from "../../../public/images/about/member2.png";
import designer from "../../../public/images/about/member3.png";
import sellerIcon from "../../../public/icon/Services1.png";
import salesIcon from "../../../public/icon/Services2.png";
import customersIcon from "../../../public/icon/Services3.png";
import revenueIcon from "../../../public/icon/Services4.png";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import Freedelvry from "@/components/free-delivery";

function Page() {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="flex gap-3 mx-5 mt-5 lg:mx-24 lg:mt-16 lg:mb-10">
        <Link className="text-gray-500" href={"/"} title="Go to Home">
          Home
        </Link>
        <p>/</p>
        <Link href={"/about"} title="About Page">
          About
        </Link>
      </div>

      {/* About Section */}
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 mt-12 mb-32">
        <Image
          className="w-full lg:w-[650px] bg-gray-200"
          src={aboutImg}
          alt="About Us Illustration"
          priority
        />
        <div className="flex flex-col w-full lg:w-1/2 justify-center gap-4 px-5 lg:px-24">
          <h1 className="text-3xl lg:text-[54px]">Our Story</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Launched in 2015, Exclusive is South Asia&apos;s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands, serving 3 million
            customers across the region.
          </p>
          <p className="text-lg text-muted-foreground">
            Exclusive offers more than 1 million products, growing rapidly. Our
            categories range from consumer electronics to fashion and home
            appliances.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:px-24 my-10">
        {[
          { icon: sellerIcon, title: "10.5k", desc: "Sellers active on our site" },
          { icon: salesIcon, title: "33k", desc: "Monthly product sales", special: true },
          { icon: customersIcon, title: "45.5k", desc: "Active customers" },
          { icon: revenueIcon, title: "25k", desc: "Annual gross sales" },
        ].map((item, index) => (
          <div
            key={`stat-${index}`}
            className={`flex flex-col gap-3 justify-center items-center rounded-sm border border-[#707070] w-full h-[230px] ${
              item.special
                ? "bg-[#db4444] text-white" // Fixed color for the second icon
                : "hover:bg-[#db4444] hover:text-white"
            } transition-all`}
          >
            <div
              className={`w-20 h-20 p-2 rounded-full ${
                item.special ? "bg-black" : "bg-[#707070]"
              } flex justify-center items-center`}
            >
              <Image
                src={item.icon}
                alt={`${item.desc} icon`}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h1 className="text-[32px] font-bold">{item.title}</h1>
            <p className="text-center">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mx-5 lg:mx-24 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { image: founder, name: "Tom Cruise", position: "Founder & Chairman" },
            { image: manager, name: "Emma Watson", position: "Managing Director" },
            { image: designer, name: "Will Smith", position: "Product Designer" },
          ].map((member, index) => (
            <div key={`team-${index}`} className="flex flex-col gap-5 items-center">
              <div className="w-[250px] h-[300px] lg:w-[350px] lg:h-[400px] bg-gray-200 flex justify-center items-center">
                <Image
                  className="object-cover"
                  src={member.image}
                  alt={`${member.name}`}
                />
              </div>
              <div className="flex flex-col leading-8 text-center">
                <h1 className="text-[24px] lg:text-[32px]">{member.name}</h1>
                <p>{member.position}</p>
                <ul className="flex items-center justify-center gap-3 mt-2">
                  <li className="text-xl">
                    <Link href={"#"} aria-label={`Twitter profile of ${member.name}`}>
                      <FiTwitter />
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link href={"#"} aria-label={`Instagram profile of ${member.name}`}>
                      <FaInstagram />
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link href={"#"} aria-label={`LinkedIn profile of ${member.name}`}>
                      <RiLinkedinLine />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 my-10">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div
                key={`dot-${index}`}
                className={`w-[14px] h-[14px] rounded-full ${
                  index === 2
                    ? "border-2 border-[#707070] bg-[#db4444]"
                    : "bg-[#707070]"
                }`}
              ></div>
            ))}
        </div>
      </div>

      {/* Free Delivery Component */}
      <Freedelvry />
    </>
  );
}

export default Page;
