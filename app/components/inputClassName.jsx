import { useState } from 'react'
import './inputClassName.jsx.css'
import { Cpu } from 'react-feather';
export default function InputBox(props){
    const [term,setTerm]=useState('');
    const handleChange=(e)=>setTerm(e.target.value);

    return(
        <div>
            <form onSubmit={(e)=>props.handleSubmit(e,term)}>
                        <div className="d-f jc-sb g8px">
                            <div className="df aic --has(--focus)-bxs-0px-0px-1px-1px-blue-200 w-100p g8px p-8px-12px  br8px b-1px-s-gray300 shadow-xs">
                                <div className="df jcsb aic w-100p g8px  ">
                                    <input onChange={handleChange} className="ol-n b-n bgc-transparent --fo-oln --fo-bn   --fv-bn w100p x-text-sm fw-4 c-gray500 " id="acss-input" autoComplete="off" spellCheck="false" placeholder="Type ACSS classname/s and get its compiled CSS declaration e.g br5px" />
                                    <span className="df">
                                      
                                    </span>
                                </div>

                            </div>
                            <button className="flex-center p-8px-10px br-8px g-4px x-text-sm   b-1px-s-blue200 bgc-blue100 c-gray700 --is(_html[class~=dark])&-bgc-gray700 --is(_html[class~=dark])&-c-gray100 cp --h-bgc-blue300" id="acss-button" type="submit">
                                 <Cpu className='w18px  h18px stroke-gray700 --is(_html[class~=dark])&-stroke-gray100 stroke-width1px stroke-linecap-round stroke-linejoin-round fill-none'/> Compile
                            </button>
                        </div>
                    </form>
        </div>
    )
}