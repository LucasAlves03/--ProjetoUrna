import './ScreenM.css'
import { useState } from 'react'
const candidates = {
    123456:{
        name: "Joao Silva",
        party: "PXYZ",
        image: ("../src/media/Screenshot 2024-10-10 110824.png")
    },
    654321:{
        name: "Maria Souza",
        party: "PLMN",
        image: ("../src/media/Screenshot 2024-10-10 110833.png")
    },
    789012:{
        name: " Pedro Oliveira",
        party: "ABCD",
        image: ("../src/media/Screenshot 2024-10-10 110841.png")
    },
    345678:{
        name: "Ana Costa",
        party: "EFGH",
        image: ("../src/media/Screenshot 2024-10-10 110853.png")
    },
    890123:{
        name: "Lucas Lima",
        party: "QRST",
        image: ("../src/media/Screenshot 2024-10-10 110941.png")
    },
    567890:{
        name: "Carla Mendes",
        party: "UVWX",
        image: ("../src/media/Screenshot 2024-10-10 110912.png")
    },
    678901:{
        name: "Eduardo Pereira",
        party: "YZAB",
        image: ("../src/media/Screenshot 2024-10-10 110933.png")
    },
    901234:{
        name: "Sofia Ribeiro",
        party: "CDEF",
        image: ("../src/media/Screenshot 2024-10-10 110901.png")
    },
    234567:{
        name: "Gabriel Ferreira",
        party: "GHIK",
        image: ("../src/media/Screenshot 2024-10-10 110949.png")
    },
    763456:{
        name: "Beatriz Gomes",
        party: "LMNO",
        image: ("../src/media/Screenshot 2024-10-10 111046.png")
    },
    XXXXXX:{
        name: "VOTOS EM BRANCO",
        party: "XXXX",
    },

}
// eslint-disable-next-line react/prop-types
const ScreenM = ({ onConfirm }) => {
    const [inputNumbers, setInputNumbers] = useState([]);
    const [candidate, setCandidate] = useState(null);
    const [isBlankVote, setIsBlankVote] = useState(false);
  
    const handleNumberClick = (number) => {
      if (inputNumbers.length < 6 && !isBlankVote) {
        const newNumbers = [...inputNumbers, number];
        setInputNumbers(newNumbers);
        if (newNumbers.length === 6) {
          const candidateNumber = newNumbers.join('');
          setCandidate(candidates[candidateNumber] || null);
        }
      }
    };
    
    const handleCorrige = () => {
      setInputNumbers((prev) => prev.slice(0, -1));
      setCandidate(null);
      setIsBlankVote(false);
    };
    const handleBranco = () => {
      setIsBlankVote(true);  
      setCandidate(candidates['XXXXXX']);  
  };
  
    const handleConfirm = () => {
      if (candidate) {
        onConfirm(isBlankVote ? 'XXXXXX' : inputNumbers.join(''));
        setInputNumbers([]);
        setCandidate(null);
        setIsBlankVote(false);
      }
    };
  
    return (
      <div className="container">
        <div className="flex">
          <div className="screen">
            {candidate ? (
              <>
                <img src={candidate.image} />
                <h1>{candidate.name} ({candidate.party})</h1>
              </>
            ) : (
              <>
                <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
                <h1>NOME DO CANDIDATO (XXXX)</h1>
              </>
            )}
  
  <label htmlFor="" id="screen-number">
            {Array.from({ length: 6 }, (_, i) => (
              <input
                type="text"
                key={i}
                value={inputNumbers[i] !== undefined ? inputNumbers[i] : ""}
                readOnly
              />
            ))}
            </label>
          </div>
          <div className="numbers-container">
            <h1>JUSTIÇA ELEITORAL</h1>
            <div className="grid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                <button key={num} className="numbers" onClick={() => handleNumberClick(num)}>{num}</button>
              ))}
            </div>
            <div className="btn-group">
              <button className="branco"  onClick={handleBranco}>BRANCO</button>
              <button className="corrige" onClick={handleCorrige}>CORRIGE</button>
              <button className="confirma" onClick={handleConfirm}>CONFIRMA</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ScreenM;