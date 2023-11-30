import { getToken, styledColor, styledToken } from "@/utils/theme";
import styled from "styled-components";

export default styled.div`
    .ant-tabs {
        &-nav {
            /* background-color: ${(p) => styledColor(p).container}; */
            /* padding: 16px; */
            border-radius: ${getToken().borderRadius}px;
        }
        &-content-holder {
            border: none;
        }
        &-tab {
            margin: 0 !important;
            padding: 12px 16px !important;
            &-active {
                background-color: ${(p) => styledToken(p).colorPrimaryBg};
                border-top-right-radius: 4px;
                border-top-left-radius: 4px;
            }
            &-btn {
                display: flex;
                align-items: center;
                svg {
                    margin-right: 8px;
                }
            }
        }
    }
`;
