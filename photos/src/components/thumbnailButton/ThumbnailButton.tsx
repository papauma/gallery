import React from "react";
export default function ThumbnailButton({photo, onClick}: {photo: any, onClick: () => void}) {
    return (
        <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} onClick={onClick} />
        </div>
    );
}
