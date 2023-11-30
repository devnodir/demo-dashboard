import styled from "styled-components";

export default styled.div`
    table {
        tbody {
            td {
                vertical-align: top !important;
                &:last-child {
                    width: 50px;
                }
            }
        }
    }
    .ant-timeline {
        margin-bottom: -54px;
        padding: 8px 0;
    }
`;
