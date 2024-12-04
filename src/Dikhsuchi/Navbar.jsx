import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">
      <div className="text-lg font-bold">
        <Link to="/" className="text-gray-900">
          {'SOCaiL'}
        </Link>
      </div>
      <ul className="flex space-x-5">
        <li>
          <Link to="/" className="text-gray-700 hover:text-indigo-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-700 hover:text-indigo-500">About</Link>
        </li>
        <li>
          <Link to="/faq" className="text-gray-700 hover:text-indigo-500">FAQ</Link>
        </li>
        {/* Only render Login and Pricing when logged out */}
        <li>
          <Link 
            to="/login" 
            className="text-indigo-500 border-2 border-indigo-500 hover:border-indigo-700 transform transition-transform duration-300 hover:scale-105 p-2 rounded-md"
          >
            Login
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="text-white bg-indigo-500 hover:bg-indigo-700 p-2 rounded-md">
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
