import React, { useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../common/plus.css'
import './form.css'

function Form(props) {

    const history = useHistory();

    useEffect(() => {props.setIsMe(false)})

    //회사명
    const [company,setCompany] = useState("")
    //대표자명
    const [boss,setBoss] = useState("")
    //주소
    const [address,setAddress] = useState("")
    //담당자명
    const [compmanager,setcompManager] = useState("")
    //부서(직위)
    const [componyPosition,setcomponyPosition] = useState("")
    //연락처
    const [phone,setPhone] = useState("")
    //E-mail
    const [email,setEmail] = useState("")
    //홈페이지 주소
    const [webSite,setWebSite] = useState("")

    //참가전시분야
    const [field,setField] = useState("")

    //기타
    const [fildetc,setFildetc] = useState("")

    //주요전시품목
    const [item,setItem] = useState("")
    //상호명(현수막)
    const [banner,setBanner] = useState("")
    //사업자등록번호
    const [compNumber,setCompNumber] = useState("")

    //독립부스
    const [phBoothOne,setPhBoothOne] = useState(0)
    //기본부스
    const [phBoothTwo,setPhBoothTwo] = useState(0)
    //프리미엄부스
    const [phBoothThree,setPhBoothThree] = useState(0)
    //단상220v
    const [phEvOne,setPhEvOne] = useState(0)
    //삼상220v
    const [phEvTwo,setEvTwo] = useState(0)
    //삼상380v
    const [PhEvThree,setPhEvThree] = useState(0)
    //국내
    const [phKo,setPhKo] = useState(0)
    //국제
    const [phGlo,setPhGlo] = useState(0)
    //급배수
    const [phWater,setPhWater] = useState(0)
    //압축공기
    const [phAir,setPhAir] = useState(0)
    //랜
    const [phLan,setPhLan] = useState(0)
    //소계
    const [phSubTotal,setPhSubTotal] = useState(0)
    //부가세
    const [phVat,setPhVat] = useState(0)
    //합계
    const [phTotal,setPhTotal] = useState(0)

    const TotalPay = phEvOne+phEvTwo+PhEvThree+phKo+phGlo+phWater+phAir+phLan

    //마지막 기타사항
    const [boothEtc,setBoothEtc] = useState("")

    //출입증 신청
    const [boothPlus,setBoothPlus] = useState([0])

    //신청인 정보
    const [plusNum,setPlusNum] = useState([1,2,3,4,5,6,7,8,9,10])
    const [plusName,setPlusName] = useState()
    const [plusPosition,setPlusPosition] = useState()
    const [plusPhoneNum,setPlusPhoneNum] = useState()
    const [plusText,setPlusText] = useState()

    const plusMambers = useCallback(
        () => {
            const array = [...plusNum]
            array.push(Number(plusNum[plusNum.length -1 ])+1)
            setPlusNum(array)
            console.log(plusNum)
        },
        [plusNum])
        
        const handleDelete = (idx) => {
            const Delet = plusNum.filter((_,idxx) => idx !== idxx)
            setPlusNum(Delet)
        }

        const [firstCheck,setFirstCheck] = useState("")
        const [secoundCheck,setSecoundCheck] = useState("")
        const [thardCheck,setThardCheck] = useState("")
        const [FoursCheck,setFoursCheck] = useState("")

        const [firstCheckBtn,setFirstCheckBtn] = useState(true)
        const [secoundCheckBtn,setSecoundCheckBtn] = useState(true)
        const [thardCheckBtn,setThardCheckBtn] = useState(true)
        const [FoursCheckBtn,setFoursCheckBtn] = useState(true)

        const firstFunk = useCallback(() =>{
            setFirstCheckBtn(!firstCheckBtn)
            firstCheckBtn ? setFirstCheck("산림소재산업(목재,목조건축,목제품,임산물)  ") : setFirstCheck("")
        },[firstCheckBtn])

        const secoundFunk = useCallback(() =>{
            setSecoundCheckBtn(!secoundCheckBtn)
            secoundCheckBtn ? setSecoundCheck("신재생 에너지(바이오 매스, 펠릿)  ") : setSecoundCheck("")
        },[secoundCheckBtn])

        const thardFunk = useCallback(() =>{
            setThardCheckBtn(!thardCheckBtn)
            thardCheckBtn ? setThardCheck("친환경(R&D,산지관리,환경,스마트 모빌리티)  ") : setThardCheck("")
        },[thardCheckBtn])

        const FoursFunk = useCallback(() =>{
            setFoursCheckBtn(!FoursCheckBtn)
            FoursCheckBtn ? setFoursCheck("여가·레포츠(숲 체험, 산림레포츠)  ") : setFoursCheck("")
        },[FoursCheckBtn])



    useEffect(()=>{
        setPhSubTotal(TotalPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        const numberTotalPay = (TotalPay * 10 / 100)
        setPhVat(numberTotalPay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        const totalpay = phEvOne+phEvTwo+PhEvThree+phKo+phGlo+phWater+phAir+phLan + (phEvOne+phEvTwo+PhEvThree+phKo+phGlo+phWater+phAir+phLan) /10
        setPhTotal(totalpay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        setField(firstCheck+" , "+secoundCheck+" , "+thardCheck+" , "+FoursCheck)
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_kjop294",
            "template_9srge3e",
            e.target,
            "user_wjFKBm1HwlcURiZKvOyRr"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert('정상적으로 접수되었습니다.')
              history.push("/sessec")
            },
            (error) => {
              console.log(error.text);
            }
          );
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
        <div className="form_wrap contact-form">
            <form enctype="multipart/form-data" method="post" className="contact-form" onSubmit={handleSubmit}>
                <input className="displaynone" type="text" name="contact_number" />

                <input className="displaynone" type="text" name="company" value={company} />
                <input className="displaynone" type="text" name="boss" value={boss} />
                <input className="displaynone" type="text" name="address" value={address} />
                <input className="displaynone" type="text" name="compmanager" value={compmanager} />
                <input className="displaynone" type="text" name="componyPosition" value={componyPosition} />
                <input className="displaynone" type="text" name="phone" value={phone} />
                <input className="displaynone" type="text" name="email" value={email} />
                <input className="displaynone" type="text" name="webSite" value={webSite} />
                <input className="displaynone" type="text" name="field" value={field} />
                <input className="displaynone" type="text" name="fildetc" value={fildetc} />
                <input className="displaynone" type="text" name="item" value={item} />
                <input className="displaynone" type="text" name="banner" value={banner} />
                <input className="displaynone" type="text" name="compNumber" value={compNumber} />
                <input className="displaynone" type="text" name="phBoothOne" value={phBoothOne} />
                <input className="displaynone" type="text" name="phBoothTwo" value={phBoothTwo} />
                <input className="displaynone" type="text" name="phBoothThree" value={phBoothThree} />
                <input className="displaynone" type="text" name="phEvOne" value={phEvOne} />
                <input className="displaynone" type="text" name="phEvTwo" value={phEvTwo} />
                <input className="displaynone" type="text" name="PhEvThree" value={PhEvThree} />
                <input className="displaynone" type="text" name="phKo" value={phKo} />
                <input className="displaynone" type="text" name="phGlo" value={phGlo} />
                <input className="displaynone" type="text" name="phWater" value={phWater} />
                <input className="displaynone" type="text" name="phAir" value={phAir} />
                <input className="displaynone" type="text" name="phLan" value={phLan} />
                <input className="displaynone" type="text" name="phSubTotal" value={phSubTotal} />
                <input className="displaynone" type="text" name="phVat" value={phVat} />
                <input className="displaynone" type="text" name="phTotal" value={phTotal} />
                <input className="displaynone" type="text" name="boothEtc" value={boothEtc} />

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

            <nav className="title_text">주최측에서 제공하는 <span>[참가업체 메뉴얼]</span>을 반드시 확인하신 후 참가 신청해주시기 바랍니다.</nav>
            <div className="company_form">
                <div className="form company main_color">회사명</div>
                <div className="form company_text">
                    <input type="text" onChange={(e)=> setCompany(e.target.value)}/>
                </div>
                <div className="form boss main_color">대표자명</div>
                <div className="form boss_text">
                    <input type="text" onChange={(e)=> setBoss(e.target.value)}/>
                </div>
                <div className="form address main_color">주소</div>
                <div className="form address_text">
                    <input type="text" onChange={(e)=> setAddress(e.target.value)} style={{width:"60%"}}/>
                </div>
                <div className="form manager main_color">담당자명</div>
                <div className="form manager_text">
                    <input type="text" onChange={(e)=> setcompManager(e.target.value)}/>
                </div>
                <div className="form compony_position main_color">부서(직위)</div>
                <div className="form compony_position_text">
                    <input type="text" onChange={(e)=> setcomponyPosition(e.target.value)}/>
                </div>
                <div className="form phone main_color">연락처</div>
                <div className="form phone_text">
                    <input type="text" onChange={(e)=> setPhone(e.target.value)}/>
                </div>
                <div className="form email main_color">E-mail</div>
                <div className="form email_text">
                    <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="form website main_color">홈페이지 주소</div>
                <div className="form website_text">
                    <input type="text" onChange={(e)=> setWebSite(e.target.value)}/>
                </div>
                <div className="form Field main_color">참가 전시 분야</div>
                <div className="form Field_text">
                    <input type="checkbox" id="firstFunk"onChange={firstFunk}/>
                    <label for="firstFunk"><span className="spanright">산림소재산업(목재,목조건축,목제품,임산물)</span></label>
                    <input type="checkbox" id="secoundFunk" onChange={secoundFunk}/>
                    <label for="secoundFunk">신재생 에너지(바이오 매스, 펠릿)</label><br />
                    <input type="checkbox" id="thardFunk" onChange={thardFunk}/>
                    <span className="spanright"><label for="thardFunk">친환경(R&D,산지관리,환경,스마트 모빌리티)</label></span>
                    <input type="checkbox" id="FoursFunk" onChange={FoursFunk}/>
                    <label for="FoursFunk">여가·레포츠(숲 체험, 산림레포츠)</label>
                    <br />
                    <span>기　  타 : </span><input className="fild_etc" type="text" style={{width:"79.5%"}} onChange={(e)=> setFildetc(e.target.value)}/>
                </div>
                <div className="form item main_color">주요 전시품목</div>
                <div className="form item_text">
                    <input type="text" style={{width:"90%"}} onChange={(e)=> setItem(e.target.value)}/>
                </div>
                <div className="form banner main_color">상호명(현수막)</div>
                <div className="form banner_text">
                    <input type="text" onChange={(e)=> setBanner(e.target.value)} placeholder=" 띄어쓰기 및 오타에 유의하시길 바랍니다" style={{width:"90%"}}/>
                </div>
            </div>
            <div className="business_Registration">
                <div className="Registration number title_color">사업자등록번호(*)</div>
                <div className="Registration number_input">
                    <input type="text" onChange={(e)=> setCompNumber(e.target.value)}/>
                </div>
                <div className="Registration file title_color">사업자등록증첨부</div>
                <div className="Registration file_input">
                <input type="file" id="my_file"name="my_file" accept=".jpg, .png, .jpeg" style={{width:"55%"}}/> <span style={{fontSize:"13px",marginLeft:"15px"}}> 500kb 미만으로 첨부해주세요.</span>
                </div>
            </div>
            <div className="title_text">부스신청</div>
            <div className="application">
                <div className="booth division title_color">구분</div>
                <div className="booth quantity title_color">신청내역(수량)</div>
                <div className="booth unit_price title_color">단가(VAT별도))</div>
                <div className="booth price title_color">금액</div>
                
                <div className="booth boothname title_color">부스</div>
                <div className="booth independent title_color">독립부스(면적만 제공, 3m x 3m)</div>
                <div className="booth independent_ea">
                    <input type="number" min="0" onChange={(e)=> setPhBoothOne(e.target.value)}/>개
                </div>
                <div className="booth independent_ea_support">주최측 지원</div>
                <div className="booth independent_ea_support_total" >
                    <input type="text" placeholder="0" style={{pointerEvents: "none"}}/> 원
                </div>
                <div className="booth nomal title_color">기본(조립)부스(옥타늄, 3m x 3m)</div>
                <div className="booth nomal_ea">
                    <input type="number" min="0" onChange={(e)=> setPhBoothTwo(e.target.value)}/>개
                </div>
                <div className="booth nomal_ea_support">주최측 지원</div>
                <div className="booth nomal_ea_support_total">
                    <input type="text" placeholder="0" style={{pointerEvents: "none"}}/> 원
                </div>
                <div className="booth premium title_color">프리미엄부스(6m x 9m)</div>
                <div className="booth premium_ea">
                    <input type="number" min="0" onChange={(e)=> setPhBoothThree(e.target.value)}/>개
                </div>
                <div className="booth premium_ea_support">비용 별도 협의(신청 후)</div>
                <div className="booth premium_ea_support_total">
                    <input type="text" placeholder="0" style={{pointerEvents: "none"}}/> 원
                </div>

                <div className="booth elec title_color">전기</div>
                <div className="booth one_phase title_color">단상220V(60Hz)</div>
                <div className="booth one_phase_kw" >
                    <input type="number" min="0" onChange={(e)=> setPhEvOne(Number(e.target.value)*50000)}/>KW
                </div>
                <div className="booth one_phase_kw_won">50,000원</div>
                <div className="booth one_phase_kw_total">
                    {(phEvOne.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}원
                </div>
                <div className="booth two_phase title_color">삼상220V(60Hz)</div>
                <div className="booth two_phase_kw">
                    <input type="number" min="0" onChange={(e)=> setEvTwo(Number(e.target.value)*50000)}/>KW
                </div>
                <div className="booth two_phase_kw_won">50,000원</div>
                <div className="booth two_phase_kw_total">
                    {(phEvTwo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}원
                </div>
                <div className="booth three_phase title_color">삼상380V(60Hz)</div>
                <div className="booth three_phase_kw">
                    <input type="number" min="0" onChange={(e)=> setPhEvThree(Number(e.target.value)*50000)}/>KW
                </div>
                <div className="booth three_phase_kw_won">50,000원</div>
                <div className="booth three_phase_kw_total">
                    {(PhEvThree.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}원
                </div>


                <div className="booth tell title_color">전화</div>
                <div className="booth ko title_color">국내</div>
                <div className="booth ko_unit">
                    <input type="number" min="0" onChange={(e)=> setPhKo(Number(e.target.value)*90000)}/>대
                </div>
                <div className="booth ko_unit_won">90,000</div>
                <div className="booth ko_unit_total">
                    {(phKo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}원
                </div>
                <div className="booth global title_color">국제</div>
                <div className="booth global_unit">
                    <input type="number" min="0" onChange={(e)=> setPhGlo(Number(e.target.value)*170000)}/>대
                </div>
                <div className="booth global_unit_won">170,000</div>
                <div className="booth global_unit_total">
                    {(phGlo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}원
                </div>

                <div className="booth water title_color sub_color">급배수</div>
                <div className="booth water_won">150,000원</div>
                <div className="booth water_place">
                    <input type="number" min="0" onChange={(e)=> setPhWater(Number(e.target.value)*150000)}/>개소
                </div>
                <div className="booth water_place_total">
                    {(phWater.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}원
                </div>
                <div className="booth air title_color sub_color">압축공기</div>
                <div className="booth air_won">200,000원</div>
                <div className="booth air_place">
                    <input type="number" min="0" onChange={(e)=> setPhAir(Number(e.target.value)*200000)}/>개소
                </div>
                <div className="booth air_place_total">
                    {(phAir.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}원
                </div>
                <div className="booth lan title_color sub_color">LAN</div>
                <div className="booth lan_port">
                    <input type="number" min="0" onChange={(e)=> setPhLan(Number(e.target.value)*150000)}/>PORT
                </div>
                <div className="booth lan_port_won">150,000원</div>
                <div className="booth lan_port_total">
                    {(phLan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}원
                </div>

                <div className="booth subtotal title_color sub_color">소계</div>
                <div className="booth subtotal_total">
                    {phSubTotal}원
                </div>
                <div className="booth vat title_color sub_color">부가가치세</div>
                <div className="booth vat_total">
                    {phVat}원
                </div>
                <div className="booth total title_color sub_color">합계</div>
                <div className="booth total_end">
                    {phTotal}원
                </div>
                <div className="booth atc title_color sub_color">기타</div>
                <div className="booth atc_text">
                    <input type="text" onChange={(e) => setBoothEtc(e.target.value)}style={{width:"90%"}} placeholder="위 부가항목 외 필요한 품목을 작성해주세요."/>
                </div>
            </div>
            <div>
            <div className="plus_wrap">
                <div className="plus_header">
                    <div className="plus_header_warp">
                        <div className="header_left">
                            <div className="header_left_text">· 출입증신청</div>
                            {/*<div className="header_left_btn" onClick={plusMambers}>추가</div>*/}
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
                                    <div key={item} className={idx}>{idx + 1}</div>
                                )
                            })}
                        </div>
                        <div className="plus_table">
                            <h4>성명</h4>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name0(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name1(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name2(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name3(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name4(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name5(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name6(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name7(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name8(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_name9(e.target.value)}}/>
                            </div>
                            
                        </div>
                        <div className="plus_table">
                            <h4>직함</h4>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p0(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p1(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p2(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p3(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p4(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p5(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p6(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p7(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p8(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_p9(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="plus_table">
                            <h4>연락처</h4>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone0(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone1(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone2(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone3(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone4(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone5(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone6(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone7(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone8(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setPlus_phone9(e.target.value)}}/>
                            </div>
                        </div >
                        <div className="plus_table">
                            <h4>비고</h4>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n0(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n1(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n2(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n3(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n4(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n5(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n6(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n7(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n8(e.target.value)}}/>
                            </div>
                            <div>
                                <input type="text" onChange={(e) => {setpplus_n9(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="plus_table">
                            <h4>-</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <input type="submit" className="submit_btn" value="참가신청" />
        </form>
        </div>
    )
}

export default Form
