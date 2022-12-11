import { useRouter } from "next/router";
import { SidebarDropdown, SidebarItem, SidebarList } from "@component/Sidebar";
import { iSidebarSlide } from "@type/component/Sidebar";

export default function SidebarSlide({ name, list, dropdown }: iSidebarSlide) {
    const router = useRouter();

    return (
        <>
            {/* NAMED */}
            {name && (
                <SidebarList variant="border">
                    <SidebarItem name={name} active />
                </SidebarList>
            )}

            {/* LIST BASED */}
            {list && (
                <SidebarList>
                    {list.map((item) => (
                        <SidebarItem
                            {...item}
                            active={router.pathname.startsWith(
                                item.href || " "
                            )}
                            key={item.name}
                        />
                    ))}
                </SidebarList>
            )}

            {/* DROPDOWN BASED */}
            {dropdown &&
                dropdown.map((item) => (
                    <SidebarDropdown {...item} key={item.name} />
                ))}
        </>
    );
}
