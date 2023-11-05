import styled from "styled-components";

export default styled.div`
    .screen-loader {
        position: fixed;
        left: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        &-content {
            display: flex;
            flex-direction: column;
            img {
                margin-bottom: 16px;
            }
        }
    }

    .page-loader {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 500px;
        width: 100%;
    }
`;
