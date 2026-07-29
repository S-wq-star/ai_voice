import Link from 'next/link'
import Image from 'next/image'
import React, { ReactNode } from 'react'

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <span className="flex items-center justify-center rounded-full bg-dark-200 p-1.5">
            <Image src="/logo.svg" alt="Urgentis Logo" width={38} height={32} />
          </span>
          <h2 className="text-dark-100">Urgentis</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout

