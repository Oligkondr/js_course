const invertCase = (text) => {
    let ans = ''
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            ans += text[i].toLowerCase()
        }else if(text[i] === text[i].toLowerCase()) {
            ans += text[i].toUpperCase()
        }
    }
    return ans
}

export default invertCase
