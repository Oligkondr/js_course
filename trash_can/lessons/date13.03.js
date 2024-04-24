const getFileInfo = (filepath) => {
    const result = {};
    const fileName = filepath.split('/').at(-1);
    result.extension = fileName.split('.')[1];
    result.filename = fileName;
    return result;
}

console.log(getFileInfo('/path/to/index.js'))