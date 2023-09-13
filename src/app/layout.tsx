import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/layout.module.css'

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
        <div className={styles.container}>
        <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
