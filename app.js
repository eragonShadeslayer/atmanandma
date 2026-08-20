/** Load Functions **/

/*
 * Light YouTube Embeds by @labnol
 * Credit: https://www.labnol.org/
 */

function labnolIframe(div) {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&rel=0",
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  );
  div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
  var playerElements = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < playerElements.length; n++) {
    var videoId = playerElements[n].dataset.id;
    var div = document.createElement("div");
    div.setAttribute("data-id", videoId);
    var thumbNode = document.createElement("img");
    thumbNode.src = "//i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID", videoId);
    div.appendChild(thumbNode);
    var playButton = document.createElement("div");
    playButton.setAttribute("class", "play");
    div.appendChild(playButton);
    div.onclick = function () {
      labnolIframe(this);
    };
    playerElements[n].appendChild(div);
  }
}

document.addEventListener("DOMContentLoaded", initYouTubeVideos);

function isHomePage() {
  var path = document.location.pathname;
  return /\/index\.html$/.test(path) || /\/$/.test(path) || path === "";
}

function addProfilePanel() {
  const profilePanel = document.getElementById("profilePanel");
  const rolesHtml =
    PersonalData.CurrentPosition +
    "<br>" +
    PersonalData.PreviousPosition +
    "<br>" +
    PersonalData.OtherRoles;
  if (isHomePage()) {
    profilePanel.className = "hero";
    let textWrap = createElementAndAppend({
      tagName: "div",
      className: "hero-text",
      parentNode: profilePanel,
    });
    createElementAndAppend({
      tagName: "h1",
      innerText: PersonalData.Name,
      parentNode: textWrap,
    });
    createElementAndAppend({
      tagName: "p",
      className: "hero-roles",
      innerHTML: rolesHtml,
      parentNode: textWrap,
    });
    let ctaWrap = createElementAndAppend({
      tagName: "div",
      className: "hero-cta",
      parentNode: textWrap,
    });
    createElementAndAppend({
      tagName: "a",
      className: "button",
      innerText: "View Publications",
      href: "pub.html",
      parentNode: ctaWrap,
    });
    createElementAndAppend({
      tagName: "a",
      className: "button button-outline",
      innerText: "Photo Gallery",
      href: "gallery.html",
      parentNode: ctaWrap,
    });
    createElementAndAppend({
      tagName: "a",
      className: "button button-outline",
      innerText: "Contact",
      href: "mailto:" + PersonalData.Email,
      parentNode: ctaWrap,
    });
    let photoWrap = createElementAndAppend({
      tagName: "div",
      className: "hero-photo",
      parentNode: profilePanel,
    });
    createElementAndAppend({
      tagName: "img",
      src: "media/images/hero.jpg",
      alt: PersonalData.Name,
      parentNode: photoWrap,
    });
  } else {
    profilePanel.className = "banner";
    createElementAndAppend({
      tagName: "img",
      className: "avatar",
      src: "media/images/avatar.jpg",
      alt: PersonalData.Name,
      parentNode: profilePanel,
    });
    let textWrap = createElementAndAppend({
      tagName: "div",
      parentNode: profilePanel,
    });
    createElementAndAppend({
      tagName: "h1",
      innerText: PersonalData.Name,
      parentNode: textWrap,
    });
    createElementAndAppend({
      tagName: "p",
      innerHTML: rolesHtml,
      parentNode: textWrap,
    });
  }
}

var headerNavItems = [
  { Name: "Home", Link: "index.html" },
  { Name: "National Roles", Link: "roles.html" },
  { Name: "International Roles", Link: "prog.html" },
  { Name: "Awards & Achievements", Link: "awards.html" },
  { Name: "Publications", Link: "pub.html" },
  { Name: "Gallery", Link: "gallery.html" },
];

