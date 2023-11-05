import styled from "styled-components";
import { Layout, ThemeConfig } from "antd";
const { Header } = Layout;

export default styled(Header)<{
    token: ThemeConfig["token"];
    collapsed: boolean;
}>`
    padding: 0;
    border-bottom: 1px solid ${(p) => p.token?.colorBorderSecondary};
    background-color: ${(p) => p.token?.colorBgLayout};
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
        .toggle {
            background-color: ${(p) => p.token?.colorPrimaryBg};
            color: ${(p) => p.token?.colorPrimary};
            border-color: ${(p) => p.token?.colorPrimaryBg};
            svg {
                transform: rotateY(${(p) => (p.collapsed ? "180deg" : "0deg")});
                transition: 0.3s ease;
            }
        }
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
                    img {
                        width: 24px;
                        border-radius: 2px;
                    }
                    svg {
                        opacity: 0.8;
                    }
                }
            }
            .user {
                display: flex;
                cursor: pointer;
                &-img {
                    height: 42px;
                    width: 42px;
                    background-color: ${(p) => p.token?.colorBorderSecondary};
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
                    span {
                        &:last-child {
                            position: relative;
                            background-color: ${(p) => p.token?.green2};
                            color: ${(p) => p.token?.green};
                            padding: 0 6px;
                            border-radius: 6px;
                            opacity: 0.7;
                            margin-top: 2px;
                        }
                    }
                }
            }
        }
    }
`;
