var countdown = function(endTime, elements, callback) {

	var _second = 1000,
			_minute = _second * 60,
			_hour = _minute * 60,
			_day = _hour * 24,

			endTime = new Date(endTime),
			timer,

			calculate = function(){
				//console.log(endTime);

				var now = new Date(),
						remaning = endTime.getTime() - now.getTime(),
						data;

				if (isNaN(endTime)) {
					console.log('Invalid date/time');
					return;
				}

				if (remaning <= 0) {
					// clear time when time ends
					clearInterval(timer);
					//callback
					if (typeof callback === 'function') {
						callback();
					}					

				} else {
					if (!timer) {
						timer = setInterval(calculate, _second);
					} 

					data = {
					'days' : Math.floor(remaning / _day), 
					'hours' : Math.floor((remaning % _day) / _hour),
					'minutes' : Math.floor((remaning % _hour) / _minute),
					'seconds' : Math.floor((remaning % _minute) / _second)
					}

					if (elements.length) {
						for (x in elements) {
							var x = elements[x];
							data[x] = ('00' + data[x]).slice(-2);
							document.getElementById(x).innerHTML = data[x];
						}
					}

				}

				//console.log(data);

			};

	calculate();
}