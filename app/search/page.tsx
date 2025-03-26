import SearchList from "@/components/search/SeachList";
import { Suspense } from "react";

export const dynamic = "force-dynamic"; // 💥 핵심!

const SearchPage = () => {
  return (
    <Suspense fallback={<p className="text-white">로딩 중...</p>}>
      <SearchList />
    </Suspense>
  );
};

export default SearchPage;
