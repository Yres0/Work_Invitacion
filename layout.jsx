// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Crimson_Text } from 'next/font/google'
import { Prata } from 'next/font/google'
import './styles.css'

const crimson_text = Crimson_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson_text',
})
const prata = Prata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prata',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={crimson_text.variable + ' ' + prata.variable}>
        {children}
      </body>
    </html>
  )
}