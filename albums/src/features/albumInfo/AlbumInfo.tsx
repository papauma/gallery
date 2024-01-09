import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { iAlbum } from "../albumsList/model/interfaces";
import AlbumCover from "../../components/albumCover/AlbumCover";
const URL = 'https://jsonplaceholder.typicode.com/albums'
const URL_PARAMS = 'https://jsonplaceholder.typicode.com/albums?userId='

export default function AlbumInfo() {
  const [albums, setAlbums] = useState<Array<iAlbum>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedAlbum, setSelectemAlbum] = useState<number>();
  const params = useParams();
  const address = params?.userId ? URL_PARAMS + params?.userId : URL;
  console.log(params)

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(address);
      const data = await response.json();
      setAlbums(data);
      console.log(data);
    }
    fetchAlbums()
  }, [address])

  const selectAlbum = (id: number) => {
    setSelectemAlbum(id);
    setShowModal(!showModal);
  }

  return (
    <div className="albumsList">
      {albums.map((album:iAlbum) => (<AlbumCover key={album.id} title={album.title} href={`/photos/${album.id}`} />))}
      </div>
  );
}
