"use client"
import { useEffect, useRef, useState } from 'react'
import './staticClassNames.jsx.css'
import { Search } from 'react-feather';
import { staticClassNames } from '../../node_modules/aliascss/lib/index';
import { compileMdx } from 'nextra/compile'
import { MDXRemote } from 'nextra/mdx-remote'
 
export const classNames=staticClassNames;

export default function SearchStaticClassName(){
    const [classNames, setClassNames] = useState({});


    const handleChange=(e)=>{
        const value=e.target.value.trim();
        // if(value.length < 2) {setClassNames({});return;};

        let newCollection={};
        for (const cn in staticClassNames) {
            if(cn.toLowerCase().startsWith(value.toLowerCase()) || staticClassNames[cn].toLowerCase().includes(value.toLowerCase())){
                newCollection[cn]=staticClassNames[cn];
            }
        }
        
        setClassNames(newCollection);

    }
    
        return (
          <div className="df pr g8px w100p fdc ">
            <div className="df pr aic w100fr  g16px p8px-12px bgc-gray100 --is(_html.dark)&-bgc-gray900 --is(_html.dark)&-b-1px-s-gray50 br8px g8px b1px-s-gray300   ">
              <div className="df  aic w100p g12px text-lg oya">
                <span className="df">
                  <Search className="w18px  h18px stroke-gray400 stroke-width2px stroke-linecap-round stroke-linejoin-round fill-none" />
                </span>

                <input
                  onChange={handleChange}
                  className="oln  bn --fv-bxsn c-gray --is(_html.dark)&-c-gray-25 bgc-transparent text-md w100p "
                  placeholder="Type any style eg display:none, display, ...any key word"
                />
              </div>
            </div>

            {!!Object.keys(classNames).length && (
              <div className=" zi12345 b1px-s-gray300 w100p p8px-12px l0px t100p bgc-gray200 --is(_html.dark)&-bgc-gray-900 xh60vh  mw320px oya shadow-md mt2px br8px">
                <ul className="p0px m0px lsn  text-md _li-nc-2n-bgc-gray100">
                  {Object.keys(classNames).map((key, i) => (
                    <li className="df aic jcsb p8px-12px  w100p" key={i}>
                      <div className="df  fdc w100p  ">
                        <div className="c-blue700 --is(_html.dark)&-c-gray-50-i text-sm fw5 asfe ">
                          {classNames[key] }
                        </div>
                        <div className="c-gray700 --is(_html.dark)&-c-gray-50 fwb text-sm">
                          {"." + key}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

}

function makeTablesOfClassNames(cns){
    <MDXRemote
  compiledSource={
    compileMdx('|classname|Compiled to|'+ `${
        Object.keys(cns).map((key,i)=>(
            `\n|${key}|${key[i]}|`
    
                ))}
                }`)
}
//   components={{ MyComponent: () => <div>My Component</div> }}
//   scope={{ myVariable: content }}
/>
}