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
        history.push("/sessec")
    }
    function handleClick() {
        agreeBtn ? agreeBtnClick() : alert('개인정보 취급방침에 동의해주세요')
      }
    const [agreeBtn,setAgreeBtn] = useState(false)


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
    const [emails,setEmails] = useState("")
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

    const [pathLink,setPathLink] = useState("/")
    const [failurePath,setFailurePath] = useState("/")

    const BtnClick = useCallback(()=>{
        setAgreeBtn(!agreeBtn)
    },[agreeBtn])

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_kjop294",
          "template_drnj6df",
          e.target,
          "user_wjFKBm1HwlcURiZKvOyRr"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

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
return (
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input className="displaynone" type="hidden" name="contact_number" />

                <input className="displaynone" type="groupName" name="groupName" value={groupName} />
                <input className="displaynone" type="name" name="name" value={name} />
                <input className="displaynone" type="phone" name="phone" value={phone} />
                <input className="displaynone" type="position" name="position" value={position} />
                <input className="displaynone" type="number" name="number" value={number} />
                <input className="displaynone" type="emails" name="emails" value={emails} />
                <input className="displaynone" type="fullLookAddress" name="fullLookAddress" value={fullLookAddress} />
                <input className="displaynone" type="address" name="address" value={address} />
                <input className="displaynone" type="list" name="list" value={list} />
                <input className="displaynone" type="day" name="day" value={day+days+dayss} />

                <input className="displaynone" type="plus_name0" name="plus_name0" value={plus_p0} />
                <input className="displaynone" type="plus_name1" name="plus_name1" value={plus_p1} />
                <input className="displaynone" type="plus_name2" name="plus_name2" value={plus_p2} />
                <input className="displaynone" type="plus_name3" name="plus_name3" value={plus_p3} />
                <input className="displaynone" type="plus_name4" name="plus_name4" value={plus_p4} />
                <input className="displaynone" type="plus_name5" name="plus_name5" value={plus_p5} />
                <input className="displaynone" type="plus_name6" name="plus_name6" value={plus_p6} />
                <input className="displaynone" type="plus_name7" name="plus_name7" value={plus_p7} />
                <input className="displaynone" type="plus_name8" name="plus_name8" value={plus_p8} />
                <input className="displaynone" type="plus_name9" name="plus_name9" value={plus_p9} />

                <input className="displaynone" type="plus_name0" name="plus_name0ay" value={plus_name0} />
                <input className="displaynone" type="plus_name1" name="plus_name1ay" value={plus_name1} />
                <input className="displaynone" type="plus_name2" name="plus_name2ay" value={plus_name2} />
                <input className="displaynone" type="plus_name3" name="plus_name3ay" value={plus_name3} />
                <input className="displaynone" type="plus_name4" name="plus_name4ay" value={plus_name4} />
                <input className="displaynone" type="plus_name5" name="plus_name5ay" value={plus_name5} />
                <input className="displaynone" type="plus_name6" name="plus_name6ay" value={plus_name6} />
                <input className="displaynone" type="plus_name7" name="plus_name7ay" value={plus_name7} />
                <input className="displaynone" type="plus_name8" name="plus_name8ay" value={plus_name8} />
                <input className="displaynone" type="plus_name9" name="plus_name9ay" value={plus_name9} />

           
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
                        <input type="text" onChange={(e) => setEmails(e.target.value)}/>
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
                        <span className="text_margin" >상세주소</span>
                        <input type="text" onChange={(e) => setAddress(e.target.value)} style={{width:"60%"}}/>
                    </div>

                    <div className="Privacy_form Privacy_list title_color">참관객명단</div>
                    <div className="Privacy_form Privacy_list_text">
                    <input type="file" id="my_file"name="my_file" accept=".jpg, .png, .jpeg"/> <span style={{fontSize:"13px", marginLeft:"20px"}}>500kb 미만으로 첨부해주세요.</span>
                      <a href="https://drive.google.com/file/d/1wsXJuRdBjWo0BQm8BVdpK7u-6yn2Z35W/view?usp=sharing" target="_blank">
                        <span style={{borderRadius: "5px",
                              backgroundImage: "linear-gradient(to top, rgb(207, 207, 207) 16%, rgb(252, 252, 252) 79%); ",
                              padding: "3px",
                              border: "1px solid #000",
                              color: "black",
                              textDecoration: "none",marginLeft:"30px", padding:"10px 10px 10px"}}>양식 다운로드</span>
                      </a>
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
            {/*<button className="failure" onClick={
            () => alert("메인화면으로 이동합니다.")}>
                <a href={props.webSiteLink}>
                취소하기
                </a>
            </button>*/}
        </form>
        
        </div>
    )
}

export default Observe_group
