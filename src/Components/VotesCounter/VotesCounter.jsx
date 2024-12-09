import './VotesCounter.css'; 
// eslint-disable-next-line react/prop-types
const VoteCounter = ({ candidate, voteCount }) => {
  return (
    <div className="vote-counter">
      <img src={candidate.image} alt={candidate.name} className="candidate-image" />
      <div className="candidate-info">
        <h2>{candidate.name}</h2>
        <p>Partido: {candidate.party}</p>
      </div>
      <input type="range" min="0" max="3500" value={voteCount} readOnly />
      <span>{voteCount}</span>
    </div>
  );
};
export default VoteCounter;



