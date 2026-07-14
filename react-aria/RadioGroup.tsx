'use client'
import type { ReactNode } from 'react';
import {
  FieldError,
  Label,
  Radio as RACRadio,
  RadioGroup as RACRadioGroup,
  Text,
  type RadioGroupProps as RACRadioGroupProps,
  type RadioProps as RACRadioProps,
} from 'react-aria-components';
import { composeRenderProps } from 'react-aria-components';
import './RadioGroup.tsx.css';

interface RadioGroupProps extends RACRadioGroupProps {
  label?: string
  description?: string
  errorMessage?: string
}

interface RadioProps extends RACRadioProps {
  label?: string
}

const groupClassName = String`
  df fdc g-3
`;

const labelClassName = String`
  fs--font-size fw-600 c-grayRATheme1200
`;

const descriptionClassName = String`
  fs--font-size-sm lh-1.4 c-grayRATheme1000
`;

const errorClassName = String`
  fs--font-size-sm lh-1.4 c-redRATheme1000
`;

const radioClassName = String`
  dif aic g-2 cur-pointer usn fs--font-size-lg c-grayRATheme1200
  [data-disabled][c-grayRATheme600,cna]
`;

const indicatorClassName = String`
  indicator dif aic jcc x-square-16px br-9999px
`;

const dotClassName = String`
  x-square-8px br-9999px bgc-white o-0 tn-opacity-200ms
`;

const dotVisibleClassName = String`
  o-1
`;

const listClassName = String`
  df fdc g-2
`;

export function RadioGroup(props: RadioGroupProps) {
  const { label, description, errorMessage, children, ...radioGroupProps } = props;
  const wrappedChildren = composeRenderProps(children, child => (
    <div className={listClassName}>{child}</div>
  )) as unknown as ReactNode;

  return (
    <RACRadioGroup {...radioGroupProps} className={groupClassName}>
      {label ? <Label className={labelClassName}>{label}</Label> : null}
      {wrappedChildren}
      {description ? (
        <Text slot="description" className={descriptionClassName}>
          {description}
        </Text>
      ) : null}
      {errorMessage ? (
        <FieldError className={errorClassName}>{errorMessage}</FieldError>
      ) : null}
    </RACRadioGroup>
  );
}

export function Radio(props: RadioProps) {
  const { children, label, ...radioProps } = props;

  return (
    <RACRadio {...radioProps} className={radioClassName}>
      {composeRenderProps(children ?? label, (child, state) => (
        <>
          <div className={indicatorClassName}>
            <div className={`${dotClassName} ${state.isSelected ? dotVisibleClassName : ''}`} />
          </div>
          <span>{child}</span>
        </>
      ))}
    </RACRadio>
  );
}
