if (chrome && chrome.contextMenus) {
    chrome.contextMenus.create({
        title: 'open with github-code-viewer',
        contexts: ['page'],
        onclick: function (params) {
            const { pageUrl = '' } = params;
            
            chrome.tabs.create({ url: pageUrl.replace(/github.com/, 'github1s.com') });
        },
        documentUrlPatterns: ['https://*.github.com/*/*']
    });
}
