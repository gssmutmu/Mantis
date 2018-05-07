exports.submit = async (session, models, vars) => {
    await session.transform.mantis.update('login', models.login);
    await session.transform.mantis.action('login', 'submit');
};