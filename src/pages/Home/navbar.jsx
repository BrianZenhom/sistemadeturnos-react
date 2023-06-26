import './navbar.css';

// Assets Import
import { Link } from 'react-router-dom';
import { HjmLogo } from '../../assets/Hjm';
import { LogoutButton } from '../../assets/LogoutButton';

export function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="logo-nav">
          <Link to="/">
            <HjmLogo />
          </Link>
        </div>
        <div className="nav-links">
          <li>
            <Link to="/solicitarturno">Solicitar turno</Link>
          </li>
          <li>
            <Link to="/verturno">Ver turno</Link>
          </li>
          <li>
            <Link to="/pages/profesionales">Profesionales</Link>
          </li>
          <li>
            <Link to="">Usuarios</Link>
          </li>
          <li>
            <Link to="">
              <LogoutButton />
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
