
export const metadata = {
  title: 'Next.js Blog: Typescript',
  description: 'NextJS Blog Tutorial rewritten in Typescript',
  
}

const name = 'Claire Ramos'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
