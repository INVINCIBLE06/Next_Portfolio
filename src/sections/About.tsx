import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import NextJSIcon from "@/assets/icons/square-js.svg";
import MongoDBIcon from "@/assets/icons/square-js.svg";
import NodeJSIcon from "@/assets/icons/square-js.svg";
import ExpressJSIcon from "@/assets/icons/square-js.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolBoxItems";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  // {
  //   title: "Node.js",
  //   iconType: JavaScriptIcon,
  // },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  // {
  //   title: "Next.js",
  //   iconType: JavaScriptIcon,
  // },
  // {
  //   title: "MongoDB",
  //   iconType: JavaScriptIcon,
  // },
  // {
  //   title: "Express",
  //   iconType: JavaScriptIcon,
  // },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Cricket",
    emoji: "🏏",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Gym",
    emoji: "🏋",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me. "
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt="Book Cover" />
            </div>
          </Card>
        </div>
        <div>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My ToolBox"
              description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolBoxItems} className="mt-6" />
            <ToolboxItems
              items={toolBoxItems}
              className="mt-6 "
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyond The Code"
              description="Explore my interests and hobbies beyond coding."
            />
            <div>
              {hobbies?.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby?.title}</span>
                  <span>{hobby?.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smiling memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
