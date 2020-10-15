import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState(null);
	//run code based on a condition
	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
			//react talks to spotify api
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				console.log("person", user);
			});
		}
	}, []);

	return (
		<div className="App">
			{token ? <h1>I am logged in</h1> : <Login />}
			<Login />
		</div>
	);
}

export default App;
