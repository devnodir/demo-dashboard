import { media } from "@/styles/media";
import { getToken, styledColor } from "@/utils/theme";
import styled from "styled-components";

export default styled.div`
    &.search-button {
        position: relative;
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        width: 100%;
        max-width: 320px;
        border: 1px solid ${(p) => styledColor(p).border};
        height: 40px;
        font-size: 16px;
        border-radius: ${getToken()?.borderRadius}px;
        transition: 0.2s ease;
        &:hover,
        &:active {
            border-color: ${getToken()?.colorPrimary};
        }
        ${media("sm")`
         width:42px;
         flex-shrink:0;
        `}
    }
    .keyboard {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 12px;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        div {
            ${media("sm")`
                display:none
            `}
        }
    }
    .search-wrapper {
        width: 100%;
        margin-bottom: 100px;
        input,
        button {
            height: 46px !important;
        }
        button {
            width: 80px;
            font-size: 24px;
        }
    }
`;
