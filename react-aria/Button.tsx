'use client'
import { Button as RACButton, type ButtonProps as RACButtonProps } from 'react-aria-components/Button';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import {ProgressCircle} from './ProgressCircle';

import './Button.tsx.css';

interface ButtonProps extends RACButtonProps {
  /**
   * The visual style of the button (Vanilla CSS implementation specific).
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'quiet'
}



const cn=String`bn  --accentColor:purpleRA br-8px appearance-none fs-16px ff-system-ui fw5 m-0  h-2rem py-0 px-3  tdn inline-flex-center
gap-1 -webkit-tap-highlight-color-transparent --space:0.25rem __svg[width(calc(--space,*,4.5)),height(calc(--space,*,4.5))] 
--has(__svg--oc)[p-0px,br-9999px,flex-shrink-0,w-2rem]
[data-pressed]-scale-0.9 ButtonRA`

export function Button(props: ButtonProps) {
  return (
    <RACButton {...props} className={cn} data-variant={props.variant || 'primary'}>
      {composeRenderProps(props.children, (children, {isPending}) => (
        <>
          {!isPending && children}
          {isPending && (
            <ProgressCircle  className='dark[--highlight-background:--gray-1600]' aria-label="Saving..." isIndeterminate />
          )}
        </>
      ))}
    </RACButton>
  );
}
