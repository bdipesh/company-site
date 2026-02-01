"use client"

import Link from "next/link";

const NewHeader = () => {
    const popupOutTwak = () => {
        if(window.Tawk_API) {
            window.Tawk_API.maximize();
        }
    }
    return (
        <>
            <nav className="sticky top-0 z-50 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <img src="/new-logo/main-logo.svg" height={200} width={200} />

                        </Link>
                    </div>


                    <div className="hidden md:flex items-center gap-8 text-sm text-slate-700">
                        <a href="#programs" className="hover:text-primary">Programs</a>
                        <a href="#about" className="hover:text-primary">About</a>
                        <a href="#services" className="hover:text-primary">Contact</a>
                    </div>


                    <div
                        onClick={popupOutTwak}
                        className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium"
                    >
                        Chat With Us
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NewHeader;
