import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";


const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const potentialCandidates = localStorage.getItem("SavedCandidates");

    if (potentialCandidates) {
      setCandidates([JSON.parse(potentialCandidates)]);
    }
  }, [])



  const handleDeny = (name: string) => {
    const newCandidates = candidates.filter(candidates => candidates.name !== name)
    setCandidates(newCandidates);
    localStorage.setItem("SavedCandidates", JSON.stringify(newCandidates));
  }


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
            <tr key = "${candidate.name}" className = "tr">
              <td>
                <img src = {candidate.image} alt = "User Profile Image"></img>
              </td>
              <td>{candidate.name}</td>
              <td>{candidate.location}</td>
              <td>{candidate.email}</td>
              <td>{candidate.company}</td>
              <td>{candidate.bio}</td>
              <td>
                <button onClick = {() => handleDeny(candidate.name)} className = "denyButton">Deny</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
