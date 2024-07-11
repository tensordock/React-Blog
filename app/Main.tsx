import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Typewriter from '@/components/typewriter'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="relative min-h-screen">
        {/* <div className="absolute left-0 top-[-5rem] z-0 h-full w-[calc(4rem)] rounded-xl bg-gray-200 dark:bg-gray-700"></div>
        <div className="absolute left-[40rem] top-[-5rem] z-0 h-full w-[calc(4rem)] rounded-xl bg-gray-200 dark:bg-gray-700"></div> */}

        <div className="relative divide-y divide-gray-200 dark:divide-gray-700"></div>
        <div className="-ml-60 mt-32 space-y-2 pb-12 pt-3 md:space-y-20">
          <div className="relative">
            <div className="h-11/12 absolute inset-0 z-0 -ml-6 w-11/12 rounded-xl bg-green-300 dark:bg-green-700"></div>
            <h1 className="relative text-3xl font-extrabold leading-9 tracking-tight text-gray-700 dark:text-gray-100 sm:text-6xl sm:leading-10 md:text-8xl md:leading-14">
              <Typewriter key="title1" text="The Cloud for AI" typingSpeed={70} />
              <br /> <br />
              <Typewriter key="title2" text="and everything else." typingSpeed={65} />
            </h1>
            <div className="relative mt-6">
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                {siteMetadata.description}
              </p>
            </div>
          </div>
        </div>

        <ul
          className="relative divide-y divide-gray-200 dark:divide-gray-700"
          style={{ marginLeft: '-1.8rem' }}
        >
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="-ml-60 py-10">
                <Link href={`/blog/${slug}`}>
                  <article>
                    <div className="block w-full transform rounded-xl border-8 border-gray-100 bg-gray-100 p-16 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-green-700 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3" style={{ marginLeft: '-4rem' }}>
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-5xl font-bold leading-8 tracking-tight text-gray-600">
                              {title}
                            </h2>
                          </div>
                          <div className="prose max-w-none text-green-700 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            )
          })}
        </ul>

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
      </div>
    </>
  )
}
