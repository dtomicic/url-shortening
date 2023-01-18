import styles from "./Statistics.module.css";

const Statistics = () => {
  const cards = [
    {
      cardTitle: "Brand Recognition",
      cardParagraph:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      cardImage: "images/icon-brand-recognition.svg",
      cardId: 1,
    },
    {
      cardTitle: "Detailed Records",
      cardParagraph:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      cardImage: "images/icon-detailed-records.svg",
      cardId: 2,
    },
    {
      cardTitle: "Fully Customizable",
      cardParagraph:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      cardImage: "images/icon-fully-customizable.svg",
      cardId: 3,
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Advanced Statistics</h2>
      <p className={styles.paragraph}>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div className={styles.cardsItem} key={card.cardId}>
            <div className={styles.cardsItemImage}>
              <img
                className={styles.cardsItemImageIcon}
                src={card.cardImage}
                alt={card.cardTitle}
              />
            </div>
            <div className={styles.cardsItemText}>
              <h3 className={styles.cardsItemTitle}>{card.cardTitle}</h3>
              <p className={styles.cardsItemParagraph}>{card.cardParagraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Statistics;
