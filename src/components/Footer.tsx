export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4 md:mb-0">
                        <p className="text-center text-sm text-gray-400 md:text-left">
                            &copy; {new Date().getFullYear()} Jiwon's College Prep Journey. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Contact
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
