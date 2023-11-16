import { AgGridReact } from "ag-grid-react";
import styled from "styled-components";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { colors } from "@/utils/theme";
import { convertHex } from "@/utils/convertor";

export default styled(AgGridReact)`
    --ag-alpine-active-color: ${colors.primary} !important;
    --ag-selected-row-background-color: ${convertHex(
        colors.primary,
        0.2
    )} !important;
    --ag-row-hover-color: ${convertHex(colors.primary, 0.08)} !important;
    --ag-grid-size: 3 !important;
    --ag-row-height: 50 !important;

    .ag-root-wrapper,
    .ag-header,
    .ag-row {
        border: none;
    }
    .ag-cell {
        &:focus-within {
            border-color: transparent !important;
        }
    }
`;
