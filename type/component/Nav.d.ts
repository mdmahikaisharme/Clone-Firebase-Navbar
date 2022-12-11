export interface iNavDrop {
    name: string;
    href: string;
    dropdown?: Array<iNavDrop>;
}
export interface iNavItem extends iNavDrop {
    dropdown: iNavDrop[];
}

// PROPS
export interface iNavDropProps {
    data: Array<iNavDrop>;
}
