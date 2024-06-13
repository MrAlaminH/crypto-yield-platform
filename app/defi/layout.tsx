import Navbar from "@/components/main/Navbar"
import '../../app/globals.css';
import Footer from "@/components/main/Footer";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  )
}
