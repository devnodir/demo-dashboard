import { convertHex } from "@/utils/convertor";
import styled from "styled-components";
import { Layout } from "antd";
import { getToken, styledToken } from "@/utils/theme";
import { media } from "@/styles/media";
const { Sider } = Layout;

export default styled(Sider)`
    .ant-menu {
        height: 100%;
        user-select: none;
        &-item {
            position: relative;
            flex-direction: column;
            padding: 8px 16px !important;
            height: unset;
            &:not(&-selected) {
                color: ${(p) =>
                    convertHex(getToken(p.theme.mode)?.colorText, 0.75)};
            }
            &::before {
                content: "";
                position: absolute;
                height: 0%;
                top: 50%;
                width: 6px;
                background-color: ${(p) => styledToken(p).colorPrimary};
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
