import { getToken, styledColor } from "@/utils/theme";
import styled from "styled-components";

export default styled.div`
    .ant-table {
        table {
            border-spacing: 0;
            thead {
                th {
                    padding-bottom: 12px !important;
                }
            }
            tbody {
                tr:first-child {
                    td:first-child {
                        border-top-left-radius: ${getToken().borderRadius}px;
                    }
                    td:last-child {
                        border-top-right-radius: ${getToken().borderRadius}px;
                    }
                }
                tr:last-child {
                    td:first-child {
                        border-bottom-left-radius: ${getToken().borderRadius}px;
                    }
                    td:last-child {
                        border-bottom-right-radius: ${getToken()
                            .borderRadius}px;
                    }
                }
                tr {
                    td:first-child {
                        width: 100px;
                    }
                }
                td {
                    padding: 6px 12px;
                    border-radius: 0;
                }
                tr:not(:first-child) {
                    td {
                        border-top: 1px solid ${(p) => styledColor(p).border} !important;
                    }
                }
            }
        }
    }
`;
