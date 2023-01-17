import styles from "./Shortener.module.css";

const Shortener = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.inputSection}>
          <input
            className={styles.input}
            placeholder="Shorten a link here"
          ></input>
        </div>
        <button className={styles.button}>Shorten It!</button>
      </form>
    </div>
  );
};
export default Shortener;
