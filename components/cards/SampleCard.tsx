import React, { useState, VFC } from "react";


export const SampleCard= ()=> {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<div>メッセージを表示します。</div>
			{isShow &&
				<>
				koafasdfadf
				sdfasdfasdfasdf
				dsfasdfasdfa
				dfasdfasdfasd
				fasdfasdfasdfasd
				fasdsdfa
				</>}
			<button
				onClick={()=> {setIsShow(!isShow)}}
			>
				{isShow?"非表示":"表示"}
			</button>
		</>
	)
}
