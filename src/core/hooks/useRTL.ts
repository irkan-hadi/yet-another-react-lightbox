import * as React from "react";

import { useLayoutEffect } from "./useLayoutEffect.js";

export const useRTL = () => {
    const [isRTL, setIsRTL] = React.useState(false);

    useLayoutEffect(() => {
        setIsRTL(window.getComputedStyle(window.document.documentElement).direction === "rtl");
    }, []);

    return isRTL;
};
