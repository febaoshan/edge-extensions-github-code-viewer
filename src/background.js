chrome.contextMenus.create({
    title: 'open with github-code-viewer',
    contexts: ['page'],
    onclick: function (params) {
        const { pageUrl } = params;
        console.log('pageUrl: ', pageUrl);
        chrome.tabs.create({ url: pageUrl.replace(/github.com/, 'github1s.com') });
    },
    documentUrlPatterns: ['https://*.github.com/*/*']
});

chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({ pageUrl: { urlContains: 'github.com' } })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});