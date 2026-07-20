const menuHome = "Home";
const menuEvangelium = "Evangelium";
const menuEvangeliumBibel = "Bibel";
const menuEvangeliumBibelleseplan = "Plan";
const menuEntwicklung = "Entwicklung";
const menuReformation = "Reformation";
const menuReformationZwingli = "Zwingli";
const menuReformationSchaeffer = "Schaeffer";
const menuWerte = "Werte";
const menuWerteGold = "Gold";
const menuWerteBitcoin = "Bitcoin";
const menuTools = "Tools";
const menuToolsGebet = "Gebet";
const menuToolsQrcode = "QR-Code";
const menuKontakt = "Kontakt";

function html() {
    const htmlElement = document.createElement("html");
    htmlElement.setAttribute("lang", "de-CH");
    document = htmlElement;
}

function head(root, title, description) {
    document.head = document.createElement("head");

    const charsetElement = document.createElement("meta");
    charsetElement.setAttribute("charset", "UTF-8");
    document.head.append(charsetElement);

    const viewportElement = document.createElement("meta");
    viewportElement.setAttribute("name", "viewport");
    viewportElement.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.append(viewportElement);

    const simpleCssElement = document.createElement("link");
    simpleCssElement.setAttribute("rel", "stylesheet");
    simpleCssElement.setAttribute("href", `${root}/common/simple.css`);
    document.head.append(simpleCssElement);

    const stylesCssElement = document.createElement("link");
    stylesCssElement.setAttribute("rel", "stylesheet");
    stylesCssElement.setAttribute("href", `${root}/common/styles.css`);
    document.head.append(stylesCssElement);

    const faviconElement = document.createElement("link");
    faviconElement.setAttribute("rel", "icon");
    faviconElement.setAttribute("type", "image/x-icon");
    faviconElement.setAttribute("href", `${root}/common/favicon.ico`);
    document.head.append(faviconElement);

    const titleElement = document.createElement("title");
    titleElement.textContent = title;
    document.head.append(titleElement);

    const descriptionElement = document.createElement("meta");
    descriptionElement.setAttribute("name", "description");
    descriptionElement.setAttribute("content", description);
    document.head.append(descriptionElement);
}

