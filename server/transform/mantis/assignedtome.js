exports.clickassigned = async (session, models, vars) => {
    await session.transform.mantis.action('assignedtome', 'clickassigned');
};