'use client'

import {
  Button,
  FieldError,
  Group,
  Input,
  Label,
  NumberField as RACNumberField,
  Text,
  type NumberFieldProps as RACNumberFieldProps,
} from 'react-aria-components';
import './NumberField.tsx.css';

interface NumberFieldProps extends Omit<RACNumberFieldProps, 'children'> {
  label?: string
  description?: string
  errorMessage?: string
}

const rootClassName = String`
  df fdc g-2
`;

const labelClassName = String`
  fs--font-size fw-600 c-grayRATheme1200
`;

const groupClassName = String`
  inset dif aic w-100p h-10 br-8px pr [data-focus-within]--after[cont,pa,inset-1px,zi-2,pen,br-inherit,ol-2px-solid--focus-ring-color]    
`;

const inputClassName = String`
  @base-au fg-1 h-100p px-3 fs--font-size ff-inherit c-grayRATheme1400
  --placeholder[c-grayRATheme1000]
  [disabled][c-grayRATheme600,cna]
`;

const stepperClassName = String`
  @base-all-unset dif aic jcc bsbb flex-0-0-40px h-100p
  c-grayRATheme1200 cur-pointer
  bl-1px-s-grayRATheme300
  b-0 br-0
[data-pressed][bgc-grayRATheme100,scale-0.95]
  [data-disabled][c-grayRATheme600,cna,bgc-grayRATheme100]
`;

const iconClassName = String`
  x-square-14px
`;

const descriptionClassName = String`
  fs--font-size-sm lh-1.4 c-grayRATheme1000
`;

const errorClassName = String`
  fs--font-size-sm lh-1.4 c-redRATheme1000
`;

export function NumberField(props: NumberFieldProps) {
  const { label, description, errorMessage, ...numberFieldProps } = props;

  return (
    <RACNumberField {...numberFieldProps} className={rootClassName}>
      {label ? <Label className={labelClassName}>{label}</Label> : null}
      <Group className={groupClassName}>
        <Input className={inputClassName} />
        <Button slot="decrement" className={stepperClassName}>
          <svg viewBox="0 0 20 20" aria-hidden="true" className={iconClassName}>
            <path d="M5 10H15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Button>
        <Button slot="increment" className={stepperClassName}>
          <svg viewBox="0 0 20 20" aria-hidden="true" className={iconClassName}>
            <path d="M10 5V15M5 10H15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Button>
      </Group>
      {description ? (
        <Text slot="description" className={descriptionClassName}>
          {description}
        </Text>
      ) : null}
      {errorMessage ? (
        <FieldError className={errorClassName}>{errorMessage}</FieldError>
      ) : null}
    </RACNumberField>
  );
}
