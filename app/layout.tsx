import './globals.css'
import { Inter } from 'next/font/google'
import {Poppins} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({weight:["400","600"],
subsets: ["latin"]})

export const metadata = {
  title: 'Movie Database',
  description: 'Movie Database',
  keyWords: ["movie" , "database"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
