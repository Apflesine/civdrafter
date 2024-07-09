const leaders = [
	{ name: "Abraham Lincoln", civilization: "American", paywall: "Leader Pass", expansion: "none", banned: false, img: "9/97/Abraham_Lincoln_(Civ6).png" },
	{ name: "Alexander", civilization: "Macedonian", paywall: "Base Game DLC", expansion: "none", banned: false, img: "3/33/Alexander_(Civ6).png" },
	{ name: "Amanitore", civilization: "Nubian", paywall: "Base Game DLC", expansion: "none", banned: false, img: "b/b8/Amanitore_(Civ6).png" },
	{ name: "Ambiorix", civilization: "Gallic", paywall: "Frontier Pass", expansion: "none", banned: false, img: "8/8c/Ambiorix_(Civ6).png" },
	{ name: "Bà Triệu", civilization: "Vietnamese", paywall: "Frontier Pass", expansion: "none", banned: false, img: "9/92/Bà_Triệu_(Civ6).png" },
	{ name: "Basil II", civilization: "Byzantine", paywall: "Frontier Pass", expansion: "none", banned: false, img: "9/96/Basil_II_(Civ6).png" },
	{ name: "Catherine de Medici (Black Queen)", civilization: "French", paywall: "none", expansion: "none", banned: false, img: "0/06/Catherine_de_Medici_(Civ6).png" },
	{ name: "Catherine de Medici (Magnificence)", civilization: "French", paywall: "Frontier Pass", expansion: "none", banned: false, img: "e/e2/Catherine_de_Medici_%28Magnificence%29_%28Civ6%29.png" },
	{ name: "Chandragupta", civilization: "Indian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img: "e/e2/Chandragupta_(Civ6).png" },
	{ name: "Cleopatra", civilization: "Egyptian", paywall: "none", expansion: "none", banned: false, img: "9/98/Cleopatra_(Civ6).png" },
	{ name: "Cleopatra (Ptolemaic)", civilization: "Egyptian", paywall: "Leader Pass", expansion: "none", banned: false, img: "0/0f/Cleopatra_(Ptolemaic)_(Civ6).png" },
	{ name: "Cyrus", civilization: "Persian", paywall: "Base Game DLC", expansion: "none", banned: false, img: "1/14/Cyrus_(Civ6).png" },
	{ name: "Dido", civilization: "Phoenician", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "c/cb/Dido_(Civ6).png" },
	{ name: "Eleanor of Aquitaine", civilization: "English", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "2/2f/Eleanor_of_Aquitaine_(English)_(Civ6).png" },
	{ name: "Eleanor of Aquitaine", civilization: "French", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "7/7a/Eleanor_of_Aquitaine_%28French%29_%28Civ6%29.png" },
	{ name: "Elizabeth", civilization: "English", paywall: "Leader Pass", expansion: "none", banned: false, img: "c/c2/Elizabeth_I_(Civ6).png" },
	{ name: "Frederick Barbarossa", civilization: "German", paywall: "none", expansion: "none", banned: false, img: "4/44/Frederick_Barbarossa_%28Civ6%29.png" },
	{ name: "Gandhi", civilization: "Indian", paywall: "none", expansion: "none", banned: false, img: "2/29/Gandhi_%28Civ6%29.png" },
	{ name: "Genghis Khan", civilization: "Mongolian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img: "5/53/Genghis_Khan_%28Civ6%29.png" },
	{ name: "Gilgamesh", civilization: "Sumerian", paywall: "none", expansion: "none", banned: false, img: "f/ff/Gilgamesh_%28Civ6%29.png" },
	{ name: "Gitarja", civilization: "Indonesian", paywall: "Base Game DLC", expansion: "none", banned: false, img: "e/e8/Gitarja_%28Civ6%29.png" },
	{ name: "Gorgo", civilization: "Greek", paywall: "none", expansion: "none", banned: false, img: "6/68/Gorgo_%28Civ6%29.png" },
	{ name: "Hammurabi", civilization: "Babylonian", paywall: "Frontier Pass", expansion: "none", banned: false, img: "9/94/Hammurabi_%28Civ6%29.png" },
	{ name: "Harald Hardrada (Konge)", civilization: "Norwegian", paywall: "none", expansion: "none", banned: false, img: "7/77/Harald_Hardrada_%28Civ6%29.png" },
	{ name: "Harald Hardrada (Varangian)", civilization: "Norwegian", paywall: "Leader Pass", expansion: "none", banned: false, img: "6/61/Harald_Hardrada_(Varangian)_(Civ6).png" },
	{ name: "Hojo Tokimune", civilization: "Japanese", paywall: "none", expansion: "none", banned: false, img: "0/07/Hojo_Tokimune_%28Civ6%29.png" },
	{ name: "Jadwiga", civilization: "Polish", paywall: "Base Game DLC", expansion: "none", banned: false, img: "f/f6/Jadwiga_%28Civ6%29.png" },
	{ name: "Jayavarman VII", civilization: "Khmer", paywall: "Base Game DLC", expansion: "none", banned: false, img: "7/77/Jayavarman_VII_%28Civ6%29.png" },
	{ name: "João III", civilization: "Portuguese", paywall: "Frontier Pass", expansion: "none", banned: false, img: "3/3e/João_III_%28Civ6%29.png" },
	{ name: "John Curtin", civilization: "Australian", paywall: "Base Game DLC", expansion: "none", banned: false, img: "b/b9/John_Curtin_%28Civ6%29.png" },
	{ name: "Julius Caesar", civilization: "Roman", paywall: "none", expansion: "none", banned: false, img: "4/4c/Julius_Caesar_%28Civ6%29.png" },
	{ name: "Kristina", civilization: "Swedish", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "3/32/Kristina_%28Civ6%29.png" },
	{ name: "Kublai Khan", civilization: "Chinese", paywall: "Frontier Pass", expansion: "none", banned: false, img: "5/54/Kublai_Khan_%28Chinese%29_%28Civ6%29.png" },
	{ name: "Kublai Khan", civilization: "Mongolian", paywall: "Frontier Pass", expansion: "none", banned: false, img: "c/cb/Kublai_Khan_%28Mongolian%29_%28Civ6%29.png" },
	{ name: "Kupe", civilization: "Māori", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "4/42/Kupe_%28Civ6%29.png" },
	{ name: "Lady Six Sky", civilization: "Mayan", paywall: "Frontier Pass", expansion: "none", banned: false, img: "7/77/Lady_Six_Sky_%28Civ6%29.png" },
	{ name: "Lautaro", civilization: "Mapuche", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img: "e/e0/Lautaro_%28Civ6%29.png" },
	{ name: "Ludwig II", civilization: "German", paywall: "Leader Pass", expansion: "none", banned: false, img: "b/b5/Ludwig_II_(Civ6).png" },
	{ name: "Mansa Musa", civilization: "Mali", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "7/70/Mansa_Musa_%28Civ6%29.png" },
	{ name: "Matthias Corvinus", civilization: "Hungarian", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "2/25/Matthias_Corvinus_%28Civ6%29.png" },
	{ name: "Menelik II", civilization: "Ethiopian", paywall: "Frontier Pass", expansion: "none", banned: false, img: "9/97/Menelik_II_%28Civ6%29.png" },
	{ name: "Montezuma", civilization: "Aztec", paywall: "none", expansion: "none", banned: false, img: "1/1e/Montezuma_%28Civ6%29.png" },
	{ name: "Mvemba a Nzinga", civilization: "Kongolese", paywall: "none", expansion: "none", banned: false, img: "6/68/Mvemba_a_Nzinga_%28Civ6%29.png" },
	{ name: "Nader Shah", civilization: "Persian", paywall: "Leader Pass", expansion: "none", banned: false, img: "e/ec/Nader_Shah_%28Civ6%29.png" },
	{ name: "Nzinga Mbande", civilization: "Kongolese", paywall: "Leader Pass", expansion: "none", banned: false, img: "6/6a/Nzinga_Mbande_%28Civ6%29.png" },
	{ name: "Pachacuti", civilization: "Incan", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "f/f2/Pachacuti_%28Civ6%29.png" },
	{ name: "Pedro II", civilization: "Brazillian", paywall: "none", expansion: "none", banned: false, img: "7/7c/Pedro_II_%28Civ6%29.png" },
	{ name: "Pericles", civilization: "Greek", paywall: "none", expansion: "none", banned: false, img: "4/40/Pericles_%28Civ6%29.png" },
	{ name: "Peter", civilization: "Russian", paywall: "none", expansion: "none", banned: false, img: "8/80/Peter_%28Civ6%29.png" },
	{ name: "Philip II", civilization: "Spanish", paywall: "none", expansion: "none", banned: false, img: "5/59/Philip_II_%28Civ6%29.png" },
	{ name: "Poundmaker", civilization: "Cree", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img: "3/3b/Poundmaker_%28Civ6%29.png" },
	{ name: "Qin Shi Huang (Mandate of Heaven)", civilization: "Chinese", paywall: "none", expansion: "none", banned: false, img: "c/c3/Qin_Shi_Huang_%28Civ6%29.png" },
	{ name: "Qin Shi Huang (Unifier)", civilization: "Chinese", paywall: "Leader Pass", expansion: "none", banned: false, img: "0/00/Qin_Shi_Huang_%28Unifier%29_%28Civ6%29.png" },
	{ name: "Ramses II", civilization: "Egyptian", paywall: "Leader Pass", expansion: "none", banned: false, img: "9/91/Ramses_II_(Civ6).png" },
	{ name: "Robert the Bruce", civilization: "Scottish", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img: "c/c4/Robert_the_Bruce_%28Civ6%29.png" },
	{ name: "Saladin (Sultan)", civilization: "Arabian", paywall: "Leader Pass", expansion: "none", banned: false, img: "8/82/Saladin_%28Sultan%29_%28Civ6%29.png" },
	{ name: "Saladin (Vizier)", civilization: "Arabian", paywall: "none", expansion: "none", banned: false, img: "5/57/Saladin_%28Civ6%29.png" },
	{ name: "Sejong", civilization: "Korean", paywall: "Leader Pass", expansion: "none", banned: false, img: "b/b8/Sejong_(Civ6).png" },
	{ name: "Seondeok", civilization: "Korean", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img: "9/9c/Seondeok_%28Civ6%29.png" },
	{ name: "Shaka", civilization: "Zulu", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img: "e/eb/Shaka_%28Civ6%29.png" },
	{ name: "Simón Bolívar", civilization: "Gran Colombian", paywall: "Frontier Pass", expansion: "none", banned: false, img: "9/9d/Simón_Bolívar_%28Civ6%29.png" },
	{ name: "Sundiata Keita", civilization: "Mali", paywall: "Frontier Pass", expansion: "none", banned: false, img: "5/56/Sundiata_Keita_(Civ6).png" },
	{ name: "Suleiman (Kanuni)", civilization: "Ottoman", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "8/85/Suleiman_%28Civ6%29.png" },
	{ name: "Suleiman (Muhtesem)", civilization: "Ottoman", paywall: "Leader Pass", expansion: "none", banned: false, img: "d/d0/Suleiman_%28Muhteşem%29_%28Civ6%29.png" },
	{ name: "Tamar", civilization: "Georgian", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img: "b/b0/Tamar_%28Civ6%29.png" },
	{ name: "Teddy Roosevelt (Bull Moose)", civilization: "American", paywall: "none", expansion: "none", banned: false, img: "7/70/Teddy_Roosevelt_%28Civ6%29.png" },
	{ name: "Teddy Roosevelt (Rough Rider)", civilization: "American", paywall: "Frontier Pass", expansion: "none", banned: false, img: "c/c3/Teddy_Roosevelt_%28Rough_Rider%29_%28Civ6%29.png" },
	{ name: "Theodora", civilization: "Byzantine", paywall: "Leader Pass", expansion: "none", banned: false, img: "1/18/Theodora_(Civ6).png" },
	{ name: "Tokugawa", civilization: "Japanese", paywall: "Leader Pass", expansion: "none", banned: false, img: "a/af/Tokugawa_%28Civ6%29.png" },
	{ name: "Tomyris", civilization: "Scythian", paywall: "none", expansion: "none", banned: false, img: "6/6a/Tomyris_%28Civ6%29.png" },
	{ name: "Trajan", civilization: "Roman", paywall: "none", expansion: "none", banned: false, img: "d/d5/Trajan_%28Civ6%29.png" },
	{ name: "Victoria (Age of Empire)", civilization: "English", paywall: "none", expansion: "none", banned: false, img: "5/53/Victoria_%28Civ6%29.png" },
	{ name: "Victoria (Age of Steam)", civilization: "English", paywall: "Leader Pass", expansion: "none", banned: false, img: "8/8d/Victoria_(Age_of_Steam)_(Civ6).png" },
	{ name: "Wilfrid Laurier", civilization: "Canadian", paywall: "Gathering Storm", expansion: "Gathering Storm", banned: false, img: "b/b0/Wilfrid_Laurier_%28Civ6%29.png" },
	{ name: "Wilhelmina", civilization: "Dutch", paywall: "Rise and Fall", expansion: "Rise and Fall", banned: false, img: "4/44/Wilhelmina_%28Civ6%29.png" },
	{ name: "Wu Zetian", civilization: "Chinese", paywall: "Leader Pass", expansion: "none", banned: false, img: "7/76/Wu_Zetian_%28Civ6%29.png" },
	{ name: "Yongle", civilization: "Chinese", paywall: "Leader Pass", expansion: "none", banned: false, img: "5/5a/Yongle_%28Civ6%29.png" },
];

const maps = [
	{ name: "4-Leaf Clover", expansion: "none", img: "e/e9/Map_4_Leaf_Clover_%28Civ6%29.png" },
	{ name: "6-Armed Snowflake", expansion: "none", img: "4/4a/Map_6_Armed_Snowflake_%28Civ6%29.png" },
	{ name: "Archipelago", expansion: "Rise and Fall", img: "3/35/Map_Archipelago_%28Civ6%29.png" },
	{ name: "Continents", expansion: "none", img: "6/6c/Map_Continents_(Civ6).png" },
	{ name: "Continents and Islands", expansion: "Gathering Storm", img: "6/6c/Map_Continents_%28Civ6%29.png" },
	{ name: "Earth", expansion: "none", img: "f/fe/Map_Earth_%28Civ6%29.png" },
	{ name: "Earth Huge", expansion: "none", img: "4/45/Map_Earth_Huge_%28Civ6%29.png" },
	{ name: "East Asia", expansion: "none", img: "a/a2/Map_East_Asia_%28Civ6%29.png" },
	{ name: "Europe", expansion: "Rise and Fall", img: "4/42/Map_Europe_%28Civ6%29.png" },
	{ name: "Fractal", expansion: "none", img: "1/15/Map_Fractal_%28Civ6%29.png" },
	{ name: "Highlands", expansion: "Rise and Fall", img: "1/14/Map_Highlands_%28Civ6%29.png" },
	{ name: "Inland Sea", expansion: "none", img: "c/c4/Map_Inland_Sea_%28Civ6%29.png" },
	{ name: "Island Plates", expansion: "none", img: "d/d0/Map_Island_Plates_%28Civ6%29.png" },
	{ name: "Lakes", expansion: "none", img: "c/c0/Map_Lakes_%28Civ6%29.png" },
	{ name: "Mediterranean Large", expansion: "none", img: "0/0d/Map_Mediterranean_%28Civ6%29.png" },
	{ name: "Mirror", expansion: "none", img: "9/99/Map_Mirror_%28Civ6%29.png" },
	{ name: "Pangaea", expansion: "none", img: "3/33/Map_Pangaea_%28Civ6%29.png" },
	{ name: "Primordial", expansion: "Gathering Storm", img: "8/82/Map_Primodial_%28Civ6%29.png" },
	{ name: "Seven Seas", expansion: "none", img: "2/2e/Map_Seven_Seas_%28Civ6%29.png" },
	{ name: "Shuffle", expansion: "none", img: "3/30/Map_Shuffle_%28Civ6%29.png" },
	{ name: "Small Continents", expansion: "none", img: "f/f2/Map_Small_Continents_%28Civ6%29.png" },
	{ name: "Splintered Fractal", expansion: "Gathering Storm", img: "5/51/Map_Splintered_Fractal_%28Civ6%29.png" },
	{ name: "Terra", expansion: "none", img: "3/38/Map_Terra_%28Civ6%29.png" },
	{ name: "Tilted Axis", expansion: "Gathering Storm", img: "c/cd/Map_Tilted_Axis_%28Civ6%29.png" },
	{ name: "True Start Location Earth", expansion: "none", img: "4/4b/Map_True_Start_Earth_%28Civ6%29.png" },
	{ name: "True Start Location Earth Huge", expansion: "none", img: "f/f9/Map_True_Start_Earth_Huge_%28Civ6%29.png" },
	{ name: "True Start Location East Asia", expansion: "none", img: "7/77/Map_True_Start_East_Asia_%28Civ6%29.png" },
	{ name: "True Start Location Europe", expansion: "Rise and Fall", img: "f/f8/Map_True_Start_Europe_%28Civ6%29.png" },
	{ name: "True Start Location Mediterranean", expansion: "none", img: "c/c9/Map_True_Start_Mediterranean_%28Civ6%29.png" },
	{ name: "Wetlands", expansion: "none", img: "8/8f/Map_Wetlands_%28Civ6%29.png" }
];

function selectExpansion(expansion) {
	// Set the selected expansion
	selectedExpansion = expansion;
	// Update selected expansion
	let selectedButton = document.querySelector('.selected');
	if (selectedButton) {
		selectedButton.classList.remove('selected');
	}
	document.getElementById(expansion.replace(/\s/g, '') + 'Button').classList.add('selected');
	// Save selected expansion to localStorage
	localStorage.setItem('selectedExpansion', expansion);
	// Update banned maps and leaders based on selected expansion
	updateBannedMaps(expansion);
	updateBannedLeaders(expansion);
	loadBannedSelection();
	document.getElementById("expansionSelected").style.display = "block";
	playersSelected();
}
window.onload = () => {
	loadPlayers();
    var selectedExpansion = localStorage.getItem('selectedExpansion');
    if (selectedExpansion) {
        selectExpansion(selectedExpansion); 
	} else {}
	playersSelected();
    decodeDraftFromUrl();
};

function decodeDraftFromUrl() {
    let urlParams = new URLSearchParams(window.location.search);
    let draft = {};

    if (urlParams.has('expansion')) {
        draft.expansion = urlParams.get('expansion');
        selectExpansion(draft.expansion);
    }

    if (urlParams.has('map')) {
        draft.map = parseInt(urlParams.get('map'));
        let draftedMap = maps[draft.map];
        let mapDisplay = document.getElementById("map");
        mapDisplay.innerHTML = " <img src='https://static.wikia.nocookie.net/civilization/images/" + draftedMap.img + "' class='mapIcon'>" + draftedMap.name;
    }


    if (urlParams.has('leaders')) {
        draft.leaders = JSON.parse(urlParams.get('leaders'));
		
		let player;
		i = player in draft.leaders;
		let playerListEl = document.getElementById("playerList");
		playerListEl.innerHTML = "";
		for (let i in draft.leaders) {
			// dlc select dropdown
			playerListEl.innerHTML += "<i contenteditable='true' spellcheck='false'>Player " + i + "</i> <select class='dlcSelect' id='dlcPlayer" + i + "'><option value='none'>No DLC </option><option value='Base Game DLC'>Platinum Edition </option><option value='Frontier Pass'>Platinum Edition + Frontier Pass</option><option value='Leader Pass' selected>Platinum Edition + Frontier Pass + Leader Pass</option></select>"
			// player leader holder
			playerListEl.innerHTML += "<li class='offerList'><div id='leadersPlayer" + i + "'></div></li>";
		}

        // Display drafted leaders
        for (player in draft.leaders) {
            draft.leaders[player].forEach((leaderIndex) => {
                let draftedLeader = leaders[leaderIndex];
                if (draftedLeader) {
                    document.getElementById("leadersPlayer" + player).innerHTML += "<img src='https://static.wikia.nocookie.net/civilization/images/" + draftedLeader.img + "' class='leaderIcon'>" + draftedLeader.name + " [" + draftedLeader.civilization + "]<br>";
                }
            });
        }
	}
    
}

/*
function decodeDraftFromUrl() {
    let url = new URL(window.location.href);
    let draft = {
        map: url.searchParams.get('map'),
        leaders: url.searchParams.get('leaders') ? url.searchParams.get('leaders').split(',').map(Number) : [],
        expansion: url.searchParams.get('expansion')
    };

    if (draft.expansion !== null) {
		selectExpansion(draft.expansion);
	}

    if (draft.map !== null) {
        let draftedMap = maps[parseInt(draft.map)];
        let mapDisplay = document.getElementById("map");
        mapDisplay.innerHTML = " <img src='https://static.wikia.nocookie.net/civilization/images/" + draftedMap.img + "' class='mapIcon'>" + draftedMap.name;
    }

    if (draft.leaders.length > 0) {
        draft.leaders.forEach((leaderIndex, player) => {
            let draftedLeader = leaders[leaderIndex];
            document.getElementById("leadersPlayer" + (player + 1)).innerHTML += "<img src='https://static.wikia.nocookie.net/civilization/images/" + draftedLeader.img + "' class='leaderIcon'>" + draftedLeader.name + " [" + draftedLeader.civilization + "]<br>";
        });
    }
}
*/

document.getElementById('shareUrlButton').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('URL copied to clipboard!');
    });
});

