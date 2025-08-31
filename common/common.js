const menuHome = "Home";
const menuEvangelium = "Evangelium";

function html() {
    document.writeln("<!DOCTYPE html>")
    document.writeln("<html lang=\"de-CH\">")
}

function headBody(root, title, description) {
    document.writeln("<head>");
    document.writeln("<meta charset=\"UTF-8\">");
    document.writeln("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
    const css1 = root + "/css/simple.min.css";
    document.writeln("<link rel=\"stylesheet\" href=\"" + css1 + "\">");
    const css2 = root + "/css/styles.css";
    document.writeln("<link rel=\"stylesheet\" href=\"" + css2 + "\">");
    document.writeln("<meta name=\"description\" content=\"" + description + "\"/>");
    document.writeln("<title>" + title + "</title>");
    document.writeln("</head>");
    document.writeln("<body>");
}

function header(root, title, menu1, menu2) {
    document.writeln("<header>");
    document.writeln("<div class=\"headerbox\">");
    document.writeln("<h2>" + title + "</h2>");

    document.writeln("<nav>");

    let link = root + "/";
    let linkclass = getMenu1or2(menu1, menuHome, "linkbutton", "");
    const homeimg = getMenu1or2(menu1, menuHome, root + "/common/infoSnow18x18.png", root + "/favicon.ico");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\"><img src=\"" + homeimg + "\" alt=\"Home\">&nbsp;</a>");

    link = root + "/evangelium/";
    linkclass = getMenu1or2(menu1, menuEvangelium, "linkbutton", "");
    document.writeln("<a href=\"" + link + "\" class=\"" + linkclass + "\">" + menuEvangelium + "</a>")

    document.writeln("</nav>");

    document.writeln("</header>");
}

function footerBodyHtml() {
    document.writeln("<footer>")
    document.writeln("</footer>")
    document.writeln("</body>")
    document.writeln("</html>")
}

function getMenu1or2(key1, key2, value1, value2) {
    if (key1 === key2) {
        return value1;
    } else {
        return value2;
    }
}

function writeLink(root, link, name) {
    const ref = root + link;
    document.writeln("<a href=\"" + ref + "\">" + name + "</a>");
}
