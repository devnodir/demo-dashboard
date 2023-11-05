import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: 1fr 500px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100vh;
    .login {
        &-content {
            max-width: 380px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 100px;
            &-logo {
                display: flex;
                justify-content: center;
                margin-bottom: 24px;
                img {
                    width: 165px;
                }
            }
        }
        &-form {
            &-item {
                margin-bottom: 12px;
            }
            &-button {
                margin-top: 12px;
            }
        }
        &-desc {
            display: flex;
            justify-content: center;
            height: 100vh;
        }
    }
`;
