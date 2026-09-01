import Image, { StaticImageData } from "next/image";

interface ImageButtonProps {
    imageSrc: string | StaticImageData;
    imageLink: string;
    imageAlt: string;
    className?: string;
}

export default function ImageButton({imageSrc, imageLink, imageAlt, className = ""}: ImageButtonProps) {
    return(
        <a className={`${className}`} href={imageLink}>
            <Image src={imageSrc} alt={imageAlt} className="rounded-[5]"/>
        </a>
    )
}