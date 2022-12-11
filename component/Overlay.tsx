import { ReactNode } from "react";
import { motion } from "framer-motion";

export interface iOverlayProps {
    className?: string;
    initial?: object;
    animate?: object;
    exit?: object;
    onClick: Function;
    children: ReactNode;
}
export default function Overlay({
    className,
    onClick,
    children,
    ...props
}: iOverlayProps) {
    return (
        <>
            <motion.div
                className="w-screen h-screen fixed top-0 left-0 z-10"
                style={{ background: "rgba(0, 0, 0, 0.5)" }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => onClick()}
            ></motion.div>

            <motion.div className={className} {...props}>
                {children}
            </motion.div>
        </>
    );
}
