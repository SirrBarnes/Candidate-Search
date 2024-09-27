import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate | null>(null);

  const fetchUser = async () => {
    setCandidates(null);

    try {
      const data = await searchGithub();
      console.log(data);
      setCandidates(data);
    } catch (error) {
      console.log(error);
    }
  }

  const candidateApprove = () => {
    if (!candidates) {
      return;
    }

    const approvedCandidates = JSON.parse(localStorage.getItem('SavedCandidates') || '[]');

    const currentCandidates = [...approvedCandidates, candidates];

    localStorage.setItem("SavedCandidates", JSON.stringify(currentCandidates))

    fetchUser();
  }

  useEffect(() => {
    fetchUser();
  }, []);

  

  if (!candidates) {
    return <div>Please Wait...</div>;
  }

  return (
    <>
      <main>
        <h1>Candidate Search</h1>
        <img src = {candidates.avatar_url} alt = {`${candidates.login}'s avatar`}></img>
            <p>Username: {candidates.login}</p>
            <p>Location: {candidates.location || 'N/A'} </p>
            <p>Email: {candidates.email || 'N/A'}</p>
            <p>Company: {candidates.company || 'N/A'}</p>
            <p>Bio: {candidates.bio || 'N/A'}</p>

            <div className = 'candidateButton'>
              <button onClick = {fetchUser}>Deny</button>
              <button onClick = {candidateApprove}>Approve</button>
            </div>
      </main>
    </>
  )
};

export default CandidateSearch;