function addHeaderPanel() {
  let headerContainer = document.getElementById("header");
  let toggleButton = createElementAndAppend({
    tagName: "button",
    className: "nav-toggle",
    innerHTML: "&#9776;",
    parentNode: headerContainer,
  });
  toggleButton.setAttribute("aria-label", "Toggle navigation");
  let navContainer = createElementAndAppend({
    tagName: "nav",
    parentNode: headerContainer,
  });
  navContainer.setAttribute("aria-label", "Main navigation");
  let listContainer = createElementAndAppend({
    tagName: "ul",
    parentNode: navContainer,
  });
  let items = headerNavItems;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let listItem = createElementAndAppend({
      tagName: "li",
      parentNode: listContainer,
    });
    let linkItem = createElementAndAppend({
      tagName: "a",
      innerText: item.Name,
      href: item.Link,
      parentNode: listItem,
    });
    addActiveForPanelLink(linkItem);
  }
  toggleButton.addEventListener("click", function () {
    listContainer.classList.toggle("open");
  });
}

function addSidePanel() {
  let sidePanelContainer = document.getElementById("sidebar");
  let header = createElementAndAppend({
    tagName: "h2",
    innerText: "Other Contributions",
    parentNode: sidePanelContainer,
  });
  let listContainer = createElementAndAppend({
    tagName: "ul",
    parentNode: sidePanelContainer,
  });
  let items = [
    {
      Name: "Technology Transferred",
      Link: "tech.html",
    },
    {
      Name: "Invited Talks",
      Link: "talks.html",
    },
    {
      Name: "Memberships",
      Link: "ships.html",
    },
    {
      Name: "Student Development",
      Link: "deve.html",
    },
    {
      Name: "Large Scale Infrastructure Development",
      Link: "large.html",
    },
  ];
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let listItem = createElementAndAppend({
      tagName: "li",
      parentNode: listContainer,
    });
    let linkItem = createElementAndAppend({
      tagName: "a",
      innerText: item.Name,
      href: item.Link,
      parentNode: listItem,
    });
    addActiveForPanelLink(linkItem);
  }
}

function addContactCard() {
  let sidePanelContainer = document.getElementById("sidebar");
  let card = createElementAndAppend({
    tagName: "div",
    className: "sidebar-contact",
    parentNode: sidePanelContainer,
  });
  createElementAndAppend({
    tagName: "h2",
    innerText: PersonalData.Title,
    parentNode: card,
  });
  createElementAndAppend({
    tagName: "p",
    innerHTML:
      "<a href='mailto:" +
      PersonalData.Email +
      "'>" +
      PersonalData.Email +
      "</a>",
    parentNode: card,
  });
  createElementAndAppend({
    tagName: "div",
    className: "social",
    innerHTML:
      "<a target='_blank' href='https://twitter.com/" +
      PersonalData.TwitterHandle +
      "' class='fa fa-twitter'></a>" +
      "<a target='_blank' href='http://www.linkedin.com/in/" +
      PersonalData.LinkedInHandle +
      "' class='fa fa-linkedin'></a>",
    parentNode: card,
  });
}

function addPublicationsFilter() {
  if (!/\/pub\.html$/.test(document.location.pathname)) return;
  var post = document.querySelector("#content1 .post");
  if (!post) return;
  var filterWrap = createElementAndAppend(
    {
      tagName: "div",
      className: "pub-filter",
      parentNode: post,
    },
    "afterbegin",
  );
  var input = createElementAndAppend({
    tagName: "input",
    className: "pub-filter-input",
    type: "search",
    placeholder: "Filter publications & patents by title, journal, year...",
    parentNode: filterWrap,
  });
  input.setAttribute("aria-label", "Filter publications and patents");
  var count = createElementAndAppend({
    tagName: "span",
    className: "pub-filter-count",
    parentNode: filterWrap,
  });
  var entries = post.querySelectorAll("p, li");
  var sections = post.querySelectorAll("h2, h3");
  var spacers = post.querySelectorAll("br");
  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    var shown = 0;
    for (var b = 0; b < spacers.length; b++) {
      spacers[b].style.display = q ? "none" : "";
    }
    for (var i = 0; i < entries.length; i++) {
      var match = !q || entries[i].textContent.toLowerCase().indexOf(q) !== -1;
      entries[i].style.display = match ? "" : "none";
      var isTopEntry =
        entries[i].tagName === "LI" || entries[i].parentNode === post;
      if (match && isTopEntry) shown++;
    }
    for (var s = 0; s < sections.length; s++) {
      var hasVisible = false;
      var node = sections[s].nextElementSibling;
      while (node && node.tagName !== "H2" && node.tagName !== "H3") {
        if (node.tagName === "P" && node.style.display !== "none") {
          hasVisible = true;
        } else if (node.tagName === "UL") {
          var items = node.querySelectorAll("li");
          for (var u = 0; u < items.length; u++) {
            if (items[u].style.display !== "none") {
              hasVisible = true;
              break;
            }
          }
        }
        if (hasVisible) break;
        node = node.nextElementSibling;
      }
      sections[s].style.display = hasVisible || !q ? "" : "none";
    }
    count.innerText = q
      ? shown +
        " of " +
        (entries.length - post.querySelectorAll("li p").length) +
        " entries shown"
      : "";
  });
}

