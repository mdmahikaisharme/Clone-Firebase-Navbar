export default function Page() {
    return (
        <div className="px-4 py-4 flex flex-col gap-3">
            <h3 className="text-base font-bold text-blue-500">Installation</h3>
            <h1 className="text-4xl font-bold text-black">
                Get Started with Tailwind CSS
            </h1>
            <p className="text-xl">
                Tailwind CSS works by scanning all of your HTML files,
                JavaScript components, and any other templates for class names,
                generating the corresponding styles and then writing them to a
                static CSS file.
            </p>
            <p className="text-xl">
                It's fast, flexible, and reliable — with zero-runtime.
            </p>

            <h3 className="text-xl font-bold text-black">Installation</h3>

            <div className="">
                <div className="flex gap-4 border-b border-gray-200">
                    <div className="pb-2 border-b-2 text-black border-transparent hover:text-blue-500 hover:border-blue-500">
                        Tailwind CLI
                    </div>
                    <div className="pb-2 border-b-2 text-black border-transparent hover:text-blue-500 hover:border-blue-500">
                        Tailwind CLI
                    </div>
                    <div className="pb-2 border-b-2 text-black border-transparent hover:text-blue-500 hover:border-blue-500">
                        Tailwind CLI
                    </div>
                    <div className="pb-2 border-b-2 text-black border-transparent hover:text-blue-500 hover:border-blue-500">
                        Tailwind CLI
                    </div>
                </div>
                <div className="">Content</div>
            </div>
        </div>
    );
}
