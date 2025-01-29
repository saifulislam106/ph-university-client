import { useState } from "react";
import { useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi";
import { Table, TableColumnsType, TableProps } from "antd";
import { TQueryParams } from "../../../types";

export type TTableData = {
  name: string;
};

const AcademicFaculty = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const { data: facultyData, isFetching } =
    useGetAcademicFacultiesQuery(params);

  const tableData = facultyData?.data?.map(({ name }) => ({
    key: name,
    name,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "faculty of science",
          value: "faculty of science",
        },
        {
          text: "faculty of csc",
          value: "faculty of csc",
        },
        {
          text: "faculty of eee",
          value: "faculty of eee",
        },
      ],
    },
  ];
  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];

      filters?.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      console.log(filters);
      setParams(queryParams);
    }
  };

  return (
    <Table<TTableData>
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicFaculty;
