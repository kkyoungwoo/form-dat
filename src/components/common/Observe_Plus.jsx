import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './plus.css'

function Observe_Plus() {

    const [plusNum,setPlusNum] = useState([1])

    const plusMambers = useCallback(
        () => {
            const array = [...plusNum]
            array.push(Number(plusNum[plusNum.length -1 ])+1)
            setPlusNum(array)
            console.log(plusNum)
        },
        [plusNum])

    const handleDelete = (idx) => {
        console.log(plusNum[0])
            const Delet = plusNum.filter((_,idxx) => idx !== idxx)
            setPlusNum(Delet)
    }

    return (
        <div>
            <div className="plus_wrap">
                <div className="plus_header">
                    <div className="plus_header_warp">
                        <div className="header_left">
                            <div className="header_left_text">· 추가인원</div>
                            <div className="header_left_btn" onClick={plusMambers}>추가</div>
                            <div className="sub_text">인원을 추가로 입력하시려면'추가'버튼을 눌러주세요</div>
                        </div>
                    </div>
                    <div className="plus_warp">
                        <div className="plus_table first" >
                            <h4>회사명</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" style={{width:"120px"}}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>부서/직위</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>이름</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text"/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>휴대전화</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text"/>
                                    </div>
                                )
                            })}
                        </div >
                        <div className="plus_table">
                            <h4>이메일</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text"/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>-</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item} className={"cancle"+idx}>
                                        <div className="btn_close" onClick={() => (handleDelete(idx))}>
                                            삭제
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Observe_Plus
