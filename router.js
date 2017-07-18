function route(handle, pathname, response, request) {
    console.log("About to route a request for " + pathname);

    let reqArry = pathname.split('/');

    handle(reqArry, response, request);
}

exports.route = route;