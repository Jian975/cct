"use client"

import { Children, createContext, ReactNode, useEffect, useState } from "react";

interface MouseContextType {
    x: number;
    y: number;
}

const mouseContext = createContext<MouseContextType | undefined>(undefined);

interface ClientWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function ClientWrapper({children, className = ""}: ClientWrapperProps) {

    const [x, setX] = useState<number>();
    const [y, setY] = useState<number>();

    return(
        <div 
            className={`${className}`}
            onMouseOver={() => {console.log("Over")}}
            onMouseMove={() => {console.log("Move")}}>
            {children}
        </div>
    )
}