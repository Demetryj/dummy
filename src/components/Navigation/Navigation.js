import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = ({ tabs }) => {
  return (
    <nav>
      <ul className="navList">
        {tabs
          .sort((a, b) => a.order - b.order)
          .map(tab => (
            <li key={tab.id} className="navItem">
              <NavLink to={tab.id} className="navLink">
                {tab.id}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