// Function to clear all selected maps
function clearAllMaps() {
    let bannedMapCheckboxes = document.getElementsByClassName("banCheckboxm");
    for (let i = 0; i < bannedMapCheckboxes.length; i++) {
        bannedMapCheckboxes[i].checked = false;
    }
    saveBannedSelection();
}

// Function to clear all selected leaders
function clearAllLeaders() {
    let bannedLeaderCheckboxes = document.getElementsByClassName("banCheckbox");
    for (let i = 0; i < bannedLeaderCheckboxes.length; i++) {
        bannedLeaderCheckboxes[i].checked = false;
    }
    saveBannedSelection();
}

// Function to update the display of selected maps count
function updateSelectedMapsCount() {
    let selectedCount = document.querySelectorAll(".banCheckboxm:checked").length;
    document.getElementById('selectedMapsCount').innerText = `${selectedCount}`;
}

// Function to update the display of selected leaders count
function updateSelectedLeadersCount() {
    let selectedCount = document.querySelectorAll(".banCheckbox:checked").length;
    document.getElementById('selectedLeadersCount').innerText = `${selectedCount}`;
}

// Function to save banned maps and leaders selection to localStorage
function saveBannedSelection() {
	let bannedMapsSelection = [];
	let bannedLeadersSelection = [];

	// Save banned maps selection
	let bannedMapCheckboxes = document.getElementsByClassName("banCheckboxm");
	for (let i = 0; i < bannedMapCheckboxes.length; i++) {
		if (bannedMapCheckboxes[i].checked) {
			bannedMapsSelection.push(bannedMapCheckboxes[i].value);
		}
	}
	localStorage.setItem('bannedMaps', JSON.stringify(bannedMapsSelection));

	// Save banned leaders selection
	let bannedLeaderCheckboxes = document.getElementsByClassName("banCheckbox");
	for (let i = 0; i < bannedLeaderCheckboxes.length; i++) {
		if (bannedLeaderCheckboxes[i].checked) {
			bannedLeadersSelection.push(bannedLeaderCheckboxes[i].value);
		}
	}
	localStorage.setItem('bannedLeaders', JSON.stringify(bannedLeadersSelection));

    // Update the selected counts
    updateSelectedMapsCount();
    updateSelectedLeadersCount();
}

