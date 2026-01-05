import { ArrowRight } from "lucide-react";

export default function Pricing() {
    return (
        <div id="pricing" className="max-w-7xl mx-auto py-24 px-8 w-full text-center space-y-4 bg-sky-800">
            <h2 className="text-5xl font-bold text-white">Ready to find your perfect car?</h2>
            <p className="text-gray-100 text-lg">Join me, and maybe 2 others who found their dream vehicle on CarFindr. </p>
            <div className="space-y-4 max-w-md mx-auto mt-8">
                <div className="flex gap-4">
                    <div className="relative flex-1">
                        <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Enter your email..."
                            className="border border-sky-600 p-2 rounded-lg w-full text-gray-100 bg-sky-500/50"
                        />
                    </div>
                    <button className="bg-white text-sky-800 px-4 py-2 rounded-lg flex items-center gap-2">
                        <p className="text-sm">Start Tracking</p>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                <p className="text-sky-500 text-sm">7-day free trial &middot; No credit card, but I take Venmo</p>
            </div>
        </div>
    )
}