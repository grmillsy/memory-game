import {useState} from "react";

const MODE = {
    'EASY': 20,
    'MEDIUM': 100,
    'HARD': 200,
    'BEAST': 1000
}

export default function ButtonGroup({handleBtnClick}) {
    const [selectedBtn, setSelectedBtn] = useState(MODE.EASY)

    const _handleBtnClick = (mode) => {
        setSelectedBtn(mode)
    }
return(
    <div className="inline-flex bg-white rounded-lg shadow-sm">
        <button type="button"
                onClick={() => _handleBtnClick(MODE.EASY)}
                className={`${selectedBtn === MODE.EASY ? 'bg-blue-300 hover:bg-blue-300' : 'hover:bg-gray-50 bg-white'} py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none`} >
            Easy
        </button>
        <button type="button"
                onClick={() => _handleBtnClick(MODE.MEDIUM)}
                className={`${selectedBtn === MODE.MEDIUM ? 'bg-blue-300 hover:bg-blue-300' : 'hover:bg-gray-50 bg-white'} py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none`} >
            Medium
        </button>
        <button type="button"
                onClick={() => _handleBtnClick(MODE.HARD)}
                className={`${selectedBtn === MODE.HARD ? 'bg-blue-300 hover:bg-blue-300' : 'hover:bg-gray-50 bg-white'} py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none`} >
            Hard
        </button>
        <button type="button"
                onClick={() => _handleBtnClick(MODE.BEAST)}
                className={`${selectedBtn === MODE.BEAST ? 'bg-blue-300 hover:bg-blue-300' : 'hover:bg-gray-50 bg-white'} py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none`} >
            BEAST
        </button>
    </div>

    )
}