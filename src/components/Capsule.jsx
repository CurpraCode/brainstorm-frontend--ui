import React from 'react'

function Capsule() {
  return (
    <div>
        <div className="container mx-auto pb-8 px-6">
            <div className="flex justify-between gap-2 flex-col md:flex-row">
                <h1 className="text-4xl font-semibold mb-3 md:mb-6">Capsules result</h1>
                <div className="mb-4"><label className="font-medium" for="itemsPerPageInput">Items Per Page: </label>
                <div className="inline-flex w-16">
                    <input type="number" id="itemsPerPageInput" className="w-full border p-2" inputmode="numeric" value="5"/>
                        </div>
                        </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white p-4 border-2">
                                <h2 className="text-lg font-semibold mb-2">Capsule S/N: C101</h2>
                                <p className="text-gray-800 capitalize mb-3">Details: Reentered after three weeks in orbit</p>
                                <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0 sm:items-center mb-3">
                                    <p className="xl:text-sm capitalize px-2 py-1 bg-blue-800 text-white">Status: retired</p>
                                    <p className="text-gray-800 capitalize">Type: Dragon 1.0</p>
                                    </div>
                                    <p className="text-gray-800 capitalize mb-4">Original Launch: 8th December, 2010</p>
                                    <button className="text-white font-semibold bg-black px-4 py-2">View Details</button>
                                    </div>
                                    <div className="bg-white p-4 border-2">
                                        <h2 className="text-lg font-semibold mb-2">Capsule S/N: C102</h2>
                                        <p className="text-gray-800 capitalize mb-3">Details: First Dragon spacecraft</p>
                                        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0 sm:items-center mb-3">
                                            <p className="xl:text-sm capitalize px-2 py-1 bg-blue-800 text-white">Status: retired</p>
                                            <p className="text-gray-800 capitalize">Type: Dragon 1.0</p>
                                            </div>
                                            <p className="text-gray-800 capitalize mb-4">Original Launch: 22nd May, 2012</p>
                                            <button className="text-white font-semibold bg-black px-4 py-2">View Details</button>
                                            </div>
                                            <div className="bg-white p-4 border-2">
                                                <h2 className="text-lg font-semibold mb-2">Capsule S/N: C103</h2><p className="text-gray-800 capitalize mb-3">Details: First of twenty missions flown under the CRS1 contract</p><div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0 sm:items-center mb-3"><p className="xl:text-sm capitalize px-2 py-1 bg-gray-700 text-white">Status: unknown</p><p className="text-gray-800 capitalize">Type: Dragon 1.0</p></div><p className="text-gray-800 capitalize mb-4">Original Launch: 8th October, 2012</p><button className="text-white font-semibold bg-black px-4 py-2">View Details</button></div><div className="bg-white p-4 border-2"><h2 className="text-lg font-semibold mb-2">Capsule S/N: C104</h2><div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0 sm:items-center mb-3"><p className="xl:text-sm capitalize px-2 py-1 bg-gray-700 text-white">Status: unknown</p><p className="text-gray-800 capitalize">Type: Dragon 1.0</p></div><p className="text-gray-800 capitalize mb-4">Original Launch: 1st March, 2013</p><button className="text-white font-semibold bg-black px-4 py-2">View Details</button></div><div className="bg-white p-4 border-2"><h2 className="text-lg font-semibold mb-2">Capsule S/N: C105</h2><p className="text-gray-800 capitalize mb-3">Details: First Dragon v1.1 capsule</p><div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0 sm:items-center mb-3"><p className="xl:text-sm capitalize px-2 py-1 bg-gray-700 text-white">Status: unknown</p><p className="text-gray-800 capitalize">Type: Dragon 1.1</p></div><p className="text-gray-800 capitalize mb-4">Original Launch: 18th April, 2014</p><button className="text-white font-semibold bg-black px-4 py-2">View Details</button></div></div><div className="flex items-center justify-center mt-4"><button className="px-4 py-2 mr-2 bg-black text-white font-semibold" disabled="">Previous</button><span className="text-lg">1 / 4</span><button className="px-4 py-2 ml-2 bg-black text-white font-semibold">Next</button></div></div>
    </div>
  )
}

export default Capsule