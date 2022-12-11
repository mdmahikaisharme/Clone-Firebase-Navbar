import { useEffect, useState } from "react";
import { NoResult, ResultItem } from "@component/Search";
import { iSearchResult } from "@type/component/Search.d";
import { search } from "@util";

export default function SearchResult({
    data,
    limit = 5,
}: {
    data: string;
    limit?: number;
}) {
    const [result, setResult] = useState<iSearchResult[]>([
        {
            name: "Real time interation",
            discription: "Found from documenteation",
            icon: "",
            href: "/",
        },
        {
            name: "cross platform support",
            discription: "Found from documenteation",
            icon: "",
            href: "/",
        },
        {
            name: "fast and effecient run",
            discription: "Found from documenteation",
            icon: "",
            href: "/",
        },
        {
            name: "write one where server any where",
            discription: "Found from documenteation",
            icon: "",
            href: "/",
        },
    ]);

    // Everytime data change DO search
    useEffect(() => {
        search(data, setResult, limit);
    }, [data]);

    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-gray-600">Searche Results</h2>

            <div className="max-h-[50vh] h-max flex flex-col gap-2 scrollY">
                {result.map((item) => (
                    <ResultItem {...item} key={item.name} />
                ))}

                {/* NOTING TO SHOW */}
                {result.length === 0 && <NoResult />}
            </div>
        </div>
    );
}
