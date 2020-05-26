import React, { useState } from "react";
import Stats from "../components/recipe/Stats";
import Uploader from "../components/Uploader";
import RecipeFermentables from "../components/recipe/RecipeFermentables";
import RecipeMiscs from "../components/recipe/RecipeMiscs";

export const Recipe = () => {
	const [recipe, setRecipe] = useState(null);

	const onLoad = (data) => {
		setRecipe(data);
	};

	return (
		<>
			<div className="section">
				<Uploader onLoad={onLoad} />
			</div>

			{recipe ? (
				<div>
					<div className="section">
						<Stats recipe={recipe} />
					</div>
					<div className="section">
						<RecipeFermentables
							recipe={recipe}
							pagination={false}
							filter={false}
						/>
					</div>
					<div className="section">
						<RecipeMiscs recipe={recipe} pagination={false} filter={false} />
					</div>
				</div>
			) : null}
		</>
	);
};
