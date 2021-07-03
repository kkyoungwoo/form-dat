import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DaumPostcode from 'react-daum-postcode';
import './plus.css'

function Plus(props) {

    const [plusNum,setPlusNum] = useState([0])
    const [plusName,setPlusName] = useState()
    const [plusPosition,setPlusPosition] = useState()
    const [plusPhoneNum,setPlusPhoneNum] = useState()
    const [plusText,setPlusText] = useState()
    
    const plusMambers = useCallback(
        () => {
            const array = [...plusNum]
            array.push(plusNum.get)
            setPlusNum(array)
        },
        [plusNum]
        )
        
        const handleDelete = (idx) => {
            const Delet = plusNum.filter((_,idxx) => idx !== idxx)
            setPlusNum(Delet)
    }

    return (
        <div>
            <div className="plus_wrap">
                <div className="plus_header">
                    <div className="plus_header_warp">
                        <div className="header_left">
                            <div className="header_left_text">· 출입증신청</div>
                            <div className="header_left_btn" onClick={plusMambers}>추가</div>
                        </div>
                        <div className="header_right">
                                · 박람회장 내 출입증 미소지시 출입이 불가능합니다.
                                <br />· 참가업체 직원 중 전시장에서 항시 상주하는 인원 수 만큼 신청하시기 바랍니다.
                                <br />· 출입증 수령장소 : EXCO 서관 로비(1층) 등록데스크
                                <br />· 배포일시 : 2021년 10월 14일(목) 오전 8시 ~ 전시기간중
                        </div>
                    </div>
                    <div className="plus_warp">
                        <div className="plus_table first">
                            <h4>번호</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>{idx + 1}</div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>성명</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" onChange={(e) => {setPlusName(e.target.value)}}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>직함</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" onChange={(e) => {setPlusPosition(e.target.value)}}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>연락처</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" onChange={(e) => {setPlusPhoneNum(e.target.value)}}/>
                                    </div>
                                )
                            })}
                        </div >
                        <div className="plus_table">
                            <h4>비고</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}>
                                        <input type="text" onChange={(e) => {setPlusText(e.target.value)}}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>-</h4>
                            {plusNum.map((item,idx) => {
                                return(
                                    <div key={item}  className={"cancle"+idx}>
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

export default Plus
