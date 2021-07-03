import React, { useEffect,useState,useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import './Observe_individual.css'
import Observe_Plus from '../common/Observe_Plus'
import emailjs from 'emailjs-com';
import DaumPostcode from 'react-daum-postcode';
import '../common/kakao.css'

function Observe_individual(props) {

    const history = useHistory();

    function handleClick() {
        alert('신청이 완료되었습니다.')
        history.goBack()
      }

    //이름
    const [name,setName] = useState("")
    //휴대폰
    const [phone,setPhone] = useState("")
    //주소
    const [address,setAddress] = useState("")
    //상세주소
    const [addresss,setAddresss] = useState("")
    //이메일
    const [email,setEmail] = useState("")
    //회사명
    const [company,setCompany] = useState("")
    //부서/직위
    const [positon,setPositon] = useState("")
    //성별
    const [gender,setGender] = useState("")
    //연령대
    const [age,setAge] = useState("")
    //등록분류
    const [classNum,setClassNum] = useState("")

    //
    //회사분류
    //

    //제조업체
    const [a,setA] = useState("")
    //유통업체
    const [b,setB] = useState("")
    //관공서/단체/협회
    const [c,setC] = useState("")
    //연구기관
    const [d,setD] = useState("")
    //방송/신문
    const [e,setE] = useState("")
    //무역
    const [f,setF] = useState("")
    //병원/의원
    const [g,setG] = useState("")
    //기타
    const [h,setH] = useState("")

    //
    //관람목적
    //

     //제품/기술 구매
    const [i,setI] = useState("")
    //자료수집
    const [j,setJ] = useState("")
    //시장동향파악
    const [k,setK] = useState("")
    //연구
    const [l,setL] = useState("")
    //협력,투자 및 제휴업체 물색
    const [m,setM] = useState("")
    //기타일반관람
    const [n,setN] = useState("")
    //차기전시참가여부 결정
    const [o,setO] = useState("")

    //
    //전시회 인지경로
    //

     //TV,신문 등 언론 매체
    const [p,setP] = useState("")
    //관련전문 잡지
    const [q,setQ] = useState("")
    //인터넷
    const [r,setR] = useState("")
    //관련기관 및 단체
    const [s,setS] = useState("")
    //참관안내서
    const [t,setT] = useState("")
    //외부광고
    const [u,setU] = useState("")
    //기타
    const [v,setV] = useState("")

    //
    //관심분야
    //

    //목재건축
    const [w,setW] = useState("")
    //목제품
    const [x,setX] = useState("")
    //임산물
    const [y,setY] = useState("")
    //신재생에너지
    const [z,setZ] = useState("")
    //산림(숲)관리
    const [aa,setAA] = useState("")
    //산림레포츠
    const [bb,setBB] = useState("")
    //스마트모빌리티
    const [cc,setCC] = useState("")
    //기타
    const [dd,setDD] = useState("")


    const submitJoin = useCallback(()=>{
        alert("신청이 완료되었습니다.")
    })

    

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_spdcidi', 'template_zau8w0f', e.target, 'user_YOvzVUT3C3OBySLzLPves')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    const [isMeA,setIsMeA] = useState(true)
    const [isMeB,setIsMeB] = useState(true)
    const [isMeC,setIsMeC] = useState(true)
    const [isMeD,setIsMeD] = useState(true)
    const [isMeE,setIsMeE] = useState(true)
    const [isMeF,setIsMeF] = useState(true)
    const [isMeG,setIsMeG] = useState(true)
    const [isMeH,setIsMeH] = useState(true)
    const [isMeI,setIsMeI] = useState(true)
    const [isMeJ,setIsMeJ] = useState(true)
    const [isMeK,setIsMeK] = useState(true)
    const [isMeL,setIsMeL] = useState(true)
    const [isMeM,setIsMeM] = useState(true)
    const [isMeN,setIsMeN] = useState(true)
    const [isMeO,setIsMeO] = useState(true)
    const [isMeP,setIsMeP] = useState(true)
    const [isMeQ,setIsMeQ] = useState(true)
    const [isMeR,setIsMeR] = useState(true)
    const [isMeS,setIsMeS] = useState(true)
    const [isMeT,setIsMeT] = useState(true)
    const [isMeU,setIsMeU] = useState(true)
    const [isMeV,setIsMeV] = useState(true)
    const [isMeW,setIsMeW] = useState(true)
    const [isMeX,setIsMeX] = useState(true)
    const [isMeY,setIsMeY] = useState(true)
    const [isMeZ,setIsMeZ] = useState(true)
    const [isMeAA,setIsMeAA] = useState(true)
    const [isMeBB,setIsMeBB] = useState(true)
    const [isMeCC,setIsMeCC] = useState(true)
    const [isMeDD,setIsMeDD] = useState(true)

    const ismeClickA = useCallback(() =>{
        setIsMeA(!isMeA)
        isMeA ? setA(" 제조업체") : setA("")
    },[isMeA])

    const ismeClickB = useCallback(() =>{
        setIsMeB(!isMeB)
        isMeB ? setB(" 유통업체") : setB("")
    },[isMeB])

    const ismeClickC = useCallback(() =>{
        setIsMeC(!isMeC)
        isMeC ? setC(" 관공서/단체/협회") : setC("")
    },[isMeC])

    const ismeClickD = useCallback(() =>{
        setIsMeD(!isMeD)
        isMeD ? setD(" 연구기관") : setD("")
    },[isMeD])

    const ismeClickE = useCallback(() =>{
        setIsMeE(!isMeE)
        isMeE ? setE(" 방송/신문") : setE("")
    },[isMeE])

    const ismeClickF = useCallback(() =>{
        setIsMeF(!isMeF)
        isMeF ? setF(" 무역") : setF("")
    },[isMeF])

    const ismeClickG = useCallback(() =>{
        setIsMeG(!isMeG)
        isMeG ? setG(" 병원/의원") : setG("")
    },[isMeG])

    const ismeClickH = useCallback(() =>{
        setIsMeH(!isMeH)
        isMeH ? setH(" 기타") : setH("")
    },[isMeH])

    const ismeClickI = useCallback(() =>{
        setIsMeI(!isMeI)
        isMeI ? setI(" 제품/기술 구매") : setI("")
    },[isMeI])

    const ismeClickJ = useCallback(() =>{
        setIsMeJ(!isMeJ)
        isMeJ ? setJ(" 자료수집") : setJ("")
    },[isMeJ])

    const ismeClickK = useCallback(() =>{
        setIsMeK(!isMeK)
        isMeK ? setK(" 시장동향파악") : setK("")
    },[isMeK])

    const ismeClickL = useCallback(() =>{
        setIsMeL(!isMeL)
        isMeL ? setL(" 연구") : setL("")
    },[isMeL])

    const ismeClickM = useCallback(() =>{
        setIsMeM(!isMeM)
        isMeM ? setM(" 협력,투자 및 제휴업체 물색") : setM("")
    },[isMeM])

    const ismeClickN = useCallback(() =>{
        setIsMeN(!isMeN)
        isMeN ? setN(" 기타일반관람") : setN("")
    },[isMeN])

    const ismeClickO = useCallback(() =>{
        setIsMeO(!isMeO)
        isMeO ? setO(" 차기전시참가여부 결정") : setO("")
    },[isMeO])

    const ismeClickP = useCallback(() =>{
        setIsMeP(!isMeP)
        isMeP ? setP(" TV,신문 등 언론 매체") : setP("")
    },[isMeP])

    const ismeClickQ = useCallback(() =>{
        setIsMeQ(!isMeQ)
        isMeQ ? setQ(" 관련전문 잡지") : setQ("")
    },[isMeQ])

    const ismeClickR = useCallback(() =>{
        setIsMeR(!isMeR)
        isMeR ? setR(" 인터넷") : setR("")
    },[isMeR])

    const ismeClickS = useCallback(() =>{
        setIsMeS(!isMeS)
        isMeS ? setS(" 관련기관 및 단체") : setS("")
    },[isMeS])

    const ismeClickT = useCallback(() =>{
        setIsMeT(!isMeT)
        isMeT ? setT(" 참관안내서") : setT("")
    },[isMeT])
    
    const ismeClickU = useCallback(() =>{
        setIsMeU(!isMeU)
        isMeU ? setU(" 외부광고") : setU("")
    },[isMeU])

    const ismeClickV = useCallback(() =>{
        setIsMeV(!isMeV)
        isMeV ? setV(" 기타") : setV("")
    },[isMeV])

    const ismeClickW = useCallback(() =>{
        setIsMeW(!isMeW)
        isMeW ? setW(" 목재건축") : setW("")
    },[isMeW])

    const ismeClickX = useCallback(() =>{
        setIsMeX(!isMeX)
        isMeX ? setX(" 목제품") : setX("")
    },[isMeX])

    const ismeClickY = useCallback(() =>{
        setIsMeY(!isMeY)
        isMeY ? setY(" 임산물") : setY("")
    },[isMeY])

    const ismeClickZ = useCallback(() =>{
        setIsMeZ(!isMeZ)
        isMeZ ? setZ(" 신재생에너지") : setZ("")
    },[isMeZ])

    const ismeClickAA = useCallback(() =>{
        setIsMeAA(!isMeAA)
        isMeAA ? setAA(" 산림(숲)관리") : setAA("")
    },[isMeAA])

    const ismeClickBB = useCallback(() =>{
        setIsMeBB(!isMeBB)
        isMeBB ? setBB(" 산림레포츠") : setBB("")
    },[isMeBB])

    const ismeClickCC = useCallback(() =>{
        setIsMeCC(!isMeCC)
        isMeCC ? setCC(" 스마트모빌리티") : setCC("")
    },[isMeCC])

    const ismeClickDD = useCallback(() =>{
        setIsMeDD(!isMeDD)
        isMeDD ? setDD(" 기타") : setDD("")
    },[isMeDD])

    //kakao
    const [location, setLocation] = useState(null);
    const [zipcode, setZip] = useState(null);
    const [select, setSelect] = useState(false);
    const [fullLookAddress,setFullLookAddress] = useState("")
    
    const handleSelectZip = () => {
      setSelect(true);
    };

    const handleAddress = (data) => {
      setSelect(false);
    
      let fullAddress = data.address;
      let extraAddress = "";
    
      if (data.addressType === "R") {
        if (data.bname !== "") {
          extraAddress += data.bname;
        }
        if (data.buildingName !== "") {
          extraAddress +=
            extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      }
      setZip(data.zonecode);
      setLocation(fullAddress);
      setFullLookAddress(fullAddress)
    };

    return (
        <div className="individual_componets">
            <form className="contact-form" onSubmit={sendEmail}>
                <input className="displaynone" type="hidden" name="contact_number" />
                <label className="displaynone">Name</label>
                <input className="displaynone" type="text" name="user_name" />
                <label className="displaynone">Email</label>
                <input className="displaynone" type="email" name="user_email" />
                <label className="displaynone">Message</label>
                <textarea className="displaynone" name="message" readOnly value={
                    " 이름 :"+name+
                    " , 휴대폰 :"+phone+
                    " , 주소 :"+fullLookAddress+
                    " , 상세주소 :"+addresss+
                    " , 이메일 :"+email+
                    " , 회사명 :"+company+
                    " , 부서/직위 :"+positon+
                    " , 성별 :"+gender+
                    " , 연령대 :"+age+
                    " , 등록분류 :"+classNum+
                    " , 회사분류 :"+a+b+c+d+e+f+g+h+
                    " , 관람목적 :"+i+j+k+l+m+n+o+
                    " , 전시회 인지경로 :"+p+q+r+s+t+u+v+
                    " , 관심분야 :"+w+x+y+z+aa+bb+cc+dd
                    //" , 제조업체 :"+a+
                    //" , 유통업체 :"+b+
                    //" , 관공서/단체/협회 :"+c+
                    //" , 연구기관 :"+d+
                    //" , 방송/신문 :"+e+
                    //" , 무역 :"+f+
                    //" , 병원/의원 :"+g+
                    //" , 기타 :"+h
                    //관람목적
                    //" , 제품/기술 구매 :"+i+
                    //" , 자료수집 :"+j+
                    //" , 시장동향파악 :"+k+
                    //" , 연구 :"+l+
                    //" , 협력,투자 및 제휴업체 물색 :"+m+
                    //" , 기타일반관람 :"+n+
                    //" , 차기전시참가여부 결정 :"+o+
                    //전시회 인지경로
                    //" , TV,신문 등 언론 매체 :"+p+
                    //" , 관련전문 잡지 :"+q+
                    //" , 인터넷 :"+r+
                    //" , 관련기관 및 단체 :"+s+
                    //" , 참관안내서 :"+t+
                    //" , 외부광고 :"+u+
                    //" , 기타 :"+v+
                    //관심분야
                    //" , 목재건축 :"+w+
                    //" , 목제품 :"+x+
                    //" , 임산물 :"+y+
                    //" , 신재생에너지 :"+z+
                    //" , 산림(숲)관리 :"+aa+
                    //" , 산림레포츠 :"+bb+
                    //" , 스마트모빌리티 :"+cc+
                    //" , 기타 :"+dd
                }/>
                <div className={"kakaomap "}></div>
                <div className="title_text fontsizeup">개인 온라인 참관신청</div>
                <div className="title_text" >기본정보</div>
                <div className="individual_wrap">
                    <div className="individual name">
                        <div className="title">이름</div>
                        <div className="text">
                            <input type="text" onChange={(e)=> setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="individual phone">
                        <div className="title">휴대폰</div>
                        <div className="text">
                            <input type="tel" onChange={(e)=> setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className="individual address">
                        <div className="title">주소</div>
                        <div className="text">
                            <div className="script_wrap">
                                {/*Kakaomap*/}
                                <div className="priceCalculator">
                                    <div className="location">
                                      <div
                                        className={"search" + (location ? " selected" : "")}
                                        onClick={handleSelectZip}
                                      >
                                        <span>{location ? location : "주소 검색하기"}</span>{" "}
                                        <div className="tag" />
                                      </div>
                                    </div>
                                  <div
                                    className="postSelect"
                                    style={{
                                      display: select ? "flex" : "none",
                                    }}
                                  >
                                    <DaumPostcode
                                      onComplete={handleAddress}
                                      style={{
                                        width: "360px",
                                        height: "480px",
                                      }}
                                    />
                                    </div>
                                </div>
                                {/*Kakaomap*/}
                            </div>
                            <div>
                                상세주소<input type="text" onChange={(e)=> setAddresss(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="individual email">
                        <div className="title">이메일</div>
                        <div className="text">
                            <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="individual company">
                        <div className="title">회사명</div>
                        <div className="text">
                            <input type="text" onChange={(e)=> setCompany(e.target.value)}/>
                        </div>
                    </div>
                    <div className="individual positon">
                        <div className="title">부서/직위</div>
                        <div className="text">
                            <input type="text" onChange={(e)=> setPositon(e.target.value)}/>
                        </div>
                    </div>
                    <div className="individual gender">
                        <div className="title">성별</div>
                        <div className="text">
                            <input type="radio" onChange={() => setGender("여성")} name="gender" />여성
                            <input type="radio" onChange={() => setGender("남성")} name="gender" />남성
                        </div>
                    </div>
                    <div className="individual age">
                        <div className="title">연령대</div>
                        <div className="text">
                            <div><input onChange={() => setAge("초등학생")} type="radio" name="drone" value="elementary" className="elementary"/> 초등학생</div>
                            <div><input onChange={() => setAge("중·고등학생")} type="radio" name="drone" value="middles" className="middles"/> 중 · 고등학생</div>
                            <div><input onChange={() => setAge("20대")} type="radio" name="drone" value="two" className="two"/> 20대</div>
                            <div><input onChange={() => setAge("30대")} type="radio" name="drone" value="three" className="three"/> 30대</div>
                            <div><input onChange={() => setAge("40대")} type="radio" name="drone" value="four" className="four"/> 40대</div>
                            <div><input onChange={() => setAge("50대")} type="radio" name="drone" value="five" className="five"/> 50대</div>
                            <div><input onChange={() => setAge("60대")} type="radio" name="drone" value="six" className="six"/> 60대</div>
                            <div><input onChange={() => setAge("70대")} type="radio" name="drone" value="seven" className="seven"/> 70대</div>
                            <div><input onChange={() => setAge("기타(미취학아동)")} type="radio" name="drone" value="notice" className="notice"/> 기타(미취학아동)</div>
                        </div>
                    </div>
                    <div className="individual class">
                        <div className="title">등록분류</div>
                        <div className="text">
                            <input onChange={() => setClassNum("바이어/관련종사자")} type="radio" name="classradio" value="comp" /> 바이어/관련종사자
                            <input onChange={() => setClassNum("일반관람")} type="radio" name="classradio" value="peop" /> 일반관람
                        </div>
                    </div>
                </div>

                <div className="sub_individual">
                    <div className="sub_individuals company">
                        <div className="title">회사분류</div>
                        <div>
                            <div  className="form_box">
                                <input type="checkbox" onClick={ismeClickA} id="a"/><label htmlFor="a">제조업체</label>
                                <input type="checkbox" onClick={ismeClickB} id="b"/><label htmlFor="b">유통업체</label>
                            </div>
                            <div  className="form_box">
                                <input type="checkbox" onClick={ismeClickC} id="c"/><label htmlFor="c">관공서/단체/협회</label>
                                <input type="checkbox" onClick={ismeClickD} id="d"/><label htmlFor="d">연구기관</label>
                            </div>
                            <div  className="form_box">
                                <input type="checkbox" onClick={ismeClickE} id="e"/><label htmlFor="e">방송/신문</label>
                                <input type="checkbox" onClick={ismeClickF} id="f"/><label htmlFor="f">무역</label>
                            </div>
                            <div  className="form_box">
                                <input type="checkbox" onClick={ismeClickG} id="g"/><label htmlFor="g">병원/의원</label>
                                <input type="checkbox" onClick={ismeClickH} id="h"/><label htmlFor="h">기타</label>
                            </div>
                        </div>
                    </div>
                    <div className="sub_individuals purpose">
                        <div className="title">관람목적</div>
                        <div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickI} id="i"/><label htmlFor="i">제품/기술 구매</label>
                                <input type="checkbox" onClick={ismeClickJ} id="j"/><label htmlFor="j">자료수집</label>
                            </div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickK} id="k"/><label htmlFor="k">시장동향파악</label>
                                <input type="checkbox" onClick={ismeClickL} id="l"/><label htmlFor="l">연구</label>
                            </div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickM} id="m"/><label htmlFor="m">협력,투자 및 제휴업체 물색</label>
                                <input type="checkbox" onClick={ismeClickN} id="n"/><label htmlFor="n">기타일반관람</label>
                            </div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickO} id="o"/><label htmlFor="o">차기전시참가여부 결정</label></div>
                            </div>
                    </div>
                    <div className="sub_individuals pathway">
                        <div className="title">전시회 인지경로</div>
                        <div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickP} id="p"/><label htmlFor="p">TV,신문 등 언론 매체</label>
                                <input type="checkbox" onClick={ismeClickQ} id="q"/><label htmlFor="q">관련전문 잡지</label>
                            </div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickR} id="r"/><label htmlFor="r">인터넷</label>
                                <input type="checkbox" onClick={ismeClickS} id="s"/><label htmlFor="s">관련기관 및 단체</label>
                            </div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickT} id="t"/><label htmlFor="t">참관안내서</label>
                                <input type="checkbox" onClick={ismeClickU} id="u"/><label htmlFor="u">외부광고</label>
                            </div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickV} id="v"/><label htmlFor="v">기타</label></div>
                            </div>
                    </div>
                    <div className="sub_individuals comInterestpany">
                        <div className="title">관심분야</div>
                        <div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickW} id="w"/><label htmlFor="w">목재건축</label>
                                <input type="checkbox" onClick={ismeClickX} id="x"/><label htmlFor="x">목제품</label>
                            </div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickY} id="y"/><label htmlFor="y">임산물</label>
                                <input type="checkbox" onClick={ismeClickZ} id="z"/><label htmlFor="z">신재생에너지</label>
                            </div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickAA} id="aa"/><label htmlFor="aa">산림(숲)관리</label>
                                <input type="checkbox" onClick={ismeClickBB} id="bb"/><label htmlFor="bb">산림레포츠</label>
                            </div>
                            <div className="form_box">
                                <input type="checkbox" onClick={ismeClickCC} id="cc"/><label htmlFor="cc">스마트모빌리티</label>
                                <input type="checkbox" onClick={ismeClickDD} id="dd"/><label htmlFor="dd">기타</label>
                            </div>
                        </div>
                    </div>
                </div>
                <Observe_Plus />
                <input type="submit" className="submit_btn" onClick={()=> handleClick()} value="참가신청"/>
                <button className="cancle_btn" onClick={
                () => alert("메인화면으로 이동합니다.")}>
                    <a href={props.webSiteLink}>
                    취소하기
                    </a>
                </button>
            </form>
        </div>
    )
}

export default Observe_individual
