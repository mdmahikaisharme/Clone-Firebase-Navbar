import { useContext, useRef, useState } from "react";
import { LanguageHead, LanguageSelect } from "@component/Language";
import { iLanguage } from "@type/component/Language.d";
import { AppContext } from "@context/App";
import { useOutsideClick } from "@hook";
import db from "@db";

export default function Language() {
    const appContext = useContext(AppContext);
    const [isLanguage, setIsLanguage] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
    const data: Array<iLanguage> = db.language;

    const fToggleLanguage = () => setIsLanguage(!isLanguage);
    const fCloseLanguage = () => setIsLanguage(false);
    const fOnSelect = (lang: string) => () => {
        appContext.dispatch({ type: "SET_LANGUAGE", payload: lang });
        fCloseLanguage();
    };

    useOutsideClick([ref], isLanguage, fCloseLanguage);

    return (
        <div className="relative block" ref={ref}>
            <LanguageHead value={appContext.lang} onOpen={fToggleLanguage} />

            <LanguageSelect
                isDropdown={isLanguage}
                data={data}
                onSelect={fOnSelect}
            />
        </div>
    );
}
