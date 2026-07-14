import { Switch } from '../../react-aria/Switch';
import './switch.tsx.css';

export default function SwitchDemo() {
  return (
    <div className="w-100p p-100px mt-32px df fdc g-24px mh-200px b1px-s-grayA6">
      <Switch defaultSelected>Enable keyboard shortcuts</Switch>
      <Switch>Publish as quiet mode</Switch>
      <Switch isDisabled>Disabled setting</Switch>
    </div>
  );
}
