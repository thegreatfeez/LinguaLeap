import React from "react";
import { BarChart3, TrendingUp, Target, Clock, Award, PieChart } from "lucide-react";

export default function Stats() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full mb-6 animate-pulse">
            <BarChart3 className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Statistics Dashboard
          </h1>
          
          <div className="inline-block bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full font-semibold text-lg mb-6">
            Coming Soon
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're building an amazing analytics experience to help you track your learning progress and achieve your language goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">Progress Tracking</h3>
            </div>
            <p className="text-gray-600">
              Monitor your daily, weekly, and monthly learning streaks with visual progress charts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">Accuracy Metrics</h3>
            </div>
            <p className="text-gray-600">
              See your success rates and identify which cards need more practice.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">Study Time</h3>
            </div>
            <p className="text-gray-600">
              Track total time spent studying and analyze your most productive hours.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">Achievements</h3>
            </div>
            <p className="text-gray-600">
              Earn badges and rewards as you reach new milestones in your learning journey.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <PieChart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">Deck Analytics</h3>
            </div>
            <p className="text-gray-600">
              Compare performance across different decks and languages you're learning.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-500 transform hover:scale-105 transition-transform duration-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="ml-4 text-lg font-semibold text-gray-900">Performance Insights</h3>
            </div>
            <p className="text-gray-600">
              Get personalized recommendations to optimize your study sessions.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to be notified when it launches?
          </h2>
          <p className="text-gray-600 mb-6">
            We're working hard to bring you powerful analytics tools. Stay tuned for updates!
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}