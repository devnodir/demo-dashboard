import styled from "styled-components";
import { Layout } from "antd";
const { Content } = Layout;

export default styled(Content)`
    background-color: #fafafa;
    overflow-y: auto;
    display: grid;
    grid-template-rows: 1fr 52px;
    .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        opacity: 0.6;
    }
`;
