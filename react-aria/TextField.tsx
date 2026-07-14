'use client'

import {
  FieldError,
  Input,
  Label,
  Text,
  TextField as RACTextField,
  type TextFieldProps as RACTextFieldProps,
} from 'react-aria-components';
import './TextField.tsx.css';

interface TextFieldProps extends RACTextFieldProps {
  label?: string
  description?: string
  errorMessage?: string
  placeholder?: string
}

const rootClassName = String`
  df fdc g-2
`;

const labelClassName = String`
  fs--font-size fw-600 c-grayRATheme1200
`;

const inputClassName = String`
  inset
  h-10 px-3 w-100p
  bn br-8px ol-none
  fs--font-size ff-inherit c-grayRATheme1400
  bgc--field-background
  --placeholder[c-grayRATheme1000]
  [data-disabled][c-grayRATheme600,cna]
`;

const helperClassName = String`
  fs--font-size-sm lh-1.4 c-grayRATheme1000
`;

const errorClassName = String`
  fs--font-size-sm lh-1.4 c-redRATheme1000
`;

export function TextField(props: TextFieldProps) {
  const { label, description, errorMessage, ...textFieldProps } = props;

  return (
    <RACTextField {...textFieldProps} className={rootClassName}>
      {label ? <Label className={labelClassName}>{label}</Label> : null}
      <Input className={inputClassName} />
      {description ? (
        <Text slot="description" className={helperClassName}>
          {description}
        </Text>
      ) : null}
      {errorMessage ? (
        <FieldError className={errorClassName}>{errorMessage}</FieldError>
      ) : null}
    </RACTextField>
  );
}
