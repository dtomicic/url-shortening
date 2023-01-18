import styles from "./History.module.css";
import React from "react";

const History = ({ link, shortLink, copiedUrl, setCopiedUrl }) => {
  const copyLink = (x) => {
    navigator.clipboard.writeText(x);
    setCopiedUrl(x);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.longLink}>{link}</h3>
      <hr className={styles.line}></hr>
      <div className={styles.leftSection}>
        <h3 className={styles.shortLink}>{shortLink}</h3>
        <button
          className={
            copiedUrl === shortLink
              ? `${styles.button} ${styles.copiedBtn}`
              : `${styles.button}`
          }
          onClick={() => copyLink(shortLink)}
        >
          {copiedUrl === shortLink ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};
export default History;
