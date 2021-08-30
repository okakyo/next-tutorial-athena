import { useRouter } from "next/router";
import { useUserContext } from "../../../hooks/user";
import styles from "../../../components/cards/card.module.css"

export default function UserDetailPage() {
	const router = useRouter()
	const { userId } = router.query // router の params, query を取得
	
	const getUserState = useUserContext() // Global State を取得
	const userData = getUserState.user
	if (!userData) {
		router.push("/");
	}
	else if ( userData?.id !== userId) {
		return (
			<>
				403 Forbidden Access
			</>
		)
	}
	else {
		return (
		<>
			<div className={styles.card} style={{width:"100%",minWidth:"500px"}}>
				<h2>
					{userId}：{userData.name}
				</h2>
				<p>
					email: {userData.email}
				</p>
				
				state: {userData.state==1?"管理者":"一般"}
			</div>
		</>
	)
	}
	
}
