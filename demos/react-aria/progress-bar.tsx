import { ProgressBar } from '../../react-aria/ProgressBar';
import './progress-bar.tsx.css';

export default function ProgressBarDemo() {
  return (
    <div className="w-100p p-100px mt-32px df fdc g-24px mh-200px b1px-s-grayA6">
      <div className="w-320px">
        <ProgressBar label="Loading..." value={80} />
      </div>
      <div className="w-320px">
        <ProgressBar aria-label="Syncing" isIndeterminate />
      </div>
    </div>
  );
}
