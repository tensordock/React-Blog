import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header
      style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
      className="flex w-screen items-center justify-between border-2 border-gray-100 bg-gray-100 px-20 py-10"
    >
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-0">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl sm:block">{siteMetadata.headerTitle}</div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden text-2xl font-medium text-gray-500 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
