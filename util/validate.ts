const reg: {
    small: RegExp;
    capital: RegExp;
    numeric: RegExp;
    special: RegExp;
} = {
    small: new RegExp(/[a-z]+/),
    capital: new RegExp(/[A-Z]+/),
    numeric: new RegExp(/[0-9]+/),
    special: new RegExp(/[@_-]+/),
};

interface iValidateError {
    require?: string;
    small?: string;
    capital?: string;
    numeric?: string;
    special?: string;
    min?: string;
    max?: string;
    pattern?: string;
}
interface iValidateProps {
    min?: number;
    max?: number;
    small?: boolean;
    capital?: boolean;
    numeric?: boolean;
    special?: RegExp;
    pattern?: RegExp;
    require?: boolean;
}

export default function validate(
    name: string,
    value: string,
    props: iValidateProps
) {
    const { min, max, small, capital, numeric, special, pattern, require } =
        props;

    const error: iValidateError = {};

    if (require && !value) {
        error.require = `${name} is required!`;
    }
    if (small && !value.match(reg.small)) {
        error.small = `${name} needs a small letter.`;
    }
    if (capital && !value.match(reg.capital)) {
        error.capital = `${name} needs a capital letter.`;
    }
    if (numeric && !value.match(reg.numeric)) {
        error.numeric = `${name} needs a numeric letter.`;
    }
    if (special && !value.match(special)) {
        error.special = `${name} needs a special letter.`;
    }
    if (min && value.length < min) {
        error.min = `${name} is too short.`;
    }
    if (max && value.length > max) {
        error.max = `${name} is too big.`;
    }
    if (pattern && !value.match(pattern)) {
        error.pattern = `${name} is invalid.`;
    }

    const errorArray: Array<[string, any]> = Object.entries(error);
    const valid: boolean = errorArray.length === 0;

    return {
        valid,
        error,
        first: valid ? "" : errorArray[0][1],
    };
}
