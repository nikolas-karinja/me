import { Canvas, CanvasProps } from '@react-three/fiber';
import { ReactNode, useEffect, useRef, useState } from 'react';

const CanvasHtmlWrapper = ({ children, containerStyle, ...canvasProps }) => {
    const containerRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({
                width: Math.round(width % 2 === 0 ? width + 1 : width),
                height: Math.round(height % 2 !== 0 ? height + 1 : height),
            });
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} style={containerStyle}>
            {size.width > 0 && size.height > 0 ? (
                <Canvas style={{ width: size.width, height: size.height }} {...canvasProps}>
                    {children}
                </Canvas>
            ) : null}
        </div>
    );
};

export default CanvasHtmlWrapper