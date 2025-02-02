import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md ">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-300 pb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <Image
                  src="/assets/Logo Icon.png"
                  alt="Comforty Logo"
                  width={40}
                  height={40}
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Comforty</h2>
            </div>
            <p className="text-sm text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-500">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Category</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Sofa
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Armchair
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Wing Chair
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Desk Chair
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Wooden Chair
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Park Bench
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">Newsletter</h3>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Lower Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 text-sm text-gray-500">
          <p className="text-center lg:text-left">© 2021 - Blogy - Designed & Developed by Zakirsoft</p>
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            
          </div>
        </div>
      </div>
    </footer>
  );
}
