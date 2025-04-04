export type Album = {
  id: number;
  albumsName: string;
  artistName: string;
  genres: string[];
  popularity: number;
  followers: number;
  artistsImageUrl: string;
  albumImageUrl: string;
  releaseDate: string;
  trackName: string;
  trackDuration: string;
};

export type AlbumStoreState = {
  albumName: string;
  artistName: string;
  genres: string[];
  popularity: number;
  followers: number;
  artistsImageUrl: string;
  albumImageUrl: string;
  releaseDate: string;
  trackName: string;
  trackDuration: string;
  albums: Album[];
  nextId: number;
};

export type nameImgProps = {
  name: string;
  image: string;
};

export type ArtistDescriptionProps = {
  popularity: number;
  follower: number;
  genre: string[];
};

export type SongProps = {
  name: string;
  image?: string;
  duration: string;
  number: number;
  onClick?: () => void;
};

export type DetailProps = {
  params: Promise<{ artistName: string }>;
};

export type TrackProps = {
  params: Promise<{ trackName: string }>;
};

export type InputFieldProps = {
  inputInfo: string; // input 설명 이름
  inputValue: string; // input 데이터
  inputType: "text" | "number";
  //값이 string 또는 number를 뜻함
  onInputChange: (value: string | number) => void;
};
