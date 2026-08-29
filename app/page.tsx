import Image from "next/image";
import StackedText from "./ui/text/StackedText";

import CampusGroupIcon from "../public/icons/campusGroup.png";
import EmailIcon from "../public/icons/emailIcon.png";

import HeroImage from "../public/photos/Hero.jpg";
import LeftTree from "../public/stocks/left_tree.png";
import RightTree from "../public/stocks/right_tree.png";
import ZenGarden from "../public/photos/ZenGarden.jpg";
import Eastman from "../public/photos/Eastman.png";
import Activities from "../public/photos/Activities.jpg";

import FollowUs from "../public/photos/FollowUs.png";
import PairedText from "./ui/text/PairedText";
import UnderlinedItem from "./ui/UnderlineItem";
import ImageButton from "./ui/ImageButton";
import Header from "./ui/Header";
import UnblurImage from "./ui/UnblurredImage";
import ClientWrapper from "./utility/ClientWrapper";

export default function Home() {
  return (
    <div className="">
      <main className="">

        <ClientWrapper>

          {/* Hero Background */}
        <div className="relative">
          <UnblurImage
            src={HeroImage}
            alt="Hero Image"
            containerClassName="absolute inset-0 w-full h-[50lvh] md:h-[70lvh] lg:h-[90lvh] top-[-20] z-[-2]"
            blurredClassName="blur-[20px] opacity-70 h-full"
            unblurredClassName="h-[90%] inset-5"
            />
          <Image 
            src={LeftTree} 
            alt={""} 
            className="absolute left-0 top-[-30] lg:top-[0] z-[-1] w-[250] opacity-40 md:opacity-[100] md:w-[300] lg:w-[430]"/>
          <Image 
            src={RightTree} 
            alt={""} 
            className="absolute right-0 top-[-30] z-[-1] w-[250] opacity-40 md:opacity-[100] md:w-[300] lg:w-[500]"/>
        </div>
        
        {/* Header */}
        <Header>
          {/* Links */}
          <div className="relative flex flex-row items-center justify-center">
            <UnderlinedItem underlineHeight="h-[1]" underlineColor="bg-foreground">
              <PairedText 
              text1={"关于"} 
              text1className="font-[YRDZST] text-[16px] md:text-[22px]"
              text2={"About"}
              text2className="font-[acme] text-[16px] md:text-[22px]"
              className=""/>
            </UnderlinedItem>
            
          </div>
          
          {/* Other media platforms */}
          <div className="absolute inset-0 right-0 flex flex-row gap-3 items-center justify-end mr-[10]">
            <ImageButton 
              imageSrc={EmailIcon} 
              imageLink={"mailto:cct@g.rit.edu"} 
              imageAlt={"Email Icon"} 
              className="w-[30] h-[30]"/>
            <ImageButton 
              imageSrc={CampusGroupIcon} 
              imageLink={"https://campusgroups.rit.edu/CCT/"} 
              imageAlt={"Campus Group Icon"} 
              className="w-[30] h-[30]"/>
          </div>
        </Header>
        
        {/* Hero Section */}
        <div className="relative w-full h-fit mt-[50] md:mb-[70] md:mt-[80] lg:mb-[10px] lg:mt-[200]">

          
          <div className="relative text-center lg:mt-[14%] text-shadow-sm">
            <h1 className="font-[YRDZST] text-[50px] md:text-[75px] lg:text-[100px]">中文角</h1>
            <h3 className="font-[acme] text-[18px] md:text-[22px] lg:text-[30px]">Chinese Conversation Table</h3>
            <h4 className="font-[acme] text-[18px] md:text-[22px] lg:text-[30px]">Wed 7PM | Fri 5PM | EAS-3379</h4>
          </div>

          {/* Mission statement */}
          <div className="text-center m-auto mt-[40px] md:mt-[70px] lg:mt-[140px]">
            <StackedText 
            text1={"我们的使命是将汉语学习者和母语人士聚集在一起,以促进语言练习和文化交流。"} 
            text1className="font-[YRDZST] text-[14px] md:text-[18px] lg:text-[24px]"
            text2={"Our mission is to bring together Mandarin speakers of all levels to practice and learn about each other’s lanuage and culture. "} 
            text2className={"font-[acme] text-[12px] md:text-[16px] lg:text-[18px]"}
            />
          </div>

        </div>

        {/* Description */}
        <div className="relative w-full h-fit">
          <div className="">
            <div className="relative grid grid-cols-4 ml-[10%] mr-[10%] z-[1] inset-[10] mt-[80px] wd:mt-[40px] mb-[40px]">
              <Image 
                src={Eastman} 
                alt={""} 
                className="object-cover rounded-[5] w-[100px] h-[150px] md:w-[150px] md:h-[200px] lg:w-[200px] lg:h-[250px]"/>

              <div className="col-span-3 h-[fit] m-auto">
                <StackedText 
                  text1={"每个星期三7点和星期五5点，我们会在EAS-3379聚集"} 
                  text1className="font-[YRDZST] text-[16px] md:text-[18px] lg:text-[24px]"
                  text2={"Our meeting times are 5pm on Fridays and 7pm on Wednesdays in EAS-3379"}
                  text2className={"font-[acme] text-[14px] md:text-[16px] lg:text-[18px]"} 
                  className="mb-[20px]"/>
                <StackedText 
                  text1={"无论你的水平如何，我们都欢迎你加入我们!"} 
                  text1className="font-[YRDZST] text-[16px] md:text-[18px] lg:text-[24px]"
                  text2={"Whether you're a fluent speaker or staring out, come join us!"}
                  text2className={"font-[acme] text-[14px] md:text-[16px] lg:text-[18px]"} />
              </div>
            </div>
          </div>

          {/* Background */}
          <div className="absolute inset-0">
            <UnblurImage 
            src={ZenGarden} 
            alt={"An image of the Zen Garden"}
            containerClassName="w-full h-full object-cover"
            blurredClassName="blur-[10px] opacity-40 object-cover md:h-[250px] lg:h-[320px]" 
            unblurredClassName="object-cover h-full inset-3 md:inset-[20] md:left-0 md:h-[80%] lg:h-[90%]"/>
            <div className="absolute w-full bg-black opacity-30 z-[-1] inset-0 h-[180px] md:h-[80%] lg:h-[90%] md:left-0 md:inset-5" />
          </div>
        </div>

        {/* Activities */}
        <div>
          <StackedText 
                  text1={"从麻将到即兴小品，我们会让你融入各种有趣的游玩中。"} 
                  text1className="font-[YRDZST] md:text-[20px] lg:text-[24px]"
                  text2={"Ranging From Mahjong to Improv, we immerse you in all sorts of fun activities. "}
                  text2className={"font-[acme] md:text-[18px] lg:text-[18px]"} 
                  className="text-center mt-[80px] mb-[80px] text-coffee"/>
          <Image 
            src={Activities} 
            alt={"A photo of club activities"}
            className="object-cover m-auto rounded-[10] shadow-4x4 w-[420px] md:mb-[20px] lg:mb-[80px] md:w-[600px] md:h-[400px] lg:w-[1100px] lg:h-[600px]"  />       
        </div>

        {/* Connect with us */}
        <div className="relative w-full h-fit">
          
          <div className="absolute inset-30 md:inset-55">
            <StackedText 
                  text1={"快来关注我们吧！"} 
                  text1className="font-[YRDZST] md:text-[36px] lg:text-[48px]"
                  text2={"Connect with us!"}
                  text2className={"font-[acme] md:text-[28px] lg:text-[36px]"} 
                  className=" text-center" />
            <div className="flex flex-row gap-3 items-center justify-center">
              <ImageButton 
                imageSrc={EmailIcon} 
                imageLink={"mailto:cct@g.rit.edu"} 
                imageAlt={"Email Icon"} 
                className="w-[30] h-[30] md:w-[60] md:h-[60] lg:w-[80] lg:h-[80]"/>
              <ImageButton 
                imageSrc={CampusGroupIcon} 
                imageLink={"https://campusgroups.rit.edu/CCT/"} 
                imageAlt={"Campus Group Icon"} 
                className="w-[30] h-[30] md:w-[60] md:h-[60] lg:w-[80] lg:h-[80]"/>
            </div>
          </div>
          

          

          <Image 
            src={FollowUs} 
            alt={"A picture of us eating at Gracys"} 
            className="absolute inset-0 w-full h-[280px] md:h-[500px] object-cover opacity-70 z-[-1]"/>
          
        </div>

        </ClientWrapper>
      
        


      </main>
    </div>
  );
}
