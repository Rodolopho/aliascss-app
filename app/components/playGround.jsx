"use client"
import { Sandpack } from "@codesandbox/sandpack-react";
import { useState } from "react";
import './playGround.jsx.css'


export const PlayGrounds=()=>{
    const [toggle,setToggle]=useState(true);
    return(
        <div>
            <div className=" mb-12px flex-center g-12px _button[data-selected=true]-bgc-blue600 _button[@base-all-unset,br-4px,bgc-blue-300,--h-bgc-blue-800,c-fff,fw-6,p-6px-10px,x-text-sm]">
                <button data-selected={toggle?'true':'false'} className="" onClick={()=>setToggle(true)}>HTML</button>
                <button data-selected={toggle?'false':'true'} className="" onClick={()=>setToggle(false)}>React</button>
            </div>
            <div style={{display:toggle?'block':'none'}}>
                <PlayGround/>
            </div>
             <div style={{display:toggle?'none':'block'}}>
                <ReactPlayGround/>
            </div>
        </div>
        

    )
}

export const PlayGround = () => {
  const files = {
            "index.html":`<div class="bgc-primary600 c-fff p-30px-18px br-12px">
  <h1>Hello World</h1>
  <p>Welcome to AliasCSS</p>
 </div>

            `,

        };
    

  
  
  return (
    <Sandpack
      theme="light" 
      template="static"
      options={{
        
             showLineNumbers: true, // default - true
            showInlineErrors: true, // default - false
            wrapContent: true, // default - false
            editorHeight: 700, // default - 300  
             editorWidthPercentage: 60, // default - 50
             showNavigator: true,
             showPreview:true,
             copyContent:true,
              externalResources: 
              [
              "https://cdn.jsdelivr.net/npm/aliascss@latest/dist/aliascss.js",
              "https://cdn.jsdelivr.net/npm/alpinejs@latest/dist/cdn.min.js"
              ]
         }}
          
        

        files={files}
    />
  )  
}

export const ReactPlayGround = () => {
  const files = {};
    

  
  
  return (
    <Sandpack
      theme="light" 
       options={{
             showLineNumbers: true, // default - true
            showInlineErrors: true, // default - false
            wrapContent: true, // default - false
            editorHeight: 500, // default - 300  
             editorWidthPercentage: 60, // default - 50
             showNavigator: true,
             copyContent:true,
             allowScripts:true,
                externalResources: ["https://cdn.jsdelivr.net/npm/aliascss@latest/dist/aliascss.js"]
                }}
      files={{
        "/App.js": `export default function HelloACSS() {
  return (
    <div className="bgc-primary600 c-fff p-30px-18px br-12px">
        <h1 className="x-display-xl">Hello World</h1>
        <p className="x-text-xs">Welcome to AliasCSS</p>
    </div>
  )
}`}}
      
      template="react"
      
         

    />
  )  
}
