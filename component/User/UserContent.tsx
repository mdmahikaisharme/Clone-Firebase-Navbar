import Link from "next/link";
import { motion } from "framer-motion";

export default function UserContent({ onClose }: { onClose: Function }) {
    return (
        <motion.div
            className={`w-[calc(100vw-1rem)] xs:w-[400px] px-4 py-4 absolute top-[calc(100%+1rem)] right-0 flex flex-col gap-2 bg-white border border-gray-200 rounded-md shadow-md scrollY`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
        >
            <div className="flex flex-col items-center justify-center">
                <div className="w-32 h-32 grid border-2 border-gray-200 hover:border-gray-300 rounded-full overflow-hidden"></div>
                <h2 className="mt-4 text-2xl font-semibold text-gray-500">
                    Guest User
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    Your are a guest user.
                </p>
            </div>

            <div className="pt-4 grow flex items-center justify-center gap-4">
                <Link href={"/auth/login"}>
                    <a className="h-10 px-6 text-sm text-blue-500 flex items-center rounded-md hover:bg-blue-100">
                        Login
                    </a>
                </Link>
                <Link href={"/auth/signup"}>
                    <a className="h-10 px-6 text-sm font-semibold text-white bg-blue-500 flex items-center rounded-md hover:bg-blue-400">
                        SignUp
                    </a>
                </Link>
            </div>
        </motion.div>
    );
}
