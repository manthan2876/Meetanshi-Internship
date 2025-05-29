// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import '../styles/MainContent.css';
import ImageBox from './ImageBox';
import InputBox from './InputBox';

function MainContent() {
    const [allmemes, setAllmemes] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllmemes(data.data.memes));
    }, []);
    const [meme, setMeme ] = useState({
        topText: "One does not simply",
        bottomText: "Walk into mordor",
        imgUrl: "https://i.imgflip.com/1bij.jpg"
    });
    function handlechange(e){
        const {value, name} = e.target;
        setMeme(meme => ({
            ...meme,
            [name]: value
        }))
    }
    function getRandomImg(){
        const index = Math.floor(Math.random() * allmemes.length);
        const imgLink = allmemes[index].url;
        setMeme(meme => ({
            ...meme,
            imgUrl: imgLink
        }))
    }
    return (
        <main className="main-content">
            <InputBox topText={meme.topText} bottomText={meme.bottomText} onInputChange={handlechange} handleImage={getRandomImg}/>
            <ImageBox {...meme}/>
        </main>
    );
}

export default MainContent;
