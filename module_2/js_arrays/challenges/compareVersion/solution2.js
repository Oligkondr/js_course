const compareVersion = (version1, version2) => {
    const [a1, b1] = version1.split('.');
    const [a2, b2] = version2.split('.');
    const major = Math.sign(a1 - a2);
    const minor = Math.sign(b1 - b2);
    return major === 0 ? minor : major;
};
