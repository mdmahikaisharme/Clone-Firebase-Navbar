import { useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { IconPicker } from "@util";
import { tIcon } from "@type/util";

interface iInputField {
    type?: "text" | "email" | "password";
    name?: string;
    icon?: tIcon;
    placeholder?: string;
    value?: string;
    helpX?: string;
    onChange?: (e: any) => void;
    children?: JSX.Element;
}

export default function InputField({
    type,
    icon,
    helpX,
    children,
    ...props
}: iInputField) {
    const [state, setState] = useState({
        type,
        isPassword: type === "password",
        focus: false,
        showPassword: false,
    });
    const ref = useRef<HTMLInputElement>({} as HTMLInputElement);

    const fGetFocus = () => {
        ref.current.focus();
        setState((oldValue) => Object({ ...oldValue, focus: true }));
    };
    const fOnBlur = () => {
        setState((oldValue) => Object({ ...oldValue, focus: false }));
    };
    const fShowPassword = () => {
        setState((oldValue) =>
            Object({
                ...oldValue,
                type: "password",
                showPassword: false,
            })
        );
    };
    const fHidePassword = () => {
        setState((oldValue) =>
            Object({
                ...oldValue,
                type: "text",
                showPassword: true,
            })
        );
    };

    return (
        <div className="flex flex-col gap-1 transition-all">
            <motion.div
                className={`w-full px-1 py-1 flex items-center gap-2 border-b-2 transition-all overflow-hidden ${
                    helpX
                        ? "border-b-red-200"
                        : state.focus
                        ? "border-b-blue-200"
                        : "border-b-gray-200"
                }`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                onClick={fGetFocus}
            >
                <div className="flex-none w-5 h-5 grid place-items-center pointer-events-none">
                    <IconPicker icon={icon} />
                </div>
                <input
                    className="grow outline-none"
                    type={state.type}
                    {...props}
                    onBlur={fOnBlur}
                    ref={ref}
                />

                {/* SHOW PASSWORD */}
                {state.isPassword &&
                    (state.showPassword ? (
                        <div
                            className="flex-none w-4 h-4 grid place-items-center cursor-pointer"
                            onClick={fShowPassword}
                        >
                            <IconPicker icon={"iconClosedEye"} />
                        </div>
                    ) : (
                        <div
                            className="flex-none w-4 h-4 grid place-items-center cursor-pointer"
                            onClick={fHidePassword}
                        >
                            <IconPicker icon={"iconEye"} />
                        </div>
                    ))}
            </motion.div>

            {/* HELP X */}
            <AnimatePresence>
                {helpX && (
                    <motion.div
                        className="ml-2 text-xs font-semibold text-red-400"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {helpX}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
