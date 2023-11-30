import React from 'react'

interface Props {
	img: string
}

const UserAvatar: React.FC<Props> = ({ img }) => {
	return (
		<div className="user-image">
			<img src={img} alt="" />
		</div>
	)
}

export default UserAvatar