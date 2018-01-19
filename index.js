var fs = require('fs');

const Command = require('command');

module.exports = function SaveTp(dispatch) {
	const command = Command(dispatch);
	let cid = null;
	let currLocation = null;
	let savedLocation = null;
	let tempLocation = null;
	let beforeLocation = null;
	let afterLocation = null;
	let logic = 0

	const chatHandler = event => {
		const message = event.message.replace(/(<([^>]+)>)/ig, '');
		switch (message) {
			case '!helpme':
				// dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(beforeLocation, { id: cid }));
				return false;
			case '!loc':
				if (logic == 0) {
					tempLocation = currLocation;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(savedLocation, { id: cid }));
					logic = 1;
				} else {
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(tempLocation, { id: cid }));
					logic = 0;
				}
				return false;
			case '!save':
				savedLocation = currLocation;
				logic = 0;
				// command.message('Location is Saved: x= ' + Math.round(currLocation.x) + '  y= ' + Math.round(currLocation.y) + '  z1= ' + currLocation.z1  + '  z2= ' + currLocation.z  + '  w= ' + Math.round(currLocation.w));
				return false;
			case '!blink':
					afterLocation = currLocation;
					// beforeLocation = currLocation;

				if (currLocation.w > -1365 && currLocation.w < 1365){
					afterLocation.x = +afterLocation.x + 180;
					afterLocation.y = +afterLocation.y + 0;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 1365 && currLocation.w < 4095){
					afterLocation.x = +afterLocation.x + 170;
					afterLocation.y = +afterLocation.y + 50;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 4095 && currLocation.w < 6825){
					afterLocation.x = +afterLocation.x + 150;
					afterLocation.y = +afterLocation.y + 90;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 6825 && currLocation.w < 9555){
					afterLocation.x = +afterLocation.x + 125;
					afterLocation.y = +afterLocation.y + 125;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 9555 && currLocation.w < 12285){
					afterLocation.x = +afterLocation.x + 90;
					afterLocation.y = +afterLocation.y + 150;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 12285 && currLocation.w < 15015){
					afterLocation.x = +afterLocation.x + 50;
					afterLocation.y = +afterLocation.y + 170;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 15015 && currLocation.w < 17745){
					afterLocation.x = +afterLocation.x + 0;
					afterLocation.y = +afterLocation.y + 180;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 17745 && currLocation.w < 20475){
					afterLocation.x = +afterLocation.x - 50;
					afterLocation.y = +afterLocation.y + 170;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 20475 && currLocation.w < 23205){
					afterLocation.x = +afterLocation.x - 90;
					afterLocation.y = +afterLocation.y + 150;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 23205 && currLocation.w < 25935){
					afterLocation.x = +afterLocation.x - 125;
					afterLocation.y = +afterLocation.y + 125;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 25935 && currLocation.w < 28665){
					afterLocation.x = +afterLocation.x - 150;
					afterLocation.y = +afterLocation.y + 90;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 28665 && currLocation.w < 31395){
					afterLocation.x = +afterLocation.x - 170;
					afterLocation.y = +afterLocation.y + 50;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > 31395 && currLocation.w < 32767){
					afterLocation.x = +afterLocation.x - 180;
					afterLocation.y = +afterLocation.y + 0;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -32767 && currLocation.w < -31402){
					afterLocation.x = +afterLocation.x - 180;
					afterLocation.y = +afterLocation.y + 0;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -31402 && currLocation.w < -28672){
					afterLocation.x = +afterLocation.x - 170;
					afterLocation.y = +afterLocation.y - 50;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -28672 && currLocation.w < -25942){
					afterLocation.x = +afterLocation.x - 150;
					afterLocation.y = +afterLocation.y - 90;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -25942 && currLocation.w < -23212){
					afterLocation.x = +afterLocation.x - 125;
					afterLocation.y = +afterLocation.y - 125;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -23212 && currLocation.w < -20482){
					afterLocation.x = +afterLocation.x - 90;
					afterLocation.y = +afterLocation.y - 150;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -20482 && currLocation.w < -17752){
					afterLocation.x = +afterLocation.x - 50;
					afterLocation.y = +afterLocation.y - 170;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -17752 && currLocation.w < -15022){
					afterLocation.x = +afterLocation.x - 0;
					afterLocation.y = +afterLocation.y - 180;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -15022 && currLocation.w < -12292){
					afterLocation.x = +afterLocation.x + 50;
					afterLocation.y = +afterLocation.y - 170;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -12292 && currLocation.w < -9562){
					afterLocation.x = +afterLocation.x + 90;
					afterLocation.y = +afterLocation.y - 150;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -9562 && currLocation.w < -6832){
					afterLocation.x = +afterLocation.x + 125;
					afterLocation.y = +afterLocation.y - 125;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -6832 && currLocation.w < -4102){
					afterLocation.x = +afterLocation.x + 150;
					afterLocation.y = +afterLocation.y - 90;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				if (currLocation.w > -4102 && currLocation.w < -1365){
					afterLocation.x = +afterLocation.x + 170;
					afterLocation.y = +afterLocation.y - 50;
					dispatch.toClient('S_INSTANT_MOVE', 1, Object.assign(afterLocation, { id: cid }));
				};
				return false;
		}
	};

	dispatch.hook('S_LOGIN', 1, event => ({ cid } = event));
	dispatch.hook('C_WHISPER', 1, chatHandler);
	dispatch.hook('C_CHAT', 1, chatHandler);
	dispatch.hook('C_PLAYER_LOCATION', 1, event => {
		currLocation = {
			z1: event.z1,
			x: event.x2,
			y: event.y2,
			z: event.z2,
			w: event.w
		};
	});
};
