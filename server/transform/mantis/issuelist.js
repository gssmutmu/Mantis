exports.issuelist = async (session, models, vars) => {
    models.issuelist = vars.page;
    await session.screen('issuelist');
};
exports.issuelist2 = async (session, models, vars) => {
    models.issuelist = vars.page;
    await session.screen('issuelist');
};