// Function to load banned maps and leaders selection from localStorage
function loadBannedSelection() {
	let bannedMapsSelection = JSON.parse(localStorage.getItem('bannedMaps')) || [];
	let bannedLeadersSelection = JSON.parse(localStorage.getItem('bannedLeaders')) || [];

	// Load banned maps selection
	let bannedMapCheckboxes = document.getElementsByClassName("banCheckboxm");
	for (let i = 0; i < bannedMapCheckboxes.length; i++) {
		if (bannedMapsSelection.includes(bannedMapCheckboxes[i].value)) {
			bannedMapCheckboxes[i].checked = true;
		}
	}

	// Load banned leaders selection
	let bannedLeaderCheckboxes = document.getElementsByClassName("banCheckbox");
	for (let i = 0; i < bannedLeaderCheckboxes.length; i++) {
		if (bannedLeadersSelection.includes(bannedLeaderCheckboxes[i].value)) {
			bannedLeaderCheckboxes[i].checked = true;
		}
	}

	    // Update the selected counts
		updateSelectedMapsCount();
		updateSelectedLeadersCount();
}

// generate banned leaders checkboxes depending on which gamemode is selected
function updateBannedLeaders(expansion) {
	let bannedLeadersEl = document.getElementById("bannedLeadersList");
	// reset contents
	bannedLeadersEl.innerHTML = "";
	// repopulate
	for (let i = 0; i < leaders.length; i++) {
		if (leaders[i].expansion == "Rise and Fall" && expansion == "none") {
			// leader not allowed in mode so has no checkbox
		}
		else if (leaders[i].expansion == "Gathering Storm" && (expansion == "none" || expansion == "Rise and Fall")) {
			// leader not allowed in mode so has no checkbox
		}
		else {
			// leader allowed
			let leaderString = leaders[i].name + " [" + leaders[i].civilization + "]"; // string used to identify leader
			// checkbox
			let checkboxNode = document.createElement("input");
			checkboxNode.type = "checkbox";
			checkboxNode.id = "banCheckbox" + i;
			checkboxNode.className = "banCheckbox";
			checkboxNode.onclick = saveBannedSelection;
			checkboxNode.value = leaderString;
			bannedLeadersEl.appendChild(checkboxNode);
			// label
			let labelNode = document.createElement("label");
			labelNode.htmlFor = "banCheckbox" + i;
			labelNode.innerHTML = " <img src='https://static.wikia.nocookie.net/civilization/images/" + leaders[i].img + "' class='leaderIcon'>" + leaderString; bannedLeadersEl.appendChild(labelNode);
			// br
			let breakNode = document.createElement("br");
			bannedLeadersEl.appendChild(breakNode);
			// check if it should be banned by default
			if (leaders[i].banned) {
				document.getElementById("banCheckbox" + i).checked = true;
			}
		}
	}
	
    // Update the selected counts
    updateSelectedLeadersCount();
}

