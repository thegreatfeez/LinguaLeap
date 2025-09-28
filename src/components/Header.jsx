import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-50 border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
     
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/Vector.png" 
            alt="LinguaLeap-Logo" 
            className="w-8 h-8"
          />
          <h1 className="text-xl font-semibold text-gray-900">
            LinguaLeap
          </h1>
        </Link>

      
        <nav className="flex items-center space-x-12">
          <NavLink 
            to="/decks" 
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold text-lg border-b-2 border-blue-600 pb-1 tracking-wide"
                : "text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg tracking-wide"
            }
          >
            Decks
          </NavLink>
          
          <NavLink 
            to="/stats" 
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold text-lg border-b-2 border-blue-600 pb-1 tracking-wide"
                : "text-gray-600 hover:text-gray-900 transition-colors font-medium text-lg tracking-wide"
            }
          >
            Stats
          </NavLink>
        </nav>

        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <IoNotificationsOutline className="w-5 h-5" />
          </button>

          <Link 
            to="/login" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaUserCircle className="w-8 h-8" />
          </Link>
        </div>
        
      </div>
    </header>
  );
}