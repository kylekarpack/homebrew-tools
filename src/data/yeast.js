const yeasts = [
	{
		"name": "Frankenyeast",
		"lab": "Various",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 75°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "A blend of twenty-five yeast strains, most of which are English or Belgian in origin.\n\nBest for: Anything where interesting yeast character is desired.\n\n"
	},
	{
		"name": "Nottingham Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "32°F - 32°F",
		"attenuationPercent": 77.5,
		"flocculation": "",
		"notes": "\n\n"
	},
	{
		"name": "Array American Hefeweizen Ale Yeast WLP320",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 69°F",
		"attenuationPercent": 76,
		"flocculation": "Low",
		"notes": "\n\n"
	},
	{
		"name": "WLP001 California Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 73°F",
		"attenuationPercent": 76.5,
		"flocculation": "High",
		"notes": "Very clean flavor, balance and stability. Accentuates hop flavor Versitile - can be used to make any style ale.\n\nBest for: American Style Ales, Ambers, Pale Ales, Brown Ale, Strong Ale\n\n"
	},
	{
		"name": "WLP002 English Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 68°F",
		"attenuationPercent": 66.5,
		"flocculation": "Very High",
		"notes": "Classic ESB strain best for English style milds, bitters, porters and English style stouts. Leaves a clear beer with some residual sweetness.\n\nBest for: English Pale Ale, ESB, India Pale Ale, Brown Ale, Porter, Sweet Stouts and Strong Ales\n\n"
	},
	{
		"name": "WLP003 German Ale II",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 70°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "Strong sulfer component will reduce with aging. Clean flavor, but with more ester production than regular German Ale Yeast.\n\nBest for: Kolsch, Alt and German Pale Ales\n\n"
	},
	{
		"name": "WLP004 Irish Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 68°F",
		"attenuationPercent": 71.5,
		"flocculation": "Medium",
		"notes": "Excellent for Irish Stouts. Produces slight hint of diacetyl balanced by a light fruitiness and a slightly dry crispness.\n\nBest for: Irish Ales, Stouts, Porters, Browns, Reds and Pale Ale\n\n"
	},
	{
		"name": "WLP005 British Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "67°F - 74°F",
		"attenuationPercent": 70.5,
		"flocculation": "High",
		"notes": "This yeast has higher attenuation than the White Labs English Ale yeast strains. Produces a malty flavored beer.\n\nBest for: Excellent for all English style ales including bitters, pale ale, porters and brown ale.\n\n"
	},
	{
		"name": "WLP006 Bedford British Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 70°F",
		"attenuationPercent": 76,
		"flocculation": "High",
		"notes": "High attenuation. Ferments dry with high flocculation. Distinctive ester profile. Good for most English ale styles.\n\nBest for: English style ales - bitter, pale, porter and brown ale\n\n"
	},
	{
		"name": "WLP007 Dry English Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 70°F",
		"attenuationPercent": 75,
		"flocculation": "High",
		"notes": "Clean, Highly flocculant, and highly attentive yeast. Similar to White labs English Ale yeast, but more attentive. Suitable for high gravity ales.\n\nBest for: Pale Ales, Amber, ESB, Brown Ales, Strong Ales\n\n"
	},
	{
		"name": "WLP008 East Coast Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 73°F",
		"attenuationPercent": 72.5,
		"flocculation": "Low",
		"notes": "White labs \"Brewer Patriot\" strain can be used to reproduce many of the American versions of classic beer styles. Very clean with low esters.\n\nBest for: American Ales, Golden ales, Blonde Ale, Pale Ale and German Alt styles\n\n"
	},
	{
		"name": "WLP009 Australian Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 70°F",
		"attenuationPercent": 72.5,
		"flocculation": "High",
		"notes": "White Labs entry for Australian Ales. Produces a clean, malty finish with pleasant ester character. Bready character. Can ferment clean at high temperatures.\n\nBest for: Australian Ales, English Ales\n\n"
	},
	{
		"name": "WLP011 European Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 70°F",
		"attenuationPercent": 67.5,
		"flocculation": "Medium",
		"notes": "Malty, Northern European ale yeast. Low ester production, low sulfer, gives a clean profile. Low attenuation contributes to malty taste.\n\nBest for: Alt, Kolsch, malty English Ales, Fruit beers\n\n"
	},
	{
		"name": "WLP013 London Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 71°F",
		"attenuationPercent": 71,
		"flocculation": "Medium",
		"notes": "Dry, malty ale yeast. Produces a complex, oak flavored ester character. Hop bitterness comes through well.\n\nBest for: Classic British Pale Ales, Bitters and Stouts\n\n"
	},
	{
		"name": "WLP022 Essex Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 70°F",
		"attenuationPercent": 73.5,
		"flocculation": "Medium",
		"notes": "Flavorful British yeast with a drier finish than many ale yeasts. Bready and fruity in character. Well suited for top cropping (collecting). Does not flocculate as much as WLP005 or WLP002.\n\nBest for: British milds, pale ales, bitters, stouts.\n\n"
	},
	{
		"name": "WLP023 Burton Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 73°F",
		"attenuationPercent": 72,
		"flocculation": "Medium",
		"notes": "Burton-on-trent yeast produces a complex character. Flavors include apple, pear, and clover honey.\n\nBest for: All English styles including Pale Ale, IPA, Porter, Stout and Bitters.\n\n"
	},
	{
		"name": "WLP025 Southwold Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 69°F",
		"attenuationPercent": 71.5,
		"flocculation": "Medium",
		"notes": "From Suffolk county. Products complex fruity and citrus flavors. Slight sulfer production, but this will fade with ageing.\n\nBest for: British bitters and pale ales.\n\n"
	},
	{
		"name": "WLP026 Premium Bitter Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "67°F - 70°F",
		"attenuationPercent": 72.5,
		"flocculation": "Medium",
		"notes": "From Staffordshire England. Mild, but complex estery flavor. High attenuation - ferments strong and dry. Suitable for high gravity beers.\n\nBest for: All English ales including bitters, milds, ESB, Porter, Stout and Barley Wine\n\n"
	},
	{
		"name": "WLP028 Edinburgh Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 70°F",
		"attenuationPercent": 72.5,
		"flocculation": "Medium",
		"notes": "Malty strong ale yeast. Reproduces complex, malty, flavorful schottish ales. Hop character comes through well.\n\nBest for: Strong Scottish style ales, ESB, Irish Reds\n\n"
	},
	{
		"name": "WLP029 German Ale/Kolsch",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 69°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Great for light beers. Accentuates hop flavors. Slight sulfer flavor will fade with age and leave a clean, lager like ale.\n\nBest for: Kolsch, Altbiers, Pale Ales, Blonde and Honey Ales\n\n"
	},
	{
		"name": "WLP033 Klassic Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 70°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Traditional English Ale style yeast. Produces ester character, and allows hop flavor through. Leaves a slightly sweet malt character in ales.\n\nBest for: Bitters, milds, porters stouts and scottish ale styles.\n\n"
	},
	{
		"name": "WLP036 Dusseldorf Alt Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 69°F",
		"attenuationPercent": 68.5,
		"flocculation": "Medium",
		"notes": "Traditional Alt yeast from Dusseldorf, Germany. Produces clean, slightly sweet alt beers. Does not accentuate hop flavor like WLP029 does.\n\nBest for: Alt biers, Dusseldorf Alts, German Ales\n\n"
	},
	{
		"name": "WLP037 Yorkshire Square Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 69°F",
		"attenuationPercent": 70,
		"flocculation": "High",
		"notes": "This yeast produces a malty but well balanced profile. Expect toasty flavors with malt driven esters. Highly flocculent and a good choice for many English ales.\n\nBest for: English pale ales, English brown ales and Mild ales\n\n"
	},
	{
		"name": "WLP038 Manchester Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 70°F",
		"attenuationPercent": 72,
		"flocculation": "Medium",
		"notes": "Top fermenting strain that is good for top-cropping. Moderately flocculent with a clean, dry finish. Low ester profile for producing a balanced English ale.\n\nBest for: English style ales\n\n"
	},
	{
		"name": "WLP039 Nottingham Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 70°F",
		"attenuationPercent": 77.5,
		"flocculation": "Medium",
		"notes": "British style of ale yeast with a very dry finish and high attenuation. Medium to low fruit and fusel alcohol production. Good top fermenting yeast for cropping.\n\nBest for: British ales, pale ales, ambers, porters and stouts.\n\n"
	},
	{
		"name": "WLP041 Pacific Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 68°F",
		"attenuationPercent": 67.5,
		"flocculation": "High",
		"notes": "Popular yeast from the Pacific Northwest. Leaves a clear and malty profile. More fruity than WLP002. Suitable for many English and American styles.\n\nBest for: English & American ales including milds, bitters, IPA, porters and English stouts.\n\n"
	},
	{
		"name": "WLP051 California Ale V",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 70°F",
		"attenuationPercent": 72.5,
		"flocculation": "High",
		"notes": "Similar to White Labs California Ale Yeast, but slightly lower attenuation leaves a fuller bodied beer.\n\nBest for: American style Pales, Ambers, Browns, IPAs, American Strong Ale\n\n"
	},
	{
		"name": "WLP060 American Ale Yeast Blend",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 72°F",
		"attenuationPercent": 76,
		"flocculation": "Medium",
		"notes": "A blend that celebrates WLP001 (California Ale Yeast's) clean, neutral fermentation. This strain is versatile and adds two other yeast strains that are also clean/neutral in flavor to add a bit of complexity - almost a lager like finish. Slight sulfur m\n\nBest for: American ales with clean finish\n\n"
	},
	{
		"name": "WLP080 Cream Ale Yeast Blend",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 70°F",
		"attenuationPercent": 77.5,
		"flocculation": "Medium",
		"notes": "A blend of ale and lager yeast strains that work together to create a clean, light American lager style ale. A pleasing estery aroma may be perceived. Hop flavors and bitterness are slightly subdued. Slight sulfer will be produced during fermentation f\n\nBest for: Cream Ale, Hybrids\n\n"
	},
	{
		"name": "WLP090 San Diego Super Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 68°F",
		"attenuationPercent": 75,
		"flocculation": "Very High",
		"notes": "A super clean, super-fast fermenting strain. A low ester-producing strain that results in a balanced, neutral flavor and aroma profile. Alcohol-tolerant and very versatile for a wide variety of styles. Similar to California Ale Yeast WLP001 but it generally ferments faster.\n\nBest for: IPAs, American ales\n\n"
	},
	{
		"name": "WLP090 San Diego Super Yeast WLP090",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 68°F",
		"attenuationPercent": 79.5,
		"flocculation": "Medium",
		"notes": "\n\n"
	},
	{
		"name": "WLP099 Super High Gravity Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "69°F - 74°F",
		"attenuationPercent": 82,
		"flocculation": "Low",
		"notes": "Ferments up to 25% alcohol content. Flavor may vary greatly depending on beer alcohol. English like esters at low gravity, but will become more wine-like as alcohol exceeds 16% ABV. Refer to White Labs web page for tips on fermenting high gravity ales.\n\nBest for: Very high gravity beers and barley wine up to 25% alcohol.\n\n"
	},
	{
		"name": "WLP300 Hefeweizen Ale",
		"lab": "White Labs",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "68°F - 72°F",
		"attenuationPercent": 74,
		"flocculation": "Low",
		"notes": "Produces the banana and clove nose traditionally associated with German Wheat beers. Also produces desired cloudy look.\n\nBest for: German style wheat beers. Weiss, Weizen, Hefeweizen\n\n"
	},
	{
		"name": "WLP320 American Hefeweizen Ale",
		"lab": "White Labs",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "65°F - 69°F",
		"attenuationPercent": 72.5,
		"flocculation": "Low",
		"notes": "Produces a much smaller amount of clove and banana flavor than the German Hefeweizen White Labs yeast. Some sulfur, and creates desired cloudy look.\n\nBest for: Oregon style American Hefeweizen\n\n"
	},
	{
		"name": "WLP351 Bavarian Weizen Yeast",
		"lab": "White Labs",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "66°F - 70°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "Former yeast lab W51 strain. Produces a classic German style wheat beer with moderately high, spicy, phenolic overtones reminiscent of cloves.\n\nBest for: Bavarian Weizen and wheat beers.\n\n"
	},
	{
		"name": "WLP380 Hefeweizen IV Ale",
		"lab": "White Labs",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "66°F - 70°F",
		"attenuationPercent": 76.5,
		"flocculation": "Low",
		"notes": "Large clove and phenolic aroma, but with minimal banana flavor. Citrus and apricot notes. Crisp and drinkable, with some sulfur production.\n\nBest for: German style Hefeweizen\n\n"
	},
	{
		"name": "WLP400 Belgian Wit Ale",
		"lab": "White Labs",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "67°F - 74°F",
		"attenuationPercent": 76,
		"flocculation": "Low",
		"notes": "Phenolic and tart. The original yeast used to produce Wit in Belgium.\n\nBest for: Belgian Wit\n\n"
	},
	{
		"name": "WLP410 Belgian Wit II",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "67°F - 74°F",
		"attenuationPercent": 72.5,
		"flocculation": "Medium",
		"notes": "Less phenolic than WLP400 (Belgian Wit Ale) but more spicy. Leaves a little more sweetness and flocculation is higher than WLP400.\n\nBest for: Belgian Wit, Spiced Ale, Wheat Ales and Specialty Beers\n\n"
	},
	{
		"name": "WLP500 Trappist Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 72°F",
		"attenuationPercent": 77.5,
		"flocculation": "Medium",
		"notes": "Distinctive fruitiness and plum characteristics. Excellent for high gravity beers.\n\nBest for: Trappist Ale, Dubbel, Trippel, Belgian Ales\n\n"
	},
	{
		"name": "WLP510 Bastogne Belgian Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 72°F",
		"attenuationPercent": 77,
		"flocculation": "Medium",
		"notes": "High gravity Trappist ale yeast. Creates a dry beer with a slightly acidic finish. Cleaner finish and slightly less spicy than WLP500 or WLP530.\n\nBest for: High gravity beers, Belgian ales, Dubbels, Trippels.\n\n"
	},
	{
		"name": "WLP515 Antwerp Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "67°F - 70°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "Clean, almost lager like Belgian ale yeast. Good for Belgian pale and amber ales or with other Belgian yeasts in a blend. Biscuity, ale like aroma present. Hop flavors are accentuated. Slight sulfur during fermentation, and a lager like flavor profile\n\nBest for: Belgian pale and amber ales\n\n"
	},
	{
		"name": "WLP530 Abbey Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 72°F",
		"attenuationPercent": 77.5,
		"flocculation": "Medium",
		"notes": "Used in two of six remaining Trappist breweries. Distinctive plum and fruitiness. Good for high gravity beers.\n\nBest for: Belgian Trappist Ale, Spiced Ale, Trippel, Dubbel, Grand Cru\n\n"
	},
	{
		"name": "WLP540 Abbey IV Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 72°F",
		"attenuationPercent": 78,
		"flocculation": "Medium",
		"notes": "An authentic Trappist style ale yeast. Use for Belgian ales including abbey ales (dubbels, tripels). Fruit character is medium - between WLP500 (high) and WLP530 (low)\n\nBest for: Trappist Belgian Ales, Dubbels, Tripels and Specialty ales\n\n"
	},
	{
		"name": "WLP545 Belgian Strong Ale Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 73°F",
		"attenuationPercent": 81.5,
		"flocculation": "Medium",
		"notes": "From the Ardennes region of Belgium, this classic strain produces moderate esters and spicy phenolic character. Results in a dry but balanced finish. Use for dark or strong abbey ales.\n\nBest for: Belgian dark strongs, Abbey ales and Christmas beers\n\n"
	},
	{
		"name": "WLP550 Belgian Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 78°F",
		"attenuationPercent": 81.5,
		"flocculation": "Medium",
		"notes": "Phenolic and spicy flavors. Complex profile, with less fruitiness than White's Trappist Ale strain.\n\nBest for: Belgian Ales, Saisons, Belgian Reds, Belgian Browns, White beers\n\n"
	},
	{
		"name": "WLP565 Belgian Saison I Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 75°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Saison yeast from Wallonia. Earthy, spicy and peppery notes. Slightly sweet.\n\nBest for: Saison Ale, Belgian Ale, Dubbel, Trippel\n\n"
	},
	{
		"name": "WLP566 Belgian Saison II Yeast",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 78°F",
		"attenuationPercent": 81.5,
		"flocculation": "Medium",
		"notes": "Saison strain with a more fruity ester profile than WLP565 (Belgian Saison I Yeast). Moderately phenolic with a clove-like characteristic in finished beer flavor and aroma. Ferments quickly.\n\nBest for: Belgian or French Saison\n\n"
	},
	{
		"name": "WLP568 Belgian Style Saison Ale Yeast Blend",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "70°F - 80°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "This blend melds Belgian style ale and Saison strains. The strains work in harmony to create complex, fruity aromas and flavors. The blend of yeast strains encourages complete fermentation in a timely manner. Phenolic, spicy, earthy, and clove like flavor\n\nBest for: Belgian and French Saison\n\n"
	},
	{
		"name": "WLP570 Belgian Golden Ale",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 75°F",
		"attenuationPercent": 75.5,
		"flocculation": "Low",
		"notes": "Combination of fruitiness and phenolic characters dominate the profile. Some sulfur which will dissapate following fermentation.\n\nBest for: Belgian Ales, Dubbel, Grand Cru, Belgian Holiday Ale\n\n"
	},
	{
		"name": "WLP575 Belgian Style Ale Yeast Blend",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 75°F",
		"attenuationPercent": 77,
		"flocculation": "Medium",
		"notes": "Blend of two trappist ale yeasts and one Belgian ale yeast. Creates a versatile blend to be used for Trappist and other Belgian style ales.\n\nBest for: Trappist and other Belgian ales.\n\n"
	},
	{
		"name": "WLP630 Berliner Weisse Blend",
		"lab": "White Labs",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "68°F - 72°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "A blend of a traditional German Weizen yeast and Lactobacillus to create a subtle, tart, drinkable beer. Can take several months to develop tart character. Perfect for traditional Berliner Weisse.\n\nBest for: Berliner Weisse\n\n"
	},
	{
		"name": "WLP644 Brettanomyces Bruxellensis Trois",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "70°F - 84.9°F",
		"attenuationPercent": 85,
		"flocculation": "Low",
		"notes": "This Belgian strain, used traditionally for 100% Brettanomyces fermentations, produces a slightly tart beer with delicate characteristics of mango and pineapple. Can also be used to produce effervescence when bottle-conditioning.\n\n"
	},
	{
		"name": "WLP645 Brettanomyces Claussenii",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 72°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Low intensity Brett character. Originally isolated from strong English stock beer, in the early 20th century. The Brett flavors produced are more subtle than WLP650 and WLP653. More aroma than flavor contribution. Fruity, pineapple like aroma.\n\nBest for: Sour ales (in secondary)\n\n"
	},
	{
		"name": "WLP650 Brettanomyces Bruxellensis",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 72°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Medium intensity Brett character. Classic strain used in secondary fermentation for Belgian style beers and lambics. One Trappist brewery uses this strain in secondary fermentation.\n\nBest for: Belgian sour ales and labics (in secondary)\n\n"
	},
	{
		"name": "WLP653 Brettanomyces Lambicus",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 72°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Use in secondary. High intensity Brett character. Defines the \"Brett character\": Horsey, smoky and spicy flavors. As the name suggests, this strain is found most often in Lambic style beers, which are spontaneously fermented beers.\n\nBest for: Lambics and Flanders/Sour Brown ales\n\n"
	},
	{
		"name": "WLP655 Belgian Sour Mix 1",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 72°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Note: Bacteria to use in secondary only. A unique blend perfect for Belgian style beers. Includes Brettanomyces, Saccharomyces, and the bacterial strains Lactobacillus and Pediococcus.\n\nBest for: Belgian sour beers (in secondary)\n\n"
	},
	{
		"name": "WLP670 American Farmhouse Blend",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 72°F",
		"attenuationPercent": 78.5,
		"flocculation": "Medium",
		"notes": "Inspired by local American brewers crafting semi- traditional Belgian-style ales. This blend creates a complex flavor profile with a moderate level of sourness. It consists of a traditional farmhouse yeast strain and Brettanomyces. Great yeast for farmho\n\nBest for: Saisons, Farmhouse Ales\n\n"
	},
	{
		"name": "WLP675 Malolactic Bacteria",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 72°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Bacteria for use in secondary. Malolactic fermentation is the conversion of malic acid to lactic acid by bacteria from the lactic acid bacteria family. Lactic acid is less acidic than malic acid, which in turn decreases acidity and helps to soften and/o\n\nBest for: Primarily wine\n\n"
	},
	{
		"name": "WLP677 Lactobacillus Bacteria",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 72°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Bacteria for use in secondary. This lactic acid bacteria produces moderate levels of acidity and sour flavors found in lambics, Berliner Weiss, sour brown ale and gueze.\n\nBest for: Lambic, Berliner Weiss, Sour Brown and Gueze (secondary)\n\n"
	},
	{
		"name": "WLP700 Flor Sherry Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "70°F - 76°F",
		"attenuationPercent": 83,
		"flocculation": "Medium",
		"notes": "This yeast develops a film (flor) on the surface of the wine. Creates green almond, granny smith and nougat characteristics found in sherry. Can also be used for Port, Madeira and other sweet styles. For use in secondary fermentation. Slow fermentor. Al\n\nBest for: Sherry wine yeast\n\n"
	},
	{
		"name": "WLP705 Sake Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "70°F - 76°F",
		"attenuationPercent": 83,
		"flocculation": "Medium",
		"notes": "For use in rice based fermentations. For sake, use this yeast in conjunction with Koji (to produce fermentable sugar). WLP705 produces full body sake character, and subtle fragrance. Alcohol tolerance to 16%.\n\nBest for: Sake wine yeast\n\n"
	},
	{
		"name": "WLP715 Champagne Yeast",
		"lab": "White Labs",
		"type": "Champagne",
		"form": "Liquid",
		"temp": "70°F - 75°F",
		"attenuationPercent": 77.5,
		"flocculation": "Low",
		"notes": "Can tolerate alcohol up to 17%. For Barley Wine or Meads.\n\nBest for: Wine, Mead and Cider\n\n"
	},
	{
		"name": "WLP718 Avize Wine Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "60°F - 90°F",
		"attenuationPercent": 83,
		"flocculation": "Medium",
		"notes": "Champagne isolate used for complexity in whites. Contributes elegance, especially in barrel fermented Chardonnays. Alcohol tolerance to 15%.\n\nBest for: Chardonnay\n\n"
	},
	{
		"name": "WLP720 Sweet Mead/Wine",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "70°F - 75°F",
		"attenuationPercent": 72.5,
		"flocculation": "Low",
		"notes": "Lower attenuation than White Labs Champagne Yeast. Leaves some residual sweetness as well as fruity flavor. Alcohol concentration up to 15%.\n\nBest for: Sweet Mead, Wine and Cider\n\n"
	},
	{
		"name": "WLP727 Steinberg-Geisenheim Wine",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "50°F - 90°F",
		"attenuationPercent": 83,
		"flocculation": "Low",
		"notes": "German origin wine yeast. High fruit/ester production. Moderate fermentation characteristics and cold tolerant.\n\nBest for: Riesling wines.\n\n"
	},
	{
		"name": "WLP730 Chardonnay White Wine Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "50°F - 90°F",
		"attenuationPercent": 83,
		"flocculation": "Low",
		"notes": "Dry wine yeast. Slight ester production, low sulfur dioxide production. Enhances varietal character. WLP730 is a good choice for all white and blush wines, including Chablis, Chenin Blanc, Semillon, and Sauvignon Blanc. Fermentation speed is moderate. Al\n\nBest for: Chardonnay Wine\n\n"
	},
	{
		"name": "WLP735 French White Wine Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "60°F - 90°F",
		"attenuationPercent": 83,
		"flocculation": "Low",
		"notes": "Classic yeast for white wine fermentation. Slow to moderate fermenter and foam producer. Gives an enhanced creamy texture. Alcohol Tolerance: 16%\n\nBest for: French white wines\n\n"
	},
	{
		"name": "WLP740 Merlot Red Wine Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "60°F - 90°F",
		"attenuationPercent": 83,
		"flocculation": "Low",
		"notes": "Neutral, low fusel alcohol production. Will ferment to dryness, alcohol tolerance to 18%. Vigorous fermenter. WLP740 is well suited for Merlot, Shiraz, Pinot Noir, Chardonnay, Cabernet, Sauvignon Blanc, and Semillon. Alcohol Tolerance: 18%\n\nBest for: Merlot, Shiraz, Pinot Noir, Chardonnay, Cabernet, Sauvignon Blanc, and Semillon\n\n"
	},
	{
		"name": "WLP749 Assmanshausen Wine Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "50°F - 90°F",
		"attenuationPercent": 83,
		"flocculation": "Low",
		"notes": "German red wine yeast, which results in spicy, fruit aromas. Perfect for Pinot Noir and Zinfandel. Slow to moderate fermenter which is cold tolerant. Alcohol Tolerance: 16%\n\nBest for: Pinot Noir and Zinfandel\n\n"
	},
	{
		"name": "WLP750 French Red Wine Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "60°F - 90°F",
		"attenuationPercent": 83,
		"flocculation": "Low",
		"notes": "Classic Bordeaux yeast for red wine fermentations. Moderate fermentation characteristics. Tolerates lower fermentation temperatures. Rich, smooth flavor profile. Alcohol Tolerance: 17%\n\nBest for: Bordeaux\n\n"
	},
	{
		"name": "WLP760 Cabernet Red Wine Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "60°F - 90°F",
		"attenuationPercent": 83,
		"flocculation": "Low",
		"notes": "High temperature tolerance. Moderate fermentation speed. Excellent for full-bodied red wines, ester production complements flavor. WLP760 is also suitable for Merlot, Chardonnay, Chianti, Chenin Blanc, and Sauvignon Blanc. Alcohol Tolerance: 16%\n\nBest for: Merlot, Chardonnay, Chianti, Chenin Blanc, and Sauvignon Blanc\n\n"
	},
	{
		"name": "WLP770 Suremain Burgundy Wine Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "60°F - 90°F",
		"attenuationPercent": 83,
		"flocculation": "Low",
		"notes": "Emphasizes fruit aromas in barrel fermentations. High nutrient requirement to avoid volatile acidity production. Alcohol Tolerance: 16%\n\nBest for: Burgundy\n\n"
	},
	{
		"name": "WLP775 English Cider Yeast",
		"lab": "White Labs",
		"type": "Wine",
		"form": "Liquid",
		"temp": "68°F - 75°F",
		"attenuationPercent": 83,
		"flocculation": "Medium",
		"notes": "Classic Cider yeast. Ferments dry, but retains apple flavor. Some sulfer produced during fermentation will fade with age.\n\nBest for: Cider, Wine and High Gravity Beer\n\n"
	},
	{
		"name": "WLP800 Pilsner Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 74.5,
		"flocculation": "High",
		"notes": "Classic pilsner strain from Czech Republic. Dry with a malty finish.\n\nBest for: European Pilsners, Bohemian Pilsner\n\n"
	},
	{
		"name": "WLP802 Czech Budejovice Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 77.5,
		"flocculation": "Medium",
		"notes": "Dry and crisp with low diacetyl production. From Southern Czech Republic.\n\nBest for: Bohemian Style Pilsner\n\n"
	},
	{
		"name": "WLP810 San Francisco Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "58°F - 65°F",
		"attenuationPercent": 67.5,
		"flocculation": "High",
		"notes": "Produces \"California Common\" style beer.\n\nBest for: California and Premium Lagers, all American Lagers\n\n"
	},
	{
		"name": "WLP815 Belgian Lager Yeast",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Clean, crisp European lager yeast with low sulfur production. The strain originates from a very old brewery in West Belgium. Great for European style pilsners, dark lagers, Vienna lager, and American style lagers.\n\nBest for: European style pilsners, dark lagers, Vienna lager, and American style lagers\n\n"
	},
	{
		"name": "WLP820 Octoberfest/Marzen Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "52°F - 58°F",
		"attenuationPercent": 69,
		"flocculation": "Medium",
		"notes": "Produces a malty, bock style beer. Does not finish as dry or as fast as White's German Lager yeast. Longer lagering or starter recommended.\n\nBest for: Marzen, Oktoberfest, European Lagers, Bocks, Munich Helles\n\n"
	},
	{
		"name": "WLP830 German Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "Very malty and clean. One of the world's most popular lager yeasts.\n\nBest for: German Marzen, Pilsner, Lagers, Oktoberfest beers.\n\n"
	},
	{
		"name": "WLP830 German Lager Yeast WLP830",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 82,
		"flocculation": "Medium",
		"notes": "\n\n"
	},
	{
		"name": "WLP833 German Bock Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 55°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Produces beer that has balanced malt and hop character. From Southern Bavaria.\n\nBest for: Bocks, Doppelbocks, Oktoberfest, Vienna, Helles, some American Pilsners\n\n"
	},
	{
		"name": "WLP838 Southern German Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 72,
		"flocculation": "High",
		"notes": "Malty finish and balanced aroma. Strong fermenter, slight sulfur and low diacetyl.\n\nBest for: German Pilsner, Helles, Oktoberfest, Marzen, Bocks\n\n"
	},
	{
		"name": "WLP840 American Lager Yeast",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 77.5,
		"flocculation": "Medium",
		"notes": "Dry and clean with very slight apple fruitiness. Minimal sulfer and diacetyl.\n\nBest for: All American Style Lagers -- both light and dark.\n\n"
	},
	{
		"name": "WLP840 American Lager Yeast WLP840",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 77.5,
		"flocculation": "Medium",
		"notes": "\n\n"
	},
	{
		"name": "WLP860 Munich Helles",
		"lab": "White Labs",
		"type": "Ale",
		"form": "Liquid",
		"temp": "48°F - 52°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Possible Augustiner Strain? This yeast helps to produce a malty, but balanced traditional Munich-style lager. Clean and strong fermenter, it's great for a variety of lager styles ranging from Helles to Rauchbier.\n\nBest for: Munich Helles, Oktoberfest\n\n"
	},
	{
		"name": "WLP862 Cry Havoc",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "68°F - 74°F",
		"attenuationPercent": 68,
		"flocculation": "Medium",
		"notes": "Licensed by White Labs from Charlie Papazian, author of \"The Complete Joy of Home Brewing\". This yeast was used to brew many of his original recipes. Diverse strain can ferment at ale and lager temps.\n\nBest for: All American Style Lagers -- both light and dark.\n\n"
	},
	{
		"name": "WLP885 Zurich Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Swiss style lager yeast. Sulfer and diacetyl production is minimal. May be used for high gravity lagers with proper care.\n\nBest for: Swiss style lager, and high gravity lagers (over 11% ABV)\n\n"
	},
	{
		"name": "WLP920 Old Bavarian Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 69.5,
		"flocculation": "Medium",
		"notes": "Southern Germany/Bavarian lager yeast. Finishes malty with a slight ester profile.\n\nBest for: Oktoberfest, Marzen, Bock and Dark Lagers.\n\n"
	},
	{
		"name": "WLP940 Mexican Lager",
		"lab": "White Labs",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 55°F",
		"attenuationPercent": 74,
		"flocculation": "Medium",
		"notes": "From Mexico City - produces a clean lager beer with a crisp finish. Good for mexican style beers.\n\nBest for: Mexican style light and dark lagers.\n\n"
	},
	{
		"name": "American Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "32°F - 32°F",
		"attenuationPercent": 75,
		"flocculation": "",
		"notes": "\n\n"
	},
	{
		"name": "American Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "32°F - 32°F",
		"attenuationPercent": 75,
		"flocculation": "",
		"notes": "\n\n"
	},
	{
		"name": "1007 German Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "55°F - 66°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "Crisp, dry finish with a mild flavor.\n\nBest for: German Ales, Alts, Kolsch, Dry Stout\n\n"
	},
	{
		"name": "1010 American Wheat 1010",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "58°F - 74°F",
		"attenuationPercent": 76,
		"flocculation": "Low",
		"notes": "\n\n"
	},
	{
		"name": "1010 American Wheat Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "58°F - 74°F",
		"attenuationPercent": 76,
		"flocculation": "Low",
		"notes": "Dry, Crisp, tart beer in the American Hefeweizen style. Low flocculation aids in producing desired chill haze.\n\nBest for: American Wheat, Berlin Weiss, Hefeweizen\n\n"
	},
	{
		"name": "1026 British Cask Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "63°F - 72°F",
		"attenuationPercent": 75.5,
		"flocculation": "Medium",
		"notes": "A great choice for any cask conditioned British Ale. Produces nice malt profile with a hint of fruit. Finishes dry and slightly tart.\n\nBest for: British Ales\n\n"
	},
	{
		"name": "1028 London Ale Yeast",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Dry finish, bold, rich flavor, some fruit profile and a crisp finish.\n\nBest for: English Ales, Bitters, IPAs, Brown Ale\n\n"
	},
	{
		"name": "1056 American Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Soft, smooth, clean finish. Very well balanced. Very versitile -- works well with many ale styles.\n\nBest for: American Pale Ale, Scottish Ale, Porters, Sweet Stout, Barley Wine, Alt\n\n"
	},
	{
		"name": "1084 Irish Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Dry diacetyl, fruity flavor characteristic of stouts. Full bodied, dry, clean flavor.\n\nBest for: Irish Dry Stouts, Porter, Scottish Ale, Brown Ale, Imperial Stout, Barley Wine\n\n"
	},
	{
		"name": "1087 Wyeast Ale Blend",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "64°F - 72°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Blend of ale strains designed to provide quick starts, good flavor, balance and flocculation. Balanced finish suitable for most American and British ale styles.\n\nBest for: American and British Ale Styles.\n\n"
	},
	{
		"name": "1098 British Ale Yeast",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "64°F - 72°F",
		"attenuationPercent": 74,
		"flocculation": "Medium",
		"notes": "Fruity, tart, dry crisp finish. Very well balanced.\n\nBest for: All British Ales, Pales, Bitters, English Strong Ale\n\n"
	},
	{
		"name": "1099 Whitbread Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "64°F - 75°F",
		"attenuationPercent": 70,
		"flocculation": "High",
		"notes": "Slightly more fruity and malty than Wyeast's British Ale. Clear and highly flocculant.\n\nBest for: Whitbread Ale, British Ales, Pales, Bitters\n\n"
	},
	{
		"name": "1187 Ringwood Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "64°F - 74°F",
		"attenuationPercent": 70,
		"flocculation": "High",
		"notes": "European ale yeast. Highly flocculant with complex, clear, but malty profile. Slightly fruity ester.\n\nBest for: Ringwood Ale, Brown Ales\n\n"
	},
	{
		"name": "1214 Belgian Ale Yeast",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "58°F - 68°F",
		"attenuationPercent": 74,
		"flocculation": "Medium",
		"notes": "Trappist style ale yeast. Complex estery flavor.\n\nBest for: Belgian Ales, Abbey Ales, Trappist Ales\n\n"
	},
	{
		"name": "1272 American Ale II",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 72°F",
		"attenuationPercent": 74,
		"flocculation": "High",
		"notes": "Clean, tart, nutty flavor. More fruity than Wyeast American Ale yeast.\n\nBest for: All American Ales, Brown Ales, Barley Wine\n\n"
	},
	{
		"name": "1272 GF All American Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 72°F",
		"attenuationPercent": 74,
		"flocculation": "High",
		"notes": "Popular all purpose American ale style now in a Gluten Free strain. Produces beers that are nutty, clean with a slight tart finish. Ferment warmer to accentuate hops and add fruitiness or ferment cold for clean light citrus character.\n\nBest for: American Amber, Brown, IPA, Pale ales and stouts. Blondes and fruit beers.\n\n"
	},
	{
		"name": "1275 Thames Valley Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 77,
		"flocculation": "Medium",
		"notes": "Clean, complex flavor. Low in fruit, low in esters, rich in flavor. Hops come through well.\n\nBest for: British Bitters, ESB, India Pale Ale, English Strong Ale\n\n"
	},
	{
		"name": "1318 London Ale III",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "64°F - 74°F",
		"attenuationPercent": 73,
		"flocculation": "High",
		"notes": "Light, fruity flavor. Balanced flavor with hint of sweetness.\n\nBest for: British Ales, Bitters\n\n"
	},
	{
		"name": "1318 London Ale III 1318",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "64°F - 74°F",
		"attenuationPercent": 73,
		"flocculation": "High",
		"notes": "\n\n"
	},
	{
		"name": "1332 Northwest Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 75°F",
		"attenuationPercent": 69,
		"flocculation": "High",
		"notes": "Classic Northwest US ale yeast. Slight fruit flavor, malty ale with good body and balance.\n\nBest for: Oregon Ales, All American Ale styles\n\n"
	},
	{
		"name": "1335 British Ale II",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "63°F - 75°F",
		"attenuationPercent": 74.5,
		"flocculation": "High",
		"notes": "Malty, clean, crisp finish. Dry flavor.\n\nBest for: British and Canadian Ales, English Bitters\n\n"
	},
	{
		"name": "1338 European Ale Yeast",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 69,
		"flocculation": "High",
		"notes": "Very malty flavor characteristic of Bavarian/Munich Ales. Complex character.\n\nBest for: European Ales, German Ales, Alts, Pale Ale, Brown Ale, Kolsch\n\n"
	},
	{
		"name": "1388 Belgian Strong Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 75°F",
		"attenuationPercent": 76,
		"flocculation": "Low",
		"notes": "Dry, tart, fruity flavor. High alcohol tolerance.\n\nBest for: Belgian Ales, Scottish Strong Ale,Trappist Ales, Dubbels, Trippels\n\n"
	},
	{
		"name": "1450 Denny's Favorite 50",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 70°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "This terrific all-round yeast can be used for almost any beer style, and is a mainstay of one of our local homebrewers, Mr. Denny Conn. It is unique in that it produces a big mouthfeel and accentuates the malt, caramel, or fruit character of a beer without being sweet or under-attenuated.\n\nBest for: almost any style\n\n"
	},
	{
		"name": "1728 Scottish Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "55°F - 75°F",
		"attenuationPercent": 71,
		"flocculation": "High",
		"notes": "High alcohol tolerance.\n\nBest for: Scottish Ale, Scottish Strong Ales, Sweet Stout, Imperial Stout, Barley Wine\n\n"
	},
	{
		"name": "1762 Belgian Abbey II",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 75°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Dry flavor with slight fruitiness. High alcohol tolerance.\n\nBest for: Belgian Ales, Trappist Ales, Abbey Ales, Grand Cru\n\n"
	},
	{
		"name": "1968 London ESB Ale",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "64°F - 72°F",
		"attenuationPercent": 69,
		"flocculation": "High",
		"notes": "Malty, balanced flavor. Fruity, rich finish. Excellent for cask conditioned ales and bitters.\n\nBest for: English Bitters, IPA, Brown Ales, Mild Ales\n\n"
	},
	{
		"name": "2000 Budvar Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "46°F - 56°F",
		"attenuationPercent": 73,
		"flocculation": "High",
		"notes": "Classic pilsner lager yeast. Malty nose and subtle fruit. Rich malt profile, but dry crisp finish. Hop character accentuated by dry finish.\n\nBest for: Bohemian Pilsner, Classic Pilsners, Dortmunder and Light Lagers\n\n"
	},
	{
		"name": "2001 Urquell Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 74,
		"flocculation": "Medium",
		"notes": "Pilsner Urquell yeast with mild fruit/floral aroma. Very dry and clean on palate with full mouth feel. Subtle malt character. Clean and neutral finish.\n\nBest for: Bohemian Pilsner\n\n"
	},
	{
		"name": "2007 Pilsen Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 56°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Classic American pilsner strain. Smooth with a malty flavor. Dry and crisp fermentation.\n\nBest for: American Pilsner, Bohemian Pilsner, Light Lagers\n\n"
	},
	{
		"name": "2035 American Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Bold, with a complex aroma. Good flavor depth characteristics for a wide variety of lager beers.\n\nBest for: American Lagers and Pilsners\n\n"
	},
	{
		"name": "2042 Danish Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "46°F - 56°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Rich, Dortmund style, with a crisp, dry finish. Soft profile accentuates hop flavor.\n\nBest for: Dortmund/Export Lagers\n\n"
	},
	{
		"name": "2112 California Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "58°F - 68°F",
		"attenuationPercent": 69,
		"flocculation": "High",
		"notes": "Suited for 19th century California style beers. Lagers at high temperature and produces malty, clear beers.\n\nBest for: California common beers, Steam Beer\n\n"
	},
	{
		"name": "2124 Bohemian Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 71,
		"flocculation": "Medium",
		"notes": "Ferments clean and malty, with rich malty flavor for full gravity pilsners.\n\nBest for: Bohemian Pilsners, Pilsners, German Helles, Bocks\n\n"
	},
	{
		"name": "2178 Wyeast Lager Blend",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Blend of lager strains to produce a complex but clean lager flavor profile. Suitable for many common lager styles.\n\nBest for: Classic Pilsners, Lagers, Bocks.\n\n"
	},
	{
		"name": "2206 Bavarian Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "46°F - 58°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Use by many German breweries. Produces a full-bodied, rich, malty beer.\n\nBest for: German Bocks, Vienna, Oktoberfest, Hells, Marzens, Dunkel\n\n"
	},
	{
		"name": "2247 European Lager II",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "46°F - 56°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "Clean, dry flavor profile for aggressively hopped pilsners. Dry finish, mild aroma, slight sulfur production.\n\nBest for: Bohemian Pilsner, American Pilsner, Helles, Dunkel\n\n"
	},
	{
		"name": "2272 North American Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 56°F",
		"attenuationPercent": 73,
		"flocculation": "High",
		"notes": "American and Canadian lager yeast. Malty finish makes it suitable for Marzens/Oktoberfest as well.\n\nBest for: American Pilsner, California Common, Canadian Lager, Oktoberfest, Marzen\n\n"
	},
	{
		"name": "2278 Czech Pilsner Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "50°F - 58°F",
		"attenuationPercent": 72,
		"flocculation": "Medium",
		"notes": "Classic Pilsner strain. Creates a dry but malty finish. Perfect for Pilsners and bocks. Some sulfur produced, but will fade with time.\n\nBest for: Bohemian and American Pilsner, Bocks, Oktoberfest, Marzen\n\n"
	},
	{
		"name": "2308 Munich Lager",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 56°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Unique Pilsner strain. Very smooth, well-rounded and full bodied. Benefits from a diacetyl rest.\n\nBest for: Pilsners, Light Lagers, Dortmond/Export, Marzen/Oktoberfest, Dunkel\n\n"
	},
	{
		"name": "2565 Kolsch Yeast",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "56°F - 64°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "Very malty flavor with mix of lager and ale character. Crisp, clean finish.\n\nBest for: Kolsch, European Ales\n\n"
	},
	{
		"name": "2633 Octoberfest Lager Blend",
		"lab": "Wyeast",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "This blend of lager strains is designed to produce a rich, malty, complex and full bodied Octoberfest style beer. It attenuates well while leaving plenty of malt character and mouthfeel. This strain is low in sulfur production.\n\nBest for: Octoberfest, Marzen, Bavarian lagers\n\n"
	},
	{
		"name": "3056 Bavarian Wheat Yeast",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "64°F - 74°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Blend of top-fermenting ale and wheat yeasts providing a mild ester and phenolic profile.\n\nBest for: Bavarian style wheat beers.\n\n"
	},
	{
		"name": "3068 Weihenstephan Weizen",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "64°F - 75°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "Unique Bavarian wheat yeast that produces the spicy weizen clove and banana flavor. Best when fermented at around 68 deg F.\n\nBest for: Bavarian Weizen\n\n"
	},
	{
		"name": "3112 Brettanomyces Bruxellensis",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 75°F",
		"attenuationPercent": 67,
		"flocculation": "Medium",
		"notes": "Wild yeast strain isolated from Brussels region of Belgium. Adds classic sweaty horse hair flavor as well as sourness and cherry-pie like flavor. Generally used in conjunction with S. Cerevisiae after the primary fermentation has begun. Requires 3-6 mo\n\nBest for: Belgian Lambic, Gueze Lambic, and Sour Browns\n\n"
	},
	{
		"name": "3278 Belgian Lambic Blend",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "63°F - 75°F",
		"attenuationPercent": 70,
		"flocculation": "Low",
		"notes": "Lambic culture of Saccharomyces Cerevisiar and a mixture of yeasts and bacterias. Blend of organisms helps create lactic flavor of Belgian Lambics.\n\nBest for: Belgian Lambic\n\n"
	},
	{
		"name": "3333 German Wheat",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "63°F - 75°F",
		"attenuationPercent": 73,
		"flocculation": "High",
		"notes": "Subtle flavor profile. Sharp, fruity, crisp, sherry like flavor.\n\nBest for: Bavarian Weizen\n\n"
	},
	{
		"name": "3463 Forbidden Fruit",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "63°F - 76°F",
		"attenuationPercent": 74,
		"flocculation": "Low",
		"notes": "Phenolic profile with subdued fruitiness. Available seasonally.\n\nBest for: Belgian Wit, Grand Cru\n\n"
	},
	{
		"name": "3522 Belgian Ardennes",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "65°F - 85°F",
		"attenuationPercent": 74,
		"flocculation": "High",
		"notes": "Phenolics develop at increased temperature. Mild fruitiness and complex spicy flavor.\n\nBest for: Belgian Ale\n\n"
	},
	{
		"name": "3638 Bavarian Wheat",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "64°F - 75°F",
		"attenuationPercent": 73,
		"flocculation": "Low",
		"notes": "Hefeweizen yeast with complex flavor and aroma. Bubble gum, banana flavors with apple/plub ester profile. Malty flavor.\n\nBest for: Bavarian Weizen, Hefeweizen\n\n"
	},
	{
		"name": "3711 French Saison",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 77°F",
		"attenuationPercent": 80,
		"flocculation": "Medium",
		"notes": "A very versatile strain that produces Saison or farmhouse style biers as well as other Belgian style beers that are highly aromatic (estery), peppery, spicy and citrusy. This strain enhances the use of spices and aroma hops, and is extremely attenuative b\n\nBest for: French and Belgian Saison or Farmhouse ales\n\n"
	},
	{
		"name": "3724 Belgian Saison",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "70°F - 95°F",
		"attenuationPercent": 78,
		"flocculation": "Low",
		"notes": "Classic farmhouse ale yeast. Spicy, complex aromatics including bubble gum. Tart and dry on the palate with mild fruitiness. Finishes crisp and mildly acidic. Ferment at warm temperature. May have vigorous fermentation start.\n\nBest for: Belgian Saison beer\n\n"
	},
	{
		"name": "3763 Roselare Belgian Blend",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "55°F - 80°F",
		"attenuationPercent": 80,
		"flocculation": "Medium",
		"notes": "Culture of Saccharomyces, Brettonomyces and Lactic Acid Bacteria. Complex aromas and flavors. May be used for primary fermentation. Primarily for sour brown and red Belgian styles.\n\nBest for: Belgian sour brown and red beers.\n\n"
	},
	{
		"name": "3787 Trappist High Gravity",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "64°F - 78°F",
		"attenuationPercent": 76,
		"flocculation": "Medium",
		"notes": "Robust top cropping yeast. Phenolic character and alcohol tolerance up to 12%. Rich ester profile and malty flavor.\n\nBest for: Belgian Wit, Trappist Ale, High gravity ales\n\n"
	},
	{
		"name": "3942 Belgian Wheat Yeast",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "64°F - 74°F",
		"attenuationPercent": 74,
		"flocculation": "Medium",
		"notes": "Estery lor phenol yeast. Plum and apple aroma with a dry finish.\n\nBest for: Belgian Wheat, Bavarian Weizen\n\n"
	},
	{
		"name": "3944 Belgian Witbier",
		"lab": "Wyeast",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "62°F - 75°F",
		"attenuationPercent": 74,
		"flocculation": "Medium",
		"notes": "Tart, slightly phenolic character. For Wits and Grand Cru. Tolerates high gravity beers well.\n\nBest for: Belgian Wit, Grand Cru\n\n"
	},
	{
		"name": "4335 Lactobacillus Delbrueckii",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 95°F",
		"attenuationPercent": 67,
		"flocculation": "Medium",
		"notes": "Lactic acid bacteria isolated from Belgium. Produces mild acidity and sourness found in many types of Belgian beers. Always used in conjunction with S. Cerevisiae and wild yeasts.\n\nBest for: Belgian gueze, lambic, sour brown ales, and Berliner Weisse.\n\n"
	},
	{
		"name": "4733 Pediococcus Cerevisiae",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 95°F",
		"attenuationPercent": 67,
		"flocculation": "Medium",
		"notes": "Lactic acid bacteria isolated from Belgium. Creates a high level of lactic acidity over a long time. Often used with other yeasts, and it may take several months for flavor to fully develop.\n\nBest for: Gueze and other Belgian styles.\n\n"
	},
	{
		"name": "5112 Brettanomyces Bruxellensis",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 75°F",
		"attenuationPercent": 82,
		"flocculation": "Medium",
		"notes": "This strain of wild yeast was isolated from brewery cultures in the Brussels region of Belgium. It produces the classic sweaty horse blanket character and may form a pellicle in bottles or casks. The strain is generally used in conjunction with S. cerevis\n\nBest for: Gueuze, Lambics and Sour Browns\n\n"
	},
	{
		"name": "5335 Lactobacillus",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 95°F",
		"attenuationPercent": 80,
		"flocculation": "Medium",
		"notes": "Lactic acid bacteria isolated from a Belgian brewery. This culture produces moderate levels of acidity and is commonly found in many types of beers including gueuze, lambics, sour brown ales and Berliner Weisse. It is always used in conjunction with S.cer\n\nBest for: Belgian sout beers (secondary)\n\n"
	},
	{
		"name": "5526 Brettanomyces Lambucus",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 75°F",
		"attenuationPercent": 80,
		"flocculation": "Very High",
		"notes": "This is a wild yeast strain isolated from Belgian lambic beers. It produces a pie cherry-like flavor and sourness with a distinct Brett character. A pellicle may form in bottles or casks. This strain works best in conjunction with other yeast and lactic b\n\nBest for: Lambic\n\n"
	},
	{
		"name": "5733 Pediococcus",
		"lab": "Wyeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 95°F",
		"attenuationPercent": 80,
		"flocculation": "Medium",
		"notes": "Lactic acid bacteria used in the production of Belgian style beers where additional acidity is desirable. Often found in gueuze and other Belgian style beer. Acid production will increase with storage time. It may also cause ropiness and produce low level\n\nBest for: Belgian sour ales\n\n"
	},
	{
		"name": "K-97 SafAle German Ale",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75.2°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Low sedimentation yeast, sometimes used in open fermentation. Good for wheat beers, weizens and light ales.\n\nBest for: High attenuation ales, wheat beers and weizens.\n\n"
	},
	{
		"name": "S-04 SafAle English Ale",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75.2°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Fast starting, fast fermenting yeast. Quick attenuation helps to produce a clean, crisp, clear ale. Can be used in a wide range of ales.\n\nBest for: Great general purpose ale yeast.\n\n"
	},
	{
		"name": "S-189 SafLager German Lager",
		"lab": "DCL/Fermentis",
		"type": "Lager",
		"form": "Dry",
		"temp": "48°F - 56°F",
		"attenuationPercent": 72.5,
		"flocculation": "High",
		"notes": "Popular lager yeast strain. Produces wide range of continental lagers and pilsners. Clean finish.\n\nBest for: Wide range of lagers and pilsners.\n\n"
	},
	{
		"name": "S-23 SafLager West European Lager",
		"lab": "DCL/Fermentis",
		"type": "Lager",
		"form": "Dry",
		"temp": "46°F - 50°F",
		"attenuationPercent": 73.5,
		"flocculation": "High",
		"notes": "German lager yeast strain. Performs well at low temperature. High flocculation and attenuation for a clean German finish.\n\nBest for: German style Lagers and Pilsners.\n\n"
	},
	{
		"name": "S-33 SafBrew Ale",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "65°F - 72°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "General purpose ale yeast, widely used. Very consistent, clean finish. High attenuation and good flavor profile.\n\nBest for: Most ales.\n\n"
	},
	{
		"name": "T-58 SafBrew Specialty Ale",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "60°F - 72°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Estery, somewhat spicy ale yeast. Solid yeast formation at end of fermentation. Widely used for bottle and cask conditioning.\n\nBest for: Complex ales.\n\n"
	},
	{
		"name": "US-05 Safale American",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "American ale yeast that produces well balanced beers with low diacetyl and a very clean, crisp end palate.\n\nBest for: American ale, other clean finish ales\n\n"
	},
	{
		"name": "US-05 Safale American",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "American ale yeast that produces well balanced beers with low diacetyl and a very clean, crisp end palate.\n\nBest for: American ale, other clean finish ales\n\n"
	},
	{
		"name": "US-05 Safale American",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "American ale yeast that produces well balanced beers with low diacetyl and a very clean, crisp end palate.\n\nBest for: American ale, other clean finish ales\n\n"
	},
	{
		"name": "US-05 Safale American",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "American ale yeast that produces well balanced beers with low diacetyl and a very clean, crisp end palate.\n\nBest for: American ale, other clean finish ales\n\n"
	},
	{
		"name": "US-05 Safale American",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "American ale yeast that produces well balanced beers with low diacetyl and a very clean, crisp end palate.\n\nBest for: American ale, other clean finish ales\n\n"
	},
	{
		"name": "US-05 Safale American",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "American ale yeast that produces well balanced beers with low diacetyl and a very clean, crisp end palate.\n\nBest for: American ale, other clean finish ales\n\n"
	},
	{
		"name": "US-05 Safale American",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "American ale yeast that produces well balanced beers with low diacetyl and a very clean, crisp end palate.\n\nBest for: American ale, other clean finish ales\n\n"
	},
	{
		"name": "US-05 Safale American",
		"lab": "DCL/Fermentis",
		"type": "Ale",
		"form": "Dry",
		"temp": "59°F - 75°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "American ale yeast that produces well balanced beers with low diacetyl and a very clean, crisp end palate.\n\nBest for: American ale, other clean finish ales\n\n"
	},
	{
		"name": "W-34/70 Saflager Lager",
		"lab": "DCL/Fermentis",
		"type": "Lager",
		"form": "Dry",
		"temp": "48°F - 59°F",
		"attenuationPercent": 75,
		"flocculation": "High",
		"notes": "A famous yeast strain from Weihenstephan Germany used worldwide in brewing. Their most popular strain for lagers.\n\nBest for: European lagers\n\n"
	},
	{
		"name": "WB-06 Safbrew Wheat",
		"lab": "DCL/Fermentis",
		"type": "Wheat",
		"form": "Dry",
		"temp": "59°F - 75°F",
		"attenuationPercent": 68,
		"flocculation": "Medium",
		"notes": "A specialty yeast for wheat beer fermentation. The yeast produces a subtle estery and phenlol flavor typical of wheat beers.\n\nBest for: Wheat beers\n\n"
	},
	{
		"name": "Array Northeast Ale ECY29",
		"lab": "East Coast Yeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "65°F - 70°F",
		"attenuationPercent": 82,
		"flocculation": "High",
		"notes": "\n\n"
	},
	{
		"name": "ECY29 North East Ale",
		"lab": "East Coast Yeast",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 72°F",
		"attenuationPercent": 81,
		"flocculation": "Medium Low",
		"notes": "Replication of the famous Conan strand of yeast. Unique strand with an abundance of citrusy esters that accentuate American style hops.\n\nBest for: IPA, DIPA, strong ale\n\n"
	},
	{
		"name": "Dry Belgian Ale",
		"lab": "The Yeast Bay",
		"type": "Ale",
		"form": "Liquid",
		"temp": "70°F - 76°F",
		"attenuationPercent": 92.5,
		"flocculation": "Medium Hig",
		"notes": "Dry Belgian Ale is single strain of Saccharomyces cerevisiae isolated from a unique golden strong ale. The profile is a complex and balanced mix of apple, pear and light citrus fruit with some mild spicy and peppery notes. The apparent attenuation of this strain ranges anywhere from 85-100%, depending upon the mash profile and the grist composition. For a yeast that's as dry as it is, it creates beers with a surprising amount of balance even without the use of specialty grains or adjuncts.\n\nBest for: Any big Belgian beer\n\n"
	},
	{
		"name": "Northeastern Abbey",
		"lab": "The Yeast Bay",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 73°F",
		"attenuationPercent": 79,
		"flocculation": "Medium Low",
		"notes": "This yeast was isolated from a beer crafted by a well-known producer of Belgian-style ales in the Northeastern United States. This yeast produces a very mild spiciness and earthy flavor and aroma which is complemented by a subtle but magnificent array of fruity esters, including pear and light citrus fruit. Expect this yeast to produce a large, thick krausen.\n\nBest for: Light Belgian beers: wit, Belgian pale, Belgian blonde. Also experimental fruit beers.\n\n"
	},
	{
		"name": "Saison Blend",
		"lab": "The Yeast Bay",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 80°F",
		"attenuationPercent": 79,
		"flocculation": "Medium Low",
		"notes": "A blend of two unique yeast strains isolated from beers that embody the saison style, this blend is a balance of the many characteristic saison flavors and aromas. One yeast strain is a good attenuator that produces a spicy and mildly tart and tangy beer with a full mouthfeel. The other yeast strain is also a good attenuator that produces a delightful ester profile of grapefruit and orange zest and imparts a long, dry and earthy finish to the beer. Together, they produce a dry but balanced beer with a unique flavor and aroma profile.\n\nBest for: Saison\n\n"
	},
	{
		"name": "Vermont Ale",
		"lab": "The Yeast Bay",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 70°F",
		"attenuationPercent": 78.5,
		"flocculation": "Medium Low",
		"notes": "Isolated from a uniquely crafted double IPA out of the Northeastern United States, this yeast produces a balanced fruity ester profile of peaches and light citrus that complements any aggressively hopped beer.\n\nBest for: IPAs, DIPAs\n\n"
	},
	{
		"name": "Vermont Ale Yeast",
		"lab": "The Yeast Bay",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 72°F",
		"attenuationPercent": 78.5,
		"flocculation": "Low",
		"notes": "\n\n"
	},
	{
		"name": "Wallonian Farmhouse",
		"lab": "The Yeast Bay",
		"type": "Ale",
		"form": "Liquid",
		"temp": "68°F - 78°F",
		"attenuationPercent": 84.5,
		"flocculation": "Medium",
		"notes": "Isolated from a unique farmhouse-style ale that hails from the Walloon region of Belgium, this yeast is one of the funkiest \"clean\" yeast we have in our stable. It imparts a slight earthy funk and tart character to the beer, and is a very mild producer of some slightly spicy and mildly smokey flavor compounds. This yeast exhibits absurdly high attenuation, resulting in a practically bone-dry beer. If desired, we recommend controlling the dryness by adjusting the mash temperature or adding malts or adjuncts to the mash tun that will lend some body and residual sweetness to the beer.\n\nBest for: Farmhouse styles, experimental Belgian ales.\n\n"
	},
	{
		"name": "- Cooper Ale",
		"lab": "Coopers",
		"type": "Ale",
		"form": "Dry",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "General purpose dry ale yeast with a very good reputation. Produces significant fruity flavors. No phenolics. Clean, fruity finish.\n\nBest for: Most ales.\n\n"
	},
	{
		"name": "Y015 Blanche Ale Yeast",
		"lab": "Brewferm",
		"type": "Wheat",
		"form": "Dry",
		"temp": "64.4°F - 73.4°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Top fermenting strain for Belgian witbier and wheats. Spicy and lightly phenolic.\n\nBest for: Wheat beer, Wit\n\n"
	},
	{
		"name": "Y016 Lager Yeast",
		"lab": "Brewferm",
		"type": "Lager",
		"form": "Dry",
		"temp": "50°F - 59°F",
		"attenuationPercent": 78,
		"flocculation": "Medium",
		"notes": "A dry lager yeast with high attenuation. Ferments clean and malty.\n\nBest for: Lagers\n\n"
	},
	{
		"name": "Belle Saison",
		"lab": "Danstar",
		"type": "Ale",
		"form": "Liquid",
		"temp": "64°F - 90°F",
		"attenuationPercent": 82.5,
		"flocculation": "Low",
		"notes": "\n\nBest for: Saisons and belgians\n\n"
	},
	{
		"name": "Belle Saison",
		"lab": "Danstar",
		"type": "Ale",
		"form": "Dry",
		"temp": "63°F - 77°F",
		"attenuationPercent": 80,
		"flocculation": "Low",
		"notes": "\n\nBest for: Saison\n\n"
	},
	{
		"name": "- London",
		"lab": "Danstar",
		"type": "Ale",
		"form": "Dry",
		"temp": "64°F - 70°F",
		"attenuationPercent": 72,
		"flocculation": "Medium",
		"notes": "Produces a clean, well balanced ale. Medium attenuation preserves some beer complexity.\n\nBest for: Well balanced British style ales.\n\n"
	},
	{
		"name": "- Manchester",
		"lab": "Danstar",
		"type": "Ale",
		"form": "Dry",
		"temp": "64°F - 70°F",
		"attenuationPercent": 72,
		"flocculation": "Medium",
		"notes": "Old english style ale yeast that produces a complex, woody, full bodied ale at warm temperature. Medium attenuation. Good dry yeast for many english styles.\n\nBest for: Complex, full bodied Porters, Stouts, Ales.\n\n"
	},
	{
		"name": "- Nottingham",
		"lab": "Danstar",
		"type": "Ale",
		"form": "Dry",
		"temp": "57°F - 70°F",
		"attenuationPercent": 75,
		"flocculation": "High",
		"notes": "Dry strain is highly flocculant and has high attenuation. Produces relatively few fruity esters for a dry yeast. Can be fermented at low temperature to produce lager-style beers.\n\nBest for: Good neutral ale yeast.\n\n"
	},
	{
		"name": "- Doric Ale",
		"lab": "Doric",
		"type": "Ale",
		"form": "Dry",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Good reputation. Reliable clean finish for a dry yeast.\n\nBest for: Ales\n\n"
	},
	{
		"name": "- Edme Ale Yeast",
		"lab": "Edme",
		"type": "Ale",
		"form": "Dry",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Quick starting dry yeast with a good reputation. Produces some fruity ester. Highly attentive, so it will likely produce a slightly dry taste.\n\nBest for: Ales requiring high attenuation.\n\n"
	},
	{
		"name": "- Special Ale",
		"lab": "Glenbrew",
		"type": "Ale",
		"form": "Dry",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Highly attentive, clean finish dry yeast.\n\nBest for: All-malt beers.\n\n"
	},
	{
		"name": "- Diamond Lager",
		"lab": "Lallemand",
		"type": "Lager",
		"form": "Dry",
		"temp": "50°F - 59°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Diamond Lager yeast originated in Germany and is used in a number of commercial breweries to produce various lagers.\n\nBest for: Lagers\n\n"
	},
	{
		"name": "- Munuch",
		"lab": "Lallemand",
		"type": "Wheat",
		"form": "Dry",
		"temp": "65°F - 71°F",
		"attenuationPercent": 70,
		"flocculation": "Medium",
		"notes": "Danstar Munich Wheat Beer yeast originated in Bavaria, Germany, the home of many of the worldÃ¢â‚¬â„¢s great wheat beer breweries.\n\nBest for: Wheat beers\n\n"
	},
	{
		"name": "- Nottingham Yeast",
		"lab": "Lallemand",
		"type": "Ale",
		"form": "Dry",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Very High",
		"notes": "High flocculation - settles quickly. Very good reputation as a fast starter and quick fermenter. Clean and only slightly fruity. Some nutty flavor in bottled version. Relatively high attenuation.\n\nBest for: Ales\n\n"
	},
	{
		"name": "- Windsor Yeast",
		"lab": "Lallemand",
		"type": "Ale",
		"form": "Dry",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Very High",
		"notes": "Clean, well balanced finish. Yeast produces an estery ale with a slighly fresh yeast flavor. Not as quick as the Nottingham. Some bannana aroma.\n\nBest for: Ales\n\n"
	},
	{
		"name": "71B-1122 Lalvin 71B-1122",
		"lab": "Lallemand - Lal",
		"type": "Wine",
		"form": "Dry",
		"temp": "59°F - 86°F",
		"attenuationPercent": 75,
		"flocculation": "High",
		"notes": "Rapid starter with constant and complete fermentation. Ability to metabolize high amounts (20-40%) of malic acid. Partial metabolism of malic acid helps soften the wine. May produce significant esters, making it a good choice for concentrates.\n\nBest for: Young wines such as nouveau, blush and sugar white.\n\n"
	},
	{
		"name": "D-47 Lalvin D-47",
		"lab": "Lallemand - Lal",
		"type": "Wine",
		"form": "Dry",
		"temp": "50°F - 86°F",
		"attenuationPercent": 75,
		"flocculation": "High",
		"notes": "Recommended for white variety wines such as Chardonnay and Rose as well as Mead. Low foaming, quick fermenting, forming a compact lees at the end of fermentation. Use yeast nutrients if making mead. Saccharomyces Cerevisiae.\n\nBest for: White wines such as Chardonnay and Rose. Also good for mead.\n\n"
	},
	{
		"name": "EC-1118 Lalvin EC-1118",
		"lab": "Lallemand - Lal",
		"type": "Wine",
		"form": "Dry",
		"temp": "45°F - 95°F",
		"attenuationPercent": 75,
		"flocculation": "High",
		"notes": "Low production of foam, volatile acid and H2S. Ferments over a wide temperature range. High alcohol tolerance, compact lees and good flocculation. Relatively neutral flavor and aroma.\n\nBest for: All types of wine and also cider.\n\n"
	},
	{
		"name": "K1V-1116 Lalvin - K1V-1116",
		"lab": "Lallemand - Lal",
		"type": "Wine",
		"form": "Dry",
		"temp": "59°F - 86°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Used for white grape varieties. Rapid starter with constant and complete fermentation. Capable of surviving difficult conditions such as low nutrient or high SO2 levels. Has low volatile action.\n\nBest for: Souvingnon Blanc, Chenin Blanc and Seyval.\n\n"
	},
	{
		"name": "RC 212 Lalvin RC 212 (Bourgovin)",
		"lab": "Lallemand - Lal",
		"type": "Wine",
		"form": "Dry",
		"temp": "59°F - 86°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "RC212 recommended for red variety wines and high gravity beers. Alcohol tolerance in the 12-14% range. Low foaming and moderate speed fermenting. Saccharomyces Cerevisiae.\n\nBest for: Red wines.\n\n"
	},
	{
		"name": "- Munton Fison Ale",
		"lab": "Munton-Fison",
		"type": "Ale",
		"form": "Dry",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Quick starting dry yeast. Produces some fuity esters. High attenuation produces clean finish.\n\nBest for: High attenuation yeast good for most ales.\n\n"
	},
	{
		"name": "- Pasteur Champagne",
		"lab": "Red Star",
		"type": "Champagne",
		"form": "Dry",
		"temp": "65°F - 73°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "High attenuation dry yeast. Good reputation. Good for Meads and other high gravity ales.\n\nBest for: Meads, Barleywines, Imperial Stouts and high gravity ales.\n\n"
	},
	{
		"name": "- Red Star Ale",
		"lab": "Red Star",
		"type": "Ale",
		"form": "Dry",
		"temp": "62°F - 72°F",
		"attenuationPercent": 77,
		"flocculation": "Medium",
		"notes": "Good general purpose dry yeast. Change to a different strain in recent years has improved overall quality.\n\nBest for: High attenuation ales with a dry clean taste.\n\n"
	},
	{
		"name": "CL-0010 American Microbrewery Ale #1",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "56°F - 72°F",
		"attenuationPercent": 74.5,
		"flocculation": "Medium",
		"notes": "Smooth, clean, strong fermenting ale yeast that works well at cold temperature. Clean malt flavor is ideal for cream ales.\n\nBest for: American Ales, Cream Ales\n\n"
	},
	{
		"name": "CL-0020 American Microbrewery Ale #2",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "56°F - 72°F",
		"attenuationPercent": 74,
		"flocculation": "Medium",
		"notes": "Accentuated, rich, creamy malt profile. Generous amounts of diacytl. Use for low gravity beers where malt character is needed or stronger beers for a robust character.\n\nBest for: American ales\n\n"
	},
	{
		"name": "CL-0050 California Pub Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 70°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "For that classic U.S. small brewery flavor. CL-50 produces terrific American red & pale ale styles. While attenuation is normal, this yeast produces a big, soft, well rounded malt flavor that really lets caramel malt flavors shine.\n\nBest for: California and other American ales\n\n"
	},
	{
		"name": "CL-0060 Noth-Eastern Micro Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "56°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Malty, bready, yet clean malt character. Leaves hops flavor and aroma intact. Versitile yeast for many American styles.\n\nBest for: American Ales, Reds, Ambers\n\n"
	},
	{
		"name": "CL-0110 British Microbrewery Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 74,
		"flocculation": "Medium",
		"notes": "Complex oakey, and fruity ester profile. Slightly under-attenuated finish leaves some residual malt flavor. Suitable for low to medium gravity bitters and ales.\n\nBest for: English Bitters and Milds\n\n"
	},
	{
		"name": "CL-0120 British Pale Ale #1",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 76,
		"flocculation": "Medium",
		"notes": "Bold, citrusy character which accentuates mineral and hop flavors. Distinct character of a classic Pale Ale.\n\nBest for: British Pale Ales and Bitters.\n\n"
	},
	{
		"name": "CL-0130 British Pale Ale #2",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Smooth, full bodied, well roundd ale yeast. Mild esters. Strong ferementer suitable for strong or spiced ales. Accentuates caramel and malt flavors.\n\nBest for: British Pale Ale, other British Ales\n\n"
	},
	{
		"name": "CL-0150 British Real Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 68,
		"flocculation": "Medium",
		"notes": "Great for real pub bitters. Has a complex, woody flavor and musty ester profile that characterizes real ale. Underattenuating to leave mild sweetness to the finish.\n\nBest for: Bitters and other English Ales\n\n"
	},
	{
		"name": "CL-0160 British Draft Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Full bodied, well rounded ale yeast with a touch of diacytl. Emphasizes malt character. Great for porters and bitters.\n\nBest for: Porters and Bitters.\n\n"
	},
	{
		"name": "CL-0170 Classic British Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 76,
		"flocculation": "Medium",
		"notes": "Complex ale with British tones and fruit like esters. Works well in high gravity ales such as scottish heavy as well.\n\nBest for: Bitters, Porters, Scottish Heavy Ales.\n\n"
	},
	{
		"name": "CL-0200 Scottish Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "60°F - 68°F",
		"attenuationPercent": 78.5,
		"flocculation": "High",
		"notes": "Use for classic Scottish heavys, 90's- or strong ales. This yeast produces a soft, fruity malt profile with a subtle woody, oakey ester profile. A mild, mineral like dryness in the finish makes this a very complex strain.\n\nBest for: Scottish ales\n\n"
	},
	{
		"name": "CL-0240 Irish Dry Stout",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 77,
		"flocculation": "Medium",
		"notes": "Top fermenting yeast which leaves a recognizable slightly woody character to Dry Stouts. Vinous almost lactic character that blends well with roast malts. High attenuation.\n\nBest for: Dry Stouts\n\n"
	},
	{
		"name": "CL-0260 Canadian Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Clean, strong fermenting, well attenuated ale yeast that leaves a pleasant, fruity, complex finish.\n\nBest for: Light Canadian Ales, Bitish Bitter, Pale Ale, Porters\n\n"
	},
	{
		"name": "CL-0270 Australian Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "66°F - 76°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Produces a malty, bready, nutty character with a pleasant honey like finish. This yeast emphasizes malt nuances and is very forgiving in warmer fermentations for those who cannot ferment under controlled conditions.\n\nBest for: Australian styles\n\n"
	},
	{
		"name": "CL-0300 Belgian Ale #1",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 76,
		"flocculation": "Medium",
		"notes": "Produces classic Belgian ale flavor. Robust, estery with notes of clove and fruit. Ferments well in high gravity worts.\n\nBest for: Belgian Ales, High gravity ales.\n\n"
	},
	{
		"name": "CL-0320 Belgian Ale #2",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "Flanders style yeast. Strong fermenting yeast attenuates well and produces fruity, malty, estery malt profile. Slow to flocculate.\n\nBest for: Flanders style Belgian Ales, Belgian Brown, Fruit beers\n\n"
	},
	{
		"name": "CL-0340 Belgian Ale #3",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Slightly more refined than CL-300. Produces the classic Trappist ale character with esters of spice and fruit. Mildly phenolic. Strong fermenting yeast.\n\nBest for: Belgian ales, Trappist Ales\n\n"
	},
	{
		"name": "CL-0380 Saison",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Pleasant yeast blend. Leaves a smooth full character to the malt with mild, but pleasant esters and some apple pie spices.\n\nBest for: French or Belgian Ales and Grand Cru styles.\n\n"
	},
	{
		"name": "CL-0400 Old German Ale",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 76,
		"flocculation": "Medium",
		"notes": "Traditional Alt Bier flavor. Strong fermenter with a smooth, attenuated, mild flavor. Slightly dry, clean, quenching finish.\n\nBest for: Altbier, German ales, some Wheat beers.\n\n"
	},
	{
		"name": "CL-0450 Kolsch",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "62°F - 72°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "Produces mild sulfer flavor which smooths with time to a clean attenuated flavor. Mineral and malt characters come through well. Clean, lightly yeasty flavor and aroma in the finish.\n\nBest for: German Kolsch\n\n"
	},
	{
		"name": "CL-0600 Original Pilsner",
		"lab": "Brewtek",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 75.5,
		"flocculation": "Medium",
		"notes": "Full bodied lager yeast with sweet, underattenuated finish. Subdued diacetyl character. Big malty palatte. Classic Pilsner finish and style.\n\nBest for: Classic Czech Pilsners\n\n"
	},
	{
		"name": "CL-0620 American Megabrewery",
		"lab": "Brewtek",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Smooth yeast with a slight fruity flavor. Lagers into a smooth, clean tasting beer. Use for light, clean lager styles with unobtrusive yeast character.\n\nBest for: Light, Clean American style lagers.\n\n"
	},
	{
		"name": "CL-0630 American Microbrewery Lager",
		"lab": "Brewtek",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Strong fermenter. Leaves a clean, full flavored, malty finish. Slightly attenuative. Versatile for most lager styles with a clean full flavor.\n\nBest for: All lager styles\n\n"
	},
	{
		"name": "CL-0650 Old Bavarian Lager",
		"lab": "Brewtek",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Well rounded, malty with a subtle ester complex and citrus flavors. Distinct, flavorful yeast is great for Southern German lager styles.\n\nBest for: German lagers, Bock, Dunkel, Helles\n\n"
	},
	{
		"name": "CL-0660 Northern German Lager",
		"lab": "Brewtek",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Clean, crisp, traditional lager character. Strong fermenting and forgiving yeast. Excellent general purpose lager yeast.\n\nBest for: German pilsners, Mexican and Canadian Lagers\n\n"
	},
	{
		"name": "CL-0670 Swiss Lager",
		"lab": "Brewtek",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 54°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "A unique strain that has both a clean, crisp lager flavor and a soft, smooth maltiness. Perfect for European Pilsners. Like our CL-660 strain, this is an excellent all purpose Lager yeast for those wanting a fuller, rounder palate.\n\nBest for: European pilsners and lagers\n\n"
	},
	{
		"name": "CL-0680 East European Lager",
		"lab": "Brewtek",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 58°F",
		"attenuationPercent": 76.5,
		"flocculation": "Medium",
		"notes": "Smooth, rich, creamy character. Emphasizes big malt flavor and clean finish. Full but smooth malt character.\n\nBest for: Marzens, Oktoberfest\n\n"
	},
	{
		"name": "CL-0690 California Esteem (Gold)",
		"lab": "Brewtek",
		"type": "Lager",
		"form": "Liquid",
		"temp": "48°F - 65°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Use for California Common Beers (aka Steam Beer). Leaves a slightly estery, well attenuated finish. Quite distinct in flavor. Can also be used for complex porters.\n\nBest for: California Common Beer, American or Robust porters\n\n"
	},
	{
		"name": "CL-0900 Belgian Wheat",
		"lab": "Brewtek",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "55°F - 68°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Top fermenting yeast with a soft bread-like character. Leaves a sweet, mildly estery finish. Delicious Belgian character to any beer. Great in Wit style with coriander and bitter orange peel.\n\nBest for: Belgian Pils, Belgian Wit\n\n"
	},
	{
		"name": "CL-0920 German Wheat BT",
		"lab": "Brewtek",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "55°F - 68°F",
		"attenuationPercent": 76,
		"flocculation": "Medium",
		"notes": "Top fermenting Weizenbier yeast. Intensely spicy, clovey and phenolic. High attenuation.\n\nBest for: Weizen, Weizenbocks\n\n"
	},
	{
		"name": "CL-0930 German Weiss",
		"lab": "Brewtek",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "55°F - 68°F",
		"attenuationPercent": 75,
		"flocculation": "Medium",
		"notes": "Milder than German Wheat #1, this strain still produces the desired clove and phenol character, but to a lesser degree. Full, earthy character.\n\nBest for: Weiss, Weizen, other Southern German Wheat styles\n\n"
	},
	{
		"name": "CL-0980 American White Ale",
		"lab": "Brewtek",
		"type": "Wheat",
		"form": "Liquid",
		"temp": "55°F - 68°F",
		"attenuationPercent": 75,
		"flocculation": "Low",
		"notes": "Smooth wheat yeast with a round, clean, malt flavor. Low flocculation leaves cloudy Hefe-Weizen finish. Smooth flavor makes a great unfiltered wheat beer.\n\nBest for: Hefe-Weizen, American Wheat\n\n"
	},
	{
		"name": "CL-5200 Brettanomyces Lambicus",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "48°F - 68°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Wild yeast strain associated with Belgian breweries. Contributes horsey, old leather flavor complex to Belgian lambics. Slow growing yeast that takes weeks to ferment and months to develop fully.\n\nBest for: Belgian Lambic beers\n\n"
	},
	{
		"name": "CL-5600 Pediococcus Damnosus",
		"lab": "Brewtek",
		"type": "Ale",
		"form": "Liquid",
		"temp": "48°F - 68°F",
		"attenuationPercent": 73,
		"flocculation": "Medium",
		"notes": "Slow growing bacteria used in secondary to create lactic acid flavor in Belgian lambics. Produces large amounts of lactic acid and diacytl. Prefers anaerobic conditions.\n\nBest for: Belgian Lambic beers\n\n"
	}
];

export default yeasts;