// generate banned maps checkboxes depending on which gamemode is selected
function updateBannedMaps(expansion) {
	let bannedMapsEl = document.getElementById("bannedMapsList");
	// reset contents
	bannedMapsEl.innerHTML = "";
	// repopulate
	for (let i = 0; i < maps.length; i++) {
		if (maps[i].expansion == "Rise and Fall" && expansion == "none") {
			// map not allowed in mode so has no checkbox
		}
		else if (maps[i].expansion == "Gathering Storm" && (expansion == "none" || expansion == "Rise and Fall")) {
			// map not allowed in mode so has no checkbox
		}
		else {
			// map allowed
			let mapString = maps[i].name; // string used to identify map
			// checkbox
			let checkboxNode = document.createElement("input");
			checkboxNode.type = "checkbox";
			checkboxNode.id = "banCheckboxm" + i;
			checkboxNode.className = "banCheckboxm";
			checkboxNode.onclick = saveBannedSelection;
			checkboxNode.value = mapString;
			bannedMapsEl.appendChild(checkboxNode);
			// label
			let labelNode = document.createElement("label");
			labelNode.htmlFor = "banCheckboxm" + i;
			labelNode.innerHTML = " <img src='https://static.wikia.nocookie.net/civilization/images/" + maps[i].img + "' class='mapIcon'>" + mapString; bannedMapsEl.appendChild(labelNode);
			// br
			let breakNode = document.createElement("br");
			bannedMapsEl.appendChild(breakNode);
			// check if it should be banned by default
			if (maps[i].banned) {
				document.getElementById("banCheckboxm" + i).checked = true;
			}
		}
	}

    // Update the selected counts
    updateSelectedMapsCount();
}

