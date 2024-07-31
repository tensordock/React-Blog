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

        <div className="flex h-fit w-full p-20">




          <div className="mr-10 w-7/12 rounded-xl bg-gray-700"></div>

          <div className="h-fit w-5/12">
            <div className="h-96 w-full rounded-xl bg-gray-200"></div>
            <div className="mt-10 h-40 w-full rounded-xl bg-slate-400">
              We've got the shit you need!! Contact us.
            </div>
          </div>
        </div>


        <div className="pb-10 pt-10">
          <div className="flex h-96 w-full items-center justify-center divide-y divide-white">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY_MID).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <div key={slug} className="m-5 h-full w-1/4 bg-gray-100">

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

        {/* newest posts */}

        {/* tags indexed by row */}

        <div className="mb-10 mt-10 pt-10 text-center">
          <h1 className="md-5xl sm-4xl text-6xl font-bold text-slate-800 ">Features</h1>
        </div>

        <div className="pb-20 mb-10">
          <div className="mb-20 items-center justify-center h-64 w-full pt-10 pl-20 pr-20">
            <Carousel />
          </div>
        </div>

        <div className="mb-10 mt-10 pt-10 text-center">
          <h1 className="md-5xl sm-4xl text-6xl font-bold text-slate-800 ">Guides</h1>
        </div>

        <div className="pb-20 mb-10">
          <div className="mb-20 items-center justify-center h-64 w-full pt-10 pl-20 pr-20">
            <Carousel />
          </div>
        </div>

        <div className="mb-10 mt-10 pt-10 text-center">
          <h1 className="md-5xl sm-4xl text-6xl font-bold text-slate-800 ">Misc</h1>
        </div>

        <div className="pb-20">
          <div className="mb-20 items-center justify-center h-64 w-full pt-10 pl-20 pr-20">
            <Carousel />
          </div>
        </div>



        {/* <ul className="mt-10 divide-y divide-white pt-20 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-8">
                <article>
                  <Link
                    href={`/blog/${slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Read more: "${title}"`}
                  >
                    <div className="space-y-2 rounded-xl bg-gray-100 pl-10 pr-10 pt-10 hover:bg-gray-200 hover:text-green-500 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="pb-5 text-4xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6"></div>
                      </div>
                    </div>
                  </Link>
                </article>
              </li>
            )
          })}
        </ul> */}
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
