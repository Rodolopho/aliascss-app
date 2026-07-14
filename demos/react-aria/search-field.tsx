import { SearchField } from '../../react-aria/SearchField';
import './search-field.tsx.css';

export default function SearchFieldDemo() {
  return (
    <div className="w-100p p-100px mt-32px df fdc g-24px mh-200px b1px-s-grayA6">
      <div className="w-320px">
        <SearchField
          label="Search"
          placeholder="Search documents"
          description="Vanilla React Aria layout expressed with AliasCSS classes."
        />
      </div>
    </div>
  );
}
