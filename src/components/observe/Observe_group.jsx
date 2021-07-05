import React, { useState,useCallback,useEffect } from 'react'
import './observe.css'
import Privacy from './Privacy'
import emailjs from 'emailjs-com';
import DaumPostcode from 'react-daum-postcode';
import '../common/kakao.css'
import { useHistory } from 'react-router-dom'

function Observe_group(props) {
    
    const history = useHistory();

    function agreeBtnClick() {
        alert('정상적으로 접수되었습니다.')
        history.goBack()
    }
    function handleClick() {
        agreeBtn ? agreeBtnClick() : alert('개인정보 취급방침에 동의해주세요')
      }
    


    //단체명
    const [groupName,setGroupName] = useState("")
    //담당자성명
    const [name,setName] = useState("")
    //담당자연락처
    const [phone,setPhone] = useState("")
    //직위
    const [position,setPosition] = useState("")
    //담당자휴대전화
    const [number,setNumber] = useState("")
    //이메일
    const [email,setEmail] = useState("")
    //주소
    const [addres,setAddres] = useState("")
    //상세주소
    const [address,setAddress] = useState("")
    //참관객 명단
    const [list,setList] = useState("")
    //참관예정일자
    const [day,setDay] = useState("")
    const [days,setDays] = useState("")
    const [dayss,setDayss] = useState("")

    useEffect(() => {props.setIsMe(false)})

    const [agreeBtn,setAgreeBtn] = useState(false)
    const [pathLink,setPathLink] = useState("/")
    const [failurePath,setFailurePath] = useState("/")

    const BtnClick = useCallback(()=>{
        setAgreeBtn(!agreeBtn)
    })

    function sendEmail(e) {
            e.preventDefault();
            if(agreeBtn === true){
            emailjs.sendForm('service_spdcidi', 'template_zau8w0f', e.target, 'user_YOvzVUT3C3OBySLzLPves')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
            }
      }

    const [isMe,setIsMe] = useState(true)
    const [isMine,setMine] = useState(true)
    const [isI,setI] = useState(true)

    const ismeFunk = useCallback(() =>{
        setIsMe(!isMe)
        isMe ? setDay("2021-10-14 (목)") : setDay("")
    },[isMe])

    const ismeFunks = useCallback(() =>{
        setMine(!isMine)
        isMine ? setDays("2021-10-15 (금)") : setDays("")
    },[isMine])

    const ismeFunkss = useCallback(() =>{
        setI(!isI)
        isI ? setDayss("2021-10-16 (토)") : setDayss("")
    },[isI])

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
        <div>
            <form className="contact-form" onSubmit={sendEmail}>
                <input className="displaynone" type="hidden" name="contact_number" />
                <label className="displaynone">Name</label>
                <input className="displaynone" type="text" name="user_name" />
                <label className="displaynone">Email</label>
                <input className="displaynone" type="email" name="user_email" />
                <label className="displaynone">Message</label>
                <textarea className="displaynone" name="message" readOnly value={
                    "단체명 :"+groupName+
                    "\n담당자성명 :"+name+
                    "\n담당자연락처 :"+phone+
                    "\n직위 :"+position+
                    "\n담당자휴대전화 :"+number+
                    "\n이메일 :"+email+
                    "\n주소 :"+fullLookAddress+
                    "\n상세주소 :"+address+
                    "\n참관객 명단 :"+list+
                    "\n참관예정일자 :"+day+days+dayss
                }/>
            <div className="title_text fontsizeup">(단체)</div>
            {address}
            <div>
                < Privacy />
                <div className="agree_box">
                    <input type="checkbox" id="agreeBtn" onClick={BtnClick} style={{marginRight:"10px"}}/>
                    <label for="agreeBtn">개인정보취급방침 동의합니다.</label>
                </div>
            </div>
            <div className="privacy_wrap">
                <div className="title_text">기본정보</div>
                <div className="Privacy_forms">
                    <div className="Privacy_form Privacy_groupname title_color">단체명</div>
                    <div className="Privacy_form Privacy_groupname_text">
                        <input type="text" onChange={(e) => setGroupName(e.target.value)}/>
                    </div>

                    <div className="Privacy_form Privacy_name title_color">담당자성명</div>
                    <div className="Privacy_form Privacy_name_text">
                        <input type="text" onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="Privacy_form Privacy_phone title_color">담당자연락처</div>
                    <div className="Privacy_form Privacy_phone_text">
                        <input type="text" onChange={(e) => setPhone(e.target.value)}/>
                    </div>

                    <div className="Privacy_form Privacy_position title_color">직위</div>
                    <div className="Privacy_form Privacy_position_text">
                        <input type="text" onChange={(e) => setPosition(e.target.value)}/>
                    </div>

                    <div className="Privacy_form Privacy_number title_color">담당자휴대전화</div>
                    <div className="Privacy_form Privacy_number_text">
                        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className="Privacy_form Privacy_email title_color">이메일</div>
                    <div className="Privacy_form Privacy_email_text">
                        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="Privacy_form Privacy_address title_color">주소</div>
                    <div className="Privacy_form Privacy_address_script">
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
                    <div className="Privacy_form Privacy_address_text">
                        <span className="text_margin">상세주소</span>
                        <input type="text" onChange={(e) => setAddres(e.target.value)}/>
                    </div>

                    <div className="Privacy_form Privacy_list title_color">참관객명단</div>
                    <div className="Privacy_form Privacy_list_text">
                        <input type="file"/>
                    </div>
                    <div className="Privacy_form Privacy_day title_color">참관예정일자</div>
                    <div className="Privacy_form Privacy_day_box">
                        <input onChange={ismeFunk} type="checkbox" />2021-10-14 (목)
                        <br/><input onChange={ismeFunks} type="checkbox" />2021-10-15 (금)
                        <br/><input onChange={ismeFunkss} type="checkbox" />2021-10-16 (토)
                    </div>
                </div>
            </div>
              <input type="submit" className="secces" onClick={()=> handleClick()} value="참관신청하기"/>
            <button className="failure" onClick={
            () => alert("메인화면으로 이동합니다.")}>
                <a href={props.webSiteLink}>
                취소하기
                </a>
            </button>
        </form>
        </div>
    )
}

export default Observe_group
