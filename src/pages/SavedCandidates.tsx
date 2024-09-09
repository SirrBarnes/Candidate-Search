import CandidateSearch from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  return (
    <>
      <h1>Potential Candidates</h1>
      <table className = "table">
        <thead>
          <th scope = "col">Image</th>
          <th scope = "col">Name</th>
          <th scope = "col">Location</th>
          <th scope = "col">Email</th>
          <th scope = "col">Company</th>
          <th scope = "col">Bio</th>
          <th scope = "col">Reject</th>
        </thead>
        <tbody className = "tbody">
          {CandidateSearch.map((candidate, index) => (
            <tr key = { index } className = "tr">
              <td>
                <img src = {candidate.image}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
