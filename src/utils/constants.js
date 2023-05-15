const GOOGLE_API_KEY = "";
const REGION_CODE = "DE";
const LIMIT = 50;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${REGION_CODE}&maxResults=${LIMIT}&key=${GOOGLE_API_KEY}`;
