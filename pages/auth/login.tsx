import type { NextPage } from "next";
import { Login } from "@component/auth";

export default function login({}: NextPage) {
    return (
        <section className="h-screen flex items-center justify-center">
            <Login />
        </section>
    );
}
