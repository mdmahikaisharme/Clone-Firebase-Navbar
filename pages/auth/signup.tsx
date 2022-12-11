import type { NextPage } from "next";
import { Signup } from "@component/auth";

export default function signup({}: NextPage) {
    return (
        <section className="h-screen flex items-center justify-center">
            <Signup />
        </section>
    );
}
