import { iSearchPopular } from "@type/component/Search.d";
import Link from "next/link";

export default function PopularTags({ data }: { data: Array<iSearchPopular> }) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-600">Popular Tags</h2>

            <div className="flex gap-2 flex-wrap">
                {data.map((item) => (
                    <PopularTagItem {...item} key={item.name} />
                ))}
            </div>
        </div>
    );
}

function PopularTagItem({ name, href }: iSearchPopular) {
    return (
        <Link href={href}>
            <div className="px-2 py-1 text-sm bg-white text-gray-500 border border-gray-100 rounded-md shadow-sm transition-all cursor-pointer hover:border-gray-300">
                <span>{name}</span>
            </div>
        </Link>
    );
}
