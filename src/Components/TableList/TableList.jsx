import './List.css';

// eslint-disable-next-line react/prop-types
const TableList = ({ votes }) => {
  const candidates = [
    { number: "123456", name: "Joao Silva", party: "PXYZ", image: "../src/media/Screenshot 2024-10-10 110824.png" },
    { number: "654321", name: "Maria Souza", party: "PLMN", image: "../src/media/Screenshot 2024-10-10 110833.png" },
    { number: "789012", name: "Pedro Oliveira", party: "ABCD", image: "../src/media/Screenshot 2024-10-10 110841.png" },
    { number: "345678", name: "Ana Costa", party: "EFGH", image: "../src/media/Screenshot 2024-10-10 110853.png" },
    { number: "890123", name: "Lucas Lima", party: "QRST", image: "../src/media/Screenshot 2024-10-10 110941.png" },
    { number: "567890", name: "Carla Mendes", party: "UVWX", image: "../src/media/Screenshot 2024-10-10 110912.png" },
    { number: "678901", name: "Eduardo Pereira", party: "YZAB", image: "../src/media/Screenshot 2024-10-10 110933.png" },
    { number: "901234", name: "Sofia Ribeiro", party: "CDEF", image: "../src/media/Screenshot 2024-10-10 110901.png" },
    { number: "234567", name: "Gabriel Ferreira", party: "GHIK", image: "../src/media/Screenshot 2024-10-10 110949.png" },
    { number: "763456", name: "Beatriz Gomes", party: "LMNO", image: "../src/media/Screenshot 2024-10-10 111046.png" },
    { number: "XXXXXX", name: "VOTOS EM BRANCO", party: "XXXX", image: null }
  ];
  const sortedCandidates = candidates.sort((a, b) => (votes[b.number] || 0) - (votes[a.number] || 0));
  const leadingCandidateNumber = sortedCandidates[0].number;
  return (
    <div className="container1">
      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>NÚMERO</th>
            <th>PARTIDO</th>
            <th>VOTOS</th>
          </tr>
        </thead>
        <tbody>
          {sortedCandidates.map((candidate) => (
             <tr
             key={candidate.number}
             style={{
               backgroundColor: candidate.number === leadingCandidateNumber ? "#212529" : "transparent",
               color: candidate.number === leadingCandidateNumber ? "#fff" : "#000",
             }}
           >
              <td>
                {candidate.image ? <img src={candidate.image}  /> : null} 
                {candidate.name}
              </td>
              <td>{candidate.number}</td>
              <td>{candidate.party}</td>
              <td>{(votes[candidate.number] || 0).toLocaleString() + ' votos'}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;