import Image from "next/image";
import { tIcon } from "@type/util";
import img from "@img";

export default function IconPicker({
    icon,
    className = " ",
    optional,
}: {
    icon: tIcon;
    className?: string;
    optional?: tIcon;
}): JSX.Element | null {
    const Icon = icon;

    return typeof icon === "string" && icon in img ? (
        <Image className={className} src={img[icon]} objectFit="contain" />
    ) : typeof Icon === "function" ? (
        <Icon className={className} />
    ) : optional ? (
        IconPicker({ icon: optional, className })
    ) : null;
}
