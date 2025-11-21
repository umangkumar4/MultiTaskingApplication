import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MyApp
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-lg">
            <li>
              <Link 
                to="/todo" 
                className="hover:text-yellow-400 transition-colors"
              >
                Todo
              </Link>
            </li>

            <li>
              <Link 
                to="/ecommerce" 
                className="hover:text-yellow-400 transition-colors"
              >
                Ecommerce
              </Link>
            </li>

            <li>
              <Link 
                to="/dashboard" 
                className="hover:text-yellow-400 transition-colors"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link 
                to="/about" 
                className="hover:text-yellow-400 transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link 
                to="/contact" 
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link 
                to="/profile" 
                className="hover:text-yellow-400 transition-colors"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
