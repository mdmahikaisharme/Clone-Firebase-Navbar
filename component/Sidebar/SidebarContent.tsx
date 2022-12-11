import { useRouter } from "next/router";
import { SidebarList, SidebarItem } from "@component/Sidebar";
import { iSidebarContentProps } from "@type/component/Sidebar.d";
import db from "@db";

export default function SidebarContent({
    className,
    setContent,
}: iSidebarContentProps) {
    const router = useRouter();

    return (
        <div className={className}>
            <SidebarList>
                {db.sidebar.map((item) => (
                    <SidebarItem
                        {...item}
                        active={router.pathname.startsWith(item.href || " ")}
                        onClick={() =>
                            item.content ? setContent(item.content) : null
                        }
                        key={item.name}
                    />
                ))}
            </SidebarList>
        </div>
    );
}
