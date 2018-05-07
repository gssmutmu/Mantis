exports.start = async (session, models, vars) => {
    await session.transform.mantis.start();
};