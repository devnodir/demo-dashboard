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
            color: ${colors.success};
            display: flex;
            align-items: center;
            gap: 8px;
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
`;
