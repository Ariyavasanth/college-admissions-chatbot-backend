const SummaryCard = ({ title, value }) => {
  return (
    <div className="summary-card">
      <div>
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default SummaryCard;
