// --- MAPA HRY A STAV ---

const VIEWPORT_WIDTH = 800;
const VIEWPORT_HEIGHT = 600;

// Definice předmětů v inventáři pro snazší správu (id, jméno, ikona)
const INVENTORY_ITEMS = {
	'vizitka': { name: 'vizitka', icon: 'fa-scroll', tooltip: 'Zašlá vizitka jistého J. Poláška, historika. Na zadní straně je nakreslen černý klíč.' },
	'cerny_klic': { name: 'Klíč', icon: 'fa-key', tooltip: 'Starý, černý klíč, kdysi nalezený v hrobě pod Štandlem.' },
	'dubovy_list': { name: 'Dubový list', icon: 'fa-leaf', tooltip: 'Rytina dubového listu, nalezená na kašně.' },
	'kriz_z_hrobu': { name: 'Kříž', icon: 'fa-cross', tooltip: 'Kříž z náhrobku u kostela sv. Jošta.' },
	'slechticka_pecet': { name: 'Pečeť', icon: 'fa-stamp', tooltip: 'Šlechtická pečeť, byla vyryta na zámecké věži.' },
	'mapa': { name: 'Mapa', icon: 'fa-map', tooltip: 'Mapa z vrcholu Štandlu.', type: "image", popupText: "<img src='../assets/images/mapa_old_final.png' class='inventory_img'>" },
};

const ikona_stopa = '<br><br><i class="fa-solid fa-puzzle-piece color-red"></i> ';

