import { media } from "@/styles/media";
import { styledColor } from "@/utils/theme";
import styled from "styled-components";

export default styled.div`
    position: relative;
    padding: 16px;
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 800px;
        margin: 0 auto;
        width: 100%;
        h2 {
            margin-top: 80px;
            margin-bottom: 40px;
            ${media("sm")`
                    margin-top: 60px;
                    margin-bottom: 20px;
                `}
        }
        .ant-card {
            width: 100%;
            margin-top: 30px;
            min-height: 200px;
        }
        .step-1 {
            min-height: 450px;
        }
        .submit-btn {
            margin-left: auto;
            margin-top: 16px;
            min-width: 200px;
            ${media("md")`
                   width:100%;
                `}
        }
    }
    .action-buttons {
        display: flex;
        gap: 8px;
        top: 32px;
        right: 32px;
        position: absolute;
        button {
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 0 8px;
            border: none;
            border-radius: 4px;
            min-width: 36px;
            color: ${(p) => styledColor(p).text};
            background-color: ${(p) => styledColor(p).border};
            img {
                width: 24px;
                border-radius: 2px;
            }
            svg {
                font-size: 18px;
            }
        }
        ${media("md")`
                    gap: 8px;
                `}
        ${media("sm")`
                     top: 16px;
                     right: 16px;
                `}
    }
    .ant-steps .ant-steps-item-title {
        &::after,
        &::before {
            background-color: rgba(155, 155, 155, 0.1) !important;
        }
    }
`;
