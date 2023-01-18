import History from "../History/History";
import Shortener from "../Shortener/Shortener";
import styles from "./Functional.module.css";
import React from "react";

const Functional = () => {
  //https://api.shrtco.de/v2/shorten?url=
  const [enteredLink, setEnteredLink] = React.useState("");
  const [link, setLink] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [copiedUrl, setCopiedUrl] = React.useState("");


  const handleInput = (e) => {
    setEnteredLink(e.target.value);
  };

  const getShortLink = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${enteredLink}`
    );
    const data = await response.json();
    if (data.ok === false) {
        setError(true);
        return;
    }
    const shortLink = data.result.short_link;
    setLink([...link, { longLink: enteredLink, shortLink: shortLink }]);
    setError(false);
  };


  return (
    <div className={styles.container}>
      <Shortener handleInput={handleInput} getShortLink={getShortLink} error={error} />
      {link.length > 0 ? (
        <>
          {link.map((link) => (
            <History
              link={link.longLink}
              shortLink={link.shortLink}
              key={link.longLink}
              copiedUrl={copiedUrl}
              setCopiedUrl={setCopiedUrl}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};
export default Functional;
