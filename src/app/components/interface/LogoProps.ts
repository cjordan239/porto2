import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default interface LogoProps {
    src: string | StaticImport;
    alt: string;
    width: number;
    height: number;
}



