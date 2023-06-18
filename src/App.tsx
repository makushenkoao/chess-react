import React, {useEffect, useState} from 'react';
import {BoardComponent} from "./components/BoardComponent";
import {Board} from "./components/models/Board";
import {Player} from "./components/models/Player";
import {Colors} from "./components/models/Colors";
import {LostFigures} from "./components/LostFigures";
import Timer from "./components/Timer/Timer";
import {createTheme, ThemeProvider, Typography} from "@mui/material";
import {ThemeMode} from "./components/ThemeMode";
import {blue, orange, red} from "@mui/material/colors";
import {King} from "./components/models/figures/King";

const App = () => {
    const [board, setBoard] = useState(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
    const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
    const handleClick = () => setIsActiveDarkMode(prevState => !prevState);

    let theme = createTheme({
        palette: {
            mode: isActiveDarkMode ? 'dark' : 'light',
            background: {
                default: "#000",
            }
        },
    });

    console.log(theme)


    useEffect(() => {
        restart()
        setCurrentPlayer(whitePlayer)
    }, [])

    const restart = () => {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures()
        setBoard(newBoard);
    }

    const swapPlayer = () => {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }

    return (
        <ThemeProvider theme={theme}>
            <Typography
                component='span'
                className='app'>
                <Typography
                    component='span'
                >
                    <Timer
                        restart={restart}
                        currentPlayer={currentPlayer}
                        handleClick={handleClick}
                        isActiveDarkMode={isActiveDarkMode}
                    />
                    <Typography
                        component='span'
                        className='lost-block'
                    >
                        <LostFigures
                            title='Black figures'
                            figures={board.lostBlackFigures}
                        />
                        <LostFigures
                            title='White figures'
                            figures={board.lostWhiteFigures}
                        />
                    </Typography>
                </Typography>
                <BoardComponent
                    board={board}
                    setBoard={setBoard}
                    currentPlayer={currentPlayer}
                    swapPlayer={swapPlayer}
                />
            </Typography>
        </ThemeProvider>
    );
};

export default App;

// сделать шах и мат
// стилизовать игру