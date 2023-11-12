import { getToken } from "@/utils/theme";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
	margin: 0;
	padding: 0;
}
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
	.ant-input-number-group-wrapper{
		width: 100%;
		.ant-input-number-handler-wrap{
			display: none;
		}
		.ant-input-number{
			overflow: hidden;
			input{
				border-radius: 0;
			}
		}
		.ant-input-number-group-addon{
			opacity: 0.8;
		}
		&-status-error{
				.ant-input-number-group-addon{
					color: ${getToken().colorError};
    				border-color: ${getToken().colorError};
				}
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
	.ant-table{
		.empty{
			&-anim{
				width: 150px;
				margin: auto;
			}
			&-text{
				display: inline-block;
				transform: translateY(-20px);
			}
		}
	}
	.ant-form{
		&-item{
			margin-bottom: 20px !important;

			&-label{
				padding-bottom: 2px !important;
				label{
					flex-direction: row-reverse;
					&::after{
					display: none;
					}
					&::before{
						margin: 0 2px;
					}
				}
			}
			&-explain{
				text-align: end !important;
				font-size: 12px !important;
			}
		}
	}
  `;
