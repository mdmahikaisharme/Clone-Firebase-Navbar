import { tIcon } from "@type/util";

// ITEM
export interface iSidebarItem {
    name: string;
    href?: string;
    icon?: tIcon;
    active?: boolean;
    more?: boolean;
    onClick?: () => any;
    content?: iSidebarSlide;
    [key: string]: any;
}

// DROPDOWN
export interface iDropdownItem {
    name: string;
    href?: string;
    icon?: tIcon;
    active?: boolean;
    more?: boolean;
    onClick?: () => any;
}
export interface iSidebarDropdown extends iDropdownItem {
    content?: Array<iDropdownContent>;
}
export interface iDropdownContent extends iDropdownItem {
    content?: Array<iSidebarDropItem>;
}
export interface iSidebarSlide {
    name?: string;
    list?: Array<iSidebarItem>;
    dropdown?: Array<iSidebarDropdown>;
}

//
//
//

// PROPS
interface iSidebarButtonProps {
    icon: tIcon;
    onClick: () => any;
}
export interface iSidebarContentProps {
    className: string;
    setContent: Function;
}

export interface iSidebarListProps {
    variant?: "border";
    children?: ReactNode;
}

// DROPDOWN PROP
export interface iSidebarDropdownProps {
    data: Array<iSidebarDropdown>;
}
export interface iDropdownTitleProps {
    name: string;
    href?: string;
    icon: tIcon;
    hasContent: boolean;
    isContent: boolean;
    onClick: () => any;
}
export interface iDropdownSubTitleProps extends iDropdownTitleProps {}
