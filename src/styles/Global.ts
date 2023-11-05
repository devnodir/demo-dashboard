import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	body {
	  margin: 0;
	  padding: 0;
	  background-color: "#fafafa";
	  height: 100vh;
	}
	.ant-input{
		&-group{
			&-addon{
				opacity: 0.8;
			}
		}
		&-suffix{
			opacity: 0.8;
			cursor: pointer;
		}
	}
	.ant-dropdown{
		&-menu{
			.lang-item{
				img{
					height: 16px;
        			object-fit: contain;
        			border-radius: 2px;
				}
			}
		}
	}
  `;
