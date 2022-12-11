import { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function PasswordMetter({ value }: { value: string }) {
    const [result, setResult] = useState<number>(0);
    const [validation, setValidation] = useState({
        small: true,
        capital: true,
        numeric: true,
        special: true,
        min: true,
    });
    const step = 100 / Object.entries(validation).length;

    const fValidation = () => {
        const validation = {
            small: Boolean(value.match(/[a-z]+/)),
            capital: Boolean(value.match(/[A-Z]+/)),
            numeric: Boolean(value.match(/[0-9]+/)),
            special: Boolean(value.match(/[@_-]+/)),
            min: value.length >= 8,
        };
        const result = Object.entries(validation).reduce(
            (acc, item) => (item[1] ? acc + 1 : acc),
            0
        );

        setValidation(validation);
        setResult(result);
    };

    // On value change revalidate value
    useEffect(fValidation, [value]);

    return (
        <>
            <div className={`flex flex-col gap-2`}>
                <div
                    className={`w-full h-8 relative bg-green-500 overflow-hidden `}
                >
                    <div
                        className={`w-full h-full absolute bg-black opacity-75 transition-all`}
                        style={{ left: `${result * step}%` }}
                    ></div>
                </div>

                {/* Reason */}
                <div className={``}>
                    {Object.entries(validation).map((item) => (
                        <div
                            className="flex items-center gap-2 text-sm"
                            key={item[0]}
                        >
                            {item[1] ? (
                                <FaCheck className="text-green-500" />
                            ) : (
                                <FaTimes className="text-red-500" />
                            )}

                            <span>{validationMessage[item[0]]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

const validationMessage: {
    small: string;
    capital: string;
    numeric: string;
    special: string;
    min: string;
    max: string;
    [key: string]: string;
} = {
    small: "Needs a small character.",
    capital: "Needs a capital character.",
    numeric: "Needs a numeric character.",
    special: "Needs a special character.",
    min: "It's too short.",
    max: "It's too big.",
};

// const data: {
//     small?: boolean;
//     capital?: boolean;
//     numeric?: boolean;
//     special?: boolean;
//     min?: boolean;
//     max?: boolean;
// } = {};

// if (props.small) {
//     data.small = Boolean(value.match(/[a-z]+/));
// }
// if (props.capital) {
//     data.capital = Boolean(value.match(/[A-Z]+/));
// }
// if (props.numeric) {
//     data.numeric = Boolean(value.match(/[0-9]+/));
// }
// if (props.special) {
//     data.special = Boolean(value.match(/[@_-]+/));
// }
// if (props.min) {
//     data.min = value.length >= 8;
// }
// if (props.max) {
//     data.max = value.length >= 8;
// }

// const result = Object.entries(data).reduce(
//     (acc, item) => (item[1] ? acc + 1 : acc),
//     0
// );
