// https://www.codeconcisely.com/posts/javascript-tabs/

const tabElements = document.querySelectorAll('button[role="tab"]');
const panelElements = document.querySelectorAll('[role="tabpanel"]');
const hashes = ["io", "blockly", "code", "doc-fr", "doc-en"]
let activeIndex = 0;

// Listen to clicks on tabs
tabElements.forEach(function (tab, index) {
  tab.addEventListener("click", function (event) {
    setActiveTab(index);
  });
});

function setActiveTab(index) {
  // Make currently active tab inactive
  tabElements[activeIndex].setAttribute("aria-selected", "false");

  // Set the new tab as active
  tabElements[index].setAttribute("aria-selected", "true");

  setActivePanel(index);
  activeIndex = index;
}

function setActivePanel(index) {
  // Hide currently active panel
  panelElements[activeIndex].setAttribute("hidden", "");

  // Show the new active panel
  panelElements[index].removeAttribute("hidden");

  // tweak the hash
  parent.location.hash = hashes[index];
}

// This is me adding 'hash detection'
let initialIndex = 0;
const hash = window.location.hash;
switch (hash.slice(1)) {
    case 'io':
        initialIndex = 0;
        break;
    case 'blockly':
        initialIndex = 1;
        break;
    case 'code':
        initialIndex = 2;
        break;
    case 'doc-fr':
        initialIndex = 3;
        break;
    case 'doc-en':
        initialIndex = 4;
        break;
}

setActiveTab(initialIndex);
// end of hash detection
