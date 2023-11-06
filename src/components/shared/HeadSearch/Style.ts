import { ThemeConfig } from "antd";
import styled from "styled-components";

export default styled.div<{ token: ThemeConfig["token"] }>`
    &.search-button {
        position: relative;
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        width: 200px;
        border: 1px solid ${(p) => p.token?.colorBorder};
        height: 36px;
        font-size: 16px;
        border-radius: ${(p) => p.token?.borderRadius}px;
        transition: 0.2s ease;
        &:hover,
        &:active {
            border-color: ${(p) => p.token?.colorPrimary};
        }
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
