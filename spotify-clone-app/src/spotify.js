//spotify api taking care of authorization
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "5fafe8acb5464050887f89d6cc750e3d";
const redirectUri = "http://localhost:3000/";
const scopes = [
	//spotify app can do the following after authorization
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const getTokenFromResponse = () => {
	//finds the hash in the url of the website
	return (
		window.location.hash
			.substring(1)
			.split("&")
			//intial item and the thing were going to get everytime we loop through
			.reduce((initial, item) => {
				//#accessToken=mysupersecretkey&name=Ritchy
				let parts = item.split("=");
				//Grabs accessToken =  Decode
				initial[parts[0]] = decodeURIComponent(parts[1]);

				return initial;
			}, {})
	);
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
