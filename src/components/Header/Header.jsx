import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerImage}>
            <img src="/images/illustration-working.svg" alt="illustration-working" className={styles.image} />
        </div>
        <div className={styles.containerText}>
            <h1 className={styles.header}>More than just<br/>shorter links</h1>
            <p className={styles.paragraph}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <button className={styles.button}>Get Started</button>
        </div>
    </div>
  )
}
export default Header