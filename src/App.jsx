import {useEffect, useState} from 'react'
import Card from "./components/Card";
import ButtonGroup from "./components/ButtonGroup";
import { shuffle, MODE } from "./components/helpers.js";

export default function App() {
    const [difficulty, setDifficulty] = useState(MODE[0])
    const [pokemon, setPokemon] = useState([]);
    const [clickedList, setClickedList] = useState([]);
    const [highScore, setHighScore] = useState(0)

    const api = `https://pokeapi.co/api/v2/pokemon?limit=${difficulty.number}`;

    useEffect(() => {
        getPokemon(api)
    }, [difficulty])

    const getPokemon = async (api) => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setPokemon(shuffle(data.results));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const _handleOnClick = (e) => {
        if(clickedList.includes(e)) {
            highScore < clickedList.length && setHighScore(clickedList.length)
            setClickedList([]);
        } else {
           setClickedList([...clickedList, e])
        }
        setPokemon(shuffle(pokemon))
    }
    const handleBtnClick = (value) => {
        setDifficulty(value)
    }

    return (
        <div className="w-screen h-screen">
            <div className="bg-purple-200 h-1/5 p-10 flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold underline">
                        Pokemon memory game
                    </h1>
                    <h3 className="text-base">
                        Get points by clicking on an image but don't click on any more than once!
                    </h3>
                    <h3 className="text-base">
                        {difficulty.title} mode: {difficulty.number} pokemon!
                    </h3>
                </div>
                <div className='bg-grey-200'>
                    <ButtonGroup handleBtnClick={handleBtnClick} options={MODE}/>
                    <h1 className="text-2xl  ">
                        Score: {clickedList.length}
                    </h1>
                    <h1 className="text-2xl  ">
                        High Score: {highScore}
                    </h1>
                </div>
            </div>
            <div className="bg-purple-200 h-auto p-10 grid grid-cols-5 gap-6">
                {pokemon
                    .filter((p,i) => i < 10)
                    .map((p) => {
                    return <Card key={p.name} pokemon={p} handleOnClick={_handleOnClick}/>
                })}
            </div>
        </div>
    )
}
