import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {getData} from './data';

const Selection = () => {

    const [correctness, setcorrectness] = useState("");
    const answer = getData.map((data) => (<li key={data.contents_detail_id}>{data.answer}</li>));

    const checkAnswer = (selected) =>{
        if(selected === answer){
            setcorrectness("正解です");
        } else {
            setcorrectness("不正解です");
        }
    }
    return (
        <div>
            <p>{correctness}</p>
            <Button variant="contained" onClick={checkAnswer(1)}>選択肢①</Button>
            <Button variant="contained" onClick={checkAnswer(2)}>選択肢②</Button>
            <Button variant="contained" onClick={checkAnswer(3)}>選択肢③</Button>
            <Button variant="contained" onClick={checkAnswer(4)}>選択肢④</Button>
        </div>
    );
}

export default Selection