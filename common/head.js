function html() {
    document.documentElement.lang = "de-CH";
}

function head(root, title, description) {
    const simpleCss = `${root}/common/simple.css`;
    const simpleCssPreloadElement = document.createElement("link");
    simpleCssPreloadElement.setAttribute("rel", "preload");
    simpleCssPreloadElement.setAttribute("href", simpleCss);
    simpleCssPreloadElement.setAttribute("as", "style");
    document.head.append(simpleCssPreloadElement);

    const stylesCss = `${root}/common/styles.css`;
    const stylesCssPreloadElement = document.createElement("link");
    stylesCssPreloadElement.setAttribute("rel", "preload");
    stylesCssPreloadElement.setAttribute("href", stylesCss);
    stylesCssPreloadElement.setAttribute("as", "style");
    document.head.append(stylesCssPreloadElement);

    const simpleCssElement = document.createElement("link");
    simpleCssElement.setAttribute("rel", "stylesheet");
    simpleCssElement.setAttribute("href", simpleCss);
    document.head.append(simpleCssElement);

    const stylesCssElement = document.createElement("link");
    stylesCssElement.setAttribute("rel", "stylesheet");
    stylesCssElement.setAttribute("href", stylesCss);
    document.head.append(stylesCssElement);

    const faviconElement = document.createElement("link");
    faviconElement.setAttribute("rel", "icon");
    faviconElement.setAttribute("type", "image/x-icon");
    faviconElement.setAttribute("href", `${root}/common/favicon.ico`);
    document.head.append(faviconElement);

    const titleElement = document.createElement("title");
    titleElement.append(title);
    document.head.append(titleElement);

    const charsetElement = document.createElement("meta");
    charsetElement.setAttribute("charset", "UTF-8");
    document.head.append(charsetElement);

    const viewportElement = document.createElement("meta");
    viewportElement.setAttribute("name", "viewport");
    viewportElement.setAttribute("content", "width=device-width, initial-scale=1.0");
    document.head.append(viewportElement);

    const descriptionElement = document.createElement("meta");
    descriptionElement.setAttribute("name", "description");
    descriptionElement.setAttribute("content", description);
    document.head.append(descriptionElement);
}
