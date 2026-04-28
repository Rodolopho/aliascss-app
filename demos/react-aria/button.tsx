
import {Button} from '../../react-aria/Button';
import './button.tsx.css';
export default function ButtonDemo() {
return(
    <div className="w-100p p-100px mt-32px g-24px flex-center mh-200px b1px-s-grayA6">
        <Button>Press me</Button>
        <Button variant={'quiet'}>Press me</Button>
        <Button variant='secondary'>Press me</Button>
    </div>
)
}

