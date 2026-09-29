"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from "next/image"
import { type CarouselApi } from "@/components/ui/carousel"

import Classroom from "../../public/photos/Classroom.jpg";
import Activities from "../../public/photos/Activities.jpg";
import Dumpling from "../../public/photos/Dumpling.jpg";
import Imagine from "../../public/photos/Imagine.jpg";
import React from "react";
import {  ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import next from "next";


interface EventGalleryProps {
    className?: String
}

export default function EventGallery({className}: EventGalleryProps) {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
 
    React.useEffect(() => {
        if (!api) {
        return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
        })
  }, [api])


    return (
        <div className={`${className}`}>
            <Carousel setApi={setApi} className="h-[300px] m-auto md:w-[600px] lg:w-[1100px] lg:h-[600px]">
            <CarouselContent className="select-none ">
                <CarouselItem>
                <Image 
                  src={Activities} 
                  alt={"Another photo of club activities"}
                  className="object-cover m-auto rounded-[10] h-[300px] shadow-4x4 w-[420px] md:mb-[20px] lg:mb-[80px] md:w-[600px] lg:w-[1100px] lg:h-[600px]"  />
              </CarouselItem>
              <CarouselItem>
                <Image 
                  src={Classroom} 
                  alt={"A photo of club activities"}
                  className="object-cover m-auto rounded-[10] h-[300px] shadow-4x4 w-[420px] md:mb-[20px] lg:mb-[80px] md:w-[600px] lg:w-[1100px] lg:h-[600px]"/>
              </CarouselItem>
              <CarouselItem>
                <Image 
                  src={Dumpling} 
                  alt={"A photo of dumpling making"}
                  className="object-cover m-auto rounded-[10] h-[300px] shadow-4x4 w-[420px] md:mb-[20px] lg:mb-[80px] md:w-[600px] lg:w-[1100px] lg:h-[600px]"  />
              </CarouselItem>
              <CarouselItem>
                <Image 
                  src={Imagine} 
                  alt={"A photo of us at Imagine RIT"}
                  className="object-cover m-auto rounded-[10] h-[300px] shadow-4x4 w-[420px] md:mb-[20px] lg:mb-[80px] md:w-[600px] lg:w-[1100px] lg:h-[600px]"  />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className={"hidden sm:inline"}/>
            <CarouselNext className={"hidden sm:inline"}/>
          </Carousel>
          <Slider
                className={"z-1 mt-[20px]"}
                min={1} max={count} step={1} value={current} onValueChange={(raw) => {
                    const val = raw as number;
                    api?.scrollTo(val - 1);
            }} />
          <div className="mt-[20px] text-right text-sm font-[acme] md:text-[18px] lg:text-[18px] text-coffee">
                (Slide {current} of {count})
            </div>
        </div>
    )
}