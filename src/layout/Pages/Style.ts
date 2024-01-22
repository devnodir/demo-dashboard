import styled from "styled-components";
import { Layout } from "antd";
import { styledColor } from "@/utils/theme";
import { media } from "@/styles/media";
const { Content } = Layout;

export default styled(Content)`
    background-color: ${(p) => styledColor(p).body};
    overflow-y: auto;
    position: relative;
    padding: 24px;
    ${media("md")`
        overflow-y: unset;
    `}
    ${media("sm")`
        padding:12px;
        &>div{
            padding-bottom: 12px;
        }
    `}
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        opacity: 0.6;
    }
`;
