'use client'
import { useState } from 'react';
{/* // import {customColors} from '../ref/customColors' */}
import {customColors} from '../../node_modules/aliascss/lib/static/customColors.js'
import Aside from './partials/aside'




import './color.jsx.css'


 
export default function ColorRef({ children }) {
const [colors, setColors]=useState(customColors);
const [selected, setSelected]=useState("All");

  const colorsCato=['All','Primary','Success','Error','Warning','Gray','Indigo','Violet','Orange','Green','Blue','Moss','Teal','Cyan','purple',
                    'fuchsia','Pink','Rose','Yellow'];

     function handleClick(color){
      if(color==='All') {
        setSelected('All')
        setColors(customColors)
        return
      }
        let newColor={};
        Object.keys(customColors).map((key,index)=>{
          if(key.toLowerCase().includes(color.toLowerCase())){
            newColor[key]=customColors[key];
          }
      })
      setSelected(color)
      setColors(newColor)
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
     }                
  
  return (
    <div className="p-0px-32px mt-32px">
        <div className="bgc-2552552550d8 w-150px  pf @bae-df md-dn zi-1234 btm-0px r-32px x-shadow-xl mb-32px br-16px p-8px-16px b-1px-s-blue400">
          <select className="x-text-xl --fo-bn --fo-oln c-gray600 bgc-transparent" onChange={(e)=>handleClick(e.target.value)}>
          {[...colorsCato].map((key,i)=>{
            return <option key={i} defaultValue={key===selected} value={key} >{key}</option>
          })}
          </select>
        </div>
      
    <div   className=" df g-32px  xw-1280px  mla mra  _all-bsbb pr " style={{"--aside-width":"150px"}}>
     
      
     <div className='dn  md-df-i  fb--var--aside-width flex-shrink-0 t--var--aside-top   --sb-w5px --st-bgc-blue50 --stm-bgc-blue100 g8px   pst pr-16px h--var--height  oxh oya ' 
      style={{ "--aside-top":"calc(32px + var(--nextra-navbar-height))","--height":'calc(100vh - var(--nextra-navbar-height) - var(--nextra-menu-height))'}}>
          <Aside colorsCato={colorsCato} selected={selected} handleClick={handleClick} />
      </div>
      <div className="dif fdc"> 
        <h1 className="x-display-sm w-100p fwn pl-10px ">{selected + ' Colors'}</h1>
                  <i style={{'color':'gray','marginLeft':'auto'}}>Ref:<small style={{'textDecoration':'underline'}}>untitledui.com</small></i>

        <ul className=" df fww p0px ">
          {Object.keys(colors).map((key,i)=>{
        
            return (
              <li key={i} >
                <Color name={key} color={colors[key]} />
              </li>
            )
          }
        )}
        
                      
        </ul>
      </div>
      
      
    </div>
    </div>
  )
}
 


export  function Color(props) {
    const copy = async (col) => {
    await navigator.clipboard.writeText(col);
  }
  return (
    <div className=" fs-10px df cc  aic fdc jcc br-8px  p-10px md-m-10px md-g-8px" onClick={()=>copy(props.name)}  onDoubleClick={()=>copy(props.color)}>
            <div style={{background:props.color}} className="w-72px h-72px  br9px md-w-100px md-h-100px"></div>
            <span className="x-text-xs fw5" > {props.name}</span>
    </div>
  )
}
