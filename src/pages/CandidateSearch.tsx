import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate | null>(null);

  const candidateDeny = () => {

  }

  const candidateApprove = () => {
    localStorage.setItem("SavedCandidates", JSON.stringify(candidates));
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await searchGithub();
        setCandidates(data);
      } catch(error) {
        console.error('Error fetching data');
      }
    };
    getData();
  }, []);

  if (!candidates) {
    return <div>Please Wait...</div>;
  }

  return (
    <>
      <h1>Candidate Search</h1>
      <main>
        <img src = {candidates.image} alt = "User Profile Image"></img>
        <p>Username: {candidates.name}</p>
        <p>Location: {candidates.location} </p>
        <p>Email: {candidates.email}</p>
        <p>Company: {candidates.company}</p>
        <p>Bio: {candidates.bio}</p>
        <div>
          <button onClick = {candidateDeny}>Deny</button>
          <button onClick = {candidateApprove}>Approve</button>
        </div>
      </main>
    </>
  )
};

export default CandidateSearch;
