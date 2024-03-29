import { convertHex } from "@/utils/convertor";
import { colors, getToken, styledColor, styledToken } from "@/utils/theme";
import { createGlobalStyle } from "styled-components";
import { media } from "./media";

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
	#root{
		height: 100%;
	}
	input,textarea{
		${media("sm")`
			font-size:16px !important;
		`}
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
		&:not(.ant-table-empty){
			width: calc(100% + 48px);
    		margin-left: -24px !important;
		}
		${media("sm")`
			width: calc(100% + 24px);
			margin-left: -12px !important;
		`}
		table{
			border-spacing: 0 10px;
			thead{
				tr{
					th,td{
					background-color: transparent !important;
					padding-bottom: 4px !important;
					padding-top: 4px !important;
					&::before{
						display: none;
					}
				}
				}
			}
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
					.user-image{
						display: flex;
						border-radius: 50%;
						overflow: hidden;
						height: 40px;
						width: 40px;
					}
					&:last-child{
						width: 160px;
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
		&-content{
			padding: 0 24px;
			padding-bottom: 12px;
			${media("sm")`
			padding: 0 12px;
			padding-bottom: 4px;
		`}
		}
		&-empty{
			.ant-table-content{
				overflow: hidden !important;
				padding: 0 !important;
			}
		}
		.ant-table-container{
			&::after,&::before{
				display: none;
			}
		}
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
	.ant-result{
		height: 100%;
		display: flex;
   		flex-direction: column;
    	justify-content: center;
		transform: translateY(-10%);
		&-icon{
			font-size: 64px;
			margin-bottom: 0 !important;
		}
	}
	.ant-picker{
		width: 100%;
	}
	.ant-upload{
		border-color: ${(p) => styledColor(p).border} !important;
		&:hover{
			border-color: ${(p) => styledColor(p).primary} !important;
		}
	}
	.ant-drawer{
		&-header{
			&-title{
			flex-direction: row-reverse;
		}
		.ant-drawer-close{
			margin: 0;
			font-size: 18px;
		}
		}
		&-content{
			&-wrapper{
				${media("sm")`
					width: 100%;
				`}
			}
			&.mobile-drawer{

			}
		}
	}
	.ant-modal{
		${media("sm")`
		    width: 100% !important;
			max-width: unset;
			margin: 0;
			height: 100vh;
			transform: unset;
			top: 0;
			padding: 0;
		`}
		&-content{
			${media("sm")`
				height: 100%;
				border-radius:0 !important;
			`}
		}
	}
	.cursor-pointer{
		cursor: pointer;
	}

	 .ant-spin-container::after{
				background:none !important
	}

	@media (max-width: 480px) {
    .ant-calendar-range {
        width: 320px;
    }
    .ant-calendar-range-part {
        width: 100%;
    }
}
  `;