const MAP = {
	upati_standlu: {
		name: "Úpatí Štandlu",
		N: {
			img: `../assets/bgr/bgr_test3.png`, pohled: "vrchol štandlu", forward: "vrchol_standlu",
			items: [
				{ x: 380, y: 520, text: "Cesta pokračuje nahoru k vrcholu. Je strmá a plná listí.", type: 'text' },
				{ x: 280, y: 420, text: "Temný kout.", type: 'text' },
			]
		},
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=lesní+pěšina`, pohled: "lesní pěšina", forward: "lesni_pesina", items: [] },
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=cesta+se+závorou`, pohled: "cesta se závorou", forward: "cesta_se_zavorou", items: [] },
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=cesta+zpět+domů`, pohled: "cesta zpět domů", items: [] },
	},
	lesni_pesina: {
		name: "Lesní pěšina",
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=kamenný+erb`, pohled: "kamenný erb", forward: "kamenny_erb", items: [] },
		N: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=borový+les`, pohled: "borový les", items: [] },
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=úpatí+štandlu+z+(lesní+cesty)`, pohled: "úpatí štandlu", forward: "upati_standlu", items: [] },
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=březový+les`, pohled: "březový les", items: [] },
	},
	kamenny_erb: {
		name: "Kamenný erb",
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=zarostlá+cesta`, pohled: "zarostlá cesta", items: [] },
		N: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=erb`, pohled: "erb", forward: "ŠtandlUErbu", items: [] },
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=lesní+pěšina+(z+erbu)`, pohled: "lesní pěšina", forward: "lesni_pesina", items: [] },
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=strmý+svah`, pohled: "strmý svah", items: [] },
	},
	"ŠtandlUErbu": {
		name: "Štandl: U Erbu",
		N: {
			img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Masivní+Kamenný+Erb`,
			pohled: "masivní kamenný erb",
			items: [
				{ x: 400, y: 300, text: "Kamenný Erb s otvory na symboly.", type: 'puzzle' }
			]
		},
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Les+a+skály`, pohled: "les a skály", items: [] },
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Les+a+skály`, pohled: "les a skály", items: [] },
		W: {
			img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Zpět`,
			pohled: "zpět",
			forward: "kamenny_erb"
		},
	},
	"Jeskyně": {
		name: "Jeskyně Černé Barbory",
		N: {
			img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/000000/d0c6ac?text=KOSTRA+A+POKLAD+ATTILY`,
			pohled: "kostra a poklad attily",
			items: [
				{ x: 400, y: 300, text: "Gratulujeme, vyřešili jste Záhadu Černé Barbory!", type: 'text' },
				{ x: 200, y: 300, text: "Attilův meč", type: 'text' },
				{ x: 600, y: 300, text: "Kostra černé barbory", type: 'text' },
				{ x: 300, y: 400, text: "Hrob krále Attily", type: 'text' }
			]
		},
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/000000/d0c6ac?text=Tma`, pohled: "tma" },
		S: {
			img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/000000/d0c6ac?text=Vstup+do+jeskyně`,
			pohled: "vstup do jeskyně",
			forward: "konec"
		},
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/000000/d0c6ac?text=Tma`, pohled: "tma" },
	},
	konec: {
		name: "Konec",
		N: {
			img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=temnota`, pohled: "temnota", items: [
				{ x: 550, y: 480, text: "černočerná tma", type: 'text' }
			]
		},
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=temnota`, pohled: "temnota", items: [
				{ x: 550, y: 480, text: "černočerná tma", type: 'text' }
			]
		},
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=temnota`, pohled: "temnota", items: [
				{ x: 550, y: 480, text: "černočerná tma", type: 'text' }
			] 
		},
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=temnota`, pohled: "temnota", items: [
				{ x: 550, y: 480, text: "černočerná tma", type: 'text' }
			]
		},
	},
	cesta_se_zavorou: {
		name: "Cesta se závorou",
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=hrob+v+dálce+u+valu`, pohled: "hrob v dálce u valu", forward: "u_hrobu", items: [] },
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=úpatí+štandlu+(z+cesty)`, pohled: "úpatí štandlu", forward: "upati_standlu", items: [] },
		N: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=temný+les`, pohled: "temný les", items: [] },
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=kostra+zvířete`, pohled: "kostra zvířete", items: [] },
	},
	u_hrobu: {
		name: "U hrobu",
		W: {
			img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=hrob`, pohled: "hrob", items: [
				{ x: 450, y: 550, text: "Hrob je rozpadlý a vlhký. Mezi kameny nacházíte starý, zažloutlý papírek. " + ikona_stopa + " Získali jste stopu <span class='color-lighter-red'>Zašlá vizitka.</span>", itemKey: 'vizitka', type: 'item' },
			]
		},
		N: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=temnota`, pohled: "temnota", items: [] },
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=temnota+2`, pohled: "temnota 2", items: [] },
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=cesta+se+závorou+(z+u+hrobu)`, pohled: "cesta se závorou", forward: "cesta_se_zavorou", items: [] },
	},
	vrchol_standlu: {
		name: "Vrchol Štandlu",
		N: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/5b4436/d0c6ac?text=pod+štandl`, pohled: "pod štandl", forward: "pod_standl", items: [] },
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/5b4436/d0c6ac?text=úpatí+štandlu+(z+vrcholu)`, pohled: "úpatí štandlu", forward: "upati_standlu", items: [] },
		E: {
			img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/5b4436/d0c6ac?text=informační+cedule`, pohled: "informační cedule", items: [
				{ x: 380, y: 520, text: "V rohu informační cedule se skrývala skrčená mapa.", itemKey: 'mapa', type: 'item' },
			]
		},
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/5b4436/d0c6ac?text=borový+les`, pohled: "borový les", items: [] },
	},
	pod_standl: {
		name: "Pod Štandlem",
		N: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=přes+most+do+místku`, pohled: "přes most do místku", forward: "mistecke_namesti", items: [] },
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=cesta+okolo+štandlu`, pohled: "cesta okolo štandlu", items: [] },
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=cesta+k+upati+standlu`, pohled: "cesta k upatí štandlu", forward: "upati_standlu", items: [] },
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=cesta+na+vrchol+Štandlu`, pohled: "vrchol štandlu", forward: "vrchol_standlu", items: [] },
	},
	mistecke_namesti: {
		name: "Místecké náměstí",
		E: { img: `../assets/bgr/namesti/namesti_E.png`, pohled: "cesta do Frýdku", forward: "frydecky_zamek", items: [] },
		S: { img: `../assets/bgr/namesti/namesti_S.png`, pohled: "socha panny marie", forward: "socha_marie", items: [] },
		N: { img: `../assets/bgr/namesti/namesti_N.png`, pohled: "budovy na místeckém naměstí", items: [] },
		W: { img: `../assets/bgr/namesti/namesti_W.png`, pohled: "průchod ke štandlu", forward: "pod_standl", items: [
			{ x: 230, y: 210, text: "Na tomto balkóně jednou stál V. Havel", type: 'text' }
		] },
	},
	socha_marie: {
		name: "Socha Panny Marie",
		N: {
			img: `../assets/bgr/namesti/sloup_detail.png`, pohled: "reliéf na soše", items: [
				{ x: 420, y: 280, text: "Na sloupu je výrazná reliéf dubového listu, raději si jej zaznamenám." + ikona_stopa + " Nakreslím si <span class='color-lighter-red'>Dubový list.</span>", itemKey: 'dubovy_list', type: 'item' }
			]
		},
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=okolí+kašny`, pohled: "okolí kašny", items: [] },
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=okolí+kašny+2`, pohled: "okolí kašny", items: [] },
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/71685b/d0c6ac?text=místecké+naměstí+(z+kašny)`, pohled: "místecké naměstí", forward: "mistecke_namesti", items: [] },
	},
	frydecky_zamek: {
		name: "Frýdecký zámek",
		E: { img: `../assets/bgr/zamek/zamek_E.png`, pohled: "zámecká zahrada", items: [] },
		S: { img: `../assets/bgr/zamek/zamek_S.png`, pohled: "nádvoří zámku", forward: "zamek_nadvori",  items: [] },
		N: { img: `../assets/bgr/zamek/zamek_N.png`, pohled: "k Poláškovi", forward: "u_polaska", items: [] },
		W: { img: `../assets/bgr/zamek/zamek_W.png`, pohled: "zámeckým parkem do místku", forward: "mistecke_namesti", items: [] },
	},
	zamek_nadvori: {
		name: "Zámek nádvoří",
		E: { img: `../assets/bgr/zamek_nadvori/nadvori_E.png`, pohled: "zámeckou branou ke kostelu", forward: "kostel_josta", },
		S: { img: `../assets/bgr/zamek_nadvori/nadvori_S.png`, pohled: "zámecké nádvoří", items: [] },
		W: { img: `../assets/bgr/zamek_nadvori/nadvori_W.png`, pohled: "zámecká věž", forward: "vez", items: [] },
		N: { img: `../assets/bgr/zamek_nadvori/nadvori_N.png`, pohled: "cesta před zámek", forward: "frydecky_zamek", items: [] },
	},
	vez: {
		name: "Věž",
		W: {
			img: `../assets/bgr/zamek_nadvori/vez/koruna.png`, pohled: "stěna pod věží", items: [
				{ x: 320, y: 240, text: "Na jedné straně je vytesaný symbol, který připomíná pečeť. " + ikona_stopa + " Získali jste stopu <span class='color-lighter-red'>Šlechtická pečeť</span>", itemKey: 'slechticka_pecet', type: 'item' }
			]
		},
		S: { img: `../assets/bgr/zamek_nadvori/vez/vedle_veze_S.png`, pohled: "vedle věže", items: [] },
		N: { img: `../assets/bgr/zamek_nadvori/vez/vedle_veze_N.png`, pohleded: "vedle věže", items: [] },
		E: { img: `../assets/bgr/zamek_nadvori/vez/vedle_veze_E.png`, pohled: "zpět na nádvoří", forward: "zamek_nadvori", items: [] },
	},
	kostel_josta: {
		name: "Kostel sv. Jošta",
		E: { img: `../assets/bgr/jost/jost_E.png`, pohled: "vstup do kostela", items: [
			{ x: 650, y: 380, text: "Na ceduli stojí: <i>\" Kdo se nebojí musí do kostela! \"</i> ", type: 'text' }
		] },
		S: { img: `../assets/bgr/jost/jost_S.png`, pohled: "okolo kostela", forward: "vedle_kostela", },
		N: { img: `../assets/bgr/jost/jost_N.png`, pohled: "po schodišti k zámku", forward: "frydecky_zamek", items: [
			{ x: 300, y: 400, text: "Statný javor, jistě toho mnoho pamatuje.", type: 'text' }
		] },
		W: { img: `../assets/bgr/jost/jost_W.png`, pohled: "na místecké naměstí", forward: "mistecke_namesti", items: [
			{ x: 200, y: 450, text: "Chodník vede do Místku", type: 'text' }
		] },
	},
	vedle_kostela: {
		name: "Vedle kostela sv. Jošta",
		E: {
			img: `../assets/bgr/jost_hrob/jost_hrob_E.png`, pohled: "stará škola", items: [],
		},
		S: { img: `../assets/bgr/jost_hrob/jost_hrob_S.png`, pohled: "socha sv. Floriána", items: [] },
		N: { img: `../assets/bgr/jost_hrob/jost_hrob_N.png`, pohled: "náhrobní kámen", items: [
			{ x: 250, y: 400, text: "Na náhrobním kameni je velký, kamenný kříž, nakreslím si ho.<br><br> <img src='assets/bgr/jost_hrob/nahrobek.png' class='inventory_img' onclick='event.stopPropagation(); showLightbox(\"assets/bgr/jost_hrob/nahrobek.png\")'> " + ikona_stopa + " Získali jste stopu <span class='color-lighter-red'>kříž.</span>", itemKey: 'kriz_z_hrobu', type: 'item' }
		] },
		W: { img: `../assets/bgr/jost_hrob/jost_hrob_W.png`, pohled: "zpět ke vchodu do kostela", forward: "kostel_josta", items: [] },
	},
	u_polaska: {
		name: "U Poláška",
		E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/554b45/d0c6ac?text=do+města`, pohled: "do města", items: [] },
		N: {
			img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/554b45/d0c6ac?text=Polášek+dveře`, pohled: "Poláškovy dveře", items: [
				{ x: 400, y: 350, text: "Tady pracuje Polášek. Zdá se být příjemný. Možná mu ukážete svůj nález.", type: 'npc' }
			]
		},
		S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/554b45/d0c6ac?text=labyrint`, pohled: "labyrint", items: [] },
		W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/554b45/d0c6ac?text=frýdecký+zámek+(z+Poláška)`, pohled: "k zámku", forward: "frydecky_zamek", items: [] },
	},
};


