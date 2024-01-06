import {useEffect, useState} from 'react'
import Card from "./components/Card";

const EASY = 20
const MEDIUM = 100
const HARD = 200
const BEAST = 1000



export default function App() {
    const [difficulty, setDifficulty] = useState(EASY)
    const [pokemon, setPokemon] = useState([]);
    const api = `https://pokeapi.co/api/v2/pokemon?limit=${difficulty}`;

    useEffect(() => {
        getPokemon(api)
    }, [])

    const getPokemon = async (api) => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setPokemon(shuffle(data.results));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    return (
        <div className="w-screen h-screen">
            <div className="bg-cyan-500	h-1/6 p-10">
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <h3 className="text-base">
                    Hello world!
                </h3>
            </div>
            <div className="h-auto p-10 grid grid-cols-5 gap-6">
                {pokemon
                    .filter((p,i) => i < 20)
                    .map((p) => {
                    return <Card key={p.name} pokemon={p}/>
                })}
            </div>
        </div>
    )
}
