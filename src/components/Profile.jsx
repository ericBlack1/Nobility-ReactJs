import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Settings, LogOut, Plus, ToggleLeft, ToggleRight } from "lucide-react";

const PersonalAccountPage = () => {
  const { state } = useLocation();
  const [availableForHire, setAvailableForHire] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const user = state?.artist || {
    name: "Acha Nfon",
    email: "acha.nfonn@example.com",
    profilePic: "/path/to/profile-pic.jpg",
    favoriteArtists: ["Mballa Elanga", "Richard Bona", "Manu Dibango"],
    recentlyPlayed: [
      { title: "Echoes of Ancestors", artist: "Mballa Elanga" },
      { title: "Djombwe", artist: "Richard Bona" },
      { title: "Soul Makossa", artist: "Manu Dibango" },
      { title: "Douala Nights", artist: "Mballa Elanga" },
    ],
    playlists: [
      { name: "Cameroon Classics", trackCount: 25 },
      { name: "Modern African Fusion", trackCount: 40 },
      { name: "Relaxing Rainforest Sounds", trackCount: 15 },
    ],
  };

  const toggleAvailability = () => {
    setAvailableForHire(!availableForHire);
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 text-green-800 font-sans">
      <header className="bg-green-800 p-4 sm:p-6">
        <Link
          to="/home"
          className="mt-2 mb-3 flex justify-between items-center"
        >
          <button className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="h-6 w-6"
              aria-label="Back"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span className="text-white text-lg font-semibold">Back</span>
          </button>
        </Link>
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={user.profilePic || user.image}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-sm text-green-200">
                {user.email || user.region}
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-end space-x-4">
            <motion.button
              className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Settings className="mr-2" size={20} />
            </motion.button>
            <motion.button
              className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogOut className="mr-2" size={20} />
            </motion.button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto max-w-6xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <motion.button
            onClick={toggleAvailability}
            className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4 sm:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {availableForHire ? (
              <ToggleRight className="mr-2" />
            ) : (
              <ToggleLeft className="mr-2" />
            )}
            Available for Hire
          </motion.button>
          <motion.button
            onClick={openAddModal}
            className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-2 px-4 rounded transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="inline mr-2" /> Add Song/Album
          </motion.button>
        </div>

        {showAddModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-green-800">
                Add New Song/Album
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="bg-green-100 text-green-800 rounded w-full py-2 px-3 mb-3"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="type"
                  >
                    Type
                  </label>
                  <select
                    id="type"
                    className="bg-green-100 text-green-800 rounded w-full py-2 px-3"
                  >
                    <option value="song">Song</option>
                    <option value="album">Album</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <motion.button
                    type="button"
                    onClick={closeAddModal}
                    className="bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 px-4 rounded mr-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-green-800 font-bold py-2 px-4 rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </main>

      <footer className="bg-green-800 text-green-200 p-4">
        <div className="container mx-auto max-w-6xl text-center sm:text-left">
          <p>&copy; 2023 Your App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalAccountPage;
