const fermentables = [
	{
		grain: "Acid Malt",
		origin: "Germany",
		mash: true,
		color: 3,
		power: 0,
		potential: 1.027,
		maxPercent: 10,
		notes: "Acid malt contains acids from natural lactic acids. Used by German brewers to adjust malt PH without chemicals to adhere to German purity laws. Also enhances the head retention.\n\n"
	},
	{
		grain: "Acidulated (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.8,
		power: 0,
		potential: 1.03,
		maxPercent: 10,
		notes: "Used in Germany to lower PH levels without resorting to chemicals. Lowers mash pH levels, lightens color, improves flavor stability.\n\n"
	},
	{
		grain: "Acidulated Malt",
		origin: "German",
		mash: false,
		color: 3.4,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Amber Malt",
		origin: "United Kingdom",
		mash: true,
		color: 22,
		power: 20,
		potential: 1.035,
		maxPercent: 20,
		notes: "Roasted specialty malt used in some English browns, milds and old ales to add color and a biscuit taste. Intense flavor - so limit use. Low diastatic power so must be mashed with well modified malts.\n\n"
	},
	{
		grain: "Aromatic Malt",
		origin: "Belgium",
		mash: true,
		color: 26,
		power: 29,
		potential: 1.036,
		maxPercent: 10,
		notes: "Provides a very strong malt flavor and aroma to your beer.\n\n"
	},
	{
		grain: "Barley, Flaked",
		origin: "US",
		mash: true,
		color: 1.7,
		power: 0,
		potential: 1.032,
		maxPercent: 20,
		notes: "Adds significant body to Porters and Stouts. High haze producing protein prevents use in light beers.\n\n"
	},
	{
		grain: "Barley, Raw",
		origin: "US",
		mash: true,
		color: 2,
		power: 0,
		potential: 1.028,
		maxPercent: 15,
		notes: "Raw, unmalted barley can be used to add body to your beer. Use in homebrew requires very fine milling combined with a decoction or multi-stage mash. Performs best when used in small quantities with well modified grains.\n\n"
	},
	{
		grain: "Barley, Roasted",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Barley, Torrefied",
		origin: "US",
		mash: true,
		color: 1.7,
		power: 0,
		potential: 1.036,
		maxPercent: 40,
		notes: "Raw barley that has been \"popped\" open to open kernels Used in place of raw barley for faster conversion and higher yields. High in haze producing protein\n\n"
	},
	{
		grain: "Belgian Debittered Black Malt",
		origin: "",
		mash: false,
		color: 550,
		power: 0,
		potential: 1.01,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Biscuit Malt",
		origin: "Belgian",
		mash: true,
		color: 23,
		power: 6,
		potential: 1.036,
		maxPercent: 10,
		notes: "Use for English ales, brown ales and porters. Adds a biscuit like flavor and aroma. Can be used as a substitute for toasted malt.\n\n"
	},
	{
		grain: "Black (Patent) Malt",
		origin: "US",
		mash: false,
		color: 500,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Dark color and dry roasted flavor characteristic of Stouts and Porters Use for: Coloring in small amounts, or flavoring of Stouts and Porters in larger amounts.\n\n"
	},
	{
		grain: "Black Barley (Briess)",
		origin: "US",
		mash: false,
		color: 500,
		power: 0,
		potential: 1.032,
		maxPercent: 100,
		notes: "\n\n"
	},
	{
		grain: "Black Barley (Stout)",
		origin: "US",
		mash: false,
		color: 500,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Unmalted barley roasted at high temperature to create a dry, coffee like flavor. Imparts a sharp acrid flavor characteristic of dry stouts. Gives \"dryness\" to a stout or porter -- much more so than regular Roasted Barley\n\n"
	},
	{
		grain: "Blackprinz Malt",
		origin: "US",
		mash: false,
		color: 500,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Dark color and dry roasted flavor characteristic of Stouts and Porters Use for: Coloring in small amounts, or flavoring of Stouts and Porters in larger amounts.\n\n"
	},
	{
		grain: "Blackprinz Malt (Briess)",
		origin: "US",
		mash: false,
		color: 500,
		power: 0,
		potential: 1.033,
		maxPercent: 10,
		notes: "Dehusked Black Malt, similar to Weyermann CARAFA® Special. Very delicate roasted flavors. No astrigent or bitter aftertaste. Color: 500 L\n\n"
	},
	{
		grain: "Brewers Malt 6-Row (Briess)",
		origin: "US",
		mash: false,
		color: 1.8,
		power: 160,
		potential: 1.036,
		maxPercent: 100,
		notes: "Flavor:Mild Grainy Malty More husk than 2-row, well suited for high adjunct brewing\n\n"
	},
	{
		grain: "British Crystal 50-60L",
		origin: "",
		mash: false,
		color: 55,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Brown Malt",
		origin: "United Kingdom",
		mash: true,
		color: 65,
		power: 0,
		potential: 1.032,
		maxPercent: 10,
		notes: "Imparts a dry, biscuit flavor. Used in nut brown ales, porters and some Belgian ales.\n\n"
	},
	{
		grain: "Brumalt",
		origin: "Germany",
		mash: true,
		color: 23,
		power: 0,
		potential: 1.033,
		maxPercent: 10,
		notes: "Dark German malt developed to add malt flavor of Alt, Marzen and Oktoberfest beers. Helps create authentic maltiness without having to do a decoction mash. Rarely available for homebrewers.\n\n"
	},
	{
		grain: "Cara-Pils/Dextrine",
		origin: "US",
		mash: false,
		color: 2,
		power: 0,
		potential: 1.033,
		maxPercent: 20,
		notes: "Significantly increases foam/head retention and body of the beer. Also sold under the names \"Dextrine\" and \"Cara-Foam\"\n\n"
	},
	{
		grain: "Caraamber",
		origin: "US",
		mash: false,
		color: 30,
		power: 0,
		potential: 1.035,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caraaroma",
		origin: "Germany",
		mash: false,
		color: 130,
		power: 0,
		potential: 1.035,
		maxPercent: 15,
		notes: "Very dark crystal malt - similar to a crystal 120 or Caramunich 120 malt. Adds strong caramel flavor, red color, and malty aroma.\n\n"
	},
	{
		grain: "Carafa I",
		origin: "Germany",
		mash: false,
		color: 337,
		power: 0,
		potential: 1.032,
		maxPercent: 5,
		notes: "Used to intensify aroma and color in dark, Munich beers and stouts.\n\n"
	},
	{
		grain: "Carafa I (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 320,
		power: 0,
		potential: 1.036,
		maxPercent: 5,
		notes: "Chocolate malt. Dark beers, Alts, Bockbiers. Adds color and aroma.\n\n"
	},
	{
		grain: "Carafa II",
		origin: "Germany",
		mash: false,
		color: 412,
		power: 0,
		potential: 1.032,
		maxPercent: 5,
		notes: "Used to intensify aroma and color in dark, Munich beers and stouts.\n\n"
	},
	{
		grain: "Carafa III",
		origin: "Germany",
		mash: false,
		color: 525,
		power: 0,
		potential: 1.032,
		maxPercent: 5,
		notes: "Dark color and aroma - used in some German beers\n\n"
	},
	{
		grain: "Carafa Special I (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 320,
		power: 0,
		potential: 1.036,
		maxPercent: 5,
		notes: "Chocolate malt. Dark beers, Alts, Bockbiers. Adds color and aroma. De-husked, smoother tasting\n\n"
	},
	{
		grain: "Carafa Special II (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 415,
		power: 0,
		potential: 1.036,
		maxPercent: 5,
		notes: "De-husked chocolate malt for a smoother flavor. Adds body, color, aroma. Dark beers, Alts, Bockbiers\n\n"
	},
	{
		grain: "Carafa Special II (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 415,
		power: 0,
		potential: 1.036,
		maxPercent: 5,
		notes: "De-husked chocolate malt for a smoother flavor. Adds body, color, aroma. Dark beers, Alts, Bockbiers\n\n"
	},
	{
		grain: "Carafa Special II (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 415,
		power: 0,
		potential: 1.036,
		maxPercent: 5,
		notes: "De-husked chocolate malt for a smoother flavor. Adds body, color, aroma. Dark beers, Alts, Bockbiers\n\n"
	},
	{
		grain: "Carafoam",
		origin: "US",
		mash: false,
		color: 2,
		power: 0,
		potential: 1.033,
		maxPercent: 20,
		notes: "Significantly increases foam/head retention and body of the beer. Also sold under the names \"Dextrine\" and \"Cara-Pils (TM)\"\n\n"
	},
	{
		grain: "CaraHell",
		origin: "German",
		mash: false,
		color: 11,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Caramel / Crystal 60L",
		origin: "American",
		mash: false,
		color: 60,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Caramel / Crystal 60L",
		origin: "American",
		mash: false,
		color: 60,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Caramel Malt - 120L (Briess)",
		origin: "US",
		mash: false,
		color: 120,
		power: 0,
		potential: 1.032,
		maxPercent: 0,
		notes: "Pronounced Caramel, Burnt Sugar, Raisiny, Prunes Deep Red Color 3-15% in Amber &Red beers. 10-15% in Bock 7-15% in Dark beers 10-15% in Porter &Stout\n\n"
	},
	{
		grain: "Caramel Malt - 120L (Briess)",
		origin: "US",
		mash: false,
		color: 120,
		power: 0,
		potential: 1.032,
		maxPercent: 0,
		notes: "Pronounced Caramel, Burnt Sugar, Raisiny, Prunes Deep Red Color 3-15% in Amber &Red beers. 10-15% in Bock 7-15% in Dark beers 10-15% in Porter &Stout\n\n"
	},
	{
		grain: "Caramel Malt - 80L 6-Row (Briess)",
		origin: "US",
		mash: false,
		color: 80,
		power: 0,
		potential: 1.033,
		maxPercent: 0,
		notes: "Pronounced Caramel, Slight Burnt Sugar, Raisniny, PruneRed to Deep Red3-15% in Amber and Red beers.10-15% in Bock beers.7-15% in Dark beers.10-15% in Porter and Stout.\n\n"
	},
	{
		grain: "Caramel Wheat Malt",
		origin: "Germany",
		mash: false,
		color: 46,
		power: 0,
		potential: 1.035,
		maxPercent: 15,
		notes: "Caramel wheat malt - emphasizes wheat malt aroma and adds color to the beer. Popular for Dunkelweizens. Also known as Carawheat -- which is a registered trademark of Wyermann Malting.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt - 10L",
		origin: "US",
		mash: false,
		color: 10,
		power: 0,
		potential: 1.035,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt - 150L",
		origin: "US",
		mash: false,
		color: 150,
		power: 0,
		potential: 1.035,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt - 15L",
		origin: "US",
		mash: false,
		color: 15,
		power: 0,
		potential: 1.035,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt - 20L",
		origin: "US",
		mash: false,
		color: 20,
		power: 0,
		potential: 1.035,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt - 30L",
		origin: "US",
		mash: false,
		color: 30,
		power: 0,
		potential: 1.035,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt - 40L",
		origin: "US",
		mash: false,
		color: 40,
		power: 0,
		potential: 1.034,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt - 60L",
		origin: "US",
		mash: false,
		color: 60,
		power: 0,
		potential: 1.034,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt - 80L",
		origin: "US",
		mash: false,
		color: 80,
		power: 0,
		potential: 1.034,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt - 90L",
		origin: "US",
		mash: false,
		color: 90,
		power: 0,
		potential: 1.034,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caramel/Crystal Malt -120L",
		origin: "US",
		mash: false,
		color: 120,
		power: 0,
		potential: 1.033,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt. Very Dark\n\n"
	},
	{
		grain: "Caramunich I (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 34.5,
		power: 0,
		potential: 1.036,
		maxPercent: 10,
		notes: "German crystal malt. Adds maltiness, flavor, color and aroma.\n\n"
	},
	{
		grain: "Caramunich I (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 51,
		power: 0,
		potential: 1.036,
		maxPercent: 10,
		notes: "German crystal malt. Adds maltiness, flavor, color and aroma.\n\n"
	},
	{
		grain: "CaraMunich III",
		origin: "German",
		mash: false,
		color: 57,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Caramunich III (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 71,
		power: 0,
		potential: 1.037,
		maxPercent: 10,
		notes: "German crystal malt. Adds maltiness, body, aroma and color.\n\n"
	},
	{
		grain: "Caramunich III (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 71,
		power: 0,
		potential: 1.037,
		maxPercent: 10,
		notes: "German crystal malt. Adds maltiness, body, aroma and color.\n\n"
	},
	{
		grain: "Caramunich III (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 71,
		power: 0,
		potential: 1.037,
		maxPercent: 10,
		notes: "German crystal malt. Adds maltiness, body, aroma and color.\n\n"
	},
	{
		grain: "Caramunich III (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 71,
		power: 0,
		potential: 1.037,
		maxPercent: 10,
		notes: "German crystal malt. Adds maltiness, body, aroma and color.\n\n"
	},
	{
		grain: "Caramunich Malt",
		origin: "Belgium",
		mash: false,
		color: 56,
		power: 0,
		potential: 1.033,
		maxPercent: 10,
		notes: "Caramel, copper colored malt. Used in Belgian ales and German bocks.\n\n"
	},
	{
		grain: "Carapils (Briess)",
		origin: "US",
		mash: false,
		color: 1.5,
		power: 0,
		potential: 1.034,
		maxPercent: 0,
		notes: "FLAVOR: None COLOR: None ITEM NUMBERS AND PACKAGING OPTIONS adds body, foam retention, and beer stability without influencing color or flavor. non-fermentables to balance body and flavor of dark beers Low usage of 1-5% will help achieve desired resu\n\n"
	},
	{
		grain: "Carapils (Briess)",
		origin: "US",
		mash: false,
		color: 1.5,
		power: 0,
		potential: 1.034,
		maxPercent: 0,
		notes: "FLAVOR: None COLOR: None ITEM NUMBERS AND PACKAGING OPTIONS adds body, foam retention, and beer stability without influencing color or flavor. non-fermentables to balance body and flavor of dark beers Low usage of 1-5% will help achieve desired resu\n\n"
	},
	{
		grain: "Carapils (Briess)",
		origin: "US",
		mash: false,
		color: 1.5,
		power: 0,
		potential: 1.034,
		maxPercent: 0,
		notes: "FLAVOR: None COLOR: None ITEM NUMBERS AND PACKAGING OPTIONS adds body, foam retention, and beer stability without influencing color or flavor. non-fermentables to balance body and flavor of dark beers Low usage of 1-5% will help achieve desired resu\n\n"
	},
	{
		grain: "Carapils (Briess)",
		origin: "US",
		mash: false,
		color: 1.5,
		power: 0,
		potential: 1.034,
		maxPercent: 0,
		notes: "FLAVOR: None COLOR: None ITEM NUMBERS AND PACKAGING OPTIONS adds body, foam retention, and beer stability without influencing color or flavor. non-fermentables to balance body and flavor of dark beers Low usage of 1-5% will help achieve desired resu\n\n"
	},
	{
		grain: "Carapils (Dextrine Malt)",
		origin: "American",
		mash: false,
		color: 1.8,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Carapils 6-Row (Briess)",
		origin: "US",
		mash: false,
		color: 1.3,
		power: 0,
		potential: 1.034,
		maxPercent: 0,
		notes: "FLAVOR: NoneCOLOR: NoneITEM NUMBERS AND PACKAGING OPTIONSadds body, foam retention, and beer stability without influencing color or flavor.non-fermentables to balance body and flavor of dark beersLow usage of 1-5% will help achieve desired resu\n\n"
	},
	{
		grain: "Carared",
		origin: "US",
		mash: false,
		color: 20,
		power: 0,
		potential: 1.035,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Caravienne Malt",
		origin: "Belgium",
		mash: false,
		color: 22,
		power: 0,
		potential: 1.034,
		maxPercent: 10,
		notes: "Light Belgian crystal malt. Used in light Trappist and Abbey style Belgian ales.\n\n"
	},
	{
		grain: "CHÂTEAU SPELT",
		origin: "Belgium",
		mash: false,
		color: 3.55,
		power: 0,
		potential: 1,
		maxPercent: 0,
		notes: "Features: Château Spelt is a pale, well-modified type of malt. Made from a hard-grained species of wheat (heirloom wheat), it has a higher protein level when compared to other wheat malts. Characteristics: Château Spelt malt imparts a sweet nutty flavor, adds a spicy aroma and an earthy character to your beer. Great for Belgian Saison and Wheat beer styles. Usage: Belgian saison, wheat beers, special beers. 3 –7 EBC (European Brewing Convention) 1.7 –3.2 °L (Lovibond) Moisture % 6.0 Extract (dry basis) % 79 Wortcolour EBC (°L) 3 (1.7) -7 (3.2) Total Protein (dry malt) % 17.0\n\n"
	},
	{
		grain: "CHÂTEAU SPELT",
		origin: "Belgium",
		mash: false,
		color: 3.55,
		power: 0,
		potential: 1,
		maxPercent: 0,
		notes: "Features: Château Spelt is a pale, well-modified type of malt. Made from a hard-grained species of wheat (heirloom wheat), it has a higher protein level when compared to other wheat malts. Characteristics: Château Spelt malt imparts a sweet nutty flavor, adds a spicy aroma and an earthy character to your beer. Great for Belgian Saison and Wheat beer styles. Usage: Belgian saison, wheat beers, special beers. 3 –7 EBC (European Brewing Convention) 1.7 –3.2 °L (Lovibond) Moisture % 6.0 Extract (dry basis) % 79 Wortcolour EBC (°L) 3 (1.7) -7 (3.2) Total Protein (dry malt) % 17.0\n\n"
	},
	{
		grain: "CHÂTEAU SPELT",
		origin: "Belgium",
		mash: false,
		color: 3.55,
		power: 0,
		potential: 1,
		maxPercent: 0,
		notes: "Features: Château Spelt is a pale, well-modified type of malt. Made from a hard-grained species of wheat (heirloom wheat), it has a higher protein level when compared to other wheat malts. Characteristics: Château Spelt malt imparts a sweet nutty flavor, adds a spicy aroma and an earthy character to your beer. Great for Belgian Saison and Wheat beer styles. Usage: Belgian saison, wheat beers, special beers. 3 –7 EBC (European Brewing Convention) 1.7 –3.2 °L (Lovibond) Moisture % 6.0 Extract (dry basis) % 79 Wortcolour EBC (°L) 3 (1.7) -7 (3.2) Total Protein (dry malt) % 17.0\n\n"
	},
	{
		grain: "Chocolate (Briess)",
		origin: "US",
		mash: false,
		color: 350,
		power: 0,
		potential: 1.035,
		maxPercent: 0,
		notes: "FLAVOR: Rich Roasted Coffee COLOR: Brown Hues, depending upon usage color adj with minor/no flavor contribution 1-10% for color in Porter &Stout The choc flavor is very complementary when used in higher % in Brown Ales, Porters, Stouts & other Dark\n\n"
	},
	{
		grain: "Chocolate (Dingemans)",
		origin: "Belgium",
		mash: false,
		color: 340,
		power: 0,
		potential: 1.03,
		maxPercent: 50,
		notes: "\n\n"
	},
	{
		grain: "Chocolate Malt",
		origin: "US",
		mash: false,
		color: 350,
		power: 0,
		potential: 1.028,
		maxPercent: 10,
		notes: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt.\n\n"
	},
	{
		grain: "Chocolate Malt",
		origin: "United Kingdom",
		mash: false,
		color: 450,
		power: 0,
		potential: 1.034,
		maxPercent: 10,
		notes: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt.\n\n"
	},
	{
		grain: "Chocolate Malt (Muntons)",
		origin: "US",
		mash: false,
		color: 385,
		power: 0,
		potential: 1.028,
		maxPercent: 10,
		notes: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt.\n\n"
	},
	{
		grain: "Chocolate Malt (Muntons)",
		origin: "US",
		mash: false,
		color: 385,
		power: 0,
		potential: 1.028,
		maxPercent: 10,
		notes: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt.\n\n"
	},
	{
		grain: "Chocolate Malt (Thomas Fawcett)",
		origin: "United Kingdom",
		mash: false,
		color: 508,
		power: 0,
		potential: 1.034,
		maxPercent: 10,
		notes: "Dark chocolate malt from the UK. Adds strong coffee flavor to your beer.\n\n"
	},
	{
		grain: "Chocolate Malt, Pale",
		origin: "US",
		mash: false,
		color: 225,
		power: 0,
		potential: 1.028,
		maxPercent: 10,
		notes: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt. Lighter than normal chocolate malt.\n\n"
	},
	{
		grain: "Chocolate Rye Malt",
		origin: "Germany",
		mash: false,
		color: 250,
		power: 0,
		potential: 1.031,
		maxPercent: 5,
		notes: "Primarily used for color and aroma in top-fermented specialty beers.\n\n"
	},
	{
		grain: "Chocolate Wheat Malt",
		origin: "Germany",
		mash: false,
		color: 400,
		power: 0,
		potential: 1.033,
		maxPercent: 5,
		notes: "Intensifies aroma and color in top-fermented beers such as dark wheat beers.\n\n"
	},
	{
		grain: "Corn - Yellow, Flaked (Briess)",
		origin: "US",
		mash: false,
		color: 1.3,
		power: 0,
		potential: 1.039,
		maxPercent: 0,
		notes: "produce a beer with a mild, less malty flavor produce a drier, more crisp beer. APPLICATIONS Use up to 40% as a cereal adjunct in the total grist\n\n"
	},
	{
		grain: "Corn - Yellow, Flaked (Briess)",
		origin: "US",
		mash: false,
		color: 1.3,
		power: 0,
		potential: 1.039,
		maxPercent: 0,
		notes: "produce a beer with a mild, less malty flavor produce a drier, more crisp beer. APPLICATIONS Use up to 40% as a cereal adjunct in the total grist\n\n"
	},
	{
		grain: "Corn, Flaked",
		origin: "US",
		mash: true,
		color: 1.3,
		power: 0,
		potential: 1.037,
		maxPercent: 40,
		notes: "Generally a neutral flavor, used to reduce maltiness of beer Produces beer with a milder, less malty flavor Uses: Primarily for light Bohemian and Pilsner lagers\n\n"
	},
	{
		grain: "Crisp Crystal 77L",
		origin: "US",
		mash: false,
		color: 77,
		power: 0,
		potential: 1.034,
		maxPercent: 20,
		notes: "Adds body, color and improves head retention. Also called \"Crystal\" malt.\n\n"
	},
	{
		grain: "Crystal 40, 2-Row, (Great Western)",
		origin: "US",
		mash: false,
		color: 40,
		power: 0,
		potential: 1.032,
		maxPercent: 25,
		notes: "Crystal 40 (35-45°L)A fully modified and saccharified two-row crystal malt roasted to a target color of 40° ASBC. A versatile malt providing moderate color and caramel flavor.\n\n"
	},
	{
		grain: "Crystal 60, 2-Row, (Great Western)",
		origin: "US",
		mash: false,
		color: 60,
		power: 0,
		potential: 1.032,
		maxPercent: 15,
		notes: "Crystal 60 (55-65°L) Similar to C40 but with a more extensive roasting to a target color of 60° ASBC. Has a more pronounced caramel flavor to coincide with the color.\n\n"
	},
	{
		grain: "Crystal 60, 2-Row, (Great Western)",
		origin: "US",
		mash: false,
		color: 60,
		power: 0,
		potential: 1.032,
		maxPercent: 15,
		notes: "Crystal 60 (55-65°L) Similar to C40 but with a more extensive roasting to a target color of 60° ASBC. Has a more pronounced caramel flavor to coincide with the color.\n\n"
	},
	{
		grain: "Crystal 60L",
		origin: "United Kingdom",
		mash: false,
		color: 60,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Crystal 70/80L",
		origin: "United Kingdom",
		mash: false,
		color: 75,
		power: 120,
		potential: 1.035,
		maxPercent: 20,
		notes: "\n\n"
	},
	{
		grain: "Crystal Malt - 60L (Thomas Fawcett)",
		origin: "United Kingdom",
		mash: false,
		color: 60,
		power: 0,
		potential: 1.034,
		maxPercent: 10,
		notes: "Caramel or crystal malt from Thomas Fawcett. Adds Toffee caramel flavor. Improves head retention and body.\n\n"
	},
	{
		grain: "Crystal Malt - 60L (Thomas Fawcett)",
		origin: "United Kingdom",
		mash: false,
		color: 60,
		power: 0,
		potential: 1.034,
		maxPercent: 10,
		notes: "Caramel or crystal malt from Thomas Fawcett. Adds Toffee caramel flavor. Improves head retention and body.\n\n"
	},
	{
		grain: "Crystal, Dark (Simpsons)",
		origin: "UK",
		mash: false,
		color: 80,
		power: 0,
		potential: 1.035,
		maxPercent: 10,
		notes: "Contributes a strong reddish hue to milds, brown ales, and other dark beers. The long kilning of this malt imparts a roasty edge on top of the malty sweetness of a crystal malt.\n\n"
	},
	{
		grain: "Crystal, Extra Dark (Simpsons)",
		origin: "UK",
		mash: false,
		color: 160,
		power: 0,
		potential: 1.035,
		maxPercent: 10,
		notes: "Very dark English crystal malt with deep amber color and burnt sugar and dark fruit flavors.\n\n"
	},
	{
		grain: "Crystal, Medium (Simpsons)",
		origin: "UK",
		mash: false,
		color: 55,
		power: 0,
		potential: 1.035,
		maxPercent: 20,
		notes: "Versatile English crystal malt imparts a rich gold to copper-red color and caramel flavor and increases foam stability.\n\n"
	},
	{
		grain: "Crystal, Medium (Simpsons)",
		origin: "UK",
		mash: false,
		color: 55,
		power: 0,
		potential: 1.035,
		maxPercent: 20,
		notes: "Versatile English crystal malt imparts a rich gold to copper-red color and caramel flavor and increases foam stability.\n\n"
	},
	{
		grain: "English Crystal, 50-60 L",
		origin: "",
		mash: false,
		color: 55,
		power: 0,
		potential: 1.034,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Floor-Malted Bohemian Pilsner",
		origin: "German",
		mash: false,
		color: 1.8,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Golden Promise (Simpsons)",
		origin: "UK",
		mash: false,
		color: 2,
		power: 120,
		potential: 1.038,
		maxPercent: 100,
		notes: "Great base malt that produces a sweet and clean wort. An integral ingredient in Scottish ales and lagers.\n\n"
	},
	{
		grain: "Home Roasted Pilsner",
		origin: "Florida",
		mash: false,
		color: 200,
		power: 0,
		potential: 1.03,
		maxPercent: 10,
		notes: "Extreme caramel aroma and flavored malt. Used in dark Belgian Abbey and Trappist ales. Unique flavor and aroma.\n\n"
	},
	{
		grain: "Home Toasted/Roasted Munich Malt",
		origin: "United Kingdom",
		mash: false,
		color: 27,
		power: 0,
		potential: 1.033,
		maxPercent: 10,
		notes: "Toasted in oven at 350 degrees for 30 minutes\n\n"
	},
	{
		grain: "Home Toasted/Roasted Munich Malt",
		origin: "United Kingdom",
		mash: false,
		color: 27,
		power: 0,
		potential: 1.033,
		maxPercent: 10,
		notes: "Toasted in oven at 350 degrees for 30 minutes\n\n"
	},
	{
		grain: "Honey Malt",
		origin: "Canada",
		mash: true,
		color: 25,
		power: 0,
		potential: 1.037,
		maxPercent: 10,
		notes: "Intensely sweet - adds a sweet malty flavor sometimes associated with honey. Also called Brumalt.\n\n"
	},
	{
		grain: "Honey Malt (Gambrinus)",
		origin: "Canada",
		mash: false,
		color: 25,
		power: 50,
		potential: 1.038,
		maxPercent: 20,
		notes: "This malt is similar in style to German “brumalt”, but it really doesn’t compare to any other malt with its honey-like taste and residual sweetness. Best used in brown ales, porters, and stouts.\n\n"
	},
	{
		grain: "Kolsch Malt",
		origin: "Germany",
		mash: true,
		color: 4.5,
		power: 60,
		potential: 1.037,
		maxPercent: 100,
		notes: "For brewing Kolsch-type beers. This malt is produced only in the Cologne region of Germany.\n\n"
	},
	{
		grain: "Lager Malt",
		origin: "",
		mash: true,
		color: 2,
		power: 100,
		potential: 1.038,
		maxPercent: 100,
		notes: "Very light lager malt used to make Pilsners, Lagers and other light beers. May be used as a base malt.\n\n"
	},
	{
		grain: "Light Roasted Barley (Briess)",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 1.033,
		maxPercent: 0,
		notes: "FLAVOR: Coffee, Intense Bitter COLOR: Red to Deep Brown Use 3-7% for coffee flavor in Porter and Stout Use 2-5% in Nut Brown Ales. Use Chocolate Malt or Black Malt in combination with Roasted Barley to obtain desired color.\n\n"
	},
	{
		grain: "Maris Otter (Crisp)",
		origin: "United Kingdom",
		mash: false,
		color: 4,
		power: 50,
		potential: 1.038,
		maxPercent: 100,
		notes: "Premium base malt from the UK. Popular for many English styles of beer including ales, pale ales and bitters.\n\n"
	},
	{
		grain: "Maris Otter (Crisp)",
		origin: "United Kingdom",
		mash: false,
		color: 4,
		power: 50,
		potential: 1.038,
		maxPercent: 100,
		notes: "Premium base malt from the UK. Popular for many English styles of beer including ales, pale ales and bitters.\n\n"
	},
	{
		grain: "Maris Otter Ale Malt",
		origin: "",
		mash: false,
		color: 4,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Maris Otter Malt (Muntons)",
		origin: "United Kingdom",
		mash: false,
		color: 3,
		power: 62,
		potential: 1.036,
		maxPercent: 100,
		notes: "Muntons Maris Otter malt is a 2-row winter variety of barley specially bred for use in the brewing industry. It has a low nitrogen content and high quality malt characteristics which give beers a lush, full flavor profile. It is generally regarded as having a more rich maltiness than standard American 2-row varieties that have been bred specifically for yield. Plump kernels with good husks for filtration, Maris Otter has a breadiness that goes well in British style ales, but may be used in any recipe where more malt character and a more rounded flavor are desired.\n\n"
	},
	{
		grain: "Maris Otter Pale",
		origin: "United Kingdom",
		mash: false,
		color: 3.75,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Melanoiden Malt",
		origin: "Germany",
		mash: true,
		color: 20,
		power: 10,
		potential: 1.037,
		maxPercent: 15,
		notes: "Aromatic malt from Banberg, Germany. Promotes a full flavor and rounds off beer color. Promotes deep red color and malty flavor.\n\n"
	},
	{
		grain: "Melanoidin (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 27,
		power: 0,
		potential: 1.037,
		maxPercent: 20,
		notes: "Red colored malt that improved head retention and stability. Used in red lagers, ales, dark beers. Intense red colour and malty aroma.\n\n"
	},
	{
		grain: "Melanoidin (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 30,
		power: 0,
		potential: 1.037,
		maxPercent: 20,
		notes: "Red colored malt that improved head retention and stability. Used in red lagers, ales, dark beers. Intense red colour and malty aroma.\n\n"
	},
	{
		grain: "MFB Pilsen",
		origin: "France",
		mash: false,
		color: 1.8,
		power: 120,
		potential: 1.036,
		maxPercent: 100,
		notes: "\n\n"
	},
	{
		grain: "Mild Malt",
		origin: "United Kingdom",
		mash: true,
		color: 4,
		power: 53,
		potential: 1.037,
		maxPercent: 100,
		notes: "Also called \"English Mild\" - a light specialty malt used in Brown Ales\n\n"
	},
	{
		grain: "Munich (BestMälz)",
		origin: "Germany",
		mash: false,
		color: 7.6142132,
		power: 150,
		potential: 1.035,
		maxPercent: 100,
		notes: "BEST Munich intensifies the color of the beer. It emphasizes the malt aroma of dark beer in an exciting way. It forms an excellent enzyme-rich foundation for all color-intensive beer styles. This malt is produced using a special malting process designed to bring out certain desirable qualities, such as high solubility.\n\n"
	},
	{
		grain: "Munich 10L (Briess)",
		origin: "US",
		mash: false,
		color: 7,
		power: 40,
		potential: 1.035,
		maxPercent: 100,
		notes: "FLAVOR: Robust MaltyCOLOR: Golden to Orange HuesAdds a pronounced malty flavor without adding non-fermentables or affecting foam.Small amounts added to the grist will improve the malty flavor and give a richer color to low gravity brews.\n\n"
	},
	{
		grain: "Munich 10L (Briess)",
		origin: "US",
		mash: false,
		color: 10,
		power: 40,
		potential: 1.035,
		maxPercent: 100,
		notes: "FLAVOR: Robust Malty COLOR: Golden to Orange Hues Adds a pronounced malty flavor without adding non-fermentables or affecting foam. Small amounts added to the grist will improve the malty flavor and give a richer color to low gravity brews.\n\n"
	},
	{
		grain: "Munich 10L (Gambrinus)",
		origin: "US",
		mash: false,
		color: 10,
		power: 50,
		potential: 1.035,
		maxPercent: 80,
		notes: "Malty-sweet flavor characteristic and adds a slight orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers\n\n"
	},
	{
		grain: "Munich Dark (BestMälz)",
		origin: "Germany",
		mash: false,
		color: 12.6903553,
		power: 150,
		potential: 1.035,
		maxPercent: 100,
		notes: "BEST Munich Dark gives a pleasant full-bodied and malty flavor. The impact when using this darker malt is similar to BEST Munich: the color is even more intensified, the malt aroma is strengthened. Enzyme richness of this malt offers opportunities for brewing strongly colored beers. The production process for this malt is similar to the lighter variant of our BEST Munich.\n\n"
	},
	{
		grain: "Munich I (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 7.1,
		power: 50,
		potential: 1.038,
		maxPercent: 100,
		notes: "Light Munich malt. May be used as a base for many German beer styles. Fest beers, bocks, ales. Enhances malty flavour and aroma\n\n"
	},
	{
		grain: "Munich I (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 7,
		power: 5,
		potential: 1,
		maxPercent: 1,
		notes: "Light Munich malt. May be used as a base for many German beer styles. Fest beers, bocks, ales. Enhances malty flavour and aroma\n\n"
	},
	{
		grain: "Munich Light",
		origin: "German",
		mash: false,
		color: 6,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Munich Malt",
		origin: "Germany",
		mash: true,
		color: 9,
		power: 72,
		potential: 1.037,
		maxPercent: 80,
		notes: "Malty-sweet flavor characteristic and adds a reddish amber color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers\n\n"
	},
	{
		grain: "Munich Malt (Great Western)",
		origin: "Canada",
		mash: false,
		color: 9,
		power: 90,
		potential: 1.037,
		maxPercent: 100,
		notes: "This mellow kilned malt is ideal where unique malt flavor and rich aroma, is sought.\n\n"
	},
	{
		grain: "Munich Malt - 10L",
		origin: "US",
		mash: true,
		color: 10,
		power: 50,
		potential: 1.035,
		maxPercent: 80,
		notes: "Malty-sweet flavor characteristic and adds a slight orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers\n\n"
	},
	{
		grain: "Munich Malt - 20L",
		origin: "US",
		mash: true,
		color: 20,
		power: 25,
		potential: 1.035,
		maxPercent: 80,
		notes: "Malty-sweet flavor characteristic and adds a orange to deep orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers\n\n"
	},
	{
		grain: "Munich Malt, Light (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 5.5,
		power: 72,
		potential: 1.037,
		maxPercent: 80,
		notes: "Malty-sweet flavor characteristic and adds a reddish amber color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers\n\n"
	},
	{
		grain: "Munich Malt, Light (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 5.5,
		power: 72,
		potential: 1.037,
		maxPercent: 80,
		notes: "Malty-sweet flavor characteristic and adds a reddish amber color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers\n\n"
	},
	{
		grain: "Oats, Flaked",
		origin: "US",
		mash: true,
		color: 1,
		power: 0,
		potential: 1.037,
		maxPercent: 30,
		notes: "Adds body, mouth feel and head retention to the beer Used in oatmeal stouts and porters Adds substantial protein haze to light beers Protein rest recommended unless flakes are pregelatinized\n\n"
	},
	{
		grain: "Oats, Flaked (toasted)",
		origin: "US",
		mash: true,
		color: 15,
		power: 0,
		potential: 1.037,
		maxPercent: 30,
		notes: "Adds body, mouth feel and head retention to the beer Used in oatmeal stouts and porters Adds substantial protein haze to light beers Protein rest recommended unless flakes are pregelatinized\n\n"
	},
	{
		grain: "Oats, Golden Naked (Simpsons)",
		origin: "UK",
		mash: false,
		color: 10,
		power: 0,
		potential: 1.032,
		maxPercent: 15,
		notes: "This unique product from Simpsons has a special, sweet berry-nut flavor. Used at a rate of 4-15% of total grist by weight, Golden Naked Oats will deliver a deep golden hue with light caramel flavors to the finished beer as well as a creamy, satin finish.\n\n"
	},
	{
		grain: "Oats, Malted",
		origin: "US",
		mash: true,
		color: 1,
		power: 0,
		potential: 1.037,
		maxPercent: 10,
		notes: "Malted oats. Adds body, mouth feel and head retention to the beer Creates chill haze in lighter beers, so is primarily used in dark ones.\n\n"
	},
	{
		grain: "Pale 2-Row",
		origin: "American",
		mash: false,
		color: 1.8,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Pale 2-Row",
		origin: "American",
		mash: false,
		color: 1.8,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Pale 2-Row",
		origin: "American",
		mash: false,
		color: 1.8,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Pale 6-Row",
		origin: "American",
		mash: false,
		color: 1.8,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Pale Ale Malt",
		origin: "US",
		mash: true,
		color: 3.5,
		power: 85,
		potential: 1.036,
		maxPercent: 100,
		notes: "A US alternative to British or Belgian pale ale malts. Slightly darker than 2-row. Yields richer, maltier flavors than standard 2-row.\n\n"
	},
	{
		grain: "Pale Ale Malt 2-Row (Briess)",
		origin: "US",
		mash: false,
		color: 3.5,
		power: 85,
		potential: 1.037,
		maxPercent: 100,
		notes: "Flavor:MaltyColor Golden HuesCan be used as a base malt.More pronounced malty flavor than 2-Row Brewers Malt.Use with 2-Row Brewers Malt for rich malt flavor and additional color.\n\n"
	},
	{
		grain: "Pale Ale Malt 2-Row (Briess)",
		origin: "US",
		mash: false,
		color: 3.5,
		power: 85,
		potential: 1.037,
		maxPercent: 100,
		notes: "Flavor:Malty Color Golden Hues Can be used as a base malt. More pronounced malty flavor than 2-Row Brewers Malt. Use with 2-Row Brewers Malt for rich malt flavor and additional color.\n\n"
	},
	{
		grain: "Pale Ale Malt 2-Row (Briess)",
		origin: "US",
		mash: false,
		color: 3.5,
		power: 85,
		potential: 1.037,
		maxPercent: 100,
		notes: "Flavor:Malty Color Golden Hues Can be used as a base malt. More pronounced malty flavor than 2-Row Brewers Malt. Use with 2-Row Brewers Malt for rich malt flavor and additional color.\n\n"
	},
	{
		grain: "Pale Ale Malt, Full Pint (Great Western)",
		origin: "US",
		mash: false,
		color: 2.25,
		power: 158,
		potential: 1.037,
		maxPercent: 100,
		notes: "GWM Full Pint Malt (2.0-2.5L) A spring 2-row barley developed at Oregon State University (originally named BCD-47). Described as \"very fermentable and having a very nice extract... Full Pint wort also tasted very good, pre and post boiled... a very pleasant and strong fresh salted popcorn note. A very positive clean sweetness as well, with no harshness or astringency... the fermented Full Pint beer was clean, slightly estery, a bit tart and bready.\"\n\n"
	},
	{
		grain: "Pale Ale Malt, Full Pint (Great Western)",
		origin: "US",
		mash: false,
		color: 2.25,
		power: 158,
		potential: 1.037,
		maxPercent: 100,
		notes: "GWM Full Pint Malt (2.0-2.5L) A spring 2-row barley developed at Oregon State University (originally named BCD-47). Described as \"very fermentable and having a very nice extract... Full Pint wort also tasted very good, pre and post boiled... a very pleasant and strong fresh salted popcorn note. A very positive clean sweetness as well, with no harshness or astringency... the fermented Full Pint beer was clean, slightly estery, a bit tart and bready.\"\n\n"
	},
	{
		grain: "Pale Chocolate",
		origin: "UK",
		mash: false,
		color: 225,
		power: 0,
		potential: 1.028,
		maxPercent: 10,
		notes: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt.\n\n"
	},
	{
		grain: "Pale Chocolate Malt",
		origin: "UK",
		mash: false,
		color: 250,
		power: 0,
		potential: 1.033,
		maxPercent: 10,
		notes: "\n\n"
	},
	{
		grain: "Pale Malt (2 Row) Belgian",
		origin: "Belgium",
		mash: true,
		color: 3,
		power: 60,
		potential: 1.037,
		maxPercent: 100,
		notes: "Base malt for all beer styles Higher potential yield than US, English equivalent pale ale malts\n\n"
	},
	{
		grain: "Pale Malt (2 Row) UK",
		origin: "United Kingdom",
		mash: true,
		color: 3,
		power: 45,
		potential: 1.036,
		maxPercent: 100,
		notes: "Base malt for all English beer styles Lower diastatic power than American 2 Row Pale Malt\n\n"
	},
	{
		grain: "Pale Malt (2 Row) US",
		origin: "US",
		mash: true,
		color: 2,
		power: 120,
		potential: 1.036,
		maxPercent: 100,
		notes: "Base malt for all beer styles\n\n"
	},
	{
		grain: "Pale Malt (2 Row), NW Pale",
		origin: "US",
		mash: false,
		color: 2,
		power: 140,
		potential: 1.036,
		maxPercent: 100,
		notes: "Base malt for all beer styles\n\n"
	},
	{
		grain: "Pale Malt (6 Row) US",
		origin: "US",
		mash: true,
		color: 2,
		power: 150,
		potential: 1.035,
		maxPercent: 100,
		notes: "Base malt for all beer styles\n\n"
	},
	{
		grain: "Pale Malt, Golden Promise",
		origin: "United Kingdom",
		mash: true,
		color: 2.5,
		power: 70,
		potential: 1.037,
		maxPercent: 100,
		notes: "Malt from a traditional barley variety grown in Scotland. Golden Promise produces a mellow wort, with a sweet, clean flavor. This base malt is a must for authentic Scottish ales, great for English styles as well.\n\n"
	},
	{
		grain: "Pale Malt, Golden Promise (Thomas Fawcett)",
		origin: "United Kingdom",
		mash: false,
		color: 3,
		power: 120,
		potential: 1.038,
		maxPercent: 100,
		notes: "Floor malted spring barley from the UK. Suitable base male for all types of ales.\n\n"
	},
	{
		grain: "Pale Malt, Halcyon",
		origin: "United Kingdom",
		mash: true,
		color: 2.5,
		power: 70,
		potential: 1.037,
		maxPercent: 100,
		notes: "Halcyon Pale Ale Malt is considered to be one of the last remaining traditional English Pale Malts. Adds a degree of biscuit flavor to the beer. Brighter and lighter in flavor than Pearl, Halcyon is a great malt for the production of Real Ales. It tends to produce a less sweet wort than Maris Otter.\n\n"
	},
	{
		grain: "Pale Malt, Maris Otter",
		origin: "United Kingdom",
		mash: true,
		color: 3,
		power: 120,
		potential: 1.038,
		maxPercent: 100,
		notes: "Premium base malt from the UK. Popular for many English styles of beer including ales, pale ales and bitters.\n\n"
	},
	{
		grain: "Peat Smoked Malt",
		origin: "United Kingdom",
		mash: true,
		color: 2.8,
		power: 0,
		potential: 1.034,
		maxPercent: 20,
		notes: "Robust smoky malt that provides a smoky flavor. Used in scottish ales and wee heavy ales.\n\n"
	},
	{
		grain: "Pilsen (BestMälz)",
		origin: "Germany",
		mash: false,
		color: 1.5228426,
		power: 329,
		potential: 1.036,
		maxPercent: 100,
		notes: "BEST Pilsen Malt gives beer a fresh and rounded taste. It is used for all types of beers based on basically barley malt. It forms an excellent “light” and enzyme-rich foundation for almost all beer styles. Malt characteristics: low protein levels, high extract content, light color and high enzymatic activity. BEST Pilsen Malt is also available in organic quality.\n\n"
	},
	{
		grain: "Pilsen (BestMälz)",
		origin: "Germany",
		mash: false,
		color: 1.5228426,
		power: 329,
		potential: 1.036,
		maxPercent: 100,
		notes: "BEST Pilsen Malt gives beer a fresh and rounded taste. It is used for all types of beers based on basically barley malt. It forms an excellent “light” and enzyme-rich foundation for almost all beer styles. Malt characteristics: low protein levels, high extract content, light color and high enzymatic activity. BEST Pilsen Malt is also available in organic quality.\n\n"
	},
	{
		grain: "Pilsen (BestMälz)",
		origin: "Germany",
		mash: false,
		color: 1.5228426,
		power: 329,
		potential: 1.036,
		maxPercent: 100,
		notes: "BEST Pilsen Malt gives beer a fresh and rounded taste. It is used for all types of beers based on basically barley malt. It forms an excellent “light” and enzyme-rich foundation for almost all beer styles. Malt characteristics: low protein levels, high extract content, light color and high enzymatic activity. BEST Pilsen Malt is also available in organic quality.\n\n"
	},
	{
		grain: "Pilsen (BestMälz)",
		origin: "Germany",
		mash: false,
		color: 1.5228426,
		power: 329,
		potential: 1.036,
		maxPercent: 100,
		notes: "BEST Pilsen Malt gives beer a fresh and rounded taste. It is used for all types of beers based on basically barley malt. It forms an excellent “light” and enzyme-rich foundation for almost all beer styles. Malt characteristics: low protein levels, high extract content, light color and high enzymatic activity. BEST Pilsen Malt is also available in organic quality.\n\n"
	},
	{
		grain: "Pilsen (BestMälz)",
		origin: "Germany",
		mash: false,
		color: 1,
		power: 3,
		potential: 1,
		maxPercent: 1,
		notes: "BEST Pilsen Malt gives beer a fresh and rounded taste. It is used for all types of beers based on basically barley malt. It forms an excellent “light” and enzyme-rich foundation for almost all beer styles. Malt characteristics: low protein levels, high extract content, light color and high enzymatic activity. BEST Pilsen Malt is also available in organic quality.\n\n"
	},
	{
		grain: "Pilsen (Dingemans)",
		origin: "Belgium",
		mash: false,
		color: 1.6,
		power: 90,
		potential: 1.037,
		maxPercent: 100,
		notes: "\n\n"
	},
	{
		grain: "Pilsen (Dingemans)",
		origin: "Belgium",
		mash: false,
		color: 1.6,
		power: 90,
		potential: 1.037,
		maxPercent: 100,
		notes: "\n\n"
	},
	{
		grain: "Pilsen (Dingemans)",
		origin: "Belgium",
		mash: false,
		color: 1.6,
		power: 90,
		potential: 1.037,
		maxPercent: 100,
		notes: "\n\n"
	},
	{
		grain: "Pilsner (2 Row) Belgian",
		origin: "Belgium",
		mash: true,
		color: 2,
		power: 105,
		potential: 1.036,
		maxPercent: 100,
		notes: "Belgian base malt for Continental lagers\n\n"
	},
	{
		grain: "Pilsner (2 Row) German",
		origin: "Germany",
		mash: true,
		color: 2,
		power: 110,
		potential: 1.037,
		maxPercent: 100,
		notes: "German base for Pilsners and Bohemian Lagers\n\n"
	},
	{
		grain: "Pilsner (2 Row) UK",
		origin: "United Kingdom",
		mash: true,
		color: 1,
		power: 60,
		potential: 1.036,
		maxPercent: 100,
		notes: "Pilsner base malt\n\n"
	},
	{
		grain: "Pilsner (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 110,
		potential: 1.038,
		maxPercent: 100,
		notes: "Pilsner base malt for all pilsners, lagers. Highly modified malt.\n\n"
	},
	{
		grain: "Pilsner (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 110,
		potential: 1.038,
		maxPercent: 100,
		notes: "Pilsner base malt for all pilsners, lagers. Highly modified malt.\n\n"
	},
	{
		grain: "Pilsner (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 110,
		potential: 1.038,
		maxPercent: 100,
		notes: "Pilsner base malt for all pilsners, lagers. Highly modified malt.\n\n"
	},
	{
		grain: "Pilsner (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 110,
		potential: 1.038,
		maxPercent: 100,
		notes: "Pilsner base malt for all pilsners, lagers. Highly modified malt.\n\n"
	},
	{
		grain: "Pilsner (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 110,
		potential: 1.038,
		maxPercent: 100,
		notes: "Pilsner base malt for all pilsners, lagers. Highly modified malt.\n\n"
	},
	{
		grain: "Pilsner (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 110,
		potential: 1.038,
		maxPercent: 100,
		notes: "Pilsner base malt for all pilsners, lagers. Highly modified malt.\n\n"
	},
	{
		grain: "Pilsner (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 110,
		potential: 1.038,
		maxPercent: 100,
		notes: "Pilsner base malt for all pilsners, lagers. Highly modified malt.\n\n"
	},
	{
		grain: "Pilsner (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 110,
		potential: 1.038,
		maxPercent: 100,
		notes: "Pilsner base malt for all pilsners, lagers. Highly modified malt.\n\n"
	},
	{
		grain: "Pilsner (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 110,
		potential: 1.038,
		maxPercent: 100,
		notes: "Pilsner base malt for all pilsners, lagers. Highly modified malt.\n\n"
	},
	{
		grain: "Pilsner Malt (Avangard)",
		origin: "Germany",
		mash: false,
		color: 3.5,
		power: 220,
		potential: 1.037,
		maxPercent: 100,
		notes: "\n\n"
	},
	{
		grain: "Pilsner Malt (Avangard)",
		origin: "Germany",
		mash: false,
		color: 3.5,
		power: 220,
		potential: 1.037,
		maxPercent: 100,
		notes: "\n\n"
	},
	{
		grain: "Pilsner Malt (Avangard)",
		origin: "Germany",
		mash: false,
		color: 1.7,
		power: 67,
		potential: 1.037,
		maxPercent: 100,
		notes: "Highly-modified, it has been reported that brewers tend to get excellent efficiency out of this malt. It produces beers with a nice light golden color. Avangard pilsner malt can be used in a range of different styles and in any beer that calls for pilsner malt.\n\n"
	},
	{
		grain: "Pilsner malt, 300 degrees for 25 minutes",
		origin: "US",
		mash: false,
		color: 20,
		power: 25,
		potential: 1.035,
		maxPercent: 80,
		notes: "Malty-sweet flavor characteristic and adds a orange to deep orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers\n\n"
	},
	{
		grain: "Pilsner malt, 400 degrees for 50 minutes",
		origin: "US",
		mash: false,
		color: 200,
		power: 0,
		potential: 1.028,
		maxPercent: 10,
		notes: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt.\n\n"
	},
	{
		grain: "RedX (BestMälz)",
		origin: "Alemanha",
		mash: false,
		color: 15.2284264,
		power: 250,
		potential: 1.036,
		maxPercent: 100,
		notes: "BEST Red X malt is specially created for brewing red-tinted beers. You can use BEST Red X for up to 100% of your grain bill – no other malt is required. Offering exceptional reliability and optimal processability, BEST Red X can be employed to brew consistently fiery beers with intense reddish hues. Its full-bodied flavor and attractive, unique color coupled with easy han-dling in the brewery make BEST Red X the best choice for creating a broad range of new beers, such as red-tinted wheat beers. As with all BEST malts, BEST Red X is produced using a special malting procedure exclusively from two-rowed spring malting barley from recognized and thor-oughly tested barley varieties.\n\n"
	},
	{
		grain: "RedX (BestMälz)",
		origin: "Germany",
		mash: false,
		color: 15.2284264,
		power: 250,
		potential: 1.036,
		maxPercent: 100,
		notes: "BEST Red X® has been invented for brewing red-tinted beers. You can use BEST Red X® for up to 100% of your grain bill - no other malt is required. Offering exceptional reliability and optimal processability, BEST Red X® can be employed to brew consistently fiery beers with intense reddish hues. Its full-bodied flavor and attractive, unique color coupled with easy handling in the brewery, make BEST Red X® the best choice for creating a broad range of new beers, such as red-tinted wheat beers.\n\n"
	},
	{
		grain: "Rice, Flaked",
		origin: "US",
		mash: true,
		color: 1,
		power: 0,
		potential: 1.032,
		maxPercent: 25,
		notes: "Used to add fermentables without increasing body or flavor. Produces a milder, less grainy tasting beer. Examples: American lagers, Bohemian lagers, Pilsners\n\n"
	},
	{
		grain: "Rice, Flaked (Briess)",
		origin: "US",
		mash: false,
		color: 1,
		power: 0,
		potential: 1.032,
		maxPercent: 0,
		notes: "Use up to 40% as a cereal adjunct\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 0,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "US",
		mash: false,
		color: 500,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "United Kingdom",
		mash: false,
		color: 550,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Roasted Barley",
		origin: "US",
		mash: false,
		color: 300,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor.\n\n"
	},
	{
		grain: "Rye Malt",
		origin: "US",
		mash: true,
		color: 4.7,
		power: 75,
		potential: 1.029,
		maxPercent: 15,
		notes: "Adds a dry, crisp character to the beer. Yields a deep red color, and a distinctive rye flavor Must limit to 10-15% of the mash as it tends to produce \"stuck\" mashes.\n\n"
	},
	{
		grain: "Rye, Flaked",
		origin: "US",
		mash: true,
		color: 2,
		power: 0,
		potential: 1.036,
		maxPercent: 10,
		notes: "Imparts a dry, crisp rye flavor to rye beers. Can be easier to mash than raw rye.\n\n"
	},
	{
		grain: "Rye, Flaked (Briess)",
		origin: "US",
		mash: false,
		color: 4.6,
		power: 0,
		potential: 1.033,
		maxPercent: 0,
		notes: "Use up to 40% as a cereal adjunct in the total grist to create Rye Beer. Start at 5-10% and increase in increments of 5% because of the concentrated flavor of Rye Flakes.\n\n"
	},
	{
		grain: "Rye, Flaked (toasted)",
		origin: "US",
		mash: true,
		color: 10,
		power: 0,
		potential: 1.036,
		maxPercent: 10,
		notes: "Imparts a more intendse dry, crisp rye flavor to rye beers. Can be easier to mash than raw rye.\n\n"
	},
	{
		grain: "Simpson Golden Promise",
		origin: "",
		mash: false,
		color: 2,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "Smoked Malt",
		origin: "Germany",
		mash: true,
		color: 9,
		power: 0,
		potential: 1.037,
		maxPercent: 100,
		notes: "Malt that has been smoked over an open fire. Creates a distinctive \"smoked\" flavor and aroma. Used primarily for German Rauchbier but can also be added to Brown Ales and Porters.\n\n"
	},
	{
		grain: "Special B (Castle Malting)",
		origin: "Belgien",
		mash: false,
		color: 152.284264,
		power: 0,
		potential: 1.035,
		maxPercent: 10,
		notes: "Mycket speciell belgisk karkellmalt.Ger en djupt röd till mörkt brun-svart färg och fylligare kropp, unik rik maltig smak och arom av russin, nötter och plommon. Används tex till Abbey Ales.\n\n"
	},
	{
		grain: "Special B (Dingemans)",
		origin: "Belgium",
		mash: false,
		color: 147.5,
		power: 0,
		potential: 1.03,
		maxPercent: 20,
		notes: "\n\n"
	},
	{
		grain: "Special B Malt",
		origin: "Belgium",
		mash: false,
		color: 180,
		power: 0,
		potential: 1.03,
		maxPercent: 10,
		notes: "Extreme caramel aroma and flavored malt. Used in dark Belgian Abbey and Trappist ales. Unique flavor and aroma.\n\n"
	},
	{
		grain: "Special Roast",
		origin: "US",
		mash: true,
		color: 50,
		power: 6,
		potential: 1.033,
		maxPercent: 10,
		notes: "Use for English ales, nut brown ales and porters. Adds a toasted, biscuit like flavor and aroma\n\n"
	},
	{
		grain: "Thomas Fawcett Maris Otter",
		origin: "United Kingdom",
		mash: false,
		color: 3,
		power: 120,
		potential: 1.037,
		maxPercent: 100,
		notes: "Premium base malt from the UK. Popular for many English styles of beer including ales, pale ales and bitters.\n\n"
	},
	{
		grain: "Toasted Malt",
		origin: "United Kingdom",
		mash: true,
		color: 27,
		power: 0,
		potential: 1.033,
		maxPercent: 10,
		notes: "Toasted malt can be made at home by toasting pale malted barley for 10-15 minutes at 350 F. Similar to Biscuit or Victory malt - this malt adds reddish/orange color and improved body without sweetness. Toasted flavor. Mashing required to avoid haze.\n\n"
	},
	{
		grain: "Triticale, Flaked",
		origin: "",
		mash: false,
		color: 2,
		power: 0,
		potential: 0,
		maxPercent: 100,
		notes: "\n\n"
	},
	{
		grain: "Two-Row Pale Malt",
		origin: "Pale Moon, Alamosa CO",
		mash: false,
		color: 3,
		power: 150,
		potential: 1.037,
		maxPercent: 100,
		notes: "Batch from Craft Maltster in Texas - Blacklands Malt\n\n"
	},
	{
		grain: "Victory Malt",
		origin: "US",
		mash: true,
		color: 25,
		power: 50,
		potential: 1.034,
		maxPercent: 15,
		notes: "Toasted malt that adds a \"Biscuit\" or toasted flavor to English ales. Use for: Nut brown ales, porters\n\n"
	},
	{
		grain: "Vienna (BestMälz)",
		origin: "Germany",
		mash: false,
		color: 4.0609137,
		power: 220,
		potential: 1.035,
		maxPercent: 100,
		notes: "BEST Vienna deepens the light and brilliant color of the beer and creates a pleasant, full-bodied and malty taste. Selected malting barley is used to produce the malt and it is created according to a special malting process. This malt has a high enzymatic potential.\n\n"
	},
	{
		grain: "Vienna Malt",
		origin: "Germany",
		mash: true,
		color: 3.5,
		power: 50,
		potential: 1.036,
		maxPercent: 90,
		notes: "Kiln dried malt darker than Pale Malt, but not as dark as Munich Malt Imparts a golden to orange color to the beer.\n\n"
	},
	{
		grain: "Vienna Malt (Avangard)",
		origin: "Germnay",
		mash: false,
		color: 3,
		power: 50,
		potential: 1.038,
		maxPercent: 100,
		notes: "Darker than pale malt, Vienna malt is a great base malt that contributes golden colors and biscuity, malty flavors.\n\n"
	},
	{
		grain: "Vienna Malt (Briess)",
		origin: "US",
		mash: false,
		color: 3.5,
		power: 130,
		potential: 1.036,
		maxPercent: 100,
		notes: "FLAVOR: Malty, Very Slight Biscuit Can be used as a base malt Use with Caramel Malts to produce malty red and amber beers.\n\n"
	},
	{
		grain: "Vienna Malt (Briess)",
		origin: "US",
		mash: false,
		color: 3.5,
		power: 130,
		potential: 1.036,
		maxPercent: 100,
		notes: "FLAVOR: Malty, Very Slight Biscuit Can be used as a base malt Use with Caramel Malts to produce malty red and amber beers.\n\n"
	},
	{
		grain: "Vienna Malt (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 3,
		power: 50,
		potential: 1.038,
		maxPercent: 100,
		notes: "Vienna base malt - used in many continental beer styles. Full bodied, golden color.\n\n"
	},
	{
		grain: "Vienna Malt (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 3,
		power: 50,
		potential: 1.038,
		maxPercent: 100,
		notes: "Vienna base malt - used in many continental beer styles. Full bodied, golden color.\n\n"
	},
	{
		grain: "Vienna Malt (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 3,
		power: 50,
		potential: 1.038,
		maxPercent: 100,
		notes: "Vienna base malt - used in many continental beer styles. Full bodied, golden color.\n\n"
	},
	{
		grain: "Vienna Malt (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 3,
		power: 50,
		potential: 1.038,
		maxPercent: 100,
		notes: "Vienna base malt - used in many continental beer styles. Full bodied, golden color.\n\n"
	},
	{
		grain: "Vienna Malt (Weyermann)",
		origin: "Germany",
		mash: false,
		color: 3,
		power: 50,
		potential: 1.038,
		maxPercent: 100,
		notes: "Vienna base malt - used in many continental beer styles. Full bodied, golden color.\n\n"
	},
	{
		grain: "Wheat - White Malt (Briess)",
		origin: "US",
		mash: false,
		color: 2.3,
		power: 145,
		potential: 1.039,
		maxPercent: 100,
		notes: "FLAVOR: Creamy, Sweet, Malty, Wheat, Floury Imparts malty flavor not obtainable from raw wheat. Use with rice hulls to improve lautering and help prevent stuck mash. White Wheat Malt contributes to foam production and foam stability.\n\n"
	},
	{
		grain: "Wheat Malt, Bel",
		origin: "Belgium",
		mash: true,
		color: 2,
		power: 74,
		potential: 1.037,
		maxPercent: 60,
		notes: "Malted wheat for use in Wheat beers\n\n"
	},
	{
		grain: "Wheat Malt, Dark",
		origin: "Germany",
		mash: true,
		color: 9,
		power: 10,
		potential: 1.039,
		maxPercent: 20,
		notes: "Dark malted wheat base for use in dark wheat styles such as Dunkleweizen.\n\n"
	},
	{
		grain: "Wheat Malt, Ger",
		origin: "Germany",
		mash: true,
		color: 2,
		power: 95,
		potential: 1.039,
		maxPercent: 60,
		notes: "Malted wheat base for use in all wheat styles\n\n"
	},
	{
		grain: "Wheat Malt, White",
		origin: "US",
		mash: true,
		color: 2.4,
		power: 130,
		potential: 1.04,
		maxPercent: 60,
		notes: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers\n\n"
	},
	{
		grain: "Wheat Malt, White (Rahr)",
		origin: "U.S.",
		mash: false,
		color: 4,
		power: 130,
		potential: 1.039,
		maxPercent: 50,
		notes: "It’s a great base malt for any style wheat beer. It has a doughy, malty, bready flavor and aroma, with white wheat having a slightly milder wheat flavor than red wheat. High protein levels in wheat lend a fullness of body and excellent head retention, but can lead to difficulty sparging. Use small amounts to enhance foam, or use up to 50% of the grist. Recommend incorporating rice hulls to prevent a stuck sparge when using greater than 25%.\n\n"
	},
	{
		grain: "Wheat, Flaked",
		origin: "US",
		mash: true,
		color: 1.6,
		power: 0,
		potential: 1.035,
		maxPercent: 40,
		notes: "Flaked wheat adds to increased body and foam retention Used in place of raw or torrified wheat for faster conversion and better yield. May be used in small amounts to improve head retention and body Examples: Belgian White beer, Wit\n\n"
	},
	{
		grain: "Wheat, Roasted",
		origin: "Germany",
		mash: true,
		color: 425,
		power: 0,
		potential: 1.025,
		maxPercent: 10,
		notes: "Also called Chocolate Wheat Malt. Kilned raw wheat - adds a deep, dark brown color to dunkelweizens and other dark beer styles. Roasted, woody, charcoal or burnt toast flavor depending on degree of roasting.\n\n"
	},
	{
		grain: "Wheat, Torrified",
		origin: "US",
		mash: true,
		color: 1.7,
		power: 0,
		potential: 1.036,
		maxPercent: 40,
		notes: "Unmodified wheat that has been \"popped\" to open the kernels Used primarily in place of raw wheat when making Belgian White and Wit Faster conversion and higher yield than raw wheat Protein rest recommended when mashing\n\n"
	},
	{
		grain: "White Wheat",
		origin: "American",
		mash: false,
		color: 2.8,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "White Wheat",
		origin: "American",
		mash: false,
		color: 2.8,
		power: 0,
		potential: 0,
		maxPercent: 0,
		notes: "\n\n"
	},
	{
		grain: "White Wheat Malt",
		origin: "US",
		mash: false,
		color: 2.4,
		power: 130,
		potential: 1.04,
		maxPercent: 60,
		notes: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers\n\n"
	},
	{
		grain: "White Wheat Malt",
		origin: "US",
		mash: false,
		color: 2.4,
		power: 130,
		potential: 1.04,
		maxPercent: 60,
		notes: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers\n\n"
	},
	{
		grain: "White Wheat Malt",
		origin: "US",
		mash: false,
		color: 2.4,
		power: 130,
		potential: 1.04,
		maxPercent: 60,
		notes: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers\n\n"
	},
	{
		grain: "White Wheat Malt",
		origin: "US",
		mash: false,
		color: 2.4,
		power: 130,
		potential: 1.04,
		maxPercent: 60,
		notes: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers\n\n"
	},
	{
		grain: "White Wheat Malt",
		origin: "US",
		mash: false,
		color: 2.4,
		power: 130,
		potential: 1.04,
		maxPercent: 60,
		notes: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers\n\n"
	},
	{
		grain: "White Wheat Malt",
		origin: "US",
		mash: false,
		color: 2.4,
		power: 130,
		potential: 1.04,
		maxPercent: 60,
		notes: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers\n\n"
	},
	{
		grain: "White Wheat Malt",
		origin: "US",
		mash: false,
		color: 2.4,
		power: 130,
		potential: 1.04,
		maxPercent: 60,
		notes: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers\n\n"
	},
	{
		grain: "White Wheat Malt",
		origin: "US",
		mash: false,
		color: 2.4,
		power: 130,
		potential: 1.04,
		maxPercent: 60,
		notes: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers\n\n"
	}
];

export default fermentables;