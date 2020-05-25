import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { fermentables, hops, yeasts } from "../data";
import { useStores } from "../hooks/useStores";
import logo from "../img/logo.svg";
import { FileSystem } from "../util";

export const HomebrewMenu = observer(() => {
	const { fileStore } = useStores();

	const openFileSystem = async () => {
		const files = await FileSystem.open();
		fileStore.setFiles(files);
	};

	return (
		<aside className="menu" style={{ position: "sticky", top: 0 }}>
			<br />
			<ul className="menu-list">
				<li>
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
				</li>
				<li className="menu-label">Your Brewing</li>

				<li>
					<a onClick={openFileSystem} href="#/">
						Open Filesystem
					</a>
					<NavLink to="/recipes" activeClassName="is-active">
						Recipes&nbsp;
						<span className="tag">{fileStore.files?.length}</span>
					</NavLink>
				</li>
			</ul>
			<p className="menu-label">Ingredients</p>
			<ul className="menu-list">
				<li>
					<NavLink to="/fermentables" activeClassName="is-active">
						Fermentables&nbsp;
						<span className="tag">{fermentables.length}</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/yeasts" activeClassName="is-active">
						Yeasts&nbsp;
						<span className="tag">{yeasts.length}</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/hops" activeClassName="is-active">
						Hops&nbsp;
						<span className="tag">{hops.length}</span>
					</NavLink>
				</li>
			</ul>
		</aside>
	);
});