import React from 'react'
import './screen.jsx.css'
       

const rootAcss=String`pr oh
        --has(__[data-state=open][class~=screen-push][class~=screen-up])__[class~=screen-main]-mt--push-down
        --has(__[data-state=open][class~=screen-push][class~=screen-down])__[class~=screen-main]-mt--push-up
        --has(__[data-state=open][class~=screen-push][class~=screen-right])__[class~=screen-main]-ml--push-left
        --has(__[data-state=open][class~=screen-push][class~=screen-left])__[class~=screen-main]-ml--push-right
        --has(__[class~=is-active][class~=screen-push][class~=screen-up])__[class~=screen-main]-mt--push-down
        --has(__[class~=is-active][class~=screen-push][class~=screen-down])__[class~=screen-main]-mt--push-up
        --has(__[class~=is-active][class~=screen-push][class~=screen-right])__[class~=screen-main]-ml--push-left
        --has(__[class~=is-active][class~=screen-push][class~=screen-left])__[class~=screen-main]-ml--push-right
         `;
         
export const ScreenRoot = ({className,children,pushOffset={},style,width='100dvm',height='100dvh',...props}) => {
  const pushOffSet={top:'100dvh',right:'100%',bottom:'100dvh',left: '100%',...pushOffset};

    return (
    <div 
    {...props}
    className={''+ className} 
    style={{...style,...{
        width:width,
        height:height,
        '--push-up':'-'+pushOffSet.top,
        '--push-right':pushOffSet.right,
        '--push-down':pushOffSet.left,
        '--push-left':"-"+pushOffSet.left,
    }}}
    >
    {children}
    </div>
  )
}

export const Screen=({className,children,transitionType='',screen="main",style,...props}) => {
  return (
    <div 
    {...props}
    className={''+ className+" screen-"+screen + (transitionType==='push'?' screen-push':'')} 
    style={{...style,...{}}}
    >
    {children}
    </div>
  )
}

