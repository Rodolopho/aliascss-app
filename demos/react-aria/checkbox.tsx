import { Checkbox } from '../../react-aria/Checkbox';
import './checkbox.tsx.css';

export default function CheckboxDemo() {
  return (
    <div className="w-100p p-100px mt-32px df fdc g-24px mh-200px b1px-s-grayA6">
      <Checkbox defaultSelected>Ship with AliasCSS styles</Checkbox>
      <Checkbox>Keep React Aria behavior</Checkbox>
      <Checkbox isDisabled>Disabled option</Checkbox>
    </div>
  );
}
