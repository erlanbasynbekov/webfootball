
function myFunction() {
    const Team1 = document.getElementById("texta-1").value.split("\n");
    const Team2 = document.getElementById("texta-2").value.split("\n");
  
    let team1 = parseInt(document.getElementById("first-team").value);
    let team2 = parseInt(document.getElementById("second-team").value);
    document.getElementById("second-team").value = team2;
    document.getElementById("first-team").value = team1;
    if (!Team1 || !Team2 || !team1 || !team2) {
      alert("No input! Pleas fill all inputs.")
    } else if (Team1.length < 7 || Team1.length > 11 || Team2.length < 7 || Team2.length > 11) {
      alert("Invalid number of players, Please Enter not less than 7 or more than 11 players!")
    } else {
      const result = team1 + team2;
      if (result > 7) {
        alert("No more than 7 goals!");
      } else if (team1 < 0 || team2 < 0) {
        alert("No negative inputs, please use positive once!");
      } else {
        switch (team1) {
          case 0:
            document.getElementById("result-1").value = 0;
            break;
          case 1:
            document.getElementById("result-1").value = 1;
            break;
          case 2:
            document.getElementById("result-1").value = "(2)," + "(1,1)";
            break;
          case 3:
            document.getElementById("result-1").value = "(1 1 1)," + "(2,1)," + "(3)";
            break;
          case 4:
            document.getElementById("result-1").value = "(1 1 1 1)," + "(2 1 1)," + "(3 1)," + "(2 2)," + "(4)";
            break;
          case 5:
            document.getElementById("result-1").value = "(1 1 1 1 1)," + "(2 1 1 1)," + "(3 1 1)," + "(2 3)," + "(4 1)," + "(5)";
            break;
          case 6:
            document.getElementById("result-1").value = "(1 1 1 1 1 1)," + "(2 1 1 1 1)," + "(3 1 1 1)," + "(3 3)," + "(4 1 1)," + "(5 1)," + "(4 2)," + "(6)";
            break;
          case 7:
            document.getElementById("result-1").value = "(1 1 1 1 1 1 1)," + "(2 1 1 1 1 1)," + "(3 1 1 1 1)," + "(3 4)," + "(4 1 1 1)," + "(5 1 1)," + "(4 2 1)," + "(6 1)" + "(7)";
            break;
          default: 0;
            break;
        }
        switch (team2) {
          case 0:
            document.getElementById("result-2").value = 0;
            break;
          case 1:
            document.getElementById("result-2").value = 1;
            break;
          case 2:
            document.getElementById("result-2").value = "(2)," + "(1,1)";
            break;
          case 3:
            document.getElementById("result-2").value = "(1 1 1)," + "(2,1)," + "(3)";
            break;
          case 4:
            document.getElementById("result-2").value = "(1 1 1 1)," + "(2 1 1)," + "(3 1)," + "(2 2)," + "(4)";
            break;
          case 5:
            document.getElementById("result-2").value = "(1 1 1 1 1)," + "(2 1 1 1)," + "(3 1 1)," + "(2 3)," + "(4 1)," + "(5)";
            break;
          case 6:
            document.getElementById("result-2").value = "(1 1 1 1 1 1)," + "(2 1 1 1 1)," + "(3 1 1 1)," + "(3 3)," + "(4 1 1)," + "(5 1)," + "(4 2)," + "(6)";
            break;
          case 7:
            document.getElementById("result-2").value = "(1 1 1 1 1 1 1)," + "(2 1 1 1 1 1)," + "(3 1 1 1 1)," + "(3 4)," + "(4 1 1 1)," + "(5 1 1)," + "(4 2 1)," + "(6 1)" + "(7)";
            break;
          default: 0;
            break;
        }
        console.log(Team1);
        console.log(Team2);
      }
    }
    if(team1 < 0 || team2 < 0) {
      document.getElementById("result").value = "";
    }
    else if (team1 > team2) {
      document.getElementById("result").value = "First Team is the winner";
    } else if (team1 < team2) {
      document.getElementById("result").value = "Second Team is the winner";
    }
    else if (team1 === team2) {
      document.getElementById("result").value = "The match result is equal!";
    }
    else {
      document.getElementById("result").value = "";
    }
  }