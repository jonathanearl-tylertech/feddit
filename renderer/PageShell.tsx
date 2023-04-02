import React from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'
import { Link } from './Link'

export { PageShell }

const noLayoutPaths = ['/login', '/signup', '/passwordreset']

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  if (noLayoutPaths.includes(pageContext.urlPathname)) return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  )

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full max-w-2xl mx-auto">
            <Link href='/'>Feddit</Link>
            <div>
              <Link className='ml-auto' href='/login'>login</Link>
              <Link className='ml-2' href='/logout'>logout</Link>
            </div>
          </div>
          {/* <Sidebar>
            <Logo />
            <Link className="navitem" href="/">
              Home
            </Link>
            <Link className="navitem" href="/login">
              login
            </Link>
            <Link className="navitem" href="/logout">
              logout
            </Link>
          </Sidebar> */}
          <main className="flex max-w-2xl mx-auto w-full">{children}</main>
        </div>
      </PageContextProvider>
    </React.StrictMode>
  )
}
