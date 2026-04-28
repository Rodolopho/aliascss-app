"use client"
import { Sandpack } from "@codesandbox/sandpack-react";
import './showCodeBox.jsx.css'


export const ShowCodeBox=({content,theme='light'})=>{
    return(
    <Sandpack
      theme={theme} 
       options={{
             showLineNumbers: true, // default - true
            showInlineErrors: true, // default - false
            wrapContent: true, // default - false
            editorHeight: 500, // default - 300  
             editorWidthPercentage: 60, // default - 50
            //  showNavigator: true,
            layout:console,
             copyContent:true,
             allowScripts:true,
                }}
      files={{
        "/component.jsx": `${content}`}}
      
      template="react"
      
    />
        

    )
}

