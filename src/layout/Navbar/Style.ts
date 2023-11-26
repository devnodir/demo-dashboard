import styled from "styled-components";
import { Layout } from "antd";
import { getToken, styledColor } from "@/utils/theme";
const { Header } = Layout;

export default styled(Header)`
    padding: 0;
    border-bottom: 1px solid
        ${(p) => getToken(p.theme.mode)?.colorBorderSecondary};
    background-color: ${(p) => getToken(p.theme.mode)?.colorBgContainer};
    box-shadow: 0 0 4px 4px rgb(0 0 0 / 2%);
    z-index: 111;
    display: grid;
    grid-template-columns: 240px 1fr;
    align-items: center;
    .logo {
        display: flex;
        align-items: center;
        padding: 0 16px;
        img {
            width: 80%;
            object-fit: contain;
        }
    }
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        &-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        &-right {
            display: flex;
            align-items: center;
            .buttons {
                display: flex;
                gap: 12px;
                padding: 0 32px;
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
            }
            .user {
                display: flex;
                cursor: pointer;
                &-img {
                    height: 42px;
                    width: 42px;
                    background-color: ${(p) => styledColor(p).border};
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    svg {
                        color: white;
                        font-size: 20px;
                    }
                }
                &-info {
                    display: flex;
                    align-items: flex-end;
                    flex-direction: column;
                    padding-right: 12px;
                    span:first-child {
                        color: ${(p) => styledColor(p).text};
                        /* &:last-child {
                            position: relative;
                            background-color: ${getToken("light")?.green2};
                            color: ${getToken("light")?.green};
                            padding: 0 6px;
                            border-radius: 6px;
                            opacity: 0.7;
                            margin-top: 2px;
                        } */
                    }
                }
            }
        }
    }
`;
