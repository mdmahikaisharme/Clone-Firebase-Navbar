import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { iSearchResult } from "@type/component/Search.d";

export default function ResultItem({
    name,
    href,
    discription,
    icon,
}: iSearchResult) {
    return (
        <Link href={href}>
            <a>
                <div className="px-4 py-2 flex items-center gap-3 bg-white border border-gray-100 rounded-md shadow-sm cursor-pointer hover:border-gray-300">
                    <div className="flex-none w-4 h-4 grid place-items-center">
                        <FaSearch className="text-gray-500" />
                    </div>

                    <div className="grow flex flex-col">
                        <span className="text-base font-semibold text-gray-600">
                            {name}
                        </span>
                        <span className="text-xs text-gray-400">
                            {discription}
                        </span>
                    </div>
                </div>
            </a>
        </Link>
    );
}
