import React from "react";
import FileStore from "../store/FileStore";

export const storesContext = React.createContext({
	fileStore: new FileStore(),
});
