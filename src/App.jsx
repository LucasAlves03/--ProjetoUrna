import { useState } from "react";
import TableList from "./Components/TableList/TableList";
import Navbar from "./Components/Navbar/Navbar";
import ScreenM from "./Components/ScreenM/ScreenM";
import './App.css'

const App = () => {
  const [votes, setVotes] = useState({
    123456: 0,
    654321: 0,
    789012: 0,
    345678: 0,
    890123: 0,
    567890: 0,
    678901: 0,
    901234: 0,
    234567: 0,
    763456: 0,
    XXXXXX: 0,
  });

  const [intervalId, setIntervalId] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateVotes = () => {
    setVotes((prevVotes) => {
      const newVotes = { ...prevVotes };
      Object.keys(newVotes).forEach((candidateNumber) => {
        const randomVotes = Math.floor(Math.random() * 2000); 
        newVotes[candidateNumber] += randomVotes;
      });
      return newVotes;
    });
  };

  const startVoteSimulation = () => {
    if (!isSimulating) {
      let iterations = 0;
      const id = setInterval(() => {
        simulateVotes();
        iterations++;
        if (iterations >= 50) {
          clearInterval(id);
          setIsSimulating(false); 
        }
      }, 2000);
      setIntervalId(id);
      setIsSimulating(true);
    }
  };

  const pauseVoteSimulation = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIsSimulating(false);
    }
  };

  const toggleSimulation = () => {
    if (isSimulating) {
      pauseVoteSimulation();
    } else {
      startVoteSimulation();
    }
  };

  const handleConfirmVote = (candidateNumber) => {
    if (votes[candidateNumber] !== undefined) {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [candidateNumber]: prevVotes[candidateNumber] + 1,
      }));
    }
  };

  return (
    <div>
      <Navbar />
      <ScreenM onConfirm={handleConfirmVote} />
      <button className="simulation-btn" onClick={toggleSimulation}>
        {isSimulating ? "PAUSAR SIMULAÇÃO" : "INICIAR SIMULAÇÃO"}
      </button>
      <TableList votes={votes} />
    </div>
  );
};

export default App;