import carImage from "./assets/images/43.png";

function App() {
  return (
    <div className="h-screen flex flex-col items-center">
      <header className="flex w-full justify-between items-center max-w-7xl mx-auto">
        <div>Logo</div>
        <nav className="flex">
          <ul className="flex gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="bg-sky-800 text-white px-4 py-2 rounded-md">
          Get Started
        </button>
      </header>

      <div className="flex w-full max-w-7xl mx-auto py-24">
        <div className="flex-1">
          <p className=" bg-red-100 text-red-300 px-2 py-0.5 rounded-full inline">
            Find your dream car without the hassle
          </p>
          <h1 className="text-5xl font-bold">
            Get instant alerts for new Edmunds listings
          </h1>
          <p>No more page refreshes or manual checking. Paste </p>
          <div>
            <div>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Enter your email"
                className="border border-gray-200 p-2 rounded-md w-full"
              />
              <button className="bg-sky-800 text-white px-4 py-2 rounded-md">
                Start Tracking
              </button>
            </div>
            <p>✓ Free trial &middot; No credit card required &middot; Cancel anytime</p>
          </div>
        </div>
        <div className="flex-1">
          <img src={carImage} alt="Car" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default App;
