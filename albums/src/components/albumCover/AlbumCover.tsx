import React from "react";
import { Link } from "react-router-dom";

import './albumCover.scss'

export default function AlbumCover({title, href}: {title: string, href: string}) {
  return (
    <div className="albumCover">
        <div className="albumCover_image" />
        <div className="albumCover_title">
            <Link to={href}>{title}</Link>
        </div>
    </div>
  );
}
