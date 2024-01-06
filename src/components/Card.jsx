import {useEffect, useState} from "react";

export default function Card({pokemon}) {
    const [poke, setPoke] = useState({abilities: [], image: '', stats: []});
    const {name, url} = pokemon
    useEffect(() => {
        getSinglePoke()
    }, [])

    const getSinglePoke = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPoke({abilities: data.abilities, image: data.sprites && data.sprites.front_default, stats: data.stats});
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4 text-center">
                    <div className="capitalize font-bold text-3xl mb-2 text-gray-800">{name}</div>
                </div>
                <img className="w-full" src={poke.image} alt="Sunset in the mountains" />
            </div>
        </>
    )
}