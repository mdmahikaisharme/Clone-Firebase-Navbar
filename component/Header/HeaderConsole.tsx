import Link from "next/link";

export default function HeaderConsole() {
    return (
        <Link href={"/"}>
            <a className="hidden lg:flex h-9 px-2 items-center text-blue-500 rounded-md hover:font-semibold hover:bg-blue-100">
                Go to console
            </a>
        </Link>
    );
}