function addFooter() {
  let footerContainer = document.getElementById("footer");
  let grid = createElementAndAppend({
    tagName: "div",
    className: "footer-grid",
    parentNode: footerContainer,
  });
  let aboutCol = createElementAndAppend({
    tagName: "div",
    className: "footer-col",
    parentNode: grid,
  });
  createElementAndAppend({
    tagName: "h2",
    innerText: PersonalData.Name,
    parentNode: aboutCol,
  });
  createElementAndAppend({
    tagName: "p",
    innerHTML:
      PersonalData.CurrentPosition + "<br>" + PersonalData.PreviousPosition,
    parentNode: aboutCol,
  });
  let linksCol = createElementAndAppend({
    tagName: "div",
    className: "footer-col",
    parentNode: grid,
  });
  createElementAndAppend({
    tagName: "h3",
    innerText: "Quick Links",
    parentNode: linksCol,
  });
  let linksList = createElementAndAppend({
    tagName: "ul",
    parentNode: linksCol,
  });
  for (let i = 0; i < headerNavItems.length; i++) {
    let listItem = createElementAndAppend({
      tagName: "li",
      parentNode: linksList,
    });
    createElementAndAppend({
      tagName: "a",
      innerText: headerNavItems[i].Name,
      href: headerNavItems[i].Link,
      parentNode: listItem,
    });
  }
  createElementAndAppend({
    tagName: "div",
    className: "footer-bottom",
    innerHTML: "&copy; " + new Date().getFullYear() + " " + PersonalData.Name,
    parentNode: footerContainer,
  });
}

/** Event Listeners **/

function addActiveForPanelLink(linkItem) {
  let pathname = document.location.pathname;
  if (pathname === linkItem.pathname) {
    linkItem.parentNode.classList.add("active");
    linkItem.setAttribute("aria-current", "page");
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
    if (
      data.hasOwnProperty(key) &&
      key !== "tagName" &&
      key !== "eventListener" &&
      key !== "eventListenerType" &&
      key !== "parentNode"
    ) {
      element[key] = data[key];
    }
  }
  if (data.eventListener)
    element.addEventListener(
      data.eventListenerType || "click",
      data.eventListener,
    );
  if (data.parentNode)
    data.parentNode.insertAdjacentElement(position || "beforeend", element);
  else console.log("Error : Missing parentNode argument");
  return element;
};

window.addEventListener("load", onLoad);

function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;
  var targets = document.querySelectorAll(
    "#content1 .post, #sidebar ul, .sidebar-contact",
  );
  if (!targets.length) return;
  var observer = new IntersectionObserver(
    function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          entries[j].target.classList.add("reveal-visible");
          observer.unobserve(entries[j].target);
        }
      }
    },
    { threshold: 0.1 },
  );
  for (var i = 0; i < targets.length; i++) {
    targets[i].classList.add("reveal");
    observer.observe(targets[i]);
  }
}

function onLoad() {
  addProfilePanel();
  addFooter();
  addHeaderPanel();
  addSidePanel();
  addContactCard();
  addPublicationsFilter();
  initScrollReveal();
}