const DIRECTIONS = ['N', 'E', 'S', 'W'];

let currentArea = "upati_standlu";
let currentDirectionIndex = 0;
let inventory = []; // Skladuje ID předmětů

// --- ELEMENTY DOM ---
const viewport = document.getElementById('viewport');
const forwardButton = document.getElementById('move-forward');
const loadingOverlay = document.getElementById('loading-overlay');
const directionLabel = document.getElementById('direction-label');
const pohledLabel = document.getElementById('pohled-label');
const areaLabel = document.getElementById('area-label');
const textModalBackdrop = document.getElementById('text-modal-backdrop');
const puzzleModalBackdrop = document.getElementById('puzzle-modal-backdrop');
const popupText = document.getElementById('popup-text');
const inventoryDisplay = document.getElementById('inventory-display');

// --- INVENTÁŘ A MODALY ---

/**
 * Zobrazí textové vyskakovací okno.
 * @param {string} text Text k zobrazení.
 */
function showPopup(text) {
	popupText.innerHTML = text;
	textModalBackdrop.style.display = 'flex';
}

/**
 * Skryje vyskakovací okno.
 * @param {string} modalId ID modalu k zavření.
 */
function hidePopup(modalId) {
	document.getElementById(modalId).style.display = 'none';
}

/**
 * Přidá předmět do inventáře a aktualizuje zobrazení.
 * @param {string} itemId ID předmětu (klíč z INVENTORY_ITEMS).
 */
