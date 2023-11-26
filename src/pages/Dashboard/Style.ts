import { colors } from "@/utils/theme";
import styled from "styled-components";

export default styled.div`
    .chart-title {
        text-align: start;
        margin-bottom: 24px;
    }
    .chart-box {
        margin-bottom: 0;
    }
    .completed_maneuvers {
        height: 100%;
        &_content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: 24px;
        }
        .count_status {
            margin-bottom: 24px;
        }
        .two_status {
            display: flex;
            align-items: center;
            gap: 16px;
            span {
                display: flex;
                position: relative;
                padding-left: 20px;
                font-size: 12px;
                &::after {
                    position: absolute;
                    content: "";
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 16px;
                    width: 16px;
                    border-radius: 50%;
                }
                &:first-child::after {
                    background-color: ${colors.primary};
                }
                &:last-child::after {
                    background-color: ${colors.secondary};
                }
            }
        }
    }
    .count_status {
        color: ${colors.success};
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .card-desc {
        opacity: 0.8;
    }
    .top-doctors {
        table {
            width: 100%;
            font-size: 14px;
            tr {
                td {
                    padding: 6px 0;
                }
            }
            .user-image {
                display: flex;
                img {
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                }
            }
            .user-name {
                display: flex;
                flex-direction: column;
                line-height: normal;
                p:last-child {
                    opacity: 0.6;
                    margin-top: 4px;
                    font-size: 12px;
                }
            }
            .user-status {
                display: flex;
                flex-direction: column;
                align-items: end;
                font-size: 12px;
            }
            td:first-child {
                width: 50px;
            }
        }
    }
`;
