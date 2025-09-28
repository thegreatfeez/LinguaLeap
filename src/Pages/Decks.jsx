import React from "react"
import { Link } from "react-router-dom";

export default function Decks(){
   const [decks, setDecks] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-6">
                
                
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome back, Sarah!
                    </h1>
                    <p className="text-gray-600">
                        Let's continue your language journey.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Recent Decks
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-32 bg-cover bg-center" 
                                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')"}}>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 mb-1">Japanese Basics</h3>
                                <p className="text-gray-500 text-sm">50 cards</p>
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-32 bg-cover bg-center"
                                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')"}}>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 mb-1">Spanish for Travel</h3>
                                <p className="text-gray-500 text-sm">30 cards</p>
                            </div>
                        </div>

                       
                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-32 bg-cover bg-center"
                                 style={{backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80')"}}>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 mb-1">French Cuisine</h3>
                                <p className="text-gray-500 text-sm">40 cards</p>
                            </div>
                        </div>

                       <Link to="/createDeck">
                        <div className="bg-white rounded-lg shadow-md border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
                            <div className="h-32 flex items-center justify-center">
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-2xl text-gray-400">+</span>
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-gray-600 mb-1">Add New Deck</h3>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
               

              
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Actions
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link to="/createDeck" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
                            <span className="text-xl">+</span>
                            <span>Create New Deck</span>
                        </Link>
                        
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
                            <span className="text-xl">🔍</span>
                            <span>Browse Decks</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}