// number of players and number of leaders has been chosen
function playersSelected() {
	let playerListEl = document.getElementById("playerList");
	playerListEl.innerHTML = "";
	for (let i = 1; i <= parseInt(document.getElementById("numberOfPlayers").value); i++) {
		// dlc select dropdown
		playerListEl.innerHTML += "<i contenteditable='true' spellcheck='false'>Player " + i + "</i> <select class='dlcSelect' id='dlcPlayer" + i + "'><option value='none'>No DLC </option><option value='Base Game DLC'>Platinum Edition </option><option value='Frontier Pass'>Platinum Edition + Frontier Pass</option><option value='Leader Pass' selected>Platinum Edition + Frontier Pass + Leader Pass</option></select>"
		// player leader holder
		playerListEl.innerHTML += "<li class='offerList'><div id='leadersPlayer" + i + "'></div></li>";
	}

	const numberOfPlayers = document.getElementById('numberOfPlayers');
	localStorage.setItem('numberOfPlayers', numberOfPlayers.value);
}

function leadersSelected() {
	const numberOfLeaders = document.getElementById('numberOfLeaders');
	localStorage.setItem('numberOfLeaders', numberOfLeaders.value);
}

function loadPlayers() {
	const numberOfPlayers = localStorage.getItem('numberOfPlayers');
	const numberOfLeaders = localStorage.getItem('numberOfLeaders');

	if (numberOfPlayers) {
		document.getElementById('numberOfPlayers').value = numberOfPlayers;
		document.getElementById('numberOfPlayersSlider').value = numberOfPlayers;
	}

	if (numberOfLeaders) {
		document.getElementById('numberOfLeaders').value = numberOfLeaders;
		document.getElementById('numberOfLeadersSlider').value = numberOfLeaders;
	}
}