function bodyHeader(root, title, menu1, menu2) {
    document.body = document.createElement("body");

    const headerElement = document.createElement("header");
    document.body.append(headerElement);

    const headerboxElement = document.createElement("div");
    headerboxElement.setAttribute("class", "headerbox");
    headerElement.append(headerboxElement);

    const spaceBetweenElement = document.createElement("div");
    spaceBetweenElement.setAttribute("class", "flex-space-between flex-align-center");
    headerboxElement.append(spaceBetweenElement);

    const titleElement = document.createElement("h1");
    titleElement.textContent = title;
    spaceBetweenElement.append(titleElement);

    const themeElement = document.createElement("a");
    themeElement.setAttribute("id", "theme-button");
    themeElement.setAttribute("class", "clickable theme-button");
    spaceBetweenElement.append(themeElement);
    themeScript();

    const navElement = document.createElement("nav");
    headerboxElement.append(navElement);

    const homeimgElement = document.createElement("img");
    homeimgElement.setAttribute("src", getValue1or2(menu1, menuHome, root + "/common/infoSnow18x18.png", root + "/common/favicon.ico"));
    homeimgElement.setAttribute("alt", "Home");
    const homeElement = document.createElement("a");
    homeElement.setAttribute("href", `${root}/`);
    homeElement.setAttribute("class", getValue1or2(menu1, menuHome, "linkbutton", ""));
    homeElement.append(homeimgElement);
    navElement.append(homeElement);

    const evangeliumElement = document.createElement("a");
    evangeliumElement.setAttribute("href", `${root}/evangelium/`);
    evangeliumElement.setAttribute("class", getValue1or2(menu1, menuEvangelium, "linkbutton", ""));
    evangeliumElement.textContent = menuEvangelium;
    navElement.append(evangeliumElement);

    const reformationElement = document.createElement("a");
    reformationElement.setAttribute("href", `${root}/reformation/`);
    reformationElement.setAttribute("class", getValue1or2(menu1, menuReformation, "linkbutton", ""));
    reformationElement.textContent = menuReformation;
    navElement.append(reformationElement);

    const entwicklungElement = document.createElement("a");
    entwicklungElement.setAttribute("href", `${root}/entwicklung/`);
    entwicklungElement.setAttribute("class", getValue1or2(menu1, menuEntwicklung, "linkbutton", ""));
    entwicklungElement.textContent = menuEntwicklung;
    navElement.append(entwicklungElement);

    const werteElement = document.createElement("a");
    werteElement.setAttribute("href", `${root}/werte/`);
    werteElement.setAttribute("class", getValue1or2(menu1, menuWerte, "linkbutton", ""));
    werteElement.textContent = menuWerte;
    navElement.append(werteElement);

    const toolsElement = document.createElement("a");
    toolsElement.setAttribute("href", `${root}/tools/`);
    toolsElement.setAttribute("class", getValue1or2(menu1, menuTools, "linkbutton", ""));
    toolsElement.textContent = menuTools;
    navElement.append(toolsElement);

    const kontaktElement = document.createElement("a");
    kontaktElement.setAttribute("href", `${root}/kontakt/`);
    kontaktElement.setAttribute("class", getValue1or2(menu1, menuKontakt, "linkbutton", ""));
    kontaktElement.textContent = menuKontakt;
    navElement.append(kontaktElement);

    if (menu1 === menuEvangelium) {
        const nav2Element = document.createElement("nav");
        headerboxElement.append(nav2Element);

        const evangeliumBibelElement = document.createElement("a");
        evangeliumBibelElement.setAttribute("href", `${root}/evangelium/bibel/`);
        evangeliumBibelElement.setAttribute("class", getValue1or2(menu2, menuEvangeliumBibel, "linkbutton", ""));
        evangeliumBibelElement.textContent = menuEvangeliumBibel;
        nav2Element.append(evangeliumBibelElement);

        const evangeliumBibelleseplanElement = document.createElement("a");
        evangeliumBibelleseplanElement.setAttribute("href", `${root}/evangelium/bibelleseplan/`);
        evangeliumBibelleseplanElement.setAttribute("class", getValue1or2(menu2, menuEvangeliumBibelleseplan, "linkbutton", ""));
        evangeliumBibelleseplanElement.textContent = menuEvangeliumBibelleseplan;
        nav2Element.append(evangeliumBibelleseplanElement);
    }

    if (menu1 === menuReformation) {
        const nav2Element = document.createElement("nav");
        headerboxElement.append(nav2Element);

        const reformationZwingliElement = document.createElement("a");
        reformationZwingliElement.setAttribute("href", `${root}/reformation/zwingli/`);
        reformationZwingliElement.setAttribute("class", getValue1or2(menu2, menuReformationZwingli, "linkbutton", ""));
        reformationZwingliElement.textContent = menuReformationZwingli;
        nav2Element.append(reformationZwingliElement);

        const reformationSchaefferElement = document.createElement("a");
        reformationSchaefferElement.setAttribute("href", `${root}/reformation/schaeffer/`);
        reformationSchaefferElement.setAttribute("class", getValue1or2(menu2, menuReformationSchaeffer, "linkbutton", ""));
        reformationSchaefferElement.textContent = menuReformationSchaeffer;
        nav2Element.append(reformationSchaefferElement);
    }

    if (menu1 === menuWerte) {
        const nav2Element = document.createElement("nav");
        headerboxElement.append(nav2Element);

        const werteGoldElement = document.createElement("a");
        werteGoldElement.setAttribute("href", `${root}/werte/gold/`);
        werteGoldElement.setAttribute("class", getValue1or2(menu2, menuWerteGold, "linkbutton", ""));
        werteGoldElement.textContent = menuWerteGold;
        nav2Element.append(werteGoldElement);

        const werteBitcoinElement = document.createElement("a");
        werteBitcoinElement.setAttribute("href", `${root}/werte/bitcoin/`);
        werteBitcoinElement.setAttribute("class", getValue1or2(menu2, menuWerteBitcoin, "linkbutton", ""));
        werteBitcoinElement.textContent = menuWerteBitcoin;
        nav2Element.append(werteBitcoinElement);
    }

    if (menu1 === menuTools) {
        const nav2Element = document.createElement("nav");
        headerboxElement.append(nav2Element);

        const toolsGebetElement = document.createElement("a");
        toolsGebetElement.setAttribute("href", `${root}/tools/gebet/`);
        toolsGebetElement.setAttribute("class", getValue1or2(menu2, menuToolsGebet, "linkbutton", ""));
        toolsGebetElement.textContent = menuTools;
        nav2Element.append(toolsGebetElement);

        const toolsQrcodeElement = document.createElement("a");
        toolsQrcodeElement.setAttribute("href", `${root}/tools/qrcode/`);
        toolsQrcodeElement.setAttribute("class", getValue1or2(menu2, menuToolsQrcode, "linkbutton", ""));
        toolsQrcodeElement.textContent = menuTools;
        nav2Element.append(toolsQrcodeElement);
    }
}

function themeScript() {
    const themeButton = document.getElementById('theme-button');
    themeButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-theme');
        const light = document.documentElement.classList.contains('light-theme');
        setTheme(light);
    });
    let sessionTheme = sessionStorage.getItem('theme');
    if (!sessionTheme) {
        const light = window.matchMedia('(prefers-color-scheme: light)').matches;
        setTheme(light);
    }
    sessionTheme = sessionStorage.getItem('theme');
    if ('light' === sessionTheme) {
        document.documentElement.classList.add('light-theme');
        setTheme(true);
    } else {
        document.documentElement.classList.remove('light-theme');
        setTheme(false);
    }
}

function getValue1or2(key1, key2, value1, value2) {
    if (key1 === key2) {
        return value1;
    } else {
        return value2;
    }
}

function getSyncUrl(url) {
    const request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function getAsyncUrlForId(url, id) {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function () {
        document.getElementById(id).innerHTML = request.responseText;
    }
    request.send();
}

function setTheme(light) {
    const themeButton = document.getElementById('theme-button');
    if (light) {
        sessionStorage.setItem('theme', 'light')
        themeButton.innerHTML = '&#x25CF;';
    } else {
        sessionStorage.setItem('theme', 'dark')
        themeButton.innerHTML = '&#x25CB;';
    }
}