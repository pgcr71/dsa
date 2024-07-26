var lengthOfLongestSubstring = function (s) {
    let i = 0, j = 0, N = s.length, cnt = new Array(128).fill(0), dup = 0, ans = 0;
    while (j < N) {
        let cur = s.charCodeAt(j)
        cnt[cur] = cnt[cur] + 1;
        if (cnt[cur] === 2) {
            dup = dup + 1;
        }
        j++;
        while (dup) {
            let cur = s.charCodeAt(i);
            cnt[cur] = cnt[cur] - 1;
            if (cnt[cur] === 1) {
                dup = dup - 1;
            }

            i++;
        }

        ans = Math.max(ans, j - i);
    }
    return ans;
};

console.log(lengthOfLongestSubstring('pwwkew'));