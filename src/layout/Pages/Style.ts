import styled from "styled-components";
import { Layout } from "antd";
const { Content } = Layout;

export default styled(Content)`
    background-color: #fafafa;
    position: relative;
    padding-bottom: 52px;
    overflow-y: auto;
    .footer {
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        width: 100%;
        opacity: 0.6;
    }
`;
