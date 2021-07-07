import React, { useState,useCallback,useEffect } from 'react'
import './app.css';
import Agree from './content/Agree'
import Form from './content/Form'
import Observe_group from './observe/Observe_group'
import Observe_individual from './observe/Observe_individual'
import { Route,Switch,Link } from 'react-router-dom'
import Sessec from './Sessec';

function App() {

  const webSiteLink = ("http://www.google.com")

  const [isMe,setIsMe] = useState(true)

  const handleClick = useCallback(()=>{
    isMe === true ? setIsMe(!true) : setIsMe(false)
  },[isMe])

    const [mainText,setMainText] = useState("온라인 참가신청")

  const booth = useCallback(()=>{
    setMainText("온라인 참가신청")
  },[mainText])

  const individual = useCallback(()=>{
    setMainText("참관객 온라인 사전등록")
  },[mainText])

  const group = useCallback(()=>{
    setMainText("참관객 온라인 사전등록")
  },[mainText])



  return (
    <div className="App">
      <div>
        <div className="maintext">{mainText}</div>
      </div>
      <div className={ isMe ? 'link_tree display_flex' : 'link_tree display_none' } >
        <Link to="/booth_form" className="event_box" onClick={
          handleClick,booth
        }>
        참가업체 부스신청
        </Link>
        <Link to="/observe_group" className="event_box" onClick={
          handleClick,group
        }>
          참관객 단체 온라인 사전등록
        </Link>
        <Link to="/observe_individual" className="event_box" onClick={
          handleClick,individual
        }>
          참관객 개인 온라인 사전등록
        </Link>
      </div>

      <Switch>
        
        <Route path="/form" render={() => <Form isMe={isMe} setIsMe={setIsMe} webSiteLink={webSiteLink} />}/>
        <Route path="/booth_form" render={() => <Agree isMe={isMe} setIsMe={setIsMe} webSiteLink={webSiteLink}/>}/>
        <Route path="/observe_group" render={() => <Observe_group isMe={isMe} setIsMe={setIsMe} webSiteLink={webSiteLink}/>}/>
        <Route path="/observe_individual" render={() => <Observe_individual isMe={isMe} setIsMe={setIsMe} webSiteLink={webSiteLink}/>}/>
        <Route path="/sessec" render={() => <Sessec isMe={isMe} setIsMe={setIsMe}/>} exact />
      </Switch>
    </div>
  );
}

export default App;