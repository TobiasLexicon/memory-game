export const MemorialCard = ({ card, choose, index }) => {
  return (
    <div className={`${card.play ? '' : 'noPlay'} memoryCard`}>
      <img
        className={card.reveal ? 'chosen' : undefined}
        src={`/img/${card.image}.png`}
        alt='food'
        onClick={() => choose(index)}
      />
    </div>
  );
};
