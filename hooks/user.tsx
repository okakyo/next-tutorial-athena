import React, { createContext,ReactNode, useContext, useEffect, useState } from "react";


// State の型を定義
export type UserState = {
		id: string,
		name: string,
		email: string,
		state: number
}

// useContext 自体の型
type UserContextType = {
	user: UserState | null
	setUser:(user: UserState)=>void
}

const UserContext = createContext<UserContextType>({
	user: null,
	setUser:()=>{}
})

// context の値を取得する関数
export const useUserContext = () => {
	return useContext(UserContext)
}

// useContext のコンポーネントを取得するための関数
export const UserProvider = (
	{ children }:{ children: ReactNode }) => {
	const [user, setUser] = useState<UserState|null>(null);
	// useEffect をこの部分で実装する

	useEffect(() => {
		fetch("/api/me").then(res => {
			return res.json()
		}).then(res => {
			console.log(res)
			setUser({
				...res
			})
		})
	},[])

	const changeUserState = (userState: UserState) => {
		setUser(userState)
	}
	// ! useEffect をこの部分に実装する
	return (
		<>
			<UserContext.Provider value={{
				user,
				setUser: changeUserState
			}}>
				{children}
			</UserContext.Provider>
		</>
	)
}
