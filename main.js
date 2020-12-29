$(document).ready(function () {

	var move = 1;
	var play = true;
	var x=0;
	var o=0;


	$("#board tr td").click(function () {
		if ($(this).text() == "" && play) {
			if ((move % 2) == 1) {
				$(this).append("X");
				$(this).css('color', "#00fc0f");
				
			} else {
				$(this).append("O");
				$(this).css('color', "#fc0000");
			}
			move++;
			if (checkForWinner() != -1 && checkForWinner() != "") {
				if (checkForWinner() == "X") {
					$('body').append('<div class="winner"><span>Winner</span>X</div><button onclick="abc()" id="reload">Play Again</button>');
					$('.winner').css('background-color', '#00fc0f');
					$('#reload').css('color','#00fc0f');
					x++;
					$("#board1 tr:nth-child(2) td:nth-child(1)").append(x)

				} else if (checkForWinner() == "O"){
					$('body').append('<div class="winner"><span>Winner</span>O</div><button onclick="abc()" id="reload">Play Again</button>');
					$('.winner').css('background-color', '#fc0000');
					$('#reload').css('color','#fc0000');
					o++;
					$("#board1 tr:nth-child(2) td:nth-child(2)").append(o)
				}
			}
			else if (checkForWinner() == false  && move==10){
				$('body').append('<div class="winner"><span>No Winner</span>TIE</div><button onclick="abc();" id="reload">Play Again</button>');
				$('.winner').css('background-color', '#124df8');
				$('#reload').css('color','#124df8');

			}
			
		}
	});

	function checkForWinner() {
		var space1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
		var space2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
		var space3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
		var space4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
		var space5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
		var space6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
		var space7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
		var space8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
		var space9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
		if ((space1 == space2) && (space2 == space3)) {
			return space3;
		} else if ((space4 == space5) && (space5 == space6)) {
			return space6;
		} else if ((space7 == space8) && (space8 == space9)) {
			return space9;
		}
		else if ((space1 == space4) && (space4 == space7)) {
			return space7;
		} else if ((space2 == space5) && (space5 == space8)) {
			return space8;
		} else if ((space3 == space6) && (space6 == space9)) {
			return space9;
		}
		else if ((space1 == space5) && (space5 == space9)) {
			return space9;
		} else if ((space3 == space5) && (space5 == space7)) {
			return space7;
		}
		else{
			return false;
		}

	}
	function abc(){
		console.log("abc");
		move=1;
		play=true;
		var space1 = $("#board tr:nth-child(1) td:nth-child(1)").remove();
		var space2 = $("#board tr:nth-child(1) td:nth-child(2)").remove();
		var space3 = $("#board tr:nth-child(1) td:nth-child(3)").remove();
		var space4 = $("#board tr:nth-child(2) td:nth-child(1)").remove();
		var space5 = $("#board tr:nth-child(2) td:nth-child(2)").remove();
		var space6 = $("#board tr:nth-child(2) td:nth-child(3)").remove();
		var space7 = $("#board tr:nth-child(3) td:nth-child(1)").remove();
		var space8 = $("#board tr:nth-child(3) td:nth-child(2)").remove();
		var space9 = $("#board tr:nth-child(3) td:nth-child(3)").remove();
	}

});
