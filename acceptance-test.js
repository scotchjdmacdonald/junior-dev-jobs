"use strict"

var system = require('system'),
    page = require('webpage').create(),
    server = system.args[1] + "/api/jobs",
    data = '{ "title": "Test Job", "description": "desc" }',
    headers = { "Content-Type": "application/json" };

console.log(server);

page.open(server, 'post', data, headers, function(postStatus) {
    if (postStatus === 'success')
    {
        console.log("POST /api/jobs Successful");
        
        page.open(server, function(getStatus) {
            if (getStatus === 'success')
            {
                console.log("GET /api/jobs Successful");
                phantom.exit(0);
            }
            else
            {
                console.log("GET /api/jobs Unsuccessful");
                phantom.exit(1);
            }
        });
    }
    else
    {
        console.log("POST /api/jobs Unsuccessful")
        phantom.exit(1);
    }
})