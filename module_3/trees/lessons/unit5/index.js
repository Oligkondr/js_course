const downcaseFileNames = (tree) => {
    const name = getName(tree);
    const newMeta = _.cloneDeep(getMeta(tree));
    const children = getChildren(tree);

    if(isFile(tree)) {
        return mkfile(name.toLowerCase(), newMeta);
    }

    const newChildren = children.map(downcaseFileNames);
    return mkdir(name, newChildren, newMeta);
};
