import { Clock, DollarSign, Lightbulb, Phone, Shield, TrendingUp } from "lucide-react";

export default function Features() {
    return (
        <div id="features" className="max-w-7xl mx-auto py-24 px-8 w-full text-center space-y-4">
            <h2 className="text-5xl font-bold">Everything you need to find your next car</h2>
            <p className="text-gray-500 text-lg">
                Powerful features designed to help you stay ahead of the competition
            </p>
            <div className="grid grid-cols-3 gap-4 mt-12 text-left">
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 p-6 space-y-4 relative">
                    <Clock className="w-8 h-8 bg-sky-200 text-sky-800 rounded-lg p-2 inline-block" />
                    <h3 className="text-xl font-bold">Real-time Monitoring</h3>
                    <p className="text-gray-500 text-sm">We check Edmunds every half hour so you get alerts before anyone else even sees the listing. Unless of course, they check during that interval...</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 p-6 space-y-4 relative">
                    <Shield className="w-8 h-8 bg-sky-200 text-sky-800 rounded-lg p-2 inline-block" />
                    <h3 className="text-xl font-bold">Privacy First</h3>
                    <p className="text-gray-500 text-sm">Your email and search data are encrypted and never shared with third parties. I'll probably look at your searches though, just for fun</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 p-6 space-y-4 relative">
                    <Lightbulb className="w-8 h-8 bg-sky-200 text-sky-800 rounded-lg p-2 inline-block" />
                    <h3 className="text-xl font-bold">Lightning Fast</h3>
                    <p className="text-gray-500 text-sm">Receive an email notification within minutes for matching cars posted on Edmunds. Unless this thing breaks, which it likely will</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 p-6 space-y-4 relative">
                    <DollarSign className="w-8 h-8 bg-sky-200 text-sky-800 rounded-lg p-2 inline-block" />
                    <h3 className="text-xl font-bold">No Hidden Fees</h3>
                    <p className="text-gray-500 text-sm">What I charge you is what you pay</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 p-6 space-y-4 relative">
                    <Phone className="w-8 h-8 bg-sky-200 text-sky-800 rounded-lg p-2 inline-block" />
                    <h3 className="text-xl font-bold">Mobile Friendly</h3>
                    <p className="text-gray-500 text-sm">No that doesn't mean you're getting a mobile app. Just good ol' responsive sizing</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 space-y-2 p-6 space-y-4 relative">
                    <TrendingUp className="w-8 h-8 bg-sky-200 text-sky-800 rounded-lg p-2 inline-block" />
                    <h3 className="text-xl font-bold">Multiple Searches</h3>
                    <p className="text-gray-500 text-sm">I'll give you 3. After that take out your wallet</p>
                </div>
            </div>

        </div>
    )
}