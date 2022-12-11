export { default as IconPicker } from "./IconPicker";
export { default as SidebarFunc } from "./SidebarFunc";
export { default as search } from "./search";
export { default as validate } from "./validate";

export const sleep = (duration: number) =>
    new Promise((resolve) => setTimeout(resolve, duration));

// export { };
export const styleMedia = {
    xs: 420,
    sm: 640,
    md: 768,
    tab: 840,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};
