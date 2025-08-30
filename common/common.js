const menuHome = "Home";
const menuEvangelium = "Evangelium";

function html() {
    document.writeln("<!DOCTYPE html>")
    document.writeln("<html lang=\"de-CH\">")
}

function headBody(title, description) {
    document.writeln("<head>");
    document.writeln("<meta charset=\"UTF-8\">");
    document.writeln("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
    document.writeln("<link rel=\"stylesheet\" href=\"./css/simple.min.css\">");
    document.writeln("<link rel=\"stylesheet\" href=\"./css/styles.css\">");
    document.writeln("<meta name=\"description\" content=\"" + description + "\"/>");
    document.writeln("<title>" + title + "</title>");
    document.writeln("</head>");
    document.writeln("<body>");
}

function header(title, menu, menu2) {
    document.writeln("<header>");
    document.writeln("<div class=\"headerbox\">");
    document.writeln("<h2>" + title + "</h2>");

    document.writeln("<nav>");

    linkclass = getOneOrTwo(menu, menuHome, "linkbutton", "");
    homeimg = getOneOrTwo(menu, menuHome, "./common/infoSnow18x18.png", "./favicon.ico");
    document.writeln("<a href=\"./\" class=\"" + linkclass + "\"><img src=\"" + homeimg + "\" alt=\"Home\">&nbsp;</a>");

    linkclass = getOneOrTwo(menu, menuEvangelium, "linkbutton", "");
    document.writeln("<a href=\"./evangelium/\" class=\"" + linkclass + "\">" + menuEvangelium + "</a>")

    document.writeln("</nav>");

    document.writeln("</header>");
}

function footerBodyHtml() {
    document.writeln("<footer>")
    document.writeln("</footer>")
    document.writeln("</body>")
    document.writeln("</html>")
}

function getOneOrTwo(key1, key2, value1, value2) {
    if (key1 === key2) {
        return value1;
    } else {
        return value2;
    }
}
