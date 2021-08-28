import React, { createContext,ReactNode, useEffect, useState } from "react";

type UserState = {
		id: string,
		name: string,
		email: string,
		state: number
}

type UserContextType = {
	user: UserState
	setUser:(user: UserState)=>void
}

const initUserState:UserState = {
	id: "",
	name: "",
	email: "",
	state: 1
}

const UserContext = createContext<UserContextType>({
	user: initUserState,
	setUser:()=>{}
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserState>(initUserState);
	// useEffect をこの部分で実装する
	const changeUserState = (userState: UserState) => {
		setUser(userState)
	}
	
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
