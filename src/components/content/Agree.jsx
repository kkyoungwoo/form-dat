import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './agree.css'

function Agree(props) {

    useEffect(() => {props.setIsMe(false)})
    
    const [isToggle,setIsToggle] = useState(false);
    const [isJoin,setIsJoin] = useState("/");

    const isToggleBtn = useCallback(() => {
      setIsToggle(!(isToggle))
    },[isToggle])

    const defalt = useEffect(() =>{
        if(isToggle === true){
            setIsJoin("/form")
        }else{
            setIsJoin("/booth_form")
        }
    })

    const joinForm = useCallback(() =>{
        if(isToggle === true){
        }else{
            alert('참가규정에 동의해 주세요')
        }
    },[isToggle])

    return (
        <div className="agreepage">
            <div className="agreetext">
                ◎ 제1조(용어정의)
                <br />1. `전시자`라 함은 전시회 참가를 위하여 참가신청서를 제출한 회사, 조합, 단체 및 개인 등을 말한다.
                <br />2. `주최자` 라 함은 “경상북도”를 말한다.
                <br />3. `전시회` 라 함은 “2021 경상북도 산림박람회”를 말한다.
                <br /><br />◎ 제2조(참가신청)
                <br />1. 전시회 참가신청을 하고자 하는 자는 소정의 신청서를 작성하여 제출하여야 한다.
                <br />2. 전시자는 이미 제출한 참가신청서, 기술지원신청서 등 제반 제출서류의 내용에 변동사항이 발생한 경우 즉시 주최자에게 이를 통보하여야
                <br />하며, 미통보로 인한 불이익에 대해서는 전시자가 책임을 진다.
                <br /><br />◎ 제3조(부스배정)
                <br />1. 주최자는 참가신청 접수순, 신청면적, 전시품의 성격 및 기타 합리적인 방법에 의거하여 전시자별 부스위치를 배정하며 전시자는 이의를
                <br />제기할 수 없다.
                <br />2. 주최자는 특별한 사정이 있는 경우, 전시회장치기간 이전이면 전시자에게 배정된 부스위치 및 면적을 전시자와 협의하여 변경할 수 있으며
                <br />전시자는 불가항력적인 경우를 제외하고는 주최자의 요구에 최대한 협조하여야 한다.
                <br /><br />◎ 제4조(전시장 관리)
                <br />1. 전시자는 참가신청서에 명시한 전시품을 전시하고 상주요원을 배치하여 자사부스(booth) 관리에 만전을 기하여야 한다.
                <br />2. 전시자가 참가신청서에 명시한 전시품과 상이한 물품을 전시하거나 전시회 성격에 부합되지 않는 물품을 전시할 경우 주최자는 즉시 중지,
                <br />철거 또는 반출을 명할 수 있다. 이 경우 참가비는 반환되지 아니하며, 전시자는 이에 따른 배상을 청구 할 수 없다.
                <br />3. 주관자는 필요한 경우, 특정인의 전시장 출입을 제한할 수 있다.
                <br />4. 전시자는 주관자의 서면 동의 없이 배정된 전시면적의 전부 또는 일부를 타인에게 양도, 전매 또는 상호간 교환할 수 없다.
                <br />5. 전시자는 전시장의 바닥, 천장, 기둥, 벽면 등에 페인트칠 등 원상변경을 할 수 없으며 전시장의 손상에 대해서는 주자관의 원상회복 요청 등에
                <br />따라 적절한 손해배상을 해야 한다.
                <br />6. 주관자는 질서유지와 안전관리, 사회적 물의를 일으킬 수 있는 행위의 예방 등을 위하여 전시 품목, 전시 행위 등을 선택적으로 배제 또는 제한
                <br />할 수 있다.
                <br /><br />◎ 제5조(전시자의 참가취소 또는 변경)
                <br />1. 전시자가 약정한 전시면적 전부 도는 일부사용을 취소할 시, 전시자는 주최자에게 서면으로 취소 통보를 하여야 한다.
                <br />◎ 제6조(전시품 진열 및 홍보활동)
                <br />1. 전시자는 배정된 전시면적내에 지정 기간 내에 장치 및 전시품 반입, 진열을 완료하여야 한다.
                <br />2. 전시자는 참가신청서 상에 명시한 전시품을 전시하고 주최자는 전시회의 성격과 배치되는 전시품에 대하여 전시를 제한할 수 있으며, 신청한
                <br />품목외의 전시품을 홍보하거나 판매할 경우 주최사의 지시에 따라야 한다.
                <br /><br />◎ 제8조(전시품 및 장치물 반출)
                <br />전시자는 지정기간내에 모든 전시품 및 장치물을 반출하여야 하며, 반출을 지연할 경우 주최측이 부담하게 될 제반비용을 즉시 주최자에게
                <br />납입하여야 한다.
                <br /><br />◎ 제9조(전시장 경비, 위험부담 및 보험)
                <br />1. 주관자는 전시자 및 방문객을 위하여 적절한 경비 조치를 한다.
                <br />2. 전시자는 전시기간 및 장치, 철거 기간 중 발생되는 배당면적내의 장치물 및 전시품에 대한 훼손 및 도난에 대하여 전적인 책임을 진다.
                <br />3. 전시자가 고의 또는 과실로 화재, 도난, 파손 기타 사고를 발생하게 하여 주최자 또는 타인에게 손해를 입힌 때에는 전시자가 전적인
                <br />배상책임을 지며, 전시품 등에 대한 보험 경비 역시 전시자의 책임으로 한다.
                <br /><br />◎ 제10조(방화규칙)
                <br />1. 장치물 및 전시장내외 모든 자재는 소방법규에 따라 적절한 불연처리가 되어야 한다.
                <br />2. 주최자는 필요에 따라 전시자에게 화재 방지와 관련한 사정을 요구할 수 있다.
                <br /><br />◎ 제11조(보충규정)
                <br />1. 주최자는 필요한 경우, 참가규정에 명시되지 않은 보충 규정을 제정할 수 있다.
                <br />2. 보충되는 규정을 참가규정의 일부가 되며, 전시자는 이를 준수하여야 한다.
                <br />3. 전시자는 주관자의 제규정을 준수하여야 한다.
                <br /><br />◎ 제12조(분쟁해결)
                <br />본 참가규정의 해석에 관하여 주최자와 전시자간에 발생하는 쌍방 간의 권리, 의무에 관한 분쟁은 대구지방관할 법원의 판정을 따른다.
            </div>
            <div className="agreechackbox">
                <span className="input_chack"><input id="chack" type="checkbox" onClick={isToggleBtn}/></span>
                <label for="chack" className="input_chacktext">위의 참가규정에 동의합니다.</label>
            </div>
            <Link to ={isJoin}><button className="attend" onClick={joinForm}>
                온라인 참가신청
            </button></Link>
        </div>
    )
}

export default Agree
