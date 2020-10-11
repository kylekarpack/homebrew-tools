import { Badge, Menu } from "antd";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { fermentables, hops, yeasts } from "../data";
import { files } from "../state/files";
import { FileSystem } from "../util";
import logo from "../img/logo.svg";

export const HomebrewMenu = () => {
	const [filesValue, setFilesValue] = useRecoilState(files);

	const openFileSystem = async () => {
		const files = await FileSystem.open();
		setFilesValue(files);
	};

	return (
		<Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
			<Menu.ItemGroup>
				<Menu.Item>
					<div>
						<Link to="/">
							<img
								alt="Homebrew Logo"
								src={logo}
								style={{
									display: "block",
									maxWidth: "100%",
									maxHeight: "32px",
									textAlign: "left",
								}}
							/>
						</Link>
					</div>
				</Menu.Item>
			</Menu.ItemGroup>
			<Menu.ItemGroup key="sub1" title="Your Brewing">
				<Menu.Item key="1">
					<a id="fs" onClick={openFileSystem} href="#/">
						Open Filesystem
					</a>
				</Menu.Item>
				<Menu.Item key="2">
					<NavLink to="/recipes" activeClassName="is-active">
						Recipes&nbsp;
						<Badge showZero count={filesValue?.length} />
					</NavLink>
				</Menu.Item>
			</Menu.ItemGroup>
			<Menu.ItemGroup key="sub2" title="Ingredients">
				<Menu.Item key="5">
					<NavLink to="/fermentables" activeClassName="is-active">
						Fermentables&nbsp;
						<Badge showZero overflowCount={999} count={fermentables?.length} />
					</NavLink>
				</Menu.Item>
				<Menu.Item key="6">
					<NavLink to="/yeasts" activeClassName="is-active">
						Yeasts&nbsp;
						<Badge showZero overflowCount={999} count={yeasts?.length} />
					</NavLink>
				</Menu.Item>
				<Menu.Item key="7">
					<NavLink to="/hops" activeClassName="is-active">
						Hops&nbsp;
						<Badge showZero overflowCount={999} count={hops.length} />
					</NavLink>
				</Menu.Item>
			</Menu.ItemGroup>
		</Menu>
	);
};
