import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchFilter from "./SearchFilter";
import moment from "moment";

function Capsule() {
  const [capsules, setCapsules] = useState([]);
  const [filteredCapsules, setFilteredCapsules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://brainstorm-restful-173dc38d85c2.herokuapp.com/api/capsules",
      );
      setCapsules(response?.data.result.data);
      console.log("data", response.data.result.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleSearch = (filters) => {
    // Filter the capsules array based on the provided filters
    const filteredData = capsules.filter((capsule) => {
      return (
        capsule.capsule_serial
          .toLowerCase()
          .includes(filters.serial.toLowerCase()) &&
        capsule.status.toLowerCase().includes(filters.status.toLowerCase()) &&
        capsule.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    });

    // Update the filteredCapsules state
    setFilteredCapsules(filteredData);

    // Reset current page to 1 when applying new filters
    setCurrentPage(1);
    setItemsPerPage(10);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCapsules.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const openModal = (capsule) => {
    setSelectedCapsule(capsule);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCapsule(null);
  };
  // Render loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render error state
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "destroyed":
        return "bg-red-500 text-white";
      case "retired":
        return "bg-yellow-500 text-gray-800";
      case "unknown":
        return "bg-gray-500 text-white";
      case "active":
        return "bg-green-500 text-white";
      default:
        return "bg-blue-800 text-white"; // Default to blue if the status is not recognized
    }
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
      <div className="container mx-auto pb-8 px-6">
        <div className="flex justify-between gap-2 flex-col md:flex-row">
          <h1 className="text-2xl font-semibold mb-3 md:mb-6">Capsules result</h1>
          <div className="mb-4">
            <label className="font-medium" htmlFor="itemsPerPageInput">
              Items Per Page:{" "}
            </label>
            <div className="inline-flex w-16">
              <input
                type="number"
                id="itemsPerPageInput"
                className="w-full rounded-md border p-2"
                inputMode="numeric"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {currentItems?.map((capsule) => {
            return (
              <div key={capsule.capsule_serial}>
                <div className="bg-[rgba(255, 208, 165, 0.13)] backdrop-blur-[4.2px] -webkit-backdrop-blur-[4.2px] border-[1px] border-[rgba(255, 208, 165, 0.3)] rounded-[16px] shadow-[0 4px 30px rgba(0, 0, 0, 0.1)] px-6 py-4">
                  <h2 className="text-lg font-semibold mb-2">
                    Capsule S/N: {capsule.capsule_serial}
                  </h2>
                  <p className="text-gray-800 text-sm capitalize mb-3">
                    Details: {capsule.details}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0 sm:items-center mb-3">
                    Status:{" "}
                    <p
                      className={`xl:text-sm rounded-lg capitalize px-2 py-1 ${getStatusStyle(
                        capsule.status,
                      )}`}
                    >
                      {capsule.status}
                    </p>
                    <p className="text-gray-800 capitalize text-sm ">
                      Type: {capsule.type}
                    </p>
                  </div>
                  <p className="text-gray-800 text-sm  capitalize mb-4">
                    Original Launch:{" "}
                    {moment(capsule.original_launch).format("MMM Do YYYY")}
                  </p>
                  <button
                    onClick={() => openModal(capsule)}
                    className="text-white font-semibold border-1 rounded-xl bg-cyan-500 px-4 py-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {isModalOpen && selectedCapsule && (
          <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-gray-700 bg-opacity-75 modal-overlay transition duration-1000 ease-in-out"
            role="dialog"
          >
            <div className="w-5/6 md:w-2/5 bg-white p-6 rounded-2xl">
              {/* Modal content with selectedCapsule details */}
              <h2 className="text-xl font-semibold mb-4">
                Capsule S/N: {selectedCapsule.capsule_serial}
              </h2>
              <p className="mb-3">Details: {selectedCapsule.details}</p>
              <div className="mb-3">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-2">Missions:</h3>
                  <ul className="list-disc">
                    <li>
                      <p>
                        <span className="font-semibold">CRS-6</span> - Flight 22
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="font-semibold">CRS-13</span> - Flight 51
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="font-semibold">CRS-18</span> - Flight 82
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-0 sm:items-center mb-3">
                  Status:{" "}
                  <p className="text-white capitalize px-2 py-1 bg-green-600">
                    {selectedCapsule.status}
                  </p>
                  <p className="text-gray-800 capitalize">
                    Type: {selectedCapsule.type}
                  </p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-800 capitalize">
                    Landings: {selectedCapsule.landings}
                  </p>
                  <p className="text-gray-800 capitalize">
                    Reuse Count: {selectedCapsule.reuse_count}
                  </p>
                </div>
                <p className="text-gray-800 capitalize mb-3">
                  Original Launch:{" "}
                  {moment(selectedCapsule.original_launch).format("MMM Do YYYY")}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="mt-4 text-white rounded-xl bg-cyan-500 px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center mt-4">
          <button
            className="px-4 py-2 mr-2 rounded-lg bg-black text-white font-semibold"
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </button>
          <span className="text-lg">
            {currentPage} / {Math.ceil(filteredCapsules.length / itemsPerPage)}
          </span>
          <button
            className="px-4 py-2 ml-2 bg-black rounded-lg text-white font-semibold"
            disabled={
              currentPage === Math.ceil(filteredCapsules.length / itemsPerPage)
            }
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Capsule;
