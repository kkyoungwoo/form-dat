import React, { useState,useCallback,useEffect } from 'react'
import './app.css';
import Agree from './content/Agree'
import Form from './content/Form'
import Observe_group from './observe/Observe_group'
import Observe_individual from './observe/Observe_individual'
import { Route,Switch,Link } from 'react-router-dom'

function App() {

  const webSiteLink = ("http://www.google.com")

  const [isMe,setIsMe] = useState(true)

  const handleClick = useCallback(()=>{
    isMe === true ? setIsMe(!true) : setIsMe(false)
  },[isMe])

  const mainPageIsMe = useCallback(()=>{
    setIsMe(true)
  },[isMe])

  return (
    <div className="App">
      <Link to="/" >
        <div className="maintext" onClick={
          mainPageIsMe
        }>온라인 참가신청</div>
      </Link>
      <div className={ isMe ? 'link_tree display_flex' : 'link_tree display_none' } >
        <Link to="/booth_form" className="event_box" onClick={
          handleClick
        }>
        참가업체 부스신청
        </Link>
        <Link to="/observe_group" className="event_box" onClick={
          handleClick
        }>
          참관객 단체 온라인 사전등록
        </Link>
        <Link to="/observe_individual" className="event_box" onClick={
          handleClick
        }>
          참관객 개인 온라인 사전등록
        </Link>
      </div>

      <Switch>
        <Route path="/form" render={() => <Form isMe={isMe} setIsMe={setIsMe} webSiteLink={webSiteLink} />}/>
        <Route path="/booth_form" render={() => <Agree isMe={isMe} setIsMe={setIsMe} webSiteLink={webSiteLink}/>}/>
        <Route path="/observe_group" render={() => <Observe_group isMe={isMe} setIsMe={setIsMe} webSiteLink={webSiteLink}/>}/>
        <Route path="/observe_individual" render={() => <Observe_individual isMe={isMe} setIsMe={setIsMe} webSiteLink={webSiteLink}/>}/>
      </Switch>
    </div>
  );
}

export default App;