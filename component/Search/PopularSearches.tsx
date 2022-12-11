import Link from "next/link";
import { iSearchPopular } from "@type/component/Search.d";

export default function PopularSearches({
    data,
}: {
    data: Array<iSearchPopular>;
}) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-600">Popular Searches</h2>

            <div className="flex flex-col gap-2">
                {data.map((item) => (
                    <PopularSearchItem {...item} key={item.name} />
                ))}
            </div>
        </div>
    );
}

function PopularSearchItem({ name, href }: iSearchPopular) {
    return (
        <Link href={href}>
            <div className="px-2 py-1 text-sm flex items-center justify-between gap-2 bg-white text-gray-500 border border-gray-100 rounded-md shadow-sm cursor-pointer hover:border-gray-300">
                <span className="grow">{name}</span>
            </div>
        </Link>
    );
}
