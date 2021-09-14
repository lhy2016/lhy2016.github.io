var gameContent = {"ttt": loadTtt};
$("#gameButton").click(function() {
    $(this).addClass("active");
    if ($("#game > #games").length == 0) {
        $("#game").append(
        "<div id='games'>\
            <div class='gameBrowse' id='ttt'>\
                <div class='game-pic'></div>\
                <div class='game-title'>tic tac toe</div>\
            </div>\
        </div>");
        $(".gameBrowse").click(function() {
            if ($(".game-panel").length == 0) {
                var gameId = $(this).attr("id");
                $("#game").after("<div class='game-panel'>\
                                 </div>");
                var gameLoader = gameContent[gameId];
                gameLoader();
                $("#games").hide();
            }
        });
    } else {
        $("#games").show();
    }
});
$(document).click(function(event) { 
    var $target = $(event.target); 
    if(!$target.closest('#games').length && !$target.closest('#gameButton').length
       && $('#games').is(":visible")) {
      $('#games').hide();
    }        
});
function loadTtt() {
    var tttPlayerTurn = true;
    var playerChess = "X"
    var computerChess = "O"
    var tttBoard = [["","",""],["","",""],["","",""]];
    var gameEnd = false;
    var history = [];
    var winner = "t";
    $(".game-panel").append("<span class='game-close'><ion-icon name='close-circle'></ion-icon></span>\
                            <div id='ttt-content'>\
                                <div id='ttt-title-area'>\
                                    <div id='ttt-yn-container'>Want to go first? \
                                            <span style='color: #0089ff'>Yes</span>\
                                            <span style='margin-left: 10px;color: #af8282'>No</span>\
                                    </div>\
                                    <div id='ttt-game-title'>\
                                        <div class='ttt-player'>\
                                            <div id='ttt-cavatar' class='ttt-avatar'></div>\
                                            <div id='ttt-cscore' class='ttt-score'>0</div>\
                                        </div>\
                                        <div id='ttt-taunt'></div>\
                                        <div class='ttt-player'>\
                                            <div id='ttt-pavatar' class='ttt-avatar'></div>\
                                            <div id='ttt-pscore' class='ttt-score'>0</div>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div id='ttt-board'>\
                                    <span>\
                                        <div></div>\
                                        <div class='middle'></div>\
                                        <div></div>\
                                    </span>\
                                    <span class='middle'>\
                                        <div></div>\
                                        <div class='middle'></div>\
                                        <div></div>\
                                    </span>\
                                    <span>\
                                        <div></div>\
                                        <div class='middle'></div>\
                                        <div></div>\
                                    </span>\
                                </div>\
                                <div id='ttt-option'>\
                                    <span id='rt-btn'><ion-icon name='refresh'></ion-icon>Restart</span>\
                                </div>\
                            </div>");
    // 关闭游戏窗口 
    $(".game-panel > .game-close").click(function() {
        $(".game-panel").remove();
    });
    // 选择先手后手
    $("#ttt-yn-container > span").click(function() {
        if ($(this).html() === "No") {
            tttPlayerTurn = false;
            playerChess = "O";
            computerChess = "X";
            placeOneChess();
        } else {
            tttPlayerTurn = true;
        }
        $("#ttt-yn-container").css("display", "none");
        $("#ttt-game-title").css("display", "flex");
        $("#ttt-option").css("visibility", "initial");
    });
    
    //玩家下棋
    $("#ttt-board > span > div").click(function() {
        if ($("#ttt-yn-container").css("display") === "block") {
            $("#ttt-yn-container").css("display", "none");
            $("#ttt-game-title").css("display", "flex");
            $("#ttt-option").css("visibility", "initial");
        }
        var index = $("#ttt-board > span > div").index($(this));
        var x = Math.floor(index / tttBoard[0].length);
        var y = index % tttBoard[0].length;
        if (tttBoard[x][y] === "" && tttPlayerTurn && !gameEnd) {
            tttBoard[x][y] = "p";
            history.push({"turn": "p", "where": JSON.stringify([x,y])});
            repaintBoard();
            gameEnd = isGameEnd([x,y]);
            if (!gameEnd) {
                tttPlayerTurn = false;
                placeOneChess();
            } else {
                $("#ttt-taunt").html((winner=="t" ? "Tie game.": "You won. ") + "Well played.");
                $("#ttt-taunt").css("display", "block");
                if (winner == "p") {
                    var curScore = parseInt($("#ttt-pscore").html());
                    $("#ttt-pscore").html(curScore + 1);
                }
            }
        }
    });
    // 重新开始 
    $("#rt-btn").click(function() {
        tttBoard = [["","",""],["","",""],["","",""]];
        $("#ttt-board > span > div").html("");
        tttPlayerTurn = true;
        playerChess = "X";
        computerChess = "O";
        gameEnd = false;
        history = [];
        winner = "t";
        $("#ttt-game-title").css("display", "none");
        $("#ttt-yn-container").css("display", "block");
        $("#ttt-option").css("visibility", "hidden");
        $("#ttt-taunt").css("display", "none");
    });
    //判断游戏是否结束
    function isGameEnd(lastMove) {
        if (history.length == tttBoard.length * tttBoard[0].length) {
            winner = "t";
            return true;
        }
        var x = lastMove[0];
        var y = lastMove[1];
        var lastChess = tttBoard[x][y];
        var rowFinished = true;
        for (var i = 0; i < tttBoard[x].length;i++) {
            if (tttBoard[x][i] !== lastChess) {
                rowFinished = false;
                break;
            }
        }
        if (rowFinished) {
            winner = history[history.length - 1]["turn"];
            return true;
        }
        
        var colFinished = true;
        for (var i = 0; i < tttBoard.length;i++) {
            if (tttBoard[i][y] !== lastChess) {
                colFinished = false;
                break;
            }
        }
        if (colFinished) {
            winner = history[history.length - 1]["turn"];
            return true;
        }
        
        
        var noCorners = ['[0,1],[1,0],[1,2][2,1]'];
        if (noCorners.includes(JSON.stringify([x,y]))) {
            return false;
        }
        var fwdSlash = true;
        var bwdSlash = true;
        if ( x == y ) {
            for (var i = 0; i < tttBoard.length;i++) {
                if (tttBoard[i][i] !== lastChess) {
                    fwdSlash = false;
                    break;
                }
            }
            if (fwdSlash) {
                winner = history[history.length - 1]["turn"];
                return true;
            }
        }
        
        if (x + y == tttBoard.length - 1) {
            for (var i = 0; i < tttBoard.length;i++) {
                if (tttBoard[i][tttBoard.length - 1 - i] !== lastChess) {
                    bwdSlash = false;
                    break;
                }
            }
            if (bwdSlash) { 
                winner = history[history.length - 1]["turn"];
                return true;
            }
        }
        return false;
    };
    function repaintBoard() {
        var cells = $("#ttt-board > span > div");
        for(var i = 0; i < tttBoard.length;i++) {
            for (var j = 0; j < tttBoard[i].length;j++) {
                var index = i * tttBoard[i].length + j;
                var cell = $(cells[index]);
                if (tttBoard[i][j] === "p" && cell.html() === "") {
                    cell.html("<div class='" + playerChess + "'></div>");
                } else if (tttBoard[i][j] === "c" && cell.html() === "" ) {
                    cell.html("<div class='" + computerChess+"'></div>");
                }
            }
        }
    }
    //电脑下棋
    function placeOneChess() {
        var empties = getLineInfo();
        //empties格式：[[空格坐标],[空格坐标],..., 玩家棋子数，电脑棋子数]
        // 不考虑没有空格子的
        empties = empties.filter(item => item.length > 2);
        empties.sort((item1, item2) => {
            var score1 = 0;
            var score2 = 0;
            
            //电脑棋子为2
            if (item1[item1.length - 1] == 2) {
                score1 += 1000;
            // 玩家棋子为2
            } else if (item1[item1.length - 2] == 2) {
                score1 += 100;
            } else {
                var hasEmptyCorner = false;
                var corners = ['[0,0]', '[0,2]', '[2,0]', '[2,2]'];
                for (var i = 0; i < item1.length - 2;i++) {
                    if (corners.includes(JSON.stringify(item1[i]))) {
                        hasEmptyCorner = true;
                        break;
                    }
                }
                //如果有空角
                if (hasEmptyCorner) {
                    //且至少有两个空格
                    if (item1.length >= 4) {
                        score1 += 50;
                    //只有一个空格
                    } else {
                        score1 += 5;
                    }
                //没有空角
                } else {
                    //至少有两个空格
                    if (item1.length >= 4) {
                        score1 += 25;
                    //只有一个空格
                    } else {
                        score1 += 2;
                    }
                }
            }
            
            if (item2[item2.length - 1] == 2) {
                score2 += 1000;
            } else if (item2[item2.length - 2] == 2) {
                score2 += 100;
            } else {
                var hasEmptyCorner = false;
                var corners = ['[0,0]', '[0,2]', '[2,0]', '[2,2]'];
                for (var i = 0; i < item2.length - 2;i++) {
                    if (corners.includes(JSON.stringify(item2[i]))) {
                        hasEmptyCorner = true;
                        break;
                    }
                }
                if (hasEmptyCorner) {
                    if (item2.length >= 4) {
                        score2 += 50;
                    } else {
                        score2 += 5;
                    }
                } else {
                    if (item2.length >= 4) {
                        score2 += 25;
                    } else {
                        score2 += 2;
                    }
                }
            }
            if (score1 > score2) {
                return -1;
            }
            if (score2 > score1) {
                return 1;
            }
            return 0;
        });

        var cell = null;
        var corners = ['[0,0]','[0,2]','[2,0]','[2,2]'];
        //尽可能选一个空角
        
        var chessCount = history.length;
        //电脑后手，第二个子儿必走中间
        if (chessCount == 1 && tttBoard[1][1] === "") {
            cell = [1,1];
        //电脑后手，第四个子儿
        } else if (chessCount == 3 && ((tttBoard[0][0] === "p" && tttBoard[2][2] === "p") || 
                                        (tttBoard[0][2] === "p" && tttBoard[2][0] === "p")) ) {
            cell = [1,0];
        } else {
        
            if (corners.includes( JSON.stringify(empties[0][0]))) {
                cell = empties[0][0]
            } else if (corners.includes( JSON.stringify(empties[0][empties[0].length - 3]) )) {
                cell = empties[0][empties[0].length - 3];
            }
            if (cell == null) {
                cell = empties[0][0];
            }
        }
        tttBoard[cell[0]][cell[1]] = "c";
        history.push({"turn": "c", "where": JSON.stringify(cell)});
        repaintBoard();
        gameEnd = isGameEnd(cell);
        if (!gameEnd) {
            tttPlayerTurn = true;
        } else {
            $("#ttt-taunt").html((winner=="t" ? "Tie game.": "I won. ") + "Well played.");
            $("#ttt-taunt").css("display", "block");
            if (winner == "c") {
                var curScore = parseInt($("#ttt-cscore").html());
                $("#ttt-cscore").html(curScore + 1);
            }
        }
    };
    function getLineInfo() {
        var empties = [];
        for(var i = 0; i < tttBoard.length;i++) {
            var rowEmpties = [];
            var rowPChessCount = 0;
            var colEmpties = [];
            var colPChessCount = 0;
            // row 0, col 0, row 1, col 1, row2, col 2
            for (var j = 0; j < tttBoard[i].length;j++) {
                // horizontal
                if (tttBoard[i][j] === "") {
                    rowEmpties.push([i,j]);
                } else if (tttBoard[i][j] === "p") {
                    rowPChessCount++;
                }
                // vertical
                if (tttBoard[j][i] === "") {
                    colEmpties.push([j,i]);
                } else if (tttBoard[j][i] === "p") {
                    colPChessCount++;
                }
            }
            var reSize = rowEmpties.length;
            rowEmpties.push(rowPChessCount);
            rowEmpties.push(tttBoard.length - reSize - rowPChessCount);

            var ceSize = colEmpties.length;
            colEmpties.push(colPChessCount);
            colEmpties.push(tttBoard.length - ceSize - colPChessCount);

            empties.push(rowEmpties);
            empties.push(colEmpties);
        }
        // diagnol '\' and '/'
        var frwdDiagEmpties = [];
        var frwdPChessCount = 0;
        var backDiagEmpties = [];
        var backPChessCount = 0;
        for (var i = 0; i < tttBoard.length;i++) {
            if (tttBoard[i][i] === "") {
                frwdDiagEmpties.push([i, i]);
            } else if (tttBoard[i][i] === "p") {
                frwdPChessCount++;
            }
            
            if (tttBoard[i][tttBoard.length - 1 - i] === "") {
                backDiagEmpties.push([i, tttBoard.length - 1 - i]);
            } else if (tttBoard[i][tttBoard.length - 1 - i] === "p") {
                backPChessCount++;
            }
        }
        var fwSize = frwdDiagEmpties.length;
        frwdDiagEmpties.push(frwdPChessCount);
        frwdDiagEmpties.push(tttBoard.length - fwSize - frwdPChessCount);

        var bkSize = backDiagEmpties.length;
        backDiagEmpties.push(backPChessCount);
        backDiagEmpties.push(tttBoard.length - bkSize - backPChessCount);
        
        empties.push(frwdDiagEmpties);
        empties.push(backDiagEmpties);
        return empties;
    };
    
}

