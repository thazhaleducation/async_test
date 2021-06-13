const githubSite = require("./github_site");

// TODO:
// Functions to check the site status and recent maintenance date is implemented in the github_site file
// Use them to check Github site status first and then print the most recent maintenance start date

console.log("Start of Site Status check");


// This functions returns the most recent maintenance date
githubSite.getMostRecentMaintenanceStartDate();

// This function returns the status of Github site
githubSite.siteStatus();

console.log("The End");
