import { FaArrowDown, FaLanguage } from "react-icons/fa";
import { iLanguageHeadProps } from "@type/component/Language.d";

export default function LanguageHead({ value, onOpen }: iLanguageHeadProps) {
    return (
        <div
            className="w-9 md:w-32 h-9 px-3 py-2 text-sm flex items-center justify-center md:justify-between gap-2 text-gray-500 md:bg-gray-100 md:border md:border-gray-200 rounded-full md:rounded-md shadow-sm md:shadow-none cursor-pointer hover:bg-gray-200"
            onClick={onOpen}
        >
            <div className="flex items-center gap-2">
                <div className="flex-none w-4 h-4 grid place-items-center">
                    <FaLanguage />
                </div>

                <span className="hidden md:block">{value}</span>
            </div>

            <div className="hidden flex-none w-4 h-4 md:grid place-items-center">
                <FaArrowDown />
            </div>
        </div>
    );
}
