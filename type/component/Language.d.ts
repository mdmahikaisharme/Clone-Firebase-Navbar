import { tIcon } from "@type/util";

export interface iLanguage {
    name: string;
    icon: tIcon;
}

// PROPS
export interface iLanguageHeadProps {
    value: string;
    onOpen: () => void;
}
export interface iLangaugeSelectProps {
    isDropdown: boolean;
    data: Array<iLanguage>;
    onSelect: (data: string) => () => void;
}
export interface iLanguageItemProps extends iLanguage {
    onSelect: (data: string) => () => void;
}
