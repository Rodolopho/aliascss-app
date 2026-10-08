import Image from 'next/image'

// import SearchStaticClassNames from '../components/staticClassNames';
export default function Logo(){
return (
  <div className="df aic g8px pl-32px --is(_html[class~=dark])&-filter-invert-20%  filter-invert-20%">
    <Image
      className=""
      src="/SVG/full-whiteAsset 4.svg"
      alt="AliasCSS Logo"
      width={120}
      height={100}
    />{" "}
    {/* AliasCSS */}
    {/* <SearchStaticClassNames/> */}
  </div>
);
}