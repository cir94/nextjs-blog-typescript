import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/layout.module.css'
import Image from 'next/image';
import Link from 'next/link';


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
          <header className={styles.header}>
            <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />            
            </Link>
            <h1 className={utilStyles.heading2X1}>{name}</h1>
            <h2 className={utilStyles.headingLg}>
            </h2>
            </>
          </header>
        <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
