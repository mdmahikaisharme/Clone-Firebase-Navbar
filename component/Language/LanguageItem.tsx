import { iLanguageItemProps } from "@type/component/Language.d";
import { IconPicker } from "@util";

export default function LanguageItem({
    name,
    icon,
    onSelect,
}: iLanguageItemProps) {
    return (
        <div
            className="px-4 pt-2 pb-2 first:pt-3 last:pb-3 flex items-center gap-2 text-sm cursor-pointer select-none hover:bg-gray-200"
            onClick={onSelect(name)}
        >
            <span className="flex-none w-4 h-4 grid place-items-center">
                <IconPicker icon={icon} />
            </span>

            <span className="grow font-semibold text-gray-500">{name}</span>
        </div>
    );
}
