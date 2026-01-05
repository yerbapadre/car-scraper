import { Bell, Link, Mail } from "lucide-react";

export default function HowItWorks() {
    return (
        <div id="how-it-works"
            className="max-w-7xl mx-auto py-24 px-8 w-full text-center space-y-4">
            <h2 className="text-5xl font-bold">How CarFindr Works</h2>
            <p className="text-gray-500 text-lg">
                Set up your email alerts in less than a minute and let us do the rest.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-12 text-left">
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 p-6 space-y-4 relative shadow-sm">
                    <div className="absolute -top-4 right-4 bg-sky-800 text-white rounded-full p-2 inline-block text-sm font-bold">
                        <div className="flex items-center justify-center w-6 h-6">1</div>
                    </div>
                    <Link className="w-8 h-8 bg-sky-200 text-sky-800 rounded-lg p-2 inline-block" />
                    <h3 className="text-xl font-bold">Paste your Search</h3>
                    <p className="text-gray-500">Copy the URL from your Edmunds search page with all your filters applied.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 p-6 space-y-4 relative shadow-sm">
                    <div className="absolute -top-4 right-4 bg-sky-800 text-white rounded-full p-2 inline-block text-sm font-bold">
                        <div className="flex items-center justify-center w-6 h-6">2</div>
                    </div>
                    <Bell className="w-8 h-8 bg-sky-200 text-sky-800 rounded-lg p-2 inline-block" />
                    <h3 className="text-xl font-bold">Specify your notification cadence</h3>
                    <p className="text-gray-500">Choose how often you want to receive alerts.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 p-6 space-y-4 relative shadow-sm">
                    <div className="absolute -top-4 right-4 bg-sky-800 text-white rounded-full p-2 inline-block text-sm font-bold">
                        <div className="flex items-center justify-center w-6 h-6">3</div>
                    </div>
                    <Mail className="w-8 h-8 bg-sky-200 text-sky-800 rounded-lg p-2 inline-block" />
                    <h3 className="text-xl font-bold">Receive instant alerts</h3>
                    <p className="text-gray-500">Receive an email notification the moment a matching car is posted on Edmunds.</p>
                </div>
            </div>

        </div>
    )
}