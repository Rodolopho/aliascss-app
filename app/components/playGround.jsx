"use client"
import { Sandpack } from "@codesandbox/sandpack-react";
import { useState } from "react";
import './playGround.jsx.css'
import { useEffect } from "react";



export const PlayGrounds=()=>{
    const [toggle,setToggle]=useState(true);
    const [theme,setTheme]=useState('light');
    const ThemeSwitch=useEffect(()=>{
      const isDark = document.documentElement.classList.contains("dark");

      // const getIsDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDark ? 'dark' : 'light');
 
    },[]);

    useEffect(() => {
      // 1. Target the <html> element
      const htmlElement = document.documentElement;

      // 2. Define the callback function to run on changes
      const callback = (mutationsList) => {
        for (const mutation of mutationsList) {
          // Check if the modified attribute is the 'class' attribute
          if (mutation.attributeName === "class") {
      

            // Execute your theme change logic here
            const isDark = document.documentElement.classList.contains("dark");
            // const getIsDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(isDark ? "dark" : "light");
          }
        }
      };

      // 3. Create the observer instance
      const observer = new MutationObserver(callback);

      // 4. Configure to look specifically for attribute changes on 'class'
      observer.observe(htmlElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      // 5. Clean up the observer when the component unmounts
      return () => observer.disconnect();
    }, []);
    return (
      <div>
        <div className=" mb-12px flex-center g-12px _button[data-selected=true]-bgc-blue600 _button[@base-all-unset,br-4px,bgc-blue-300,--h-bgc-blue-800,c-fff,fw-6,p-6px-10px,x-text-sm]">
          <button
            data-selected={toggle ? "true" : "false"}
            className=""
            onClick={() => setToggle(true)}
          >
            HTML
          </button>
          <button
            data-selected={toggle ? "false" : "true"}
            className=""
            onClick={() => setToggle(false)}
          >
            React
          </button>
        </div>
        <div style={{ display: toggle ? "block" : "none" }}>
          <PlayGround theme={theme} />
        </div>
        <div style={{ display: toggle ? "none" : "block" }}>
          <ReactPlayGround theme={theme} />
        </div>
      </div>
    );
}

export const PlayGround = ({theme}) => {
  const files = {
            "index.html":`<div class="bgc-primary600 c-fff p-30px-18px br-12px">
  <h1>Hello World</h1>
  <p>Welcome to AliasCSS</p>
 </div>

            `,

        };
    

  
  
  return (
    <Sandpack
      theme={theme}
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

export const ReactPlayGround = ({theme}) => {
  const files = {};
    

  
  
  return (
    <Sandpack
      theme={theme}
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
