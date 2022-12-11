import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { UserContent, UserToggler } from "@component/User";
import { useOutsideClick } from "@hook";

export default function User() {
    const [isUser, setIsUser] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>({} as HTMLDivElement);

    const fToggleUser = () => setIsUser(!isUser);
    const fCloseUser = () => setIsUser(false);

    useOutsideClick([ref], isUser, fCloseUser);

    return (
        <div className="relative flex flex-col items-end" ref={ref}>
            <UserToggler onClick={fToggleUser} />

            <AnimatePresence>
                {isUser && <UserContent onClose={fCloseUser} />}
            </AnimatePresence>
        </div>
    );
}
