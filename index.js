var fs = require('fs');

const Command = require('command');

module.exports = function SaveTp(dispatch) {
	const command = Command(dispatch);
	var cid = null, logic = 0, tempLocation = null, tempLoc = 0, currLocation = null, savedLocation = 0;
	var radius = [ 0, 50, 90, 125, 150, 170, 180 ]; // you can easy change radius of blink here

	const chatHandler = event => {
		const message = event.message.replace(/(<([^>]+)>)/ig, '');
		switch (message) {
			case '!loc':
				if (logic == 0) {
					if (savedLocation != 0) {
						tempLocation = currLocation;
						dispatch.toClient('S_INSTANT_MOVE', 1,{id: id,x: savedLocation.x,y: savedLocation.y,z: savedLocation.z,w: savedLocation.w});
						logic = 1;
					} else { command.message('Save your location first!') };
				} else {
					dispatch.toClient('S_INSTANT_MOVE', 1,{id: id,x: tempLocation.x,y: tempLocation.y,z: tempLocation.z,w: tempLocation.w});
					logic = 0;
				}
				return false;

			case '!save':
				savedLocation = currLocation;
				logic = 0;
				command.message('Location is Saved: x= ' + Math.round(currLocation.x) + '  y= ' + Math.round(currLocation.y) + ' z= ' + Math.round(currLocation.z));
				return false;

			case '!blink':
				blink()
				return false;

			case '!back':
				if ( tempLoc != 0 ) {
					dispatch.toClient('S_INSTANT_MOVE', 1,{id: id,x: tempLoc.x,y: tempLoc.y,z: tempLoc.z,w: currLocation.w});
				} else { command.message('You should blink first!') };
				return false;
		}
	};

	command.add('tpa', (argz) => {
		dispatch.toClient('S_INSTANT_MOVE', 1,{id: id,x: currLocation.x,y: currLocation.y,z: argz,w: currLocation.w})
		command.message(`Teleported to ${currLocation.x} ${currLocation.y} ${argz}`);
	})

	dispatch.hook('S_LOGIN', 1, event => ({ cid } = event));
	dispatch.hook('C_WHISPER', 1, chatHandler);
	dispatch.hook('C_CHAT', 1, chatHandler);
	dispatch.hook('C_PLAYER_LOCATION', 1, event => {
		if(event.type == 2 || event.type == 10) {
		return false;
		};
		currLocation = {
			x: event.x2,
			y: event.y2,
			z: event.z2,
			w: event.w
		};
	});

	dispatch.hook('C_USE_ITEM', 1, (event) => {
		if(event.item == 6550) {
			blink()
			return false;};
	});

	function blink() {
		tempLoc = {
					x: currLocation.x,
					y: currLocation.y,
					z: currLocation.z
				};
				afterLocation = currLocation;

				if (currLocation.w > -1365 && currLocation.w < 1365){
					afterLocation.x = +currLocation.x + radius[6];
					afterLocation.y = +currLocation.y + radius[0];
				};
				if (currLocation.w > 1365 && currLocation.w < 4095){
					afterLocation.x = +currLocation.x + radius[5];
					afterLocation.y = +currLocation.y + radius[1];
				};
				if (currLocation.w > 4095 && currLocation.w < 6825){
					afterLocation.x = +currLocation.x + radius[4];
					afterLocation.y = +currLocation.y + radius[2];
				};
				if (currLocation.w > 6825 && currLocation.w < 9555){
					afterLocation.x = +currLocation.x + radius[3];
					afterLocation.y = +currLocation.y + radius[3];
				};
				if (currLocation.w > 9555 && currLocation.w < 12285){
					afterLocation.x = +currLocation.x + radius[2];
					afterLocation.y = +currLocation.y + radius[4];
				};
				if (currLocation.w > 12285 && currLocation.w < 15015){
					afterLocation.x = +currLocation.x + radius[1];
					afterLocation.y = +currLocation.y + radius[5];
				};
				if (currLocation.w > 15015 && currLocation.w < 17745){
					afterLocation.x = +currLocation.x + radius[0];
					afterLocation.y = +currLocation.y + radius[6];
				};
				if (currLocation.w > 17745 && currLocation.w < 20475){
					afterLocation.x = +currLocation.x - radius[1];
					afterLocation.y = +currLocation.y + radius[5];
				};
				if (currLocation.w > 20475 && currLocation.w < 23205){
					afterLocation.x = +currLocation.x - radius[2];
					afterLocation.y = +currLocation.y + radius[4];
				};
				if (currLocation.w > 23205 && currLocation.w < 25935){
					afterLocation.x = +currLocation.x - radius[3];
					afterLocation.y = +currLocation.y + radius[3];
				};
				if (currLocation.w > 25935 && currLocation.w < 28665){
					afterLocation.x = +currLocation.x - radius[4];
					afterLocation.y = +currLocation.y + radius[2];
				};
				if (currLocation.w > 28665 && currLocation.w < 31395){
					afterLocation.x = +currLocation.x - radius[5];
					afterLocation.y = +currLocation.y + radius[1];
				};
				if (currLocation.w > 31395 && currLocation.w < 32767){
					afterLocation.x = +currLocation.x - radius[6];
					afterLocation.y = +currLocation.y + radius[0];
				};
				if (currLocation.w > -32767 && currLocation.w < -31402){
					afterLocation.x = +currLocation.x - radius[6];
					afterLocation.y = +currLocation.y + radius[0];
				};
				if (currLocation.w > -31402 && currLocation.w < -28672){
					afterLocation.x = +currLocation.x - radius[5];
					afterLocation.y = +currLocation.y - radius[1];
				};
				if (currLocation.w > -28672 && currLocation.w < -25942){
					afterLocation.x = +currLocation.x - radius[4];
					afterLocation.y = +currLocation.y - radius[2];
				};
				if (currLocation.w > -25942 && currLocation.w < -23212){
					afterLocation.x = +currLocation.x - radius[3];
					afterLocation.y = +currLocation.y - radius[3];
				};
				if (currLocation.w > -23212 && currLocation.w < -20482){
					afterLocation.x = +currLocation.x - radius[2];
					afterLocation.y = +currLocation.y - radius[4];
				};
				if (currLocation.w > -20482 && currLocation.w < -17752){
					afterLocation.x = +currLocation.x - radius[1];
					afterLocation.y = +currLocation.y - radius[5];
				};
				if (currLocation.w > -17752 && currLocation.w < -15022){
					afterLocation.x = +currLocation.x - radius[0];
					afterLocation.y = +currLocation.y - radius[6];
				};
				if (currLocation.w > -15022 && currLocation.w < -12292){
					afterLocation.x = +currLocation.x + radius[1];
					afterLocation.y = +currLocation.y - radius[5];
				};
				if (currLocation.w > -12292 && currLocation.w < -9562){
					afterLocation.x = +currLocation.x + radius[2];
					afterLocation.y = +currLocation.y - radius[4];
				};
				if (currLocation.w > -9562 && currLocation.w < -6832){
					afterLocation.x = +currLocation.x + radius[3];
					afterLocation.y = +currLocation.y - radius[3];
				};
				if (currLocation.w > -6832 && currLocation.w < -4102){
					afterLocation.x = +currLocation.x + radius[4];
					afterLocation.y = +currLocation.y - radius[2];
				};
				if (currLocation.w > -4102 && currLocation.w < -1365){
					afterLocation.x = +currLocation.x + radius[5];
					afterLocation.y = +currLocation.y - radius[1];
				};

				dispatch.toClient('S_INSTANT_MOVE', 1,{id: id,x: afterLocation.x,y: afterLocation.y,z: afterLocation.z,w: currLocation.w});
	}

};
