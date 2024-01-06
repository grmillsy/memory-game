import {useEffect, useState} from "react";

export default function Card({pokemon, handleOnClick}) {
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
            <div onClick={() => handleOnClick(name)} className="cursor-pointer bg-white max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
                <img className="w-full" src={poke.image} alt="Sunset in the mountains" />
                <div className="px-6 py-4 text-center">
                    <div className="capitalize font-bold text-3xl mb-2 text-gray-800">{name}</div>
                </div>
            </div>
        </>
    )
}