'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
// import PlaidLink from './PlaidLink'

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/public" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/images/logo.png"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">WijoyoMart</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link', { 'bg-custom-gradient': isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}

        {/*<PlaidLink user={user} />*/}
      </nav>

      <Footer user={user} />
    </aside>
  )
}

export default Sidebar