import React, { useState, VFC } from "react";
import styles from './card.module.css'

export const SampleCard = () => {
	// State はこの部分で設定する
	const [isShow, setIsShow] = useState(false)
	return (
		<div className={styles.card}>
			<h3>メッセージを表示します。</h3>
			{isShow &&
				<div>
					Hello World From React!
				</div>
				}
			<button
				className={!isShow?styles.show:styles.imshow}
				onClick={()=> {setIsShow(!isShow)}}
			>
				{isShow?"非表示":"表示"}
			</button>
		</div>
	)
}
