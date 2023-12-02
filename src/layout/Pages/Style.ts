import styled from "styled-components";
import { Layout } from "antd";
import { styledColor } from "@/utils/theme";
const { Content } = Layout;

export default styled(Content)`
    background-color: ${(p) => styledColor(p).body};
    overflow-y: auto;
    display: grid;
    grid-template-rows: 1fr 52px;
    position: relative;
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        opacity: 0.6;
    }
`;
