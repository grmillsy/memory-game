import {useState} from "react";

const MODE = [
    {'Easy': 20},
    {'Medium': 100},
    {'Hard': 200},
    {'BEAST': 1000}
]
export default function ButtonGroup({handleBtnClick}) {
    const [selectedBtn, setSelectedBtn] = useState(MODE.EASY)

    const _handleBtnClick = (mode) => {
        setSelectedBtn(mode)
    }

    return(
        <div className="inline-flex bg-white rounded-lg shadow-sm">
            {MODE.map((m, i,) => {
                return (
                    <button type="button"
                            onClick={() => _handleBtnClick(m)}
                            className={`${selectedBtn === m? 'bg-blue-300 hover:bg-blue-300' : 'hover:bg-gray-50 bg-white'} py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none`} >
                        {Object.keys(m)}
                    </button>
                )
            })}
        </div>
    )
}