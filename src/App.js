import { useEffect, useState } from 'react';
import { getDatabase, push, ref, set,onChildAdded } from "firebase/database";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import './App.css';

function App() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleLogin = () =>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    setUser({name:result.user.displayName, email: result.user.email})
    console.log(token, user);

  }).catch((error) => {
    console.log(error);
  });
  }

  const [user, setUser] = useState('');
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState('');

  const db = getDatabase();
  const chatListRef = ref(db, 'chats');

  const updateHeight=()=>{
    const el = document.getElementById('chat');
    if(el){
      el.scrollTop = el.scrollHeight;
    }
  }

  useEffect(()=>{
    onChildAdded(chatListRef, (data) => {
      setChats(chats=>[...chats,data.val()])
      setTimeout(()=>{
        updateHeight()

      },100)
    });
  },[])

  const sendChat = () => {

    const chatRef = push(chatListRef);
    set(chatRef, {
      user, message: msg 
    });
    setMsg('');
  };
  return (
    <div>
      {user.email? null: <div>
        {/* <input
          type="text"
          placeholder="Enter user to start"
          onBlur={(e) => setUser(e.target.value)}
        ></input> */}
        <button onClick={e=>{googleLogin()}}>Google SignIn</button>
      </div>}
   { user.email? <div>
      <h3>User: {user.name}</h3>
      <div id="chat" className="chat-container">
        {chats.map((c,i) => (
          <div key={i} className={`container ${c.user.email === user.email ? 'me' : ''}`}>
            <p className="chatbox">
              <strong>{c.user.name}: </strong>
              <span>{c.message}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="btm">
        <input
          type="text"
          onInput={(e) => setMsg(e.target.value)}
          value={msg}
          placeholder="enter your chat"
        ></input>
        <button onClick={(e) => sendChat()}>Send</button>
      </div>
      </div> : null}
      </div>
  );
}

export default App;