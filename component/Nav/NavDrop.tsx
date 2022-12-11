import { NavDropItem } from "@component/Nav";
import { iNavDropProps } from "@type/component/Nav.d";

export default function NavDrop({ data }: iNavDropProps) {
    return (
        <div
            className={`w-max absolute top-[calc(100%+.5rem)] left-0 bg-gray-100 rounded-md shadow-lg transition-all overflow-hidden opacity-0 group-hover:opacity-100`}
        >
            {data.map((item) => (
                <NavDropItem {...item} key={item.name} />
            ))}
        </div>
    );
}
