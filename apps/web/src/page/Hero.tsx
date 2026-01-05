import { ArrowRight, Bell } from "lucide-react";
import carImage from "../assets/images/43.png";

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto py-4 md:py-24 px-8">
            <div className="flex flex-col lg:flex-row w-full">
                <div className="flex-1 flex flex-col gap-4">
                    <div className=" bg-red-100 text-red-400 text-sm px-3 py-0.75 rounded-full flex items-center gap-2 w-fit">
                        <Bell className="w-4 h-4 inline" />
                        <p>
                            Never miss your dream car
                        </p>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Get instant alerts for new Edmunds listings
                    </h1>
                    <p className="text-gray-500 text-lg">Stop refreshing websites every hour. Paste your search URL and we'll email you when a matching cars is posted.</p>
                    <div className="space-y-4">
                        <div className="flex gap-4 flex-col sm:flex-row">
                            <div className="relative flex-1">
                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Paste your Edmunds search URL..."
                                    className="border border-gray-200 p-2 rounded-lg w-full inline shadow-md text-gray-400"
                                />
                            </div>
                            <button className="bg-sky-800 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                <p className="text-sm">Start Tracking</p>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">✓ Free trial &middot; No credit card required &middot; Cancel anytime</p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src={carImage} alt="Car" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}