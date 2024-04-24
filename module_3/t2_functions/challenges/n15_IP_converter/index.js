const ipToInt = (ip) => {
    const elem = ip.split('.');
    return (elem[0] * 256**3) + (elem[1] * 256**2) + (elem[2] * 256) + Number(elem[3]);
};

const intToIp = (int) => {
    const ipInHex = int.toString(16).padStart(8, 0);

    return chunk(ipInHex, 2)
        .map((octet) => parseInt(octet.join(''), 16))
        .join('.');
};