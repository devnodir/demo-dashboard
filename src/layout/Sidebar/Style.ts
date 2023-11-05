import styled from "styled-components";
import { Layout, ThemeConfig } from "antd";
const { Sider } = Layout;

export default styled(Sider)<{ token: ThemeConfig["token"] }>`
    background-color: ${(p) => p.token?.colorBgLayout} !important;
    overflow: auto;
    .ant-menu {
        height: 100%;
        user-select: none;
        &-item {
            position: relative;
            flex-direction: column;
            padding: 8px 16px !important;
            height: unset;
            &:not(&-selected) {
                color: rgba(0, 0, 0, 0.75);
            }
            &::before {
                content: "";
                position: absolute;
                height: 0%;
                top: 50%;
                width: 6px;
                background-color: ${(p) => p.token?.colorPrimary};
                left: -3px;
                transform: translateY(-50%);
                transition: 0.3s ease;
                border-radius: 6px;
                opacity: 0;
            }
            &-selected {
                &::before {
                    opacity: 1;
                    height: 80%;
                }
            }
            svg {
                font-size: 20px !important;
                margin-bottom: 8px;
            }
            span {
                height: fit-content;
                line-height: normal;
                margin: 0 !important;
            }
        }
    }
`;
