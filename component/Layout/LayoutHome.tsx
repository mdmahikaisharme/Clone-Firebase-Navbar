import { ReactNode } from "react";
import { Header, Sidebar } from "@component";

export default function LayoutHome({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) {
    return (
        <>
            <Header />
            <div className="flex relative">
                <Sidebar />
                <div className={`grow ${className}`}>{children}</div>
            </div>
        </>
    );
}
