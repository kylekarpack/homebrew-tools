import React, { useState } from "react";
import { Table as AntTable } from "antd";

export default function Table({ columns, data, pagination }) {
	const [, setState] = useState({
		sortedInfo: {},
		filteredInfo: {},
	});

	const handleChange = (pagination, filters, sorter) => {
		setState({
			filteredInfo: filters,
			sortedInfo: sorter,
		});
	};

	const processedColumns = columns.map((el) => {
		return {
			...el,
			key: el.dataIndex,
			onFilter: (value, record) => record[el.dataIndex].includes(value),
			render: el.render,
			sorter: el.sorter || ((a, b) => {
				if (typeof a[el.dataIndex] === "string") {
					return a[el.dataIndex].localeCompare(b[el.dataIndex]);
				}
				return a[el.dataIndex] - b[el.dataIndex];
			}),
			sortDirections: ["descend", "ascend"],
		};
	});

	return (
		<AntTable
			columns={processedColumns}
			dataSource={data}
			scroll={{ y: 400 }}
			pagination={pagination ? { position: ["bottomRight"] } : false}
			onChange={handleChange}
		/>
	);
}
