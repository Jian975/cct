import Image, { StaticImageData } from "next/image";

interface ImageButtonProps {
    imageSrc: string | StaticImageData;
    imageLink: string;
    imageAlt: string;
}

export default function ImageButton({imageSrc, imageLink, imageAlt}: ImageButtonProps) {
    return(
        <a className="ImgButton" href={imageLink}>
            <Image src={imageSrc} alt={imageAlt}/>
        </a>
    )
}