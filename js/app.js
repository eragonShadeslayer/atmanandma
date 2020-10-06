function footer() {
    let footerContainer = document.getElementById('footer');
    let header = createElementAndAppend({
        tagName: "h2",
        innerText: footerData.Title,
        parentNode: footerContainer
    });
    let footerInfo = createElementAndAppend({
        tagName: "p",
        innerHTML: footerData.Name +
            "<br>" + footerData.Position +
            "<br>" + footerData.Organisation +
            "<br> Ph:" + footerData.Phone +
            "<br><a href='mailto:" + footerData.Email + "'> Email:" + footerData.Email + "</a>",
        parentNode: footerContainer
    });
    let socialMediaContainer = createElementAndAppend({
        tagName: "center",
        innerHTML: "<a target='_blank' href='https://twitter.com/" + footerData.TwitterHandle + "' class='fa fa-twitter'></a>" +
            "<a target='_blank' href='http://www.linkedin.com/in/" + footerData.LinkedInHandle + "' class='fa fa-linkedin'></a>",
        parentNode: footerContainer
    })
}



/**
 * Method that creates then appends an HTML element to the provided parent node.
 * @param {object} data
 * @param {string} [data.tagName]
 * @param {string} [data.id]
 * @param {string} [data.className]
 * @param {string} [data.type]
 * @param {string} [data.src]
 * @param {string} [data.href]
 * @param {string} [data.title]
 * @param {string} [data.innerText]
 * @param {string} [data.innerHTML]
 * @param {string} [data.eventListenerType]
 * @param {function} [data.eventListener]
 * @param {HTMLElement|Element} [data.parentNode]
 * @param {string} [position] - The position at which to append the element. Default is beforeend
 * @return {HTMLElement|Element} element - The created element
 */
createElementAndAppend = function (data, position) {
    if (!data.tagName) {
        new Error("Cannot create element : provided tagname is invalid or null");
    }
    var element = document.createElement(data.tagName);
    for (var key in data) {
        if (data.hasOwnProperty(key) && key === "dataset") {
            for (var innerDataSetKey in data[key]) {
                if (data[key].hasOwnProperty(innerDataSetKey)) {
                    element[key][innerDataSetKey] = data[key][innerDataSetKey];
                }
            }
        }
        if (data.hasOwnProperty(key) && key !== "tagName" && key !== "eventListener" && key !== "eventListenerType" && key !== "parentNode") {
            element[key] = data[key];
        }
    }
    if (data.eventListener) element.addEventListener(data.eventListenerType || "click", data.eventListener);
    if (data.parentNode) data.parentNode.insertAdjacentElement((position || "beforeend"), element);
    else console.log("Error : Missing parentNode argument");
    return element;
};


window.addEventListener('load', onLoad);


function onLoad() {
    footer();
}