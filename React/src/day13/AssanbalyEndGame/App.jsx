import Header from "./components/Header";
import "./App.css";
import WinBox from "./components/WinBox";
import FareWellBox from "./components/FareWellBox";
import LooseBox from "./components/LooseBox";
import Chips from "./components/Chips";
import Word from "./components/Word";
import KeyBoard from "./components/KeyBoard";
import GameBtn from "./components/GameBtn";
import languageData from "./languages.js";
import wordData from "./words.js";
import { useEffect, useState } from "react";

export default function App() {
    const [word, setWord] = useState((getRendomWord));
    const [guessedLatters, setGuessedLatters] = useState([]);
    const [farewellStr, setFarewellStr] = useState("Farewell ");
    const wrongCount = (guessedLatters.filter(latter => !word.includes(latter))).length;
    const wrongLetters = guessedLatters.filter(letter => !word.includes(letter));
    const uniqueLetters = Array.from(new Set(word.split("")));
    const isWin = uniqueLetters.every(letter => guessedLatters.includes(letter));
    function handleKeyBoard(latter) {
        setGuessedLatters(guessedLatters => (
            guessedLatters.includes(latter) ? guessedLatters : [...guessedLatters, latter]
        ))
    };
    function getRendomWord() {
        const word = wordData[Math.floor(Math.random() * wordData.length)];
        return word;
    }
    function handleNewGame() {
        setWord(getRendomWord());
        setFarewellStr("Farewell ");
        setGuessedLatters([]);
    }
    useEffect(() => {
        if (wrongLetters.length > 0) {
            const newLanguage = languageData[wrongLetters.length - 1]?.name;
            if (newLanguage) {
                setFarewellStr(prev =>
                    `${prev}${newLanguage}, `
                );
            }
        }
    }, [wrongLetters.length]);
    return (
        <main>
            <Header />
            {isWin && <WinBox />}
            {wrongCount === 8 && <LooseBox crtWord={word}/>}
            {wrongCount > 0 && !isWin && wrongCount < 8 && ( <FareWellBox farewellStr={farewellStr.replace(/,\s*$/, "") + " 🫡"} /> )}
            <Chips count={wrongCount} />
            <Word crtWord={word} latters={guessedLatters} />
            <KeyBoard handleKeys={handleKeyBoard} latters={guessedLatters} crtWord={word} isWin={isWin} wrongCount={wrongCount}/>
            {isWin || wrongCount === 8 ? <GameBtn getWord={handleNewGame} /> : null}
        </main>
    );
}
