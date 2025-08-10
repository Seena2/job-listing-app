function Card({ children, bg = "lightGray" }) {
  return (
    <div className={`${bg} card`}>
      {children}
      {/* children represents the content/ elts goes inside the card */}
    </div>
  );
}
export default Card;
