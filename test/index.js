// @ts-check

const {getAllFileDataInContext, resetWorkspaceContext } = require('nx/src/utils/workspace-context');

(async () => {
    const a = await getAllFileDataInContext(__dirname);
    a.forEach(f => {
        console.log(f.file);
    })
    resetWorkspaceContext();
})()