// TODO: Create an interface for the Candidate objects returned by the API
interface CandidateSearch {
    image: string,
    name: string,
    location: string,
    email: string,
    company: string,
    bio: string,
};

export default CandidateSearch;