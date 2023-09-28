const videoStructure = require("./video-structure");

module.exports = {
    "kind": "youtube#videoListResponse",
    "nextPageToken": '',
    "prevPageToken": '',
    "pageInfo": {
        "totalResults": 1,
        "resultsPerPage": 1
    },
    "items": [
        ...videoStructure
    ]
}