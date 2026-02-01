import Image from "next/image";
import Link from "next/link";

export default function NewHero() {
    return (
        <>
            <div className=" text-white bg-gradient-to-br from-primary to-secondary  py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl z-30 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="space-y-6 z-40">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Build Real Software.
                        </h1>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Become Job-Ready Developers.                        </h1>
                        <p className="text-lg text-gray-200">
                            We help learners and businesses turn ideas into production-ready software.
                            From hands-on coding programs to modern web and app development,
                            Yoursfriend bridges the gap between learning and real-world tech careers.                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/#services">
                            <button className="bg-white text-center text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 flex items-center gap-2 shadow-lg">
                                Start your tech journey
                            </button>
                            </Link>
                            <Link href="/#programs">
                            <button  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg">
                                    View our program
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/heroside.png"
                            alt="heroside"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

        </>
    )
}
