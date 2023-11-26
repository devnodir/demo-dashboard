import Box from '@/styles/Box'
import { Divider, Typography } from 'antd'
import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'

interface Props {
	title: string
	type: 1 | 2
}

const TopDoctors: React.FC<Props> = ({ title, type }) => {
	return (
		<Box className='top-doctors'>
			<Typography.Title className='doctors-title' level={5}>{title}</Typography.Title>
			<Divider className='my-1' />
			<table>
				<tbody>
					<tr>
						<td>
							<div className='user-image'>
								<img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
							</div>
						</td>
						<td>
							<div className='user-name'>
								<p>Dilshodbek Ismoilov</p>
								<p>Стоматолог</p>
							</div>
						</td>
						<td >
							<div className='user-status'>
								<p>{type === 1 ? "250 прием" : "15 000 000 mln"}</p>
								<div className='count_status'>
									<BsArrowUpCircleFill /> <span>+1,65%</span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div className='user-image'>
								<img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
							</div>
						</td>
						<td>
							<div className='user-name'>
								<p>Dilshodbek Ismoilov</p>
								<p>Стоматолог</p>
							</div>
						</td>
						<td >
							<div className='user-status'>
								<p>{type === 1 ? "250 прием" : "15 000 000 mln"}</p>
								<div className='count_status'>
									<BsArrowUpCircleFill /> <span>+1,65%</span>
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<div className='user-image'>
								<img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" />
							</div>
						</td>
						<td>
							<div className='user-name'>
								<p>Dilshodbek Ismoilov</p>
								<p>Стоматолог</p>
							</div>
						</td>
						<td >
							<div className='user-status'>
								<p>{type === 1 ? "250 прием" : "15 000 000 mln"}</p>
								<div className='count_status'>
									<BsArrowUpCircleFill /> <span>+1,65%</span>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</Box>
	)
}

export default TopDoctors