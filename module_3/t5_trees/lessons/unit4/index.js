export const compressImages = (direcory) => {
    const children = trees.getChildren(direcory);
    const newChildren = children.map((children) => {
        const name = trees.getName(children);
        const newMeta = _.cloneDeep(trees.getMeta(children));
        if (trees.isFile(children)) {
            if (trees.getName(children).split('.')[1] === 'jpg') {
                newMeta.size /= 2;
                return trees.mkfile(name, newMeta);
            } else {
                return trees.mkfile(name, newMeta);
            }
        }
        return trees.mkdir(name, trees.getChildren(children), newMeta);
    });
    const newMeta = _.cloneDeep(trees.getMeta(direcory));
    return trees.mkdir(trees.getName(direcory), newChildren, newMeta);
};
