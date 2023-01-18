import styles from "./History.module.css";

const History = ({ link, shortLink }) => {
  return <div className={styles.container}>
    <h3 className={styles.longLink}>{link}</h3>
    <hr className={styles.line}></hr>
    <div className={styles.leftSection}>
        <h3 className={styles.shortLink}>{shortLink}</h3>
        <button className={styles.button}>Copy</button>
    </div>
  </div>;
};
export default History;
