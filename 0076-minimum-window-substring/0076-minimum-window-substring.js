function minWindow(s, t) {
    const map = new Array(128).fill(0);
    for (const c of t) {
        map[c.charCodeAt(0)]++;
    }
    let start = 0, end = 0, minStart = 0, minLen = Infinity, counter = t.length;
    
    while (end < s.length) {
        const c1 = s[end];
        if (map[c1.charCodeAt(0)] > 0) counter--;
        map[c1.charCodeAt(0)]--;
        end++;
        
        while (counter === 0) {
            if (minLen > end - start) {
                minLen = end - start;
                minStart = start;
            }
            const c2 = s[start];
            map[c2.charCodeAt(0)]++;
            if (map[c2.charCodeAt(0)] > 0) counter++;
            start++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}


function lengthOfLongestSubstringKDistinct(s, k) {
    const map = new Array(256).fill(0);
    let start = 0, end = 0, maxLen = Number.MIN_VALUE, counter = 0;

    while (end < s.length) {
        const c1 = s.charAt(end);
        if (map[c1] === 0) counter++;
        map[c1]++;
        end++;

        while (counter > k) {
            const c2 = s.charAt(start);
            if (map[c2] === 1) counter--;
            map[c2]--;
            start++;
        }

        maxLen = Math.max(maxLen, end - start);
    }

    return maxLen;
}

function lengthOfLongestSubstringTwoDistinct(s) {
    const map = new Array(128).fill(0);
    let start = 0, end = 0, maxLen = 0, counter = 0;

    while (end < s.length) {
        const c1 = s.charAt(end);
        if (map[c1] === 0) counter++;
        map[c1]++;
        end++;

        while (counter > 2) {
            const c2 = s.charAt(start);
            if (map[c2] === 1) counter--;
            map[c2]--;
            start++;
        }

        maxLen = Math.max(maxLen, end - start);
    }

    return maxLen;
}

function lengthOfLongestSubstring2(s) {
    const map = new Array(128).fill(0);
    let start = 0, end = 0, maxLen = 0, counter = 0;

    while (end < s.length) {
        const c1 = s.charAt(end);
        if (map[c1] > 0) counter++;
        map[c1]++;
        end++;

        while (counter > 0) {
            const c2 = s.charAt(start);
            if (map[c2] > 1) counter--;
            map[c2]--;
            start++;
        }

        maxLen = Math.max(maxLen, end - start);
    }

    return maxLen;
}


