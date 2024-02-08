import styles from "@/app/page.module.css";
import Navigation from '@/components/layout/navigation'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <h1>Hello</h1>
    </main>
  );
}
