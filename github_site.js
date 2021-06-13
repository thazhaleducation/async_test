const axios = require("axios");

function siteStatus() {
	return axios.get("https://kctbh9vrtdwd.statuspage.io/api/v2/status.json")
		.then(res => res.data.status.indicator);
}

function getMostRecentMaintenanceStartDate() {
	return axios.get("https://kctbh9vrtdwd.statuspage.io/api/v2/scheduled-maintenances.json")
	.then(res => res.data.scheduled_maintenances[0].started_at);
}

module.exports = { siteStatus, getMostRecentMaintenanceStartDate };
