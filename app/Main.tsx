import Link from '@/components/Link'
import Tag from '@/components/Tag'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Carousel } from '@/components/Carousel'
import { EmblaOptionsType } from 'embla-carousel'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY_TOP = 3
const MAX_DISPLAY_MID = 4
const MAX_DISPLAY = 5
// bg-gradient-to-tr from-green-300 to-emerald-500
export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-300 ">
        <div className="mb-10 mt-10 pb-20 pt-20 text-center">
          <h1 className="md-5xl sm-4xl text-7xl font-bold text-slate-800 ">Tensordock Blog</h1>
          <h1 className="sm-1xl pt-5 text-2xl text-slate-500">
            catch up on our latest products, guides and company news
          </h1>
        </div>

        <div className="flex h-fit w-full flex-col p-20 md:flex-row">
          <div className="mr-10 w-full flex-col divide-y divide-white rounded-xl shadow-xl sm:w-7/12 sm:pb-10 md:w-full md:pb-10">
            <div className="h-2/3 w-full rounded-t-xl bg-[url('/static/images/h100.jpeg')] bg-cover bg-center bg-no-repeat"></div>
            <div className="  h-1/3 w-full justify-center rounded-b-xl bg-white text-center text-3xl sm:text-2xl md:text-2xl">
              <h1 className="pt-10">See how we match up with our competitors</h1>
              <Link
                href={`https://tensordock.com/comparison-aws`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more:"`}
              >
                <h1 className="pt-10 text-green-400">Compare</h1>
              </Link>
            </div>
          </div>

          <div className="sm:5/12 h-fit w-full pt-10 sm:pt-10">
            <div className="h-96 w-full rounded-xl bg-white pl-10 pr-10 pt-20 shadow-xl">
              <h1 className="text-4xl sm:text-3xl">Become profitable today</h1>
              <h1 className="pt-10">
                We are currently looking for data-center partners that meet industry standards.
              </h1>
              <Link
                href={`https://tensordock.com/host`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more:"`}
              >
                <h1 className="pt-10 text-3xl text-green-400">Apply</h1>
              </Link>
            </div>
            <div className="mt-10 h-40 w-full rounded-xl bg-white shadow-xl">
              <h1 className="pl-10 pr-10 pt-5">
                Does your business need compute? We can set you up with a custom solution.
              </h1>
              <Link
                href={`https://tensordock.com/contact`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Read more:"`}
              >
                <h1 className="pl-10 pt-5 text-2xl text-green-400">Contact Sales</h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-10 mt-10 pt-10 text-center">
          <h1 className="md-5xl sm-4xl text-6xl font-bold text-slate-800 ">Latest</h1>
        </div>

        <div className="mb-20 pb-20">
          <div className="mb-20 h-64 w-full items-center justify-center pl-20 pr-20 pt-10">
            <Carousel posts={posts} />
          </div>
        </div>

        {/* newest posts */}

        {/* tags indexed by row */}

        <div className="mb-10 mt-10 pt-10 text-center">
          <h1 className="md-5xl sm-4xl text-6xl font-bold text-slate-800 ">Features</h1>
        </div>

        <div className="mb-20 pb-20">
          <div className="mb-20 h-64 w-full items-center justify-center pl-20 pr-20 pt-10">
            <Carousel posts={posts} />
          </div>
        </div>

        <div className="mb-10 mt-10 pt-10 text-center">
          <h1 className="md-5xl sm-4xl text-6xl font-bold text-slate-800 ">Guides</h1>
        </div>

        <div className="mb-20 pb-20">
          <div className="mb-20 h-64 w-full items-center justify-center pl-20 pr-20 pt-10">
            <Carousel posts={posts} />
          </div>
        </div>

        <div className="mb-10 mt-10 pt-10 text-center">
          <h1 className="md-5xl sm-4xl text-6xl font-bold text-slate-800 ">Misc</h1>
        </div>

        <div className="pb-20">
          <div className="mb-20 h-64 w-full items-center justify-center pl-20 pr-20 pt-10">
            <Carousel posts={posts} />
          </div>
        </div>

        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="All posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </div>
    </>
  )
}
