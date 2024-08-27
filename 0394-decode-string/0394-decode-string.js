/**
 * @param {string} s
 * @return {string}
 */

//  1) find for open bracket
//  2) push all the strings to stack untill closed bracket is found
//  3) once found pop and duplicate chars times the number before
//  4) print
var decodeString = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (s[i] === ']') {
            let cur = stack.pop();
            let str = '';
            while (cur !== '[') {
                cur = stack.pop();
                if(cur !=='[')
                str = `${cur}${str}`;
            }
            
            let lastPoped = stack.pop();
            let times = '';
            while(!Number.isNaN(Number(lastPoped))) {
                times = lastPoped?`${lastPoped}${times}`:times;
                lastPoped = stack.pop();
            }
            console.log(times)
            if (Number.isNaN(Number(lastPoped))  && (lastPoped!== undefined)) {
                stack.push(lastPoped);
            }

            let str2 = ''
            for (let i = 0; i < (times || 1); i++) {
                str2 = `${str2}${str}`;
            }
            stack.push(str2);
        }
    }
    return stack.join('')
}