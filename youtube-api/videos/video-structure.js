const video1 = {
    "kind": "youtube#video",
    "id": "dQw4w9WgXcQ",
    "statistics": {
        "viewCount": Math.floor(Math.random() * 100).toFixed(),
        "likeCount": Math.floor(Math.random() * 10).toFixed(),
        "dislikeCount": Math.floor(Math.random() * 10).toFixed(),
        "favoriteCount": Math.floor(Math.random() * 10).toFixed(),
        "commentCount": Math.floor(Math.random() * 10).toFixed(),
        "timeWatched": Math.floor(Math.random() * 1000).toFixed(),
        "rewardWallet": '0x139c5080A98aBB134afe140d1121F820380eDFCc'
    },
}

module.exports = [video1]