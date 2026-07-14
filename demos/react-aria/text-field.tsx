import { TextField } from '../../react-aria/TextField';
import './text-field.tsx.css';

export default function TextFieldDemo() {
  return (
    <div className="w-100p p-100px mt-32px df fdc g-24px mh-200px b1px-s-grayA6">
      <div className="w-320px">
        <TextField
          label="Project name"
          placeholder="AliasCSS docs"
          description="This stays fully headless while AliasCSS handles the presentation."
        />
      </div>
      <div className="w-320px">
        <TextField
          label="Email"
          type="email"
          placeholder="team@aliascss.dev"
          isRequired
          errorMessage="A valid email is required."
        />
      </div>
    </div>
  );
}
