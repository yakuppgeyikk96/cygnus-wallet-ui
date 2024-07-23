/* eslint-disable no-undef */
function domIsReady() {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener("DOMContentLoaded", resolve, { once: true });
  });
}

function injectScript() {
  try {
    const container = document.head || document.documentElement;
    const scriptEl = document.createElement("script");
    const scriptUrl = chrome.runtime.getURL("js/injectCygnus.js");
    console.log(scriptUrl);
    scriptEl.setAttribute("src", scriptUrl);
    scriptEl.setAttribute("type", "module");
    container.insertBefore(scriptEl, container.children[0]);
    container.removeChild(scriptEl);
  } catch (error) {
    console.error("Error injecting script:", error);
  }
}

domIsReady().then(injectScript);
