const listStructure = require("./videos/list-structure");
const videoStructure = require("./videos/video-structure");

module.exports.getVideos = async (event) => {
    return {
        "headers": {
            "Content-Type": "application/json"
        },
        statusCode: 200,
        body: JSON.stringify({ data: listStructure }, null, 2),
    };
}

module.exports.getVideoData = async (event) => {
    const video = videoStructure[0];
    video.id = event.pathParameters.id;
    return {
        "headers": {
            "Content-Type": "application/json"
        },
        statusCode: 200,
        body: JSON.stringify({ data: video }, null, 2),
    };
};