function draftMap() {

	// get banned map checkboxes, as an array (not an HTMLCollection)
	let bannedMapEls = [...document.getElementsByClassName("banCheckboxm")];
	let expansion = selectedExpansion;
	let mapsPool = maps.filter(map => {
		// check map expansion
		if (map.expansion == "Rise and Fall" && expansion == "none") {
			return false;
		}
		if (map.expansion == "Gathering Storm" && (expansion == "none" || expansion == "Rise and Fall")) {
			return false;
		}

		// check if map is banned
		if (bannedMapEls.findIndex(mapCheckbox => mapCheckbox.value == map.name && mapCheckbox.checked) != -1) {
			return false;
		}

		return true;
	});
	let draftedMap = mapsPool[getRandomInt(0, mapsPool.length - 1)];
	let mapDisplay = document.getElementById("map");
	mapDisplay.innerHTML = " <img src='https://static.wikia.nocookie.net/civilization/images/" + draftedMap.img + "' class='mapIcon'>" + draftedMap.name;

    // Update URL with drafted map
    updateUrlWithDraft({ map: maps.indexOf(draftedMap) });
}

/* player dlc preferences have also been chosen - draft leaders
function draft() {
	let expansion = selectedExpansion;
	let offeredLeaders = []; // list of leaders that have already been offered
    let draftResults = [];
	// get banned leader checkboxes, as an array (not an HTMLCollection)
	let bannedLeaderEls = [...document.getElementsByClassName("banCheckbox")];

	for (let player = 1; player <= parseInt(document.getElementById("numberOfPlayers").value); player++) {
		// find dlc prefernce for player
		let playerPaywall = document.getElementById("dlcPlayer" + player).value;

		// clear previously drafted leaders for player (if there were any)
		document.getElementById("leadersPlayer" + player).innerHTML = "";

        draftResults[player] = [];

		for (let i = 1; i <= parseInt(document.getElementById("numberOfLeaders").value); i++) {
			// filter to only include valid leaders
			let leadersPool = leaders.filter(leader => {
				// check leader expansion
				if (leader.expansion == "Rise and Fall" && expansion == "none") {
					return false;
				}
				if (leader.expansion == "Gathering Storm" && (expansion == "none" || expansion == "Rise and Fall")) {
					return false;
				}

				// check leader paywall
				if (leader.paywall == "Base Game DLC" && playerPaywall == "none") {
					return false;
				}
				if (leader.paywall == "Frontier Pass" && (playerPaywall == "none" || playerPaywall == "Base Game DLC")) {
					return false;
				}
				if (leader.paywall == "Leader Pass" && playerPaywall != "Leader Pass") {
					return false;
				}

				// check if leader is banned
				if (bannedLeaderEls.findIndex(leaderCheckbox => leaderCheckbox.value == leader.name + " [" + leader.civilization + "]" && leaderCheckbox.checked) != -1) {
					return false;
				}

				// check if leader has already been picked
				// tbd extra settings :)
				if (offeredLeaders.findIndex(offeredLeader => offeredLeader.name == leader.name || offeredLeader.civilization == leader.civilization) != -1) {
					return false;
				}

				return true;
			});

			// pick random from leaders pool
			let draftedLeader = leadersPool[getRandomInt(0, leadersPool.length - 1)];
			if (typeof draftedLeader == "undefined") {
				document.getElementById("leadersPlayer" + player).innerHTML += "Not enough available leaders<br>";
			}
			else {
                offeredLeaders.push(draftedLeader);
                draftResults[player].push(leaders.indexOf(draftedLeader));
				// show leader to player
				document.getElementById("leadersPlayer" + player).innerHTML += "<img src='https://static.wikia.nocookie.net/civilization/images/" + draftedLeader.img + "' class='leaderIcon'>" + draftedLeader.name + " [" + draftedLeader.civilization + "]<br>";
			}
		}
	}

    // Update URL with drafted leaders
    updateUrlWithDraft({ leaders: draftResults });

	// document.getElementById("shareUrlButton").style.display = "block";
}
*/

