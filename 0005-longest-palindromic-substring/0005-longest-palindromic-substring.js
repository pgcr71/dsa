// 2D DP
var longestPalindrome = function (s) {

    if (s.length <= 1) return s;

    const dp = [...new Array(s.length)].map(_ => new Array(s.length).fill(0));

    let lps = '';
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1;
        maxLength = 1;
        lps = i;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) dp[i][i + 1] = 1;
        if (dp[i][i + 1]) { lps = i; maxLength = 2 }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j] ? 1 : 0;
            if (dp[i][j]) {
                if (maxLength < (j - i + 1)) {
                    maxLength = j + 1 - i
                    lps = i
                }

            }
        }
    }

    return s.substring(lps, maxLength + lps);
}