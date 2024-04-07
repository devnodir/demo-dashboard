/* eslint-disable react-hooks/exhaustive-deps */
import { ROLES_ASSIGNS, USERS } from '@/components/endpoints'
import { USER_TOKEN } from '@/components/variables'
import useApi from '@/hooks/useApi'
import useMainStore from '@/store/main'
import { IChildren } from '@/types/helper.type'
import { getLocalStorage, removeLocalStorage } from '@/utils/localStorage'
import { message } from 'antd'
import React, { Fragment, useEffect } from 'react'

interface Props {
	children: IChildren
}

const token = getLocalStorage(USER_TOKEN)

const AuthProvider: React.FC<Props> = ({ children }) => {

	const { setIsAuth, setUserData, setAllowedMenus } = useMainStore()

	const [messageApi, contextHolder] = message.useMessage();
	const { error, isSuccess } = useApi(`${USERS}/me`, { onSuccess, onError, enabled: Boolean(token), suspense: true })
	useApi(ROLES_ASSIGNS, { onSuccess: onSuccessRoles, enabled: isSuccess, suspense: true })

	function onSuccessRoles(res: any) {
		setAllowedMenus(res.data);
	}

	function onSuccess(res: any) {
		setUserData(res.data)
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