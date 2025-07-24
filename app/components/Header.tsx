// 'use client'

import * as React from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { SheetContent } from './MobileNavSheetContent'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function NavigationMenuDemo() {
  return (
    <header className="w-full border-b bg-transparent bg-body">
      <div className="container flex items-center justify-between gap-2 py-3 md:py-4 lg:py-7 mx-auto px-4 xl:gap-4">

        <Link href="/" className="text-xl font-bold text-primary">
          <Image
            className="md:w-[50px] w-[40px] block dark:hidden"
            src="/af-logo.svg"
            alt="AF logo"
            width={50}
            height={39}
            priority
          />
          <Image
            className="md:w-[50px] w-[40px] hidden dark:block"
            src="/af-logo-dark.svg"
            alt="AF logo"
            width={50}
            height={39}
            priority
          />
        </Link>

        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-normal text-foreground hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
                <Menu strokeWidth={1.5} size={32} className="color-foreground" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] bg-background">
              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-normal text-foreground hover:text-primary transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
