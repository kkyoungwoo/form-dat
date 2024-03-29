import React, { useEffect,useState,useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import './Observe_individual.css'
import Privacy from './Privacy'
import emailjs from 'emailjs-com';
import DaumPostcode from 'react-daum-postcode';
import '../common/kakao.css'

function Observe_individual(props) {

    useEffect(() => {props.setIsMe(false)})
    const [agreeBtn,setAgreeBtn] = useState(false)

    const history = useHistory();

    const BtnClick = useCallback(()=>{
        setAgreeBtn(!agreeBtn)
    },[agreeBtn])
    
    //이름
    const [name,setName] = useState("")
    //휴대폰
    const [phone,setPhone] = useState("")
    //주소
    const [address,setAddress] = useState("")
    //상세주소
    const [addresss,setAddresss] = useState("")
    //이메일
    const [emails,setEmails] = useState("")
    //회사명
    const [company,setCompany] = useState("")
    //부서/직위
    const [positons,setPositons] = useState("")
    //성별
    const [genders,setGenders] = useState("")
    //연령대
    const [ages,setAges] = useState("")
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




    const handleSubmit = (e) => {
            e.preventDefault();
        emailjs
          .sendForm(
            "service_kjop294",
            "template_f06lu62",
            e.target,
            "user_wjFKBm1HwlcURiZKvOyRr"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("접정상적으로 접수되었습니다.")
              history.push("/sessec");
            },
            (error) => {
              console.log(error.text);
            },
          );
    };


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
        isMeA ? setA(" 제조업체 ,") : setA("")
    },[isMeA])

    const ismeClickB = useCallback(() =>{
        setIsMeB(!isMeB)
        isMeB ? setB(" 유통업체 ,") : setB("")
    },[isMeB])

    const ismeClickC = useCallback(() =>{
        setIsMeC(!isMeC)
        isMeC ? setC(" 관공서/단체/협회 ,") : setC("")
    },[isMeC])

    const ismeClickD = useCallback(() =>{
        setIsMeD(!isMeD)
        isMeD ? setD(" 연구기관 ,") : setD("")
    },[isMeD])

    const ismeClickE = useCallback(() =>{
        setIsMeE(!isMeE)
        isMeE ? setE(" 방송/신문 ,") : setE("")
    },[isMeE])

    const ismeClickF = useCallback(() =>{
        setIsMeF(!isMeF)
        isMeF ? setF(" 무역 ,") : setF("")
    },[isMeF])

    const ismeClickG = useCallback(() =>{
        setIsMeG(!isMeG)
        isMeG ? setG(" 병원/의원 ,") : setG("")
    },[isMeG])

    const ismeClickH = useCallback(() =>{
        setIsMeH(!isMeH)
        isMeH ? setH(" 기타 ,") : setH("")
    },[isMeH])

    const ismeClickI = useCallback(() =>{
        setIsMeI(!isMeI)
        isMeI ? setI(" 제품/기술 구매 ,") : setI("")
    },[isMeI])

    const ismeClickJ = useCallback(() =>{
        setIsMeJ(!isMeJ)
        isMeJ ? setJ(" 자료수집 ,") : setJ("")
    },[isMeJ])

    const ismeClickK = useCallback(() =>{
        setIsMeK(!isMeK)
        isMeK ? setK(" 시장동향파악 ,") : setK("")
    },[isMeK])

    const ismeClickL = useCallback(() =>{
        setIsMeL(!isMeL)
        isMeL ? setL(" 연구 ,") : setL("")
    },[isMeL])

    const ismeClickM = useCallback(() =>{
        setIsMeM(!isMeM)
        isMeM ? setM(" 협력,투자 및 제휴업체 물색 ,") : setM("")
    },[isMeM])

    const ismeClickN = useCallback(() =>{
        setIsMeN(!isMeN)
        isMeN ? setN(" 기타일반관람 ,") : setN("")
    },[isMeN])

    const ismeClickO = useCallback(() =>{
        setIsMeO(!isMeO)
        isMeO ? setO(" 차기전시참가여부 결정 ,") : setO("")
    },[isMeO])

    const ismeClickP = useCallback(() =>{
        setIsMeP(!isMeP)
        isMeP ? setP(" TV,신문 등 언론 매체 ,") : setP("")
    },[isMeP])

    const ismeClickQ = useCallback(() =>{
        setIsMeQ(!isMeQ)
        isMeQ ? setQ(" 관련전문 잡지 ,") : setQ("")
    },[isMeQ])

    const ismeClickR = useCallback(() =>{
        setIsMeR(!isMeR)
        isMeR ? setR(" 인터넷 ,") : setR("")
    },[isMeR])

    const ismeClickS = useCallback(() =>{
        setIsMeS(!isMeS)
        isMeS ? setS(" 관련기관 및 단체 ,") : setS("")
    },[isMeS])

    const ismeClickT = useCallback(() =>{
        setIsMeT(!isMeT)
        isMeT ? setT(" 참관안내서 ,") : setT("")
    },[isMeT])
    
    const ismeClickU = useCallback(() =>{
        setIsMeU(!isMeU)
        isMeU ? setU(" 외부광고 ,") : setU("")
    },[isMeU])

    const ismeClickV = useCallback(() =>{
        setIsMeV(!isMeV)
        isMeV ? setV(" 기타 ,") : setV("")
    },[isMeV])

    const ismeClickW = useCallback(() =>{
        setIsMeW(!isMeW)
        isMeW ? setW(" 목재건축 ,") : setW("")
    },[isMeW])

    const ismeClickX = useCallback(() =>{
        setIsMeX(!isMeX)
        isMeX ? setX(" 목제품 ,") : setX("")
    },[isMeX])

    const ismeClickY = useCallback(() =>{
        setIsMeY(!isMeY)
        isMeY ? setY(" 임산물 ,") : setY("")
    },[isMeY])

    const ismeClickZ = useCallback(() =>{
        setIsMeZ(!isMeZ)
        isMeZ ? setZ(" 신재생에너지 ,") : setZ("")
    },[isMeZ])

    const ismeClickAA = useCallback(() =>{
        setIsMeAA(!isMeAA)
        isMeAA ? setAA(" 산림(숲)관리 ,") : setAA("")
    },[isMeAA])

    const ismeClickBB = useCallback(() =>{
        setIsMeBB(!isMeBB)
        isMeBB ? setBB(" 산림레포츠 ,") : setBB("")
    },[isMeBB])

    const ismeClickCC = useCallback(() =>{
        setIsMeCC(!isMeCC)
        isMeCC ? setCC(" 스마트모빌리티 ,") : setCC("")
    },[isMeCC])

    const ismeClickDD = useCallback(() =>{
        setIsMeDD(!isMeDD)
        isMeDD ? setDD(" 기타 ,") : setDD("")
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

    const [plus_name0,setPlus_name0] = useState("")
    const [plus_name1,setPlus_name1] = useState("")
    const [plus_name2,setPlus_name2] = useState("")
    const [plus_name3,setPlus_name3] = useState("")
    const [plus_name4,setPlus_name4] = useState("")
    const [plus_name5,setPlus_name5] = useState("")
    const [plus_name6,setPlus_name6] = useState("")
    const [plus_name7,setPlus_name7] = useState("")
    const [plus_name8,setPlus_name8] = useState("")
    const [plus_name9,setPlus_name9] = useState("")

    const [plus_p0,setPlus_p0] = useState("")
    const [plus_p1,setPlus_p1] = useState("")
    const [plus_p2,setPlus_p2] = useState("")
    const [plus_p3,setPlus_p3] = useState("")
    const [plus_p4,setPlus_p4] = useState("")
    const [plus_p5,setPlus_p5] = useState("")
    const [plus_p6,setPlus_p6] = useState("")
    const [plus_p7,setPlus_p7] = useState("")
    const [plus_p8,setPlus_p8] = useState("")
    const [plus_p9,setPlus_p9] = useState("")

    const [plus_phone0,setPlus_phone0] = useState("")
    const [plus_phone1,setPlus_phone1] = useState("")
    const [plus_phone2,setPlus_phone2] = useState("")
    const [plus_phone3,setPlus_phone3] = useState("")
    const [plus_phone4,setPlus_phone4] = useState("")
    const [plus_phone5,setPlus_phone5] = useState("")
    const [plus_phone6,setPlus_phone6] = useState("")
    const [plus_phone7,setPlus_phone7] = useState("")
    const [plus_phone8,setPlus_phone8] = useState("")
    const [plus_phone9,setPlus_phone9] = useState("")

    const [plus_n0,setpplus_n0] = useState("")
    const [plus_n1,setpplus_n1] = useState("")
    const [plus_n2,setpplus_n2] = useState("")
    const [plus_n3,setpplus_n3] = useState("")
    const [plus_n4,setpplus_n4] = useState("")
    const [plus_n5,setpplus_n5] = useState("")
    const [plus_n6,setpplus_n6] = useState("")
    const [plus_n7,setpplus_n7] = useState("")
    const [plus_n8,setpplus_n8] = useState("")
    const [plus_n9,setpplus_n9] = useState("")

    const [plus_x0,setpplus_x0] = useState("")
    const [plus_x1,setpplus_x1] = useState("")
    const [plus_x2,setpplus_x2] = useState("")
    const [plus_x3,setpplus_x3] = useState("")
    const [plus_x4,setpplus_x4] = useState("")
    const [plus_x5,setpplus_x5] = useState("")
    const [plus_x6,setpplus_x6] = useState("")
    const [plus_x7,setpplus_x7] = useState("")
    const [plus_x8,setpplus_x8] = useState("")
    const [plus_x9,setpplus_x9] = useState("")

    return (
        <div className="individual_componets">
            <form className="contact-form" onSubmit={handleSubmit}>
                <input className="displaynone" type="text" name="contact_number" />
                <input className="displaynone" type="text" name="name" value={name} />
                <input className="displaynone" type="text" name="phone" value={phone} />
                <input className="displaynone" type="text" name="fullLookAddress" value={fullLookAddress} />
                <input className="displaynone" type="text" name="addresss" value={addresss} />
                <input className="displaynone" type="text" name="emails" value={emails} />
                <input className="displaynone" type="text" name="company" value={company} />
                <input className="displaynone" type="text" name="positons" value={positons} />
                <input className="displaynone" type="text" name="genders" value={genders} />
                <input className="displaynone" type="text" name="ages" value={ages} />
                <input className="displaynone" type="text" name="classnum" value={classNum} />
                <input className="displaynone" type="text" name="companycord" value={a+b+c+d+e+f+g+h} />
                <input className="displaynone" type="text" name="purpose" value={i+j+k+l+m+n+o} />
                <input className="displaynone" type="text" name="pathway" value={p+q+r+s+t+u+v} />
                <input className="displaynone" type="text" name="cominterestpany" value={w+x+y+z+aa+bb+cc+dd} />

                <input className="displaynone" type="text" name="plus_name0" value={plus_name0} />
                <input className="displaynone" type="text" name="plus_name1" value={plus_name1} />
                <input className="displaynone" type="text" name="plus_name2" value={plus_name2} />
                <input className="displaynone" type="text" name="plus_name3" value={plus_name3} />
                <input className="displaynone" type="text" name="plus_name4" value={plus_name4} />
                <input className="displaynone" type="text" name="plus_name5" value={plus_name5} />
                <input className="displaynone" type="text" name="plus_name6" value={plus_name6} />
                <input className="displaynone" type="text" name="plus_name7" value={plus_name7} />
                <input className="displaynone" type="text" name="plus_name8" value={plus_name8} />
                <input className="displaynone" type="text" name="plus_name9" value={plus_name9} />
                
                <input className="displaynone" type="text" name="plus_p0" value={plus_p0} />
                <input className="displaynone" type="text" name="plus_p1" value={plus_p1} />
                <input className="displaynone" type="text" name="plus_p2" value={plus_p2} />
                <input className="displaynone" type="text" name="plus_p3" value={plus_p3} />
                <input className="displaynone" type="text" name="plus_p4" value={plus_p4} />
                <input className="displaynone" type="text" name="plus_p5" value={plus_p5} />
                <input className="displaynone" type="text" name="plus_p6" value={plus_p6} />
                <input className="displaynone" type="text" name="plus_p7" value={plus_p7} />
                <input className="displaynone" type="text" name="plus_p8" value={plus_p8} />
                <input className="displaynone" type="text" name="plus_p9" value={plus_p9} />

                <input className="displaynone" type="text" name="plus_phone0" value={plus_phone0} />
                <input className="displaynone" type="text" name="plus_phone1" value={plus_phone1} />
                <input className="displaynone" type="text" name="plus_phone2" value={plus_phone2} />
                <input className="displaynone" type="text" name="plus_phone3" value={plus_phone3} />
                <input className="displaynone" type="text" name="plus_phone4" value={plus_phone4} />
                <input className="displaynone" type="text" name="plus_phone5" value={plus_phone5} />
                <input className="displaynone" type="text" name="plus_phone6" value={plus_phone6} />
                <input className="displaynone" type="text" name="plus_phone7" value={plus_phone7} />
                <input className="displaynone" type="text" name="plus_phone8" value={plus_phone8} />
                <input className="displaynone" type="text" name="plus_phone9" value={plus_phone9} />

                <input className="displaynone" type="text" name="plus_n0" value={plus_n0} />
                <input className="displaynone" type="text" name="plus_n1" value={plus_n1} />
                <input className="displaynone" type="text" name="plus_n2" value={plus_n2} />
                <input className="displaynone" type="text" name="plus_n3" value={plus_n3} />
                <input className="displaynone" type="text" name="plus_n4" value={plus_n4} />
                <input className="displaynone" type="text" name="plus_n5" value={plus_n5} />
                <input className="displaynone" type="text" name="plus_n6" value={plus_n6} />
                <input className="displaynone" type="text" name="plus_n7" value={plus_n7} />
                <input className="displaynone" type="text" name="plus_n8" value={plus_n8} />
                <input className="displaynone" type="text" name="plus_n9" value={plus_n9} />

                <input className="displaynone" type="text" name="plus_x0" value={plus_x0} />
                <input className="displaynone" type="text" name="plus_x1" value={plus_x1} />
                <input className="displaynone" type="text" name="plus_x2" value={plus_x2} />
                <input className="displaynone" type="text" name="plus_x3" value={plus_x3} />
                <input className="displaynone" type="text" name="plus_x4" value={plus_x4} />
                <input className="displaynone" type="text" name="plus_x5" value={plus_x5} />
                <input className="displaynone" type="text" name="plus_x6" value={plus_x6} />
                <input className="displaynone" type="text" name="plus_x7" value={plus_x7} />
                <input className="displaynone" type="text" name="plus_x8" value={plus_x8} />
                <input className="displaynone" type="text" name="plus_x9" value={plus_x9} />

                <div className="kakaomap"></div>
                <div className="title_text fontsizeup">(개인)</div>
                < Privacy />
                <div className="agree_box">
                    <input type="checkbox" id="agreeBtn" onClick={BtnClick} style={{marginRight:"10px"}}/>
                    <label for="agreeBtn">개인정보취급방침 동의합니다.</label>
                </div>
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
                            <div style={{margin: "0",display:"flex"}}>
                            <span>상세주소 :</span><span><input type="text" onChange={(e)=> setAddresss(e.target.value)} style={{marginLeft: "10px",width:"180%"}}/></span>
                            </div>
                        </div>
                    </div>
                    <div className="individual email">
                        <div className="title">이메일</div>
                        <div className="text">
                            <input type="text" onChange={(e)=> setEmails(e.target.value)}/>
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
                            <input type="text" onChange={(e)=> setPositons(e.target.value)}/>
                        </div>
                    </div>
                    <div className="individual gender">
                        <div className="title">성별</div>
                        <div className="text">
                            <input type="radio" onChange={() => setGenders("여성")} name="genders" style={{ marginRight: "5px"}}/><span>여성</span>
                            <input type="radio" onChange={() => setGenders("남성")} name="genders" style={{ marginRight: "5px"}}/><span>남성</span>
                        </div>
                    </div>
                    <div className="individual age">
                        <div className="title">연령대</div>
                        <div className="text">
                            <div><input onChange={() => setAges("초등학생")} type="radio" name="drone" value="elementary" className="elementary"/> 초등학생</div>
                            <div><input onChange={() => setAges("중·고등학생")} type="radio" name="drone" value="middles" className="middles"/> 중 · 고등학생</div>
                            <div><input onChange={() => setAges("20대")} type="radio" name="drone" value="two" className="two"/> 20대</div>
                            <div><input onChange={() => setAges("30대")} type="radio" name="drone" value="three" className="three"/> 30대</div>
                            <div><input onChange={() => setAges("40대")} type="radio" name="drone" value="four" className="four"/> 40대</div>
                            <div><input onChange={() => setAges("50대")} type="radio" name="drone" value="five" className="five"/> 50대</div>
                            <div><input onChange={() => setAges("60대")} type="radio" name="drone" value="six" className="six"/> 60대</div>
                            <div><input onChange={() => setAges("70대")} type="radio" name="drone" value="seven" className="seven"/> 70대</div>
                            <div><input onChange={() => setAges("기타(미취학아동)")} type="radio" name="drone" value="notice" className="notice"/> 기타(미취학아동)</div>
                        </div>
                    </div>
                    <div className="individual class">
                        <div className="title">등록분류</div>
                        <div className="text">
                            <input onChange={() => setClassNum("바이어/관련종사자")} type="radio" name="classradio" value="comp" style={{marginRight: "5px"}}/> 바이어/관련종사자
                            <input onChange={() => setClassNum("일반관람")} type="radio" name="classradio" value="peop" style={{marginRight: "5px"}}/> 일반관람
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
                
                <div className="plus_wrap">
                <div className="plus_header">
                    <div className="plus_header_warp">
                        <div className="header_left">
                            <div className="header_left_text">· 추가인원</div>
                            {/*<div className="header_left_btn" onClick={plusMambers}>추가</div>
                            <div className="sub_text">인원을 추가로 입력하시려면'추가'버튼을 눌러주세요</div>*/}
                        </div>
                    </div>
                    <div className="plus_warp">
                        <div className="plus_table first" >
                            <h4>회사명</h4>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name0(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name1(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name2(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name3(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name4(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name5(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name6(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name7(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name8(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_name9(e.target.value)}/>
                            </div>
                        </div>
                        <div className="plus_table">
                            <h4>부서/직위</h4>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p0(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p1(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p2(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p3(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p4(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p5(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p6(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p7(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p8(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_p9(e.target.value)}/>
                            </div>
                        </div>
                        <div className="plus_table">
                            <h4>이름</h4>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone0(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone1(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone2(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone3(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone4(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone5(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone6(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone7(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone8(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setPlus_phone9(e.target.value)}/>
                            </div>
                        </div>
                        <div className="plus_table">
                            <h4>휴대전화</h4>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n0(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n1(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n2(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n3(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n4(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n5(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n6(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n7(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n8(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_n9(e.target.value)}/>
                            </div>
                        </div >
                        <div className="plus_table">
                            <h4>이메일</h4>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x0(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x1(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x2(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x3(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x4(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x5(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x6(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x7(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x8(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e)=> setpplus_x9(e.target.value)}/>
                            </div>
                        </div>
                        <div className="plus_table">
                            <h4>-</h4>
                        </div>
                    </div>
                </div>
            </div>
                {agreeBtn ? <input type="submit" className="submit_btn" value="참가신청"/> :
                <input type="text" className="submit_btn" value="참가신청" style={{ textAlign:"center"}} onClick={()=> alert("개인정보취급방침에 동의해 주세요.")}/>}
                {/*<button className="cancle_btn" onClick={
                () => alert("메인화면으로 이동합니다.")}>
                    <a href={props.webSiteLink}>
                    취소하기
                    </a>
                </button>*/}
            </form>
        </div>
    )
}

export default Observe_individual
