/* eslint-disable react-hooks/exhaustive-deps */
import { USERS } from '@/components/endpoints'
import { USER_ID, USER_TOKEN } from '@/components/variables'
import useApi from '@/hooks/useApi'
import useMainStore from '@/store/main'
import { IChildren } from '@/types/helper.type'
import { getLocalStorage, removeLocalStorage } from '@/utils/localStorage'
import { message } from 'antd'
import React, { Fragment, useEffect } from 'react'

interface Props {
	children: IChildren
}

// const token = getLocalStorage(USER_TOKEN)
const user_id = getLocalStorage(USER_ID)

const AuthProvider: React.FC<Props> = ({ children }) => {

	const [messageApi, contextHolder] = message.useMessage();
	const { error } = useApi(`${USERS}/${user_id}`, { onSuccess, onError, enabled: false, suspense: true })

	const { setIsAuth, setUserData } = useMainStore()

	function onSuccess(res: any) {
		setUserData(res.user)
		setIsAuth(true)
	}

	function onError() {
		setIsAuth(true)
		removeLocalStorage(USER_TOKEN)
	}

	useEffect(() => {
		if (error?.message) messageApi.error(error.message)
	}, [error])

	return <Fragment>
		{contextHolder}
		{children}
	</Fragment>
}

export default AuthProvider