
function html() {
    document.documentElement.lang = "de-CH";
}

function getElement(tag, append, clazz) {
    const element = document.createElement(tag);
    if (append) {
        element.append(append);
    }
    if (clazz) {
        element.setAttribute("class", clazz);
    }
    return element;
}

function head(root, title, description) {
    document.head = getElement("head");

    const simpleCssElement = getElement("link");
    simpleCssElement.setAttribute("rel", "stylesheet");
    simpleCssElement.setAttribute("href", `${root}/common/simple.css`);
    document.head.append(simpleCssElement);

    const stylesCssElement = getElement("link");
    stylesCssElement.setAttribute("rel", "stylesheet");
    stylesCssElement.setAttribute("href", `${root}/common/styles.css`);
    document.head.append(stylesCssElement);

    const faviconElement = getElement("link");
    faviconElement.setAttribute("rel", "icon");
    faviconElement.setAttribute("type", "image/x-icon");
    faviconElement.setAttribute("href", `${root}/common/favicon.ico`);
    document.head.append(faviconElement);

    document.head.append(getElement("title", title));

    const charsetElement = getElement("meta");
    charsetElement.setAttribute("charset", "UTF-8");
    document.head.append(charsetElement);

    const viewportElement = getElement("meta");
    viewportElement.setAttribute("name", "viewport");
    viewportElement.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.append(viewportElement);

    const descriptionElement = getElement("meta");
    descriptionElement.setAttribute("name", "description");
    descriptionElement.setAttribute("content", description);
    document.head.append(descriptionElement);
}

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

function getValue1or2(key1, key2, value1, value2) {
    if (key1 === key2) {
        return value1;
    } else {
        return value2;
    }
}

function getLinkbutton(href, menu, append) {
    const element = getElement("a");
    element.setAttribute("href", href);
    element.setAttribute("class", getValue1or2(menu, append, "linkbutton", ""));
    element.append(append);
    return element;
}

function bodyHeader(root, title, menu1, menu2) {
    document.body = getElement("body");

    const headerElement = getElement("header");
    document.body.append(headerElement);

    const headerboxElement = getElement("div", undefined, "headerbox");
    headerElement.append(headerboxElement);

    const spaceBetweenElement = getElement("div", undefined, "flex-space-between flex-align-center");
    headerboxElement.append(spaceBetweenElement);

    spaceBetweenElement.append(getElement("h1", title));

    const themeElement = getElement("a");
    themeElement.setAttribute("id", "theme-button");
    themeElement.setAttribute("class", "clickable theme-button");
    spaceBetweenElement.append(themeElement);

    const navElement = getElement("nav");
    headerboxElement.append(navElement);

    const homeimgElement = getElement("img");
    homeimgElement.setAttribute("src", getValue1or2(menu1, menuHome, root + "/common/infoSnow18x18.png", root + "/common/favicon.ico"));
    homeimgElement.setAttribute("alt", "Home");
    const homeElement = getElement("a");
    homeElement.setAttribute("href", `${root}/`);
    homeElement.setAttribute("class", getValue1or2(menu1, menuHome, "linkbutton", ""));
    homeElement.append(homeimgElement);
    navElement.append(homeElement);

    navElement.append(getLinkbutton(`${root}/evangelium/`, menu1, menuEvangelium));
    navElement.append(getLinkbutton(`${root}/reformation/`, menu1, menuReformation));
    navElement.append(getLinkbutton(`${root}/entwicklung/`, menu1, menuEntwicklung));
    navElement.append(getLinkbutton(`${root}/werte/`, menu1, menuWerte));
    navElement.append(getLinkbutton(`${root}/tools/`, menu1, menuTools));
    navElement.append(getLinkbutton(`${root}/kontakt/`, menu1, menuKontakt));

    if (menu1 === menuEvangelium) {
        const nav2Element = getElement("nav");
        headerboxElement.append(nav2Element);
        nav2Element.append(getLinkbutton(`${root}/evangelium/bibel/`, menu2, menuEvangeliumBibel));
        nav2Element.append(getLinkbutton(`${root}/evangelium/bibelleseplan/`, menu2, menuEvangeliumBibelleseplan));
    }

    if (menu1 === menuReformation) {
        const nav2Element = getElement("nav");
        headerboxElement.append(nav2Element);
        nav2Element.append(getLinkbutton(`${root}/reformation/zwingli/`, menu2, menuReformationZwingli));
        nav2Element.append(getLinkbutton(`${root}/reformation/schaeffer/`, menu2, menuReformationSchaeffer));
    }

    if (menu1 === menuWerte) {
        const nav2Element = getElement("nav");
        headerboxElement.append(nav2Element);
        nav2Element.append(getLinkbutton(`${root}/werte/gold/`, menu2, menuWerteGold));
        nav2Element.append(getLinkbutton(`${root}/werte/bitcoin/`, menu2, menuWerteBitcoin));
    }

    if (menu1 === menuTools) {
        const nav2Element = getElement("nav");
        headerboxElement.append(nav2Element);
        nav2Element.append(getLinkbutton(`${root}/tools/gebet/`, menu2, menuToolsGebet));
        nav2Element.append(getLinkbutton(`${root}/tools/qrcode/`, menu2, menuToolsQrcode));
    }
}

function getSimplebutton(onclick, text) {
    const element = getElement("button");
    element.setAttribute("onclick", onclick);
    element.setAttribute("class", "simplebutton");
    element.append(text);
    return element;
}

function setTheme(light) {
    const themeButton = document.getElementById('theme-button');
    if (light) {
        sessionStorage.setItem('theme', 'light')
        themeButton.innerHTML = '&#x25CF;';
        themeButton.setAttribute("title", "Dark");
    } else {
        sessionStorage.setItem('theme', 'dark')
        themeButton.innerHTML = '&#x25CB;';
        themeButton.setAttribute("title", "Light");
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

function footer() {
    themeScript();
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
