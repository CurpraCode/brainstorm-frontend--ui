import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SearchFilter({ onSearch }) {
  const [serial, setSerial] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    onSearch({ serial, status, type });
  }, [serial, status, type]);

  const handleSerialChange = (e) => {
    setSerial(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <section className="container mx-auto py-16 px-6">
        <form className="bg-white rounded-lg p-6 border-2" data-testid="search-form">
          <h2 className="text-2xl font-semibold mb-4">Filter Capsules</h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">Serial:</label>
              <input
                type="text"
                className="w-full rounded-md border p-2"
                placeholder="Enter capsule serial"
                data-testid="serial-input"
                value={serial}
                onChange={handleSerialChange}
              />
            </div>
            <div className="flex w-full gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">Status:</label>
                <select
                  className="w-full rounded-md border p-2"
                  data-testid="status-select"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="">All</option>
                  <option>retired</option>
                  <option>unknown</option>
                  <option>active</option>
                  <option>destroyed</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium mb-1">Type:</label>
                <select
                  className="w-full rounded-md border p-2"
                  data-testid="type-select"
                  value={type}
                  onChange={handleTypeChange}
                >
                  <option value="">All</option>
                  <option>Dragon 1.0</option>
                  <option>Dragon 1.1</option>
                  <option>Dragon 2.0</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

// Define prop types for the SearchFilter component
SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFilter;