function draft() {
    let expansion = selectedExpansion;
    let offeredLeaders = []; // list of leaders that have already been offered
    let draftResults = {};

    // Get banned leader checkboxes, as an array (not an HTMLCollection)
    let bannedLeaderEls = [...document.getElementsByClassName("banCheckbox")];

    for (let player = 1; player <= parseInt(document.getElementById("numberOfPlayers").value); player++) {
        // Find DLC preference for player
        let playerPaywall = document.getElementById("dlcPlayer" + player).value;

        // Clear previously drafted leaders for player (if there were any)
        document.getElementById("leadersPlayer" + player).innerHTML = "";
        draftResults[player] = [];

        for (let i = 1; i <= parseInt(document.getElementById("numberOfLeaders").value); i++) {
            // Filter to only include valid leaders
            let leadersPool = leaders.filter(leader => {
                // Check leader expansion
                if (leader.expansion == "Rise and Fall" && expansion == "none") {
                    return false;
                }
                if (leader.expansion == "Gathering Storm" && (expansion == "none" || expansion == "Rise and Fall")) {
                    return false;
                }

                // Check leader paywall
                if (leader.paywall == "Base Game DLC" && playerPaywall == "none") {
                    return false;
                }
                if (leader.paywall == "Frontier Pass" && (playerPaywall == "none" || playerPaywall == "Base Game DLC")) {
                    return false;
                }
                if (leader.paywall == "Leader Pass" && playerPaywall != "Leader Pass") {
                    return false;
                }

                // Check if leader is banned
                if (bannedLeaderEls.findIndex(leaderCheckbox => leaderCheckbox.value == leader.name + " [" + leader.civilization + "]" && leaderCheckbox.checked) != -1) {
                    return false;
                }

                // Check if leader has already been picked
                if (offeredLeaders.findIndex(offeredLeader => offeredLeader.name == leader.name || offeredLeader.civilization == leader.civilization) != -1) {
                    return false;
                }

                return true;
            });

            // Pick random from leaders pool
            let draftedLeader = leadersPool[getRandomInt(0, leadersPool.length - 1)];
            if (typeof draftedLeader == "undefined") {
                document.getElementById("leadersPlayer" + player).innerHTML += "Not enough available leaders<br>";
            }
            else {
                offeredLeaders.push(draftedLeader);
                draftResults[player].push(leaders.indexOf(draftedLeader));
                // Show leader to player
                document.getElementById("leadersPlayer" + player).innerHTML += "<img src='https://static.wikia.nocookie.net/civilization/images/" + draftedLeader.img + "' class='leaderIcon'>" + draftedLeader.name + " [" + draftedLeader.civilization + "]<br>";
            }
        }
    }

    // Update URL with drafted leaders and map
    updateUrlWithDraft({ leaders: draftResults });
}


