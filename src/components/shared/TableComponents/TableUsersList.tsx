import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
display: flex;
flex-direction: column;
`

const TableUsersList = (users: any[]) => {




	return (
		<List>
			{users.map((item, i) => <li key={i}>{item}</li>)}
		</List>
	)
}

export default TableUsersList