function addItem(itemId) {
	if (!inventory.includes(itemId)) {
		inventory.push(itemId);
		updateInventoryDisplay();
		return true; // Předmět byl přidán
	}
	return false; // Předmět již v inventáři je
}

/**
 * Odebere předmět z inventáře (pro interakci Poláška).
 * @param {string} itemId ID předmětu.
 */
function removeItem(itemId) {
	const index = inventory.indexOf(itemId);
	if (index > -1) {
		inventory.splice(index, 1);
		updateInventoryDisplay();
		return true;
	}
	return false;
}

/**
 * Aktualizuje zobrazení inventáře.
 */
function updateInventoryDisplay() {
	inventoryDisplay.innerHTML = '';
	if (inventory.length === 0) {
		inventoryDisplay.innerHTML = '<p style="text-align: center; color: #5a4d3f; font-size: 0.9em;">Inventář je prázdný. Hledejte stopy!</p>';
		return;
	}

	inventory.forEach(itemId => {
		const item = INVENTORY_ITEMS[itemId];
		if (item) {
			const itemDiv = document.createElement('div');
			itemDiv.className = 'inventory-item';
			itemDiv.title = item.tooltip;
			itemDiv.onclick = () => handleInventoryClick(itemId);
			const icon = document.createElement('i');
			icon.className = `fas ${item.icon} inventory-icon`;

			const name = document.createElement('span');
			name.textContent = item.name

			itemDiv.appendChild(icon);
			itemDiv.appendChild(name);
			inventoryDisplay.appendChild(itemDiv);
		}
	});
}

