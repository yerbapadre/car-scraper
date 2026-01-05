export default function Nav() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-4 w-full">
            <header className="flex w-full justify-between items-center">
                <div className="font-bold text-lg">CarFindr</div>
                <nav className="flex text-gray-500 text-sm">
                    <ul className="flex gap-6">
                        <a href="#how-it-works">How it works</a>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                    </ul>
                </nav>
                <button className="bg-sky-800 text-white text-sm px-4 py-2 rounded-lg">
                    Get Started
                </button>
            </header>
        </div>
    )
}