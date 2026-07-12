const menuHome = "Home";
const menuEvangelium = "Evangelium";
const menuEvangeliumBibel = "Bibel";
const menuEvangeliumBibelleseplan = "Plan";
const menuEntwicklung = "Entwicklung";
const menuReformation = "Reformation";
const menuReformationSchaeffer = "Schaeffer";
const menuWerte = "Werte";
const menuWerteGold = "Gold";
const menuWerteBitcoin = "Bitcoin";
const menuTools = "Tools";
const menuToolsGebet = "Gebet";
const menuToolsQrcode = "QR-Code";
const menuKontakt = "Kontakt";

function html() {
    document.writeln("<html lang=\"de-CH\">")
}

function headBody(root, title, description) {
    document.writeln("<head>");
    document.writeln("<meta charset=\"UTF-8\">");
    document.writeln("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
    const css1 = root + "/common/simple.css";
    document.writeln("<link rel=\"stylesheet\" href=\"" + css1 + "\">");
    const css2 = root + "/common/styles.css";
    document.writeln("<link rel=\"stylesheet\" href=\"" + css2 + "\">");
    const favicon = root + "/common/favicon.ico"
    document.writeln("<link rel=\"icon\" type=\"image/x-icon\" href=\"" + favicon + "\">");
    document.writeln("<meta name=\"description\" content=\"" + description + "\"/>");
    document.writeln("<title>" + title + "</title>");
    document.writeln("</head>");
    document.writeln("<body>");
}

function header(root, title, menu1, menu2) {
    document.writeln("<header>");
    document.writeln("<div class=\"headerbox\">");

    document.writeln("<div class='flex-space-between flex-align-center'>");
    document.writeln("<div><h1>" + title + "</h1></div>");
    document.writeln("<div><a id='theme-button' class='clickable theme-button'>&nbsp;</a></div>")
    document.writeln("</div>")

    document.writeln("<nav>");

    let link = root + "/";
    let linkclass = getValue1or2(menu1, menuHome, "linkbutton", "");
    const homeimg = getValue1or2(menu1, menuHome, root + "/common/infoSnow18x18.png", root + "/common/favicon.ico");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\"><img src=\"" + homeimg + "\" alt=\"Home\"></a>");

    link = root + "/evangelium/";
    linkclass = getValue1or2(menu1, menuEvangelium, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuEvangelium + "</a>")

    link = root + "/reformation/";
    linkclass = getValue1or2(menu1, menuReformation, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuReformation + "</a>")

    link = root + "/entwicklung/";
    linkclass = getValue1or2(menu1, menuEntwicklung, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuEntwicklung + "</a>")

    link = root + "/werte/";
    linkclass = getValue1or2(menu1, menuWerte, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuWerte + "</a>")

    link = root + "/tools/";
    linkclass = getValue1or2(menu1, menuTools, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuTools + "</a>")

    link = root + "/kontakt/";
    linkclass = getValue1or2(menu1, menuKontakt, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuKontakt + "</a>")

    document.writeln("</nav>");

    if (menu1 === menuEvangelium) {
        document.writeln("<nav>");

        link = root + "/evangelium/bibel/";
        linkclass = getValue1or2(menu2, menuEvangeliumBibel, "linkbutton", "")
        document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuEvangeliumBibel + "</a>")

        link = root + "/evangelium/bibelleseplan/";
        linkclass = getValue1or2(menu2, menuEvangeliumBibelleseplan, "linkbutton", "");
        document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuEvangeliumBibelleseplan + "</a>")

        document.writeln("</nav>");
    }

    if (menu1 === menuReformation) {
        document.writeln("<nav>");

        link = root + "/reformation/schaeffer/";
        linkclass = getValue1or2(menu2, menuReformationSchaeffer, "linkbutton", "")
        document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuReformationSchaeffer + "</a>")

        document.writeln("</nav>");
    }

    if (menu1 === menuWerte) {
        document.writeln("<nav>");

        link = root + "/werte/gold/";
        linkclass = getValue1or2(menu2, menuWerteGold, "linkbutton", "")
        document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuWerteGold + "</a>")

        link = root + "/werte/bitcoin/";
        linkclass = getValue1or2(menu2, menuWerteBitcoin, "linkbutton", "")
        document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuWerteBitcoin + "</a>")

        document.writeln("</nav>");
    }

    if (menu1 === menuTools) {
        document.writeln("<nav>");

        link = root + "/tools/gebet/";
        linkclass = getValue1or2(menu2, menuToolsGebet, "linkbutton", "")
        document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuToolsGebet + "</a>")

        link = root + "/tools/qrcode/";
        linkclass = getValue1or2(menu2, menuToolsQrcode, "linkbutton", "")
        document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuToolsQrcode + "</a>")

        document.writeln("</nav>");
    }

    document.writeln("</header>");
}

function footerBodyHtml() {
    document.writeln("<footer>")
    document.writeln("</footer>")

    const themeButton = document.getElementById('theme-button');
    themeButton.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-theme');
        const light = document.documentElement.classList.contains('light-theme');
        setTheme(light);
    });
    var sessionTheme = sessionStorage.getItem('theme');
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

    document.writeln("</body>")
    document.writeln("</html>")
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