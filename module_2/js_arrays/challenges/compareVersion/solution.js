const compareVersion = (version1, version2) => {
    const verSlice1 = version1.split('.');
    const verSlice2 = version2.split('.');
    console.log(verSlice1);
    console.log(verSlice2);
    if (Number(verSlice1[0]) > Number(verSlice2[0])) {
        return 1;
    } else if (Number(verSlice1[0]) === Number(verSlice2[0])) {
        if (Number(verSlice1[1]) > Number(verSlice2[1])) {
            return 1;
        } else if (Number(verSlice1[1]) === Number(verSlice2[1])) {
            return 0;
        } else {
            return -1;
        }
    } else {
        return -1;
    }
};
