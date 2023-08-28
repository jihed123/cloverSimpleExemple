import React from "react";
import "./App.css";
import CloverIIIF from "@samvera/clover-iiif";
// const CloverIIIF = require("@samvera/clover-iiif");

// const manifestUrls = [
// 	"https://www.e-rara.ch/i3f/v20/6069569/manifest",
// 	"https://edsilv.github.io/test-manifests/download-service-enabled.json",
// 	"https://wellcomelibrary.org/iiif/b18035723/manifest",
// 	"https://dms-data.stanford.edu/data/manifests/RomanCoins/bb853kn3021/manifest.json",
// 	"https://dms-data.stanford.edu/data/manifests/McLaughlin/bc788vp3448/manifest.json",
// "https://manifests.collections.yale.edu/ycba/obj/199"
// ];
function App() {
	const manifestId = "https://www.e-rara.ch/i3f/v20/6069569/manifest";
	return (
		<div className="App">
			<CloverIIIF
				id={manifestId}
				options={{
					renderAbout: true,
					showIIIFBadge: true,
					showInformationToggle: false,
					showTitle: true,
					debugMode: true,
				}}
			/>
		</div>
	);
}

export default App;
