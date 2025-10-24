import { useEffect, useState } from "react";
import { DataTable } from "../components/tables/DataTable";
import { userColumns } from "../components/tables/UserColumns";
import { mockUsers } from "../data/mockData";
import { UserType } from "../types";

const UsersPage = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setUsers(mockUsers);
  }, []);

  return (
    <div>
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Users</h1>
      </div>
      <DataTable columns={userColumns} data={users} />
    </div>
  );
};

export default UsersPage;
