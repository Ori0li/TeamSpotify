"use client";

import { useAlbumStore } from "@/common/store/albumStore";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ArtistHover from "../artist/subcomponents/ArtistHover";

const SearchList = () => {
  const normalize = (str: string) =>
    str
      .toLocaleLowerCase() //소문자 통일
      .normalize("NFD") //유니코드 분해
      .replace(/[\u0300-\u036f]/g, "") // 악센트 제거
      .replace(/[^\p{L}\p{N}]+/gu, ""); // 문자/숫자만 남기고 나머지 제거 (한글 포함)

  const { albums, getAlbums } = useAlbumStore();
  const searchParams = useSearchParams();
  const [rawQuery, setRawQuery] = useState("");

  useEffect(() => {
    const query = searchParams.get("query") || "";
    setRawQuery(query);
  }, [searchParams]);

  useEffect(() => {
    getAlbums();
  }, [getAlbums]);

  const normalizedQuery = useMemo(() => normalize(rawQuery), [rawQuery]);

  const groupedByArtist = useMemo(() => {
    if (!albums.length || !normalizedQuery) return {};
    const matched = albums.filter((album) =>
      normalize(album.artistName).includes(normalizedQuery)
    );
    return matched.reduce((acc, album) => {
      if (!acc[album.artistName]) {
        acc[album.artistName] = { artist: album, tracks: [] };
      }
      acc[album.artistName].tracks.push(album);
      return acc;
    }, {} as Record<string, { artist: (typeof albums)[0]; tracks: typeof albums }>);
  }, [albums, normalizedQuery]);

  return (
    <div className="p-8 text-white">
      <h2 className="text-2xl font-bold mb-6">
        {`Search Results for: "${rawQuery}"`}
      </h2>

      {albums.length === 0 ? (
        <p>데이터 불러오는 중...</p>
      ) : Object.keys(groupedByArtist).length === 0 ? (
        <p>검색 결과가 없습니다.</p>
      ) : (
        Object.values(groupedByArtist).map(({ artist, tracks }) => (
          <div key={artist.artistName} className="mb-12">
            <div className="mb-6 text-center">
              <Link href={`/detail/${artist.artistName}`}>
                <ArtistHover
                  image={artist.artistsImageUrl}
                  name={artist.artistName}
                />
              </Link>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-full">
              {tracks.map((track) => (
                <div key={track.id} className="bg-opacity-10 rounded-xl p-2">
                  <div className="text-lg font-medium">{track.trackName}</div>
                  <div className="text-sm text-gray-400">
                    {track.trackDuration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchList;
