"use client";

import DeleteButton from "@/components/admin/DeleteButton";
import GetDataBoxTag from "@/components/admin/GetDataBox";
import SetDataBoxTag from "@/components/admin/SetDataBox";

const AdminPage = () => {
  return (
    <div className="p-5 text-white">
      <h2 className="my-4 text-3xl font-bold">앨범 추가를 해주세요</h2>
      <SetDataBoxTag />
      <DeleteButton />
      <h2 className="my-4 text-3xl font-bold ">앨범 리스트</h2>
      <GetDataBoxTag />
    </div>
  );
};

export default AdminPage;
