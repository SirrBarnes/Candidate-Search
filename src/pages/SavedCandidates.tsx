import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";


const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);




  const handleDeny = (name: string) => {
    const newCandidates = candidates.filter(candidates => candidates.login !== name)
    setCandidates(newCandidates);
    localStorage.setItem("SavedCandidates", JSON.stringify(newCandidates));
  }

  useEffect(() => {
    const fetchCandidates = () => {
      const data = JSON.parse(localStorage.getItem('SavedCandidates') || "")

      setCandidates(data);
    }

    fetchCandidates();
  }, [])


  return (
    <>
      <h1>Potential Candidates</h1>
      <table className = "table">
        <thead>
          <tr>
            <th scope = "col">Image</th>
            <th scope = "col">Name</th>
            <th scope = "col">Location</th>
            <th scope = "col">Email</th>
            <th scope = "col">Company</th>
            <th scope = "col">Bio</th>
            <th scope = "col">Reject</th>
          </tr>
        </thead>
        <tbody className = "tbody">
          {candidates.map((candidate) => (
            <tr key = {`${candidate.login}`} className = "tr">
              <td>
                <img src = {candidate.avatar_url} alt = "User Profile Image" className = "tableImage"></img>
              </td>
              <td>{candidate.login}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
              <td>{candidate.bio}</td>
              <td>
                <button onClick = {() => handleDeny(candidate.login)} className = "denyButton">Deny</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