/**
 * Zpracuje kliknutí na předmět v inventáři.
 * @param {string} itemId ID předmětu (klíč z INVENTORY_ITEMS).
 */
function handleInventoryClick(itemId) {
	const item = INVENTORY_ITEMS[itemId];

	if (!item) return;

	const title = `<i class="fas ${item.icon}"></i> ${item.name}`;
	let content = item.tooltip || "K tomuto předmětu není žádný popis.";

	// --- OBECNÁ LOGIKA PRO OTEVÍRÁNÍ OBRÁZKŮ V LIGHTBOXU ---
	if (item.type === 'image' && item.popupText) {
		const imageUrl = extractImageUrl(item.popupText);

		if (imageUrl) {
			// Vytvoříme klikatelný náhled
			// Důležité: Tady do popupu vkládáme HTML z popupText, ale přidáme mu náš onclick
			const clickableHtml = item.popupText.replace(
				'<img',
				`<img onclick="event.stopPropagation(); showLightbox('${imageUrl}')"`
			);

			content += `<br>
                <br>
                <div class='inventory_img'>
                ${clickableHtml}`;
			content += '</div>';

		} else {
			content += `<br><br>_Chyba: Nebyla nalezena URL obrázku v popupText pro ${item.name}._`;
		}
	} else if (item.popupText) {
		// Standardní zobrazení extra textu pro jiné typy (pokud je definován)
		content += `<br><br>${item.popupText}`;
	}
	// --------------------------------------------------------

	showPopup(`${title}<br><br>${content}`);
}

/**
 * Extrahuje URL obrázku ze značky <img>.
 * @param {string} htmlString Řetězec obsahující značku <img>.
 * @returns {string|null} URL obrázku nebo null.
 */
