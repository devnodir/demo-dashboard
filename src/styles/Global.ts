import { convertHex } from "@/utils/convertor";
import { colors, getToken, styledColor, styledToken } from "@/utils/theme";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
	margin: 0;
	padding: 0;
}
	body {
	  margin: 0;
	  padding: 0;
	  background-color: ${(p) => styledColor(p).body};
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
	.ant-table{
		background-color: transparent !important;
		table{
			border-spacing: 0 10px;
			tr{
				box-shadow: 0 0 4px 4px rgb(0 0 0 / 0.1%);
				&.ant-table-row-selected {
					td,
					td.ant-table-cell-row-hover{
						background-color:${convertHex(colors.primary, 0.1)} !important;
					}
				}
				td{
					background-color: ${(p) => styledToken(p).colorBgContainer};
					&.ant-table-cell-row-hover{
						background-color: ${(p) => styledToken(p).colorBgContainer}!important;
					}
				}
				th{
					background-color: transparent !important;
					padding-bottom: 4px !important;
					&::before{
						display: none;
					}
				}
				td,th{
					border: none !important;
					border-spacing: 0;
				}
				td:first-child{
					border-top-left-radius: 10px;
					border-bottom-left-radius: 10px;
				}
				td:last-child{
					border-top-right-radius: 10px;
					border-bottom-right-radius: 10px;
				}
			}
		}
		&-wrapper{
			:where(.css-dev-only-do-not-override-xto465).ant-spin-nested-loading .ant-spin-container::after{
			background: transparent !important;
		}
		}
		
		
	}
	.cursor-pointer{
		cursor: pointer;
	}
  `;
