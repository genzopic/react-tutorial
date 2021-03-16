import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from './const/languages';
//
function App() {
  // ステート
  const [tab, setTab] = useState('list');
  const [langs,setLangs] = useState(LANGUAGES);
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