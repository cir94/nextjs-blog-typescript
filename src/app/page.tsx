import utilStyles from '../../styles/utils.module.css'

export default function Home() {
  return (
    <main>
      <section className={`${utilStyles.headingMd}`}>
        <p>Hi, I'm Claire, an aspiring software developer with a foundation in IT.</p>
        <p>This little blog was originally a Blog Tutorial provided by NextJS to help teach the user its syntax. However, it wasn't written in TypeScript. Therefore, I'll be trying to rewrite this entire project in NextJS, while also maybe adding some different features. It'll be my own little playground.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
    </main>
  )
}
