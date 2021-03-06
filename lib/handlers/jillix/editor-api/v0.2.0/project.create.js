'use strict';

module.exports = (event, state, args, next) => {
    let data = event.data || {};
    data.body = data.body || {};

    if (!state.api) {
        return next(new Error('Service-api.project.create: No API instance found on the state object.'));
    }

    state.api.project.create({
        name: data.body.name,
        description: data.body.description
    }).then(res => {
        data.body = res;
        next(null, data);
    }).catch(err => {
        next(err);
    });
};