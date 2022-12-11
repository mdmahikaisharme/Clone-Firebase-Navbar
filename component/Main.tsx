import { ReactNode, useContext } from "react";
import { Sidebar } from "@component";

export default function Main({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) {
    return (
        <div className="flex relative">
            <Sidebar />
            <div className={`grow`}>{children}</div>
        </div>
    );
}
