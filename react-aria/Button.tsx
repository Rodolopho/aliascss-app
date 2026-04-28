'use client'
import { Button as RACButton, type ButtonProps as RACButtonProps } from 'react-aria-components/Button';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import {ProgressCircle} from './ProgressCircle';
import './Button.css';
import './Button.tsx.css';

interface ButtonProps extends RACButtonProps {
  /**
   * The visual style of the button (Vanilla CSS implementation specific).
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'quiet'
}
const baseBtn=String`bg-brandAR100 `;
const cn=String`bn x-button br-8px appearance-none fs-16px ff-system-ui fw5 m-0   tdn inline-flex-center
gap-1 -webkit-tap-highlight-color-transparent __svg[width(calc(--spacing,*,4.5)),height(calc(--spacing,*,4.5))] 
__svg--has(--oc)[p-0px,br-9999px,flex-shrink-0,w-2rem]
[data-pressed]-scale-0.9`
export function Button(props: ButtonProps) {
  return (
    <RACButton {...props} className={`${cn} `} data-variant={props.variant || 'primary'}>
      {composeRenderProps(props.children, (children, {isPending}) => (
        <>
          {!isPending && children}
          {isPending && (
            <ProgressCircle aria-label="Saving..." isIndeterminate />
          )}
        </>
      ))}
    </RACButton>
  );
}
