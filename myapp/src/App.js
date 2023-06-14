import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
// prop =>입력 return 값을 받아내기위한 input과 비슷 prop은 컴포넌트 사용하는 외부자 위함 state는 컴포넌트 만드는 내부자 위함
function Header(props) {
    return <header>
      <h1><a href="/" onClick={function(event){
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
}
function Nav(props) {
  const lis = [
    // <li><a href="/read/1">html</a></li>,
    // <li><a href="/read/2">css</a></li>,
    // <li><a href="/read/3">js</a></li>
  ]
  for(let i=0; i<props.topics.length; i++){
    let t=props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id)); 
      // 문자를 숫자로 변환 Number
    }}>{t.title}</a></li>)
  }


  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function App() {
  // const _mode = useState('WELCOME');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={()=> {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=> {
        setMode('READ');
        setId(_id);
      }}></Nav>
      {/* <Article title="Welcome" body="Hello, WEB"></Article> */}
      {/* /* <Article title="Hi" body="Hello, React"></Article> */}
      {content}
    </div>
  );
}

export default App;
