import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <header className = "nav">
      <nav>
        <Link to ="/" className = "nav-link">Home</Link>
        <Link to = "/savedcandidates" className = " nav-link nav-item">Saved Candidates</Link>
      </nav>
    </header>
  )
};

export default Nav;
