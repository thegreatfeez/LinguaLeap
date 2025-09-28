import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/Vector.png" 
              alt="LinguaLeap-Logo" 
              className="w-6 h-6"
            />
            <span className="text-lg font-semibold text-gray-800">LinguaLeap</span>
          </div>
          <p className="text-gray-600 mb-4">
            Empowering language learners worldwide through intelligent flashcard technology.
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-700 transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © 2025 LinguaLeap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}