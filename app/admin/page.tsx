"use client";

import GetDataBoxTag from "@/components/admin/GetDataBox";
import SetDataBoxTag from "@/components/admin/SetDataBox";
//set할 때는 초기값을 지정해줘야 undefined으로 값이 안들어가기 때문에 오류가 안남 -> useState 사용

const AdminPage = () => {
  return (
    <div className="p-5 text-white ">
      <h2 className="my-4 text-3xl font-bold">앨범 추가를 해주세요</h2>
      <SetDataBoxTag />
      <h2 className="my-4 text-3xl font-bold ">앨범 리스트</h2>
      <GetDataBoxTag />
    </div>
  );
};

export default AdminPage;
