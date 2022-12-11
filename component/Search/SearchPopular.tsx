import { PopularSearches, PopularTags } from "@component/Search";

export default function SearchPopular() {
    const dataTags = [
        { name: "Realtime", href: "/" },
        { name: "Text View", href: "/" },
        { name: "Reload", href: "/" },
        { name: "Platform", href: "/" },
    ];
    const dataSearches = [
        { name: "Real time interation", href: "/" },
        { name: "cross platform support", href: "/" },
        { name: "fast and effecient run", href: "/" },
        { name: "write one where server any where", href: "/" },
    ];

    return (
        <>
            <PopularTags data={dataTags} />
            <PopularSearches data={dataSearches} />
        </>
    );
}
