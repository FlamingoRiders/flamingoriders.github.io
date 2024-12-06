import React, { useCallback, useState } from "react";

interface PictureProps {
    imgSrc: string;
}

const Picture: React.FC<PictureProps> = ({ imgSrc }) => {

    const [loading, setLoading] = useState(true);

    return <>
        <div className={`loader ${loading ? '' : 'hide'}`}></div>
        <img src={imgSrc}
            className={`slideshow-image ${loading ? 'hide' : ''}`}
            onLoad={() => setLoading(false)} />
    </>;
}

export default Picture;