 const MAP = {
            "UpatíŠtandlu": {
                name: "Úpatí Štandlu",
                N: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=Cesta+nahoru+na+Standl`, 
                    forward: "ŠtandlVrchol",
                    items: [
                        { x: 380, y: 520, text: "Cesta pokračuje nahoru k vrcholu. Je strmá a plná stínů.", type: 'text' },
                    ]
                },
                E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=Hustý+les+a+mlha` },
                S: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=Skrytá+cesta+k+Hrobu`,
                    forward: "UHrobu",
                    items: [
                        { x: 150, y: 400, text: "Zde je odbočka, stará stezka vedoucí hlouběji do lesa. Cítíte chlad.", type: 'text' }
                    ]
                },
                W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/363025/d0c6ac?text=Bažinatá+místa` },
            },
            "UHrobu": {
                name: "U Hrobu (Pod Štandlem)",
                N: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=Místo+starého+hrobu`,
                    forward: "UpatíŠtandlu",
                    items: [
                        { x: 450, y: 550, text: "Hrob je rozpadlý a vlhký. Mezi kameny nacházíte starý, zažloutlý papírek. ***Získali jste Papírek se Symbolem Černého Klíče.*** (Symbol 1: KLIC)", itemKey: 'papirek_cerny_klic', type: 'item' },
                    ]
                },
                E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=Temná+strana+kopce` },
                S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=Není+cesty` },
                W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=Není+cesty` },
            },
            "ŠtandlVrchol": {
                name: "Štandl Vrchol (Popraviště)",
                N: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=Vyhlídka+na+krajinu`, 
                    items: [
                        { x: 600, y: 200, text: "Zbytek hrubého lana. Barbořina kletba se váže na krev a provaz.", type: 'text' }
                    ]
                },
                E: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=Pohled+na+Místek`,
                    forward: "MístekNáměstí" 
                },
                S: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=Cesta+zpět+k+úpatí`, 
                    forward: "UpatíŠtandlu"
                },
                W: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/4d261e/d0c6ac?text=Kamenný+Erb+na+západní+straně`,
                    forward: "ŠtandlUErbu",
                    items: [
                        { x: 100, y: 400, text: "Starý kamenný erb je na zdi. Zdá se být klíčovým místem.", type: 'text' }
                    ]
                },
            },
            "ŠtandlUErbu": {
                name: "Štandl: U Erbu",
                N: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Masivní+Kamenný+Erb`,
                    forward: "ŠtandlVrchol", // Defaultní cesta zpět
                    items: [
                        { x: 400, y: 300, text: "Kamenný Erb s otvory na symboly.", type: 'puzzle' }
                    ]
                },
                E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Les+a+skály` },
                S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Les+a+skály` },
                W: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Cesta+zpět+na+vrchol`,
                    forward: "ŠtandlVrchol"
                },
            },
            "Jeskyně": {
                name: "Jeskyně Černé Barbory (FINÁLE)",
                N: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/000000/d0c6ac?text=KOSTRA+A+POKLAD+ATTILY`,
                    items: [
                        { x: 400, y: 300, text: "Našli jste kostru Černé Barbory, která v náručí svírá bednu. Uvnitř bedny je poklad, Attilův meč a Barbořina kletba je zlomena. **Gratulujeme, vyřešili jste Záhadu Černé Barbory!**", type: 'text' }
                    ]
                },
                E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/000000/d0c6ac?text=Tma` },
                S: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/000000/d0c6ac?text=Vstup+do+jeskyně`,
                    forward: "ŠtandlUErbu"
                },
                W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/000000/d0c6ac?text=Tma` },
            },
            "MístekNáměstí": {
                name: "Místek Náměstí",
                N: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/1a202c/d0c6ac?text=Budovy+a+radnice` },
                E: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/1a202c/d0c6ac?text=Most+přes+Ostravici`, 
                    forward: "FrýdeckýZámek",
                    items: [
                        { x: 550, y: 480, text: "Voda je ledová. Na okraji kašny je sotva viditelná rytina symbolu, který připomíná **ČTYŘLÍSTEK**. ***Získali jste stopu LIST.*** (Symbol 2)", itemKey: 'ctyrlistek', type: 'item' }
                    ]
                },
                S: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/1a202c/d0c6ac?text=Cesta+ke+kostelu+Sv.+Jošta`,
                    forward: "KostelSvJosta",
                    items: [
                        { x: 200, y: 450, text: "Na informační tabuli vidíte zmínku o tom, že se Barbora modlila u nedalekého kostela Sv. Jošta.", type: 'text' }
                    ]
                },
                W: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/1a202c/d0c6ac?text=Směr+zpět+ke+Štandlu`,
                    forward: "ŠtandlVrchol"
                },
            },
            "KostelSvJosta": {
                name: "Kostel Sv. Jošta",
                N: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/1a202c/d0c6ac?text=Vchod+do+kostela`, 
                    forward: "MístekNáměstí"
                },
                E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/1a202c/d0c6ac?text=Kostelní+hřbitov` },
                S: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/1a202c/d0c6ac?text=Staré+hroby+za+kostelem`, 
                    items: [
                        { x: 300, y: 400, text: "Jeden ze starých náhrobků má neobvykle velký, kovový kříž. Je na něm vytesáno slovo: **KRIZ**. ***Získali jste stopu Kříž z Hrobu.*** (Symbol 3)", itemKey: 'kriz_z_hrobu', type: 'item' }
                    ]
                },
                W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/1a202c/d0c6ac?text=Kostelní+zeď` },
            },
            "FrýdeckýZámek": {
                name: "Frýdecký Zámek",
                N: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Čelní+pohled+na+hrad`,
                    items: [
                        { x: 400, y: 450, text: "Těžká dřevěná brána. Na jedné straně je vytesaný symbol, který připomíná **PEČEŤ**. ***Získali jste stopu Šlechtická Pečeť.*** (Symbol 4)", itemKey: 'slechticka_pecet', type: 'item' }
                    ]
                },
                E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Východní+křídlo+zámku` },
                S: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Nádvoří+s+osobou`, 
                    forward: "UPolaska",
                    items: [
                        { x: 500, y: 400, text: "Na nádvoří se toulá starý hlídač. Vypadá, že má času nazbyt. Zkuste s ním promluvit.", type: 'text' }
                    ]
                },
                W: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Cesta+zpět+k+mostu`, 
                    forward: "MístekNáměstí" 
                },
            },
            "UPolaska": {
                name: "U Poláška (Strážce Zámku)",
                N: { 
                    img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Polášek+stojí+u+kašny`, 
                    forward: "FrýdeckýZámek",
                    items: [
                        { x: 400, y: 350, text: "Hlídač se představuje jako Polášek. Zdá se být příjemný. Možná mu ukážete svůj nález.", type: 'npc' }
                    ]
                },
                E: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Nádvoří` },
                S: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Nádvoří` },
                W: { img: `https://placehold.co/${VIEWPORT_WIDTH}x${VIEWPORT_HEIGHT}/20201a/d0c6ac?text=Nádvoří` },
            },
        };