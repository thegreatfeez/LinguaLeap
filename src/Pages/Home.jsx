import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <img 
              src="/vector.png" 
              alt="LinguaLeap-Logo" 
              className="w-12 h-12"
            />
            <h1 className="text-4xl font-bold text-gray-900">LinguaLeap</h1>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Welcome to Your Language Learning Journey
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Master new languages with our intelligent flashcard system. Create custom decks, 
            track your progress, and accelerate your learning with spaced repetition techniques 
            designed to help you retain vocabulary effectively.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Smart</div>
                <p className="text-gray-600">Adaptive learning algorithms</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Fast</div>
                <p className="text-gray-600">Quick and efficient study sessions</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Effective</div>
                <p className="text-gray-600">Proven spaced repetition method</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 font-medium">Ready to get started?</p>
            <Link
              to="/login"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Log In to Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}