function updateUrlWithDraft(draft) {
    let url = new URL(window.location.href);
	for (let key in draft) {
        if (key === "leaders") {
            // Serialize leaders as JSON
            url.searchParams.set(key, JSON.stringify(draft[key]));
        } else {
            // Directly set other parameters
            url.searchParams.set(key, draft[key]);
        }
    }
    // Add expansion to the URL
    url.searchParams.set('expansion', selectedExpansion);
    window.history.pushState({}, '', url);
}

/*
function updateUrlWithDraft(draft) {
    let url = new URL(window.location.href);

    // Clear existing leader parameters to avoid duplicates
    url.searchParams.delete('leaders');
    for (let key in draft.leaders) {
        url.searchParams.delete(`player${key}`);
    }

    // Append each player's drafted leaders
    for (let player in draft.leaders) {
        if (draft.leaders[player].length > 0) {
            url.searchParams.set(`player${player}`, draft.leaders[player].join(','));
        }
    }

    url.searchParams.set('expansion', selectedExpansion);
	url.searchParams.set('map', draft[maps]);
    window.history.pushState({}, '', url);
}
*/

// inclusive
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function themeToggle() {
	let element = document.body;
	element.classList.toggle("dark-mode");

	let theme = localStorage.getItem("theme");
	if (theme && theme === "dark-mode") {
		localStorage.setItem("theme", "");
	} else {
		localStorage.setItem("theme", "dark-mode");
	}

	document.getElementById("theme").textContent = localStorage.getItem("theme");
}

// On page load set the theme.
(function () {
	let onpageLoad = localStorage.getItem("theme") || "";
	let element = document.body;
	element.classList.add(onpageLoad);
	document.getElementById("theme").textContent =
		localStorage.getItem("theme") || "light";
})();
