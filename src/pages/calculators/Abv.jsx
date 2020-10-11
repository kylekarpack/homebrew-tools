import { Divider, Form, InputNumber, Typography } from "antd";
import React, { useState } from "react";

const { Title } = Typography;

export const Abv = () => {
	const [state, setState] = useState({});

	const onFieldsChange = (control, form) => {
		const [og, fg] = form;
		setState({
			abv: Math.round(100 * Math.abs(fg.value - og.value) * 131.25) / 100,
		});
	};

	return (
		<>
			<Title>ABV Calculator</Title>
			<Form
				onFieldsChange={onFieldsChange}
				name="basic"
				initialValues={{ originalGravity: 1.05, finalGravity: 1.01 }}
				// onFinish={onFinish}
				// onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Original Gravity (OG)"
					name="originalGravity"
					rules={[
						{ required: true, message: "Please input the original gravity" },
					]}>
					<InputNumber step={0.001} />
				</Form.Item>
				<Form.Item
					label="Final Gravity (FG)"
					name="finalGravity"
					rules={[
						{ required: true, message: "Please input the final gravity" },
					]}>
					<InputNumber step={0.001} />
				</Form.Item>
				<Divider />
				<Form.Item label="ABV">
					<strong>{state.abv}%</strong>
				</Form.Item>
			</Form>
		</>
	);
};
