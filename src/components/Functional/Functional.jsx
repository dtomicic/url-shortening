import History from "../History/History";
import Shortener from "../Shortener/Shortener";
import styles from "./Functional.module.css";
import React from "react";

const Functional = () => {
  const [link, setLink] = React.useState([
    { longLink: "https://www.google.com", shortLink: "https://rel.ink/1" },
    { longLink: "https://www.facebook.com", shortLink: "https://rel.ink/2" },
  ]);
  return (
    <div className={styles.container}>
      <Shortener />
      {link.length > 0 ? (
        <>
          {link.map((link) => (
            <History link={link.longLink} shortLink={link.shortLink} />
          ))}
        </>
      ) : null}
    </div>
  );
};
export default Functional;
