import {useState,useEffect} from "react";
{
  /* Import the highlighter component (Prism async build minimizes main bundle size) */
}
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
{
  /* Choose and import a CSS theme of your preference */
}
import { atomDark, oneLight as atomLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CSSCodeBlock = ({cssCode=''}) => {

    const [theme,setTheme]= useState('light');
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
    <div style={{ width: "100%", margin: "0 0",'height':'100%' }}>
      {/* <h3>Here You can View Compiled CSS!</h3> */}
      <SyntaxHighlighter
        language="css"
        style={theme==='light'?atomLight:atomDark}
        showLineNumbers={true}
        wrapLines={true}
        
      >
        {cssCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CSSCodeBlock;
