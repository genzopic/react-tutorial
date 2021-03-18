// import
import styled from "styled-components";
import { useState } from "react"
import { Button } from "./components/button";
import { TabBodyContainer } from "./components/tab-body-container";
import { FormModal } from "./FormModal";

// スタイル
const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`
const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black;
`
const ButtonContainer = styled.div`
    margin-top: 24px;
`
// Button を拡張してスタイルを設定
const FormButton = styled(Button)`
    width: 120px;
`
//
export const Form = ({ onAddLang }) => {
    // ステート
    const [text,setText] = useState('');
    const [showModal,setShowModal] = useState(false);
    //
    const submitForm = (event) => {
        event.preventDefault();
        setShowModal(true);
    }
    //
    return (
        <TabBodyContainer title="新しい言語の追加">
            <form onSubmit={submitForm}>
                <div>
                    <Label>言語</Label>
                    <Input 
                    type="text" 
                    value={text} 
                    // 変更されたらステートで保持する
                    onChange={(e) => setText(e.target.value)} />
                </div>
                <ButtonContainer>
                    <FormButton>追加</FormButton>
                </ButtonContainer>
            </form>
            {
                 showModal && 
                 <FormModal
                    confirm={() => onAddLang(text)}
                    cancel={() => setShowModal(false)}
                 />
            }
        </TabBodyContainer>
    )
}