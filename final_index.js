const githubSite = require("./github_site");

console.log("Start of Site Status check");

githubSite.getMostRecentMaintenanceStartDate().then(function(value){
    console.log(value);
    return githubSite.siteStatus();
}).then(function(res){
    console.log(res);
}).then(function () {
    console.log("The end");
}).catch(function (){
    console.log("No Internet");
});

    


