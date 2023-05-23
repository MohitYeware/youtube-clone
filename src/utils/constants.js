const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;
const REGION_CODE = "DE";
const MAX_RESULTS = 50;
export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${REGION_CODE}&maxResults=${MAX_RESULTS}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULTS}&key=${GOOGLE_API_KEY}&q=`;
