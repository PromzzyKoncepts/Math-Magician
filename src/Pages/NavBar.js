import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="nav-container">
      <h1>Math Magicians</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </>
);

// const Link = ({ to, children }) => {
//   const isActive = useMatch({ path: useResolvedPath(to).pathname, end: true });

//   return (
//     <li>
//       <Link className={isActive ? 'active' : ''} to={to}>{children}</Link>
//     </li>
//   );
// };

export default NavBar;
