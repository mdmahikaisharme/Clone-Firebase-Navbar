import type { NextPage } from "next";
import LayoutHome from "@component/Layout";

export default function index({}: NextPage) {
    return (
        <LayoutHome>
            <h1>Hello</h1>
        </LayoutHome>
    );
}
