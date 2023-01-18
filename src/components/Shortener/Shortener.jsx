import styles from "./Shortener.module.css";

const Shortener = ({ handleInput, getShortLink, error }) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.inputSection}>
          <input
            className={error ? `${styles.input} ${styles.displayErrorBorder}` : `${styles.input}`}
            placeholder="Shorten a link here"
            onChange={handleInput}
          ></input>
          <h3 className={error ? `${styles.error} ${styles.displayError}` : `${styles.error}`}><i>Please add a valid link</i></h3>
        </div>
        <button className={styles.button} onClick={getShortLink}>Shorten It!</button>
      </form>
    </div>
  );
};
export default Shortener;
