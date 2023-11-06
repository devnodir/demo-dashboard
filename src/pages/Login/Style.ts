import styled from "styled-components";

export default styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100vh;
    .login {
        &-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateY(-10%);
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
            max-width: 380px;
            width: 100%;
            .form-element-wrapper {
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
            transform: scale(1.3);
        }
    }
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
        .login {
            &-desc {
                display: none;
            }
        }
    }
`;
