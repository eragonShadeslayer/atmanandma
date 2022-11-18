/** Load Functions **/

function addProfilePanel() {
    let profilePanel = document.getElementById('profilePanel');
    let imageContainer = createElementAndAppend({
        tagName: "div",
        className: "thumb",
        parentNode: profilePanel
    });
    let image = createElementAndAppend({
        tagName: "img",
        src: "media/images/photo.jpg",
        parentNode: imageContainer
    });
    let textContainer = createElementAndAppend({
        tagName: "div",
        className: "text",
        parentNode: profilePanel
    });
    let textHeader = createElementAndAppend({
        tagName: "h2",
        innerText: PersonalData.Name,
        parentNode: textContainer
    });
    let textContent = createElementAndAppend({
        tagName: "p",
        innerHTML: PersonalData.CurrentPosition +
            "<br>" + PersonalData.PreviousPosition +
            "<br>" + PersonalData.OtherRoles,
        parentNode: textContainer
    });
}

function addHeaderPanel() {
    let headerContainer = document.getElementById('header');
    let listContainer = createElementAndAppend({
        tagName: "ul",
        parentNode: headerContainer
    });
    let items = [
        {
            Name: "Home",
            Link: "index.html"
        },
        {
            Name: "National Roles",
            Link: "roles.html"
        },
        {
            Name: "International Roles",
            Link: "prog.html"
        },
        {
            Name: "Awards & Achievements",
            Link: "awards.html",
        },
        {
            Name: "Publications",
            Link: "pub.html"
        },
        {
            Name: "Gallery",
            Link: "gallery.html"
        }];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let listItem = createElementAndAppend({
            tagName: "li",
            parentNode: listContainer
        });
        let linkItem = createElementAndAppend({
            tagName: "a",
            innerText: item.Name,
            href: item.Link,
            parentNode: listItem
        });
        addActiveForPanelLink(linkItem);
    }
}

function addSidePanel() {
    let sidePanelContainer = document.getElementById('sidebar');
    let header = createElementAndAppend({
        tagName: "h2",
        innerText: "Other Contributions",
        parentNode: sidePanelContainer
    });
    let listContainer = createElementAndAppend({
        tagName: "ul",
        parentNode: sidePanelContainer
    });
    let items = [
        {
            Name: "Technology Transferred",
            Link: "tech.html"
        },
        {
            Name: "Invited Talks",
            Link: "talks.html"
        },
        {
            Name: "Memberships",
            Link: "ships.html"
        },
        {
            Name: "Student Development",
            Link: "deve.html"
        },
        {
            Name: "Large Scale Infrastructure Development",
            Link: "large.html"
        }];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let listItem = createElementAndAppend({
            tagName: "li",
            parentNode: listContainer
        });
        let linkItem = createElementAndAppend({
            tagName: "a",
            innerText: item.Name,
            href: item.Link,
            parentNode: listItem
        });
        addActiveForPanelLink(linkItem);
    }
}

function addFooter() {
    let footerContainer = document.getElementById('footer');
    let header = createElementAndAppend({
        tagName: "h2",
        innerText: PersonalData.Title,
        parentNode: footerContainer
    });
    let footerInfo = createElementAndAppend({
        tagName: "p",
        innerHTML: PersonalData.Name +
            "<br>" + PersonalData.CurrentPosition +
            "<br> Ph:" + PersonalData.Phone +
            "<br><a href='mailto:" + PersonalData.Email + "'> Email:" + PersonalData.Email + "</a>",
        parentNode: footerContainer
    });
    let socialMediaContainer = createElementAndAppend({
        tagName: "center",
        innerHTML: "<a target='_blank' href='https://twitter.com/" + PersonalData.TwitterHandle + "' class='fa fa-twitter'></a>" +
            "<a target='_blank' href='http://www.linkedin.com/in/" + PersonalData.LinkedInHandle + "' class='fa fa-linkedin'></a>",
        parentNode: footerContainer
    })
}

/** Event Listeners **/

function addActiveForPanelLink(linkItem) {
    let pathname = document.location.pathname;
    if (pathname === linkItem.pathname) {
        linkItem.parentNode.classList.add('active');
    }
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
    addProfilePanel();
    addFooter();
    addHeaderPanel();
    addSidePanel();
}