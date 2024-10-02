import { useState } from 'react';
import TextInput from "../components/TextInput";
import styles from "./Index.module.css"

export default function Index() {

    const [text, setText] = useState('');
    const maxLength = 125

    function onTextChange(event) {
        const text = event.target.value;
        if (text.length <= maxLength) {
            setText(text);
        }
    }

    const [tweetList, setTweetList] = useState([])

    function sendTweet(event) {
        setTweetList([...tweetList, text]);
    }

    return (
        <div>
            <h1 className={styles.pageTitle}>TreinaTweet</h1>
            <div className={styles.tweetContainer}>
                <img
                    src={'https://github.com/karython.png'}
                    className={styles.avatar}
                />
                <TextInput
                    placeholder={'O que está acontecendo?'}
                    maxLength={125}
                    value={text}
                    onChange={onTextChange}

                />
            </div>
            <div className={styles.buttonContainer}>
                <div>{text.length}/ {maxLength}</div>
                <button
                    onClick={sendTweet}
                    className={styles.postButtom}>
                    Tweetar</button>
            </div>
            <ul>
                {tweetList.map(tweet => {
                    return <li>{tweet}</li>
                })}

            </ul>
        </div>
    )
}