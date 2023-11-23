import React from 'react'

function SearchFilter() {
  return (
    <div>
        <section className="container mx-auto py-16 px-6">
            <form className="bg-white p-6 border-2" data-testid="search-form">
                <h2 className="text-2xl font-semibold mb-4">Filter Capsules</h2>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                    <div className="w-full"><label className="block text-sm font-medium mb-1">Serial:</label>
                    <input type="text" className="w-full border p-2" placeholder="Enter capsule serial" data-testid="serial-input" value=""/>

                    </div>
                    <div className="flex w-full gap-4">
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Status:</label>
                            <select className="w-full border p-2" data-testid="status-select">
                                <option value="">All</option>
                                <option>retired</option>
                                <option>unknown</option>
                                <option>active</option>
                                <option>destroyed</option>
                                </select></div>
                                <div className="w-full">
                                    <label className="block text-sm font-medium mb-1">Type:</label>
                                    <select className="w-full border p-2" data-testid="type-select">
                                        <option value="">All</option><option>Dragon 1.0</option>
                                        <option>Dragon 1.1</option>
                                        <option>Dragon 2.0</option>
                                        </select>
                                        </div>
                                        </div>
                                        </div>
                                        </form>
                                        </section>
    </div>
  )
}

export default SearchFilter