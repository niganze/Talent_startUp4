function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-lg font-bold">Guard Visitor</span>
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">Project</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
        </div>

        {/* Download App Button */}
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Download App</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

