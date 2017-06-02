"use strict";

const FlowView = require("flow-view");

const OPTIONS = [
    "tmpl",
    "title",
    "position",
    "clearList",
    "leaveKeys",
    "dontEscape",
    "dontPrevent"
];

module.exports = (event, state, args, next) => {

    // get type template
    // - what is the relation between a type and a template?
    //      * The type is the templates context
    // - where is the data stored?
    //      * In a graph database
    // create template instance, load html
    // install events, states, etc.
    // done

    // emit dom events
    if (typeof FlowView.onevent !== "function") {
        FlowView.onevent = (domEvent) = {
            event.flow(domEvent.name, domEvent.data);
        };
    }

    // TODO use handler args schema to create options object
    let options = {};
    OPTIONS.forEach(optionName => {
        options[optionName] = args[optionName] || data[optionName]
    });

    data[args.data ? args.data : "data"] = data[args.data ? args.data : "data"] || {};

    FlowView.render(
        options.tmpl,
        options,
        data[args.data ? args.data : "data"]
    ).then(() => {
        next(null, data);
    }).catch(next);
};