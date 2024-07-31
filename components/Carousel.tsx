"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function Carousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="overflow-hidden embla" ref={emblaRef}>
            <div className="flex w-1/4">
                <div className="rounded-xl mr-10 h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 1</div>
                <div className="rounded-xl mr-10 h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 2</div>
                <div className="rounded-xl mr-10 h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 3</div>
                <div className="rounded-xl mr-10 h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 4</div>
                <div className="h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 5</div>
            </div>
        </div>
    )
}



// how do i want to organize this: Each carousal can take a list of posts 
