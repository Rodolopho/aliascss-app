import { Radio, RadioGroup } from '../../react-aria/RadioGroup';
import './radio-group.tsx.css';

export default function RadioGroupDemo() {
  return (
    <div className="w-100p p-100px mt-32px df fdc g-24px mh-200px b1px-s-grayA6">
      <div className="w-320px">
        <RadioGroup
          label="Favorite pet"
          description="Uses the React Aria vanilla radio layout with AliasCSS tokens."
          defaultValue="cat">
          <Radio value="cat">Cat</Radio>
          <Radio value="dog">Dog</Radio>
          <Radio value="dragon">Dragon</Radio>
        </RadioGroup>
      </div>
    </div>
  );
}
