
import {useState} from 'react'
import './codify.jsx.css'
import { Terminal } from 'react-feather';
export default function  Codify(props){
    const [show, setShow] = useState(false)
    return <div>
            <div className="df jcsb">
                <div>{props.code}</div>
                <button classNames="cp" onClick={()=>setShow(!show)}>
                    <Terminal className='w18px  h18px  stroke-gray700  color-red stroke-width1px stroke-linecap-round stroke-linejoin-round '/>
                </button>
            </div>
            {!!show && (
                <div>
                    {props.children}
                </div>
            )}          
        </div>
}


