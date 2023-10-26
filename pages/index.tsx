import Contact from '@/modules/Contact'
import Intro from '@/modules/Intro'
import Projects from '@/modules/Projects'
import Skills from '@/modules/Skills'
import WorkTimeline from '@/modules/WorkTimeline'
import styles from '@/styles/Home.module.css'
export default function Home() {

  return (
    <div className={styles.main}>
      <Intro />
      <Skills />
      <Projects />
      <WorkTimeline />
      {/* <About /> */}
      <Contact />
    </div>
  )
}