function extractImageUrl(htmlString) {
	// Hledá atribut 'src' v řetězci <img>
	const match = htmlString.match(/src=['"](.*?)['"]/);
	return match ? match[1] : null;
}


/**
 * Zobrazí lightbox s obrázkem v plném rozlišení.
 * @param {string} imagePath Cesta k obrázku mapy.
 */
window.showLightbox = function (imagePath) {
	// 1. Zavři aktuální textový popup, abys viděl lightbox
	hidePopup('text-modal-backdrop');

	// 2. Najdi lightbox elementy
	const lightboxBackdrop = document.getElementById('lightbox-backdrop');
	const lightboxImage = document.getElementById('lightbox-image');

	// 3. Nastav cestu k obrázku a zobraz lightbox
	if (lightboxBackdrop && lightboxImage) {
		lightboxImage.src = imagePath;
		lightboxBackdrop.style.display = 'flex';
	} else {
		// Pro případ, že lightbox HTML není přítomen
		console.error("Lightbox elementy nebyly nalezeny!");
		showPopup(`Došlo k chybě při zobrazování mapy. Cesta k souboru: ${imagePath}`);
	}
}




// --- LOGIKA HOTSPOTŮ ---

/**
 * Zpracuje kliknutí na hotspot s komplexní logikou.
 * @param {object} item Data hotspotu.
 */
function handleHotspotClick(item) {
	switch (item.type) {
		case 'item':
			const added = addItem(item.itemKey);
			if (added) {
				showPopup(`${item.text} <br><br><span class="add_item_text">Předmět přidán do inventáře.</span>`);
			} else {
				showPopup("Už jste toto místo prozkoumali. " + item.text.replace(/(\*+.*\*+)/g, ''));
			}
			break;

		case 'npc':
			handlePolasekInteraction(item);
			break;

		case 'puzzle':
			handlePuzzleInteraction(item);
			break;

		case 'text':
		default:
			showPopup(item.text);
			break;
	}
}

/**
 * Speciální logika pro Poláška (NPC).
 */
function handlePolasekInteraction(item) {
	if (inventory.includes('vizitka')) {
		removeItem('vizitka');
		addItem('cerny_klic');
		showPopup("Polášek: 'Aha! Má stará vizitka! Našel jste ji pod Štandlem? Před lety jsem našel v tom hrobě starý klíč. Nikdy jsem ho nemohl vyčistit. Zdá se, že teď je váš.'<br><br>Vyměnili jste <span class='color-lighter-red'>vizitku</span> za <span class='color-lighter-red'>černý klíč</span>!");
	} else if (inventory.includes('cerny_klic')) {
		showPopup("Polášek: 'Máte, co potřebujete. Jsem rád, že jsem se klíče zbavil. Nosil mi smůlu. Odneste ho raději zpět ke Štandlu.'");
	} else {
		showPopup("Polášek: 'Víte že, les kolem Štandlu je prý plný starých tajemství? Pokud najdete něco zajímavého, rád se na to podívám.'");
	}
}

/**
 * Logika pro spuštění hádanky.
 */
function handlePuzzleInteraction(item) {
	if (currentArea === 'ŠtandlUErbu' && inventory.includes('cerny_klic')) {
		// Hádanka u Erbu
		puzzleModalBackdrop.style.display = 'flex';
	} else if (currentArea === 'ŠtandlUErbu' && !inventory.includes('cerny_klic')) {
		showPopup("Kamenný erb je na porostlý mechem. Po bližším prozkoumání je pod mechem v prohlubni vidět otvor ve tvaru klíčové dírky.");
	} else {
		showPopup(item.text);
	}
}

/**
 * Zpracuje řešení hádanky.
 */
window.solvePuzzle = function () {
	const sym1 = document.getElementById('symbol1').value.toUpperCase();
	const sym2 = document.getElementById('symbol2').value.toUpperCase();
	const sym3 = document.getElementById('symbol3').value.toUpperCase();
	const sym4 = document.getElementById('symbol4').value.toUpperCase();

	// Správné řešení: KLIC, LIST, KRIZ, PEČET
	if (sym1 === 'KLIC' && sym2 === 'LIST' && sym3 === 'KRIZ' && sym4 === 'PECET') {

		// Otevření nové cesty do Jeskyně
		MAP['ŠtandlUErbu']['N'].forward = 'Jeskyně';

		hidePopup('puzzle-modal-backdrop');
		showPopup('Mechanismus zaskřípe a s hlasitým duněním se balvan odsune. <br><br><span class="color-lighter-red">Objevil se tajný vstup do jeskyně!</span><br><br> Nyní se musím pouze odhodlat a jít vpřed.');

		// Zrušení hádanky, už není potřeba
		const puzzleHotspot = MAP['ŠtandlUErbu']['N'].items.find(i => i.type === 'puzzle');
		if (puzzleHotspot) puzzleHotspot.text = "Vstup do jeskyně je nyní otevřen.";

		updateView();

	} else {
		showPopup('Nic se nestalo.');
	}
}

/**
 * Logika pro konec
 */
function handleKonec() {
	if (currentArea === 'konec') {
		showPopup("<span class='color-lighter-red'>Temnota pohltila obraz</span><br><br>, kámen se zavalil a vás nyní čeká stejný osud jako barboru! <br><br> <span class='color-lighter-red'>Konec hry</span>");
	} 
}


// --- VYKRESLENÍ POHLEDU ---

function renderHotspots() {
	// Odebere všechny prvky, které nejsou overlay nebo popisky
	const removableElements = Array.from(viewport.children).filter(el =>
		!el.classList.contains('loading-overlay') &&
		!el.classList.contains('direction-label') &&
		!el.classList.contains('area-label') &&
		!el.classList.contains('pohled-label')
	);
	removableElements.forEach(el => el.remove());

	const currentDir = DIRECTIONS[currentDirectionIndex];
	const viewData = MAP[currentArea][currentDir];

	if (viewData.items && viewData.items.length > 0) {
		viewData.items.forEach(item => {
			const hotspot = document.createElement('div');
			hotspot.className = 'hotspot';
			// Hotspoty se umisťují relativně k viewportu
			hotspot.style.left = `${item.x / VIEWPORT_WIDTH * 100}%`;
			hotspot.style.top = `${item.y / VIEWPORT_HEIGHT * 100}%`;
			hotspot.title = "Prozkoumat";
			// Nastavení volání handleHotspotClick
			hotspot.onclick = () => handleHotspotClick(item);
			viewport.appendChild(hotspot);
		});
	}
}

function updateView() {
	const currentDir = DIRECTIONS[currentDirectionIndex];
	const areaData = MAP[currentArea];
	const viewData = areaData[currentDir];
	const pohled = areaData[currentDir].pohled;

	console.log(`Pohled: ${pohled}`);

	// 1. Zobrazení indikátoru načítání
	loadingOverlay.style.display = 'flex';
	viewport.style.backgroundImage = 'none';

	// 2. Přednačtení obrázku
	const img = new Image();
	img.onload = () => {
		viewport.style.backgroundImage = `url('${viewData.img}')`;
		loadingOverlay.style.display = 'none';

		// 3. Aktualizace popisků
		directionLabel.textContent = `Směr: ${currentDir}`;
		areaLabel.textContent = `Oblast: ${areaData.name}`;
		pohledLabel.textContent = `${pohled}`;

		// 4. Aktualizace stavu tlačítka Vpřed
		if (viewData.forward) {
			forwardButton.disabled = false;
			forwardButton.title = `Pokračovat směrem ${MAP[viewData.forward].name}`;
			forwardButton.textContent = 'Vpřed';
		} else {
			forwardButton.disabled = true;
			forwardButton.title = "Zde není žádná cesta. Musíte se otočit.";
			forwardButton.textContent = 'Blokováno';
		}

		// 5. Vykreslení Hotspotů a Inventáře
		renderHotspots();
		updateInventoryDisplay();
	};

	img.onerror = () => {
		// Přesměrování na placeholder v případě chyby načítání
		viewport.style.backgroundImage = `url('https://placehold.co/800x600/600000/ffffff?text=Temnota+pohltila+obraz!')`;
		loadingOverlay.style.display = 'none';
		directionLabel.textContent = `Směr: ${currentDir}`;
		pohledLabel.textContent = `${pohled}`;
		areaLabel.textContent = `Oblast: ${areaData.name} (Temnota pohltila obraz!)`;
		forwardButton.disabled = true;
		renderHotspots();
	};

	img.src = viewData.img;
}

// --- POHYBOVÉ FUNKCE ---
window.turnLeft = function () {
	currentDirectionIndex = (currentDirectionIndex - 1 + DIRECTIONS.length) % DIRECTIONS.length;
	updateView();
}

window.turnRight = function () {
	currentDirectionIndex = (currentDirectionIndex + 1) % DIRECTIONS.length;
	updateView();
}

window.moveForward = function () {
	const currentDir = DIRECTIONS[currentDirectionIndex];
	const viewData = MAP[currentArea][currentDir];

	if (viewData.forward) {
		currentArea = viewData.forward;
		updateView();
	} else {
		showPopup("Nelze pokračovat vpřed.");
	}

	if(currentArea === 'konec') {
		handleKonec();
	}
}

// --- INICIALIZACE ---
window.onload = function () {
	// Nastavíme rozměry pro správné umístění hotspotů (pokud by se rozměry lišily od placeholderu)
	// Pro responsivitu je lepší používat procenta, ale pro konzistenci zachováme tuto logiku pro umístění
	updateView();
};