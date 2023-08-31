import { Link } from 'react-router-dom';
import './header.scss'

const Header= ()=>{
    return (
      <header>
        <Link to='/'>Home</Link>
        <Link to='/history'>History</Link>
        <h1>RESTy</h1>
      </header>
    );
  }

export default Header;