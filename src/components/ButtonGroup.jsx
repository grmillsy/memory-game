import {useState} from "react";


export default function ButtonGroup({handleBtnClick, options}) {
    const [selectedBtn, setSelectedBtn] = useState(options[0])

    const _handleBtnClick = (mode) => {
        setSelectedBtn(mode)
        handleBtnClick(mode)
    }

    return(
        <div className="inline-flex bg-white rounded-lg shadow-sm">
            {options.map((m, i,) => {
                return (
                    <button
                        key={i}
                        type="button"
                        onClick={() => _handleBtnClick(m)}
                        className={`${selectedBtn === m? 'bg-blue-300 hover:bg-blue-300' : 'hover:bg-gray-50 bg-white'} py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none`} >
                        {m.title}
                    </button>
                )
            })}
        </div>
    )
}