import styled from "styled-components";
import { useEffect, useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from './const/languages';
import { withLoading } from "./hoc/with-loading";
import { Modal } from "./components/modal";
//
const Header = styled.header`
  display: flex;
  justify-content: space-between; 
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`
const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`
// 
function App({ data }) {
  // ステート
  const [tab, setTab] = useState('list');
  const [langs,setLangs] = useState(data);
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
      <Header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list' } onClick={() => setTab('list')} >リスト</HeaderLi>
          <HeaderLi focused={tab === 'form' } onClick={() => setTab('form')} >フォーム</HeaderLi>
        </HeaderUl>
      </Header>
      {
        // Formへ関数：addLangを渡して、Form側でここのaddLangを発火する
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}
//
export default withLoading(App,getLanguages);
