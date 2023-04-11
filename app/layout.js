import './globals.css'

export const metadata = {
  title: 'Next Github',
  description: 'Arik Alexandrov Next.js13 practice with github API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
