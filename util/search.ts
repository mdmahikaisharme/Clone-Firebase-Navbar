import { iSearchResult } from "@type/component/Search.d";
import db from "@db";

export default function search(
    data: string,
    setResult: Function,
    limit: number = 5
) {
    let sidebarResult = resultSidebar(data);

    // Return
    return setResult([...sidebarResult].slice(0, limit));
}

// GET RESULT FROM SIDEBAR
function resultSidebar(data: string): Array<iSearchResult> {
    const result: Array<iSearchResult> = [];

    // Check Datas
    db.sidebar.forEach((item) => {
        const name = item.name.toLocaleLowerCase();

        if (name.includes(data)) {
            result.push({
                name: item.name,
                discription: "Found from Sidebar",
                href: item.href || "/",
                icon: "",
            });
        }
    });

    return result;
}
