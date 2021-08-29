import { useRouter } from "next/router";
import { useContext } from "react";
import { useUserContext } from "../../../hooks/user";


export default function UserDetailPage() {
	const router = useRouter()
	const { userId } = router.query
	const getUserState = useUserContext()
	const userData = getUserState.user
	if (userData.id !== userId) {
		return (
			<>
				403 Forbidden Access
			</>
		)
	}
	// const user = useContext()
	return (
		<>
			<div>
				userId: {userId}
			</div>
		</>
	)
}
