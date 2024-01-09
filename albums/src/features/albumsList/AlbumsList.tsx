import React from "react";

import { useEffect, useState } from "react";
import { iAlbum } from "./model/interfaces";
import { useParams } from "react-router-dom";
import AlbumCover from "../../components/albumCover/AlbumCover";
import PageTitle from 'main/PageTitle';
import Search from 'main/Search';


import './albumsList.scss';

const URL = 'https://jsonplaceholder.typicode.com/albums?_start=0&_limit=20'
const URL_PARAMS = 'https://jsonplaceholder.typicode.com/albums?userId='

export default function AlbumsList() {
  const [albums, setAlbums] = useState<Array<iAlbum>>([]);
  const [filteredAlbums, setFilteredAlbums] = useState<Array<iAlbum>>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const params = useParams();
  const address = params?.userId ? URL_PARAMS + params?.userId : URL;
  console.log(params)

  useEffect(() => {
    const fetchAlbums = async () => {
      const response = await fetch(address);
      const data = await response.json();
      setAlbums(data);
      setFilteredAlbums(data);
      console.log(data);
    }
    fetchAlbums()
  }, [address]);

  useEffect(() => {
    setFilteredAlbums(albums.filter((al) =>al.title.toLowerCase().includes(searchValue.toLowerCase())));
  }, [searchValue]);

  return (
    <div className="albumsList">
      <PageTitle text='List of albums' />
      <div className="albums_filter">
        <Search placeholder='Filter albums by a field...' returnAction={(param:string) => setSearchValue(param)} />
      </div>
      <div className="albums_list">
        {filteredAlbums.map((album:iAlbum) => (
          <AlbumCover key={album.id} title={album.title} href={`/photos/${album.id}`} />
        ))}
      </div>
    </div>
  );
}
