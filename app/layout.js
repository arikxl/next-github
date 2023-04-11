import AppHeader from './components/AppHeader'
import './globals.css'

export const metadata = {
  title: 'Next Github',
  description: 'Arik Alexandrov Next.js13 practice with github API',
  keyWords: ['Arik Alexandrov', 'practice']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col justify-between '>
        <AppHeader/>
        <main className='  container' >
        {children}
        </main>
        <h1 className=''>footer</h1>
      </body>
    </html>
  )
}
