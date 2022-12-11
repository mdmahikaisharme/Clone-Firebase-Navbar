import type { NextPage } from "next";
import LayoutHome from "@component/Layout";
import Page from "@component/page";

export default function introduction({}: NextPage) {
    return (
        <LayoutHome>
            <Page />
        </LayoutHome>
    );
}
