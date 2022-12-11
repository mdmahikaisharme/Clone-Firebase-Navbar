import { LanguageItem } from "@component/Language";
import { iLangaugeSelectProps } from "@type/component/Language.d";

export default function LanguageSelect({
    isDropdown,
    data,
    onSelect,
}: iLangaugeSelectProps) {
    return (
        <div
            className={`w-max md:w-full max-h-[150px] absolute top-[calc(100%+.5rem)] md:left-0 right-0 md:right-auto border border-gray-200 rounded-md shadow-md transition-all scrollY ${
                isDropdown ? "" : "opacity-0"
            }`}
        >
            {data.map((item) => (
                <LanguageItem {...item} onSelect={onSelect} key={item.name} />
            ))}
        </div>
    );
}
