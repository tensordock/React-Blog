"use client"

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import ReactDOM from 'react-dom/client'
import { EmblaOptionsType } from 'embla-carousel'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const GAMER = 5

export function Carousel({ posts }) {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="overflow-hidden embla" ref={emblaRef}>
            <div className="flex w-1/4">
                {!posts.length && 'No posts found.'}
                {posts.map((post) => {
                    const { slug, date, title, summary, tags } = post
                    return (
                        <div key={slug} className="rounded-xl mb-10 mr-10 h-96 flex-[0_0_100%] min-w-[300px] bg-gray-100">

                            <div className="m-5 flex flex-wrap">
                                {tags.map((tag) => (
                                    <Tag key={tag} text={tag} />
                                ))}
                            </div>

                            <dl>
                                <dt className="sr-only">Published on</dt>
                                <dd className="m-5 text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                                </dd>
                            </dl>

                            <div className="m-5 space-y-5 xl:col-span-3">
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="pt-5 pb-5 text-4xl font-bold leading-8 tracking-tight">
                                            <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                                                {title}
                                            </Link>
                                        </h2>
                                    </div>
                                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                        {summary}
                                    </div>
                                </div>
                                <div className="text-base font-medium leading-6"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

// <div className="overflow-hidden embla" ref={emblaRef}>
//     <div className="flex w-1/4">
//         <div className="rounded-xl mr-10 h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 1</div>
//         <div className="rounded-xl mr-10 h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 2</div>
//         <div className="rounded-xl mr-10 h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 3</div>
//         <div className="rounded-xl mr-10 h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 4</div>
//         <div className="h-96 bg-gray-100 flex-[0_0_100%] min-w-[300px]">Slide 5</div>
//     </div>
// </div>




// how do i want to organize this: Each carousal can take a list of posts 
