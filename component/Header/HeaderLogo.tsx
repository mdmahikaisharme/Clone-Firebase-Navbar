import Link from "next/link";
import Image from "next/image";
import img from "@img";

export default function HeaderLogo() {
    return (
        <Link href={"/"}>
            <div className="flex-none w-24 md:w-28 grid cursor-pointer select-none">
                <Image src={img.firebase} objectFit="contain" />
            </div>
        </Link>
    );
}
