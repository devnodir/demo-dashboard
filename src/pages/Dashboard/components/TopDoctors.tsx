import useApi from '@/hooks/useApi'
import Box from '@/styles/Box'
import { Divider, Typography } from 'antd'
import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa6'

interface Props {
	title: string
	endpoint: string
	type: 1 | 2
}

const TopDoctors: React.FC<Props> = ({ title, endpoint, type }) => {

	const { data } = useApi(endpoint, {}, { limit: 3 })
	const records = data?.data

	return (
		<Box className='top-doctors'>
			<Typography.Title className='doctors-title' level={5}>{title}</Typography.Title>
			<Divider className='my-1' />
			<table>
				<tbody>
					{
						records?.map((item: any, index: number) => {
							const doctor = item.doctor[0]
							return (
								<tr key={index}>
									<td>
										<div className='user-image d-flex justify-content-center'>
											<FaUser size={24} />
										</div>
									</td>
									<td>
										<div className='user-name'>
											<p>{doctor.name}</p>
										</div>
									</td>
									<td >
										<div className='user-status'>
											<p>{item.totalAppointments} {type === 2 ? "прием" : "mln"}</p>
										</div>
									</td>
								</tr>
							)
						})
					}

				</tbody>
			</table>
		</Box>
	)
}

export default TopDoctors