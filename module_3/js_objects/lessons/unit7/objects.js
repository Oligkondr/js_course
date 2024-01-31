const pick = (data, param) => {
    const result = {};
    const temp = Object.entries(data);
    for (const name of param) {
        for (const [key, value] of temp) {
            if (key === name) {
                result[name] = value;
            }
        }
    }
    return result;
};

export default pick;

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};
console.log(pick(data, ['user', 'os']));
