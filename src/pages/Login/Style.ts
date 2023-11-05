import styled from "styled-components";

export default styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 500px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .login {
        &-content {
            width: 100%;
            max-width: 380px;
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
            width: 100%;
            height: 800px;
            &-anim {
                height: 100%;
                svg {
                    height: 100%;
                }
            }
        }
    }
`;
