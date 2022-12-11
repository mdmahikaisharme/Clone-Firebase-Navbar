import Link from "next/link";
import { iNavDrop } from "@type/component/Nav.d";

export default function NavDropItem({ name, href }: iNavDrop) {
    return (
        <div className="px-4 pt-2 pb-2 first:pt-3 last:pb-3 text-sm font-semibold cursor-pointer hover:bg-gray-200">
            <Link href={href}>
                <span className="">{name}</span>
            </Link>
        </div>
    );
}
