import React, {useState} from "react";

// 型の定義
export type ListPageProps = {
	sample:string 
}

// style の設定



// Rendering 機能
export default function ListPage() {
	// state を管理する機能をここに実装する
	const [isShow, setIsShow] = useState(false);
	
	// ここでHTML を返す
	return (
		<>
			<div>
					これはテストです。
			</div>
		</>
	)
}
