import { useEffect, useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from './const/languages';
//
function App() {
  // ステート
  const [tab, setTab] = useState('list');
  const [langs,setLangs] = useState([]);
  // 第２引数にしていしたステートに変化（updating）があると、イベントが発生する.第二引数が[]からなら、moutingのみ呼ばれる
  useEffect(() => {
    console.log('App.js:useEffect');
    fetchLanguages();
  },[langs,tab])
  //
  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  }
  //
  const addLang = (lang) => {
    // スプレッドで追加
    setLangs([...langs,lang]);
    // タブをリストに切り替える
    setTab('list');
  }
  //
  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')} >リスト</li>
          <li onClick={() => setTab('form')} >フォーム</li>
        </ul>
      </header>
      <hr/>
      {
        // Formへ関数：addLangを渡して、Form側でここのaddLangを発火する
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}
//
export default App;