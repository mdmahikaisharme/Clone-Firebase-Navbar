import Link from "next/link";
import { useEffect, useState } from "react";
import { InputField, PasswordMetter } from "@component/Form";
import { validate } from "@util";

export default function Signup() {
    const [state, setState] = useState({
        user: "",
        email: "",
        password: "",
        error: {
            user: "",
            email: "",
            password: "",
        },
    });
    const fSetState = (key: string, value: any) => {
        setState((oldValue) => Object({ ...oldValue, [key]: value }));
    };

    const fSubmit = (e: any) => {
        e.preventDefault();

        // Validation
        const error = {
            user: validate("Username", state.user, {
                min: 4,
            }).first,
            email: validate("Email", state.email, {
                min: 8,
                pattern: new RegExp(/\w+\@\w+\.\w+/),
            }).first,
            password: validate("Password", state.password, {
                min: 8,
                small: true,
                capital: true,
                numeric: true,
                special: new RegExp(/[@_-]+/),
            }).first,
        };

        // Update Error State
        fSetState("error", error);

        // ERROR
        if (Object.entries(error).length !== 0) return console.log(error);

        console.log(state);
    };

    useEffect(() => {}, [state]);

    return (
        <div className="w-[325px] px-8 py-6 flex flex-col border-2 border-gray-200 rounded-md shadow-lg">
            <div className="mt-2 mb-8">
                <h1 className="text-2xl text-center font-semibold">Signup</h1>
                <p className="mt-1 text-xs text-center text-gray-400">
                    Connect to the world.
                </p>
            </div>

            <form className="flex flex-col gap-2" onSubmit={fSubmit}>
                <InputField
                    type="text"
                    icon={"iconUser"}
                    placeholder="User"
                    value={state.user}
                    helpX={state.error.user}
                    onChange={(e: any) => fSetState("user", e.target.value)}
                />
                <InputField
                    type="text"
                    icon={"iconMail"}
                    placeholder="Email"
                    value={state.email}
                    helpX={state.error.email}
                    onChange={(e: any) => fSetState("email", e.target.value)}
                />
                <InputField
                    type="password"
                    icon={"iconEncrypt"}
                    placeholder="Password"
                    value={state.password}
                    helpX={state.error.password}
                    onChange={(e: any) => fSetState("password", e.target.value)}
                />
                <PasswordMetter value={state.password} />

                <button
                    className="px-6 py-1 self-center text-gray-400 border-b-2 border-b-gray-200 hover:bg-blue-400 hover:border-b-blue-200 hover:text-white"
                    type="submit"
                >
                    Signup
                </button>

                <Link href={"/auth/login"}>
                    <a className="text-sm self-center text-gray-500 group">
                        Have an account?
                        <span className="ml-1 font-semibold text-blue-400 group-hover:text-blue-600">
                            Login
                        </span>
                    </a>
                </Link>
            </form>
        </div>
    );
}
