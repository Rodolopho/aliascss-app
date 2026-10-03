'use client'

import {
  Button,
  FieldError,
  Input,
  Label,
  SearchField as RACSearchField,
  Text,
  type SearchFieldProps as RACSearchFieldProps,
} from 'react-aria-components';
import './SearchField.tsx.css';

interface SearchFieldProps extends Omit<RACSearchFieldProps, 'children'> {
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

const fieldClassName = String`
  inset dif aic w-100p h-10 px-3 g-2 br-8px
`;

const inputClassName = String`
  @base-au fg-1 w-100p fs--font-size ff-inherit c-grayRATheme1400
  --placeholder[c-grayRATheme1000]
  [disabled][c-grayRATheme600,cna]
`;

const iconClassName = String`
  x-square-16px c-grayRATheme1000
`;

const clearButtonClassName = String`
  @base-all-unset dif aic jcc x-square-7 br-9999px
  c-grayRATheme1000 cur-pointer
  --hover[bgc-grayRATheme200,c-grayRATheme1200]
  [data-empty][dn]
  [data-disabled][c-grayRATheme600,cna]
`;

const descriptionClassName = String`
  fs--font-size-sm lh-1.4 c-grayRATheme1000
`;

const errorClassName = String`
  fs--font-size-sm lh-1.4 c-redRATheme1000
`;

export function SearchField(props: SearchFieldProps) {
  const { label, description, errorMessage, ...searchFieldProps } = props;

  return (
    <RACSearchField {...searchFieldProps} className={rootClassName}>
      {label ? <Label className={labelClassName}>{label}</Label> : null}
      <div className={fieldClassName} 
          data-raw-css=".removeCancelButton{&::-webkit-search-cancel-button,&::-webkit-search-decoration {-webkit-appearance: none;}}"
  >
        <svg viewBox="0 0 20 20" aria-hidden="true" className={iconClassName}>
          <circle cx="9" cy="9" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13.5 13.5L17 17" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <Input className={inputClassName + " removeCancelButton"} />
        <Button className={clearButtonClassName} aria-label="Clear search">
          <svg viewBox="0 0 20 20" aria-hidden="true" className={iconClassName}>
            <path d="M6 6L14 14M14 6L6 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </Button>
      </div>
      {description ? (
        <Text slot="description" className={descriptionClassName}>
          {description}
        </Text>
      ) : null}
      {errorMessage ? (
        <FieldError className={errorClassName}>{errorMessage}</FieldError>
      ) : null}
    </RACSearchField>
  );
}
