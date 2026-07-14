import { NumberField } from '../../react-aria/NumberField';
import './number-field.tsx.css';

export default function NumberFieldDemo() {
  return (
    <div className="w-100p p-100px mt-32px df fdc g-24px mh-200px b1px-s-grayA6">
      <div className="w-320px">
        <NumberField
          label="Width"
          defaultValue={1024}
          minValue={0}
          description="Stepper buttons and input share the React Aria vanilla field treatment."
        />
      </div>
    </div>
  );
}
