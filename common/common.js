const menuHome = "Home";
const menuEvangelium = "Evangelium";
const menuEvangeliumBibel = "Bibel";
const menuEvangeliumBibelleseplan = "Plan";
const menuEntwicklung = "Entwicklung";
const menuWerte = "Werte";
const menuKontakt = "Kontakt";

function html() {
    document.writeln("<html lang=\"de-CH\">")
}

function headBody(root, title, description) {
    document.writeln("<head>");
    document.writeln("<meta charset=\"UTF-8\">");
    document.writeln("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
    const css1 = root + "/common/simple.min.css";
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
    document.writeln("<h2>" + title + "</h2>");

    document.writeln("<nav class=\"nobottom\">");

    let link = root + "/";
    let linkclass = getValue1or2(menu1, menuHome, "linkbutton", "");
    const homeimg = getValue1or2(menu1, menuHome, root + "/common/infoSnow18x18.png", root + "/common/favicon.ico");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\"><img src=\"" + homeimg + "\" alt=\"Home\"></a>");

    link = root + "/evangelium/";
    linkclass = getValue1or2(menu1, menuEvangelium, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuEvangelium + "</a>")

    link = root + "/entwicklung/";
    linkclass = getValue1or2(menu1, menuEntwicklung, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuEntwicklung + "</a>")

    link = root + "/werte/";
    linkclass = getValue1or2(menu1, menuWerte, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuWerte + "</a>")

    link = root + "/kontakt/";
    linkclass = getValue1or2(menu1, menuKontakt, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuKontakt + "</a>")

    document.writeln("</nav>");

    if (menu1 === menuEvangelium) {
        document.writeln("<nav class=\"notop nobottom\">");

        link = root + "/evangelium/bibel/";
        linkclass = getValue1or2(menu2, menuEvangeliumBibel, "linkbutton nobottom", "nobottom")
        document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuEvangeliumBibel + "</a>")

        link = root + "/evangelium/bibelleseplan/";
        linkclass = getValue1or2(menu2, menuEvangeliumBibelleseplan, "linkbutton nobottom", "nobottom");
        document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuEvangeliumBibelleseplan + "</a>")

        document.writeln("</nav>");
    }

    document.writeln("</header>");
}

function footerBodyHtml() {
    document.writeln("<footer>")
    document.writeln("</footer>")
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

function getFileForId(filename, id) {
    const request = new XMLHttpRequest();
    request.open("GET", filename, true);
    request.onreadystatechange = function () {
        document.getElementById(id).innerHTML = request.responseText;
    }
    request.send();
}

function getUrlResponse(url) {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader('Accept', 'application/json');
    request.onreadystatechange = function () {
        console.log(request.responseText);
    }
    request.send();
}
