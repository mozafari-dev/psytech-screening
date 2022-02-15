import React, { Component } from 'react';

import { Box, Stack, Grid, Slider } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import bgImage from "../../assets/img/bg.svg";
import bgContainer from "../../assets/img/test-bg.png"


const palayeshMarks = [
    {
        value: 0,
        label: 'هرگز',
    },
    {
        value: 1,
        label: 'کمی',
    },
    {
        value: 2,
        label: 'تا حدی',
    },
    {
        value: 3,
        label: 'زیاد',
    },
    {
        value: 4,
        label: 'همیشه',
    },
];

const styles = {
    imageContainer: {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        minHeight: '10vh',
        backgroundSize: '200px 200px',
        fontFamily: 'PersianWeb'
    },
    bgContainer: {
        backgroundImage: `url(${bgContainer})`
    }
};


const theme = createTheme({
    direction: "rtl" // Both here and <body dir="rtl">
});

// Create rtl cache
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
});


class QuestionBox extends Component {

    handleSliderChange = e => {
        console.log(e.target.value);
    }

    render() {
        const { question, onClickNext, onClickPrevious, activeNext, activePrevious, user } = this.props;
        return (
            <>
                {user &&
                    <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                            <div
                                className='container'
                                dir="rtl"
                                style={styles.bgContainer}
                            >
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    {question.map((q, idx) => (
                                        <React.Fragment key={idx}>
                                            <Grid
                                                container
                                                spacing={0}
                                                direction="column"
                                                alignItems="center"
                                                justifyContent="center"
                                                style={styles.imageContainer}
                                                sx={{
                                                    borderRadius: 5,
                                                    bgcolor: 'transparent',
                                                    alignItems: 'center',
                                                    padding: 20
                                                }}>
                                                <p className="lead persian-font" key={idx}>{q.title}</p>

                                                <Box
                                                    sx={{
                                                        borderRadius: 5,
                                                        bgcolor: '#2A3143',
                                                        alignItems: 'center',
                                                        '& .MuiSlider-markLabel': {
                                                            color: '#C4C4C4',
                                                            fontFamily: 'IranSans',
                                                            fontSize: 18
                                                        },
                                                        '& .MuiSlider-thumb': {
                                                            color: '#E55871'
                                                        },
                                                        '& .MuiSlider-track': {
                                                            color: '#D96E81'
                                                        },
                                                        '& .MuiSlider-rail': {
                                                            color: '#000000'
                                                        },
                                                        '& .MuiSlider-mark': {
                                                            position: "absolute",
                                                            background: "#5F636B"
                                                        },

                                                    }}>
                                                    <Slider
                                                        sx={{
                                                            width: '400px',
                                                            color: "#D96E81",
                                                            margin: 10
                                                        }}
                                                        aria-label="Opinion"
                                                        defaultValue={0}
                                                        step={1}
                                                        marks={palayeshMarks}
                                                        min={0}
                                                        max={4}
                                                        onChange={this.handleSliderChange}
                                                        key={idx}
                                                    />
                                                </Box>
                                                <nav aria-label="Page navigation persian-font">
                                                    <ul className="pagination justify-content-center">
                                                        <li className="page-item" key='previous1'>
                                                            <button
                                                                key="previous"
                                                                type="button"
                                                                className={activePrevious ? "persian-font btn btn-outline-danger m-4" : "persian-font btn btn-outline-secondary m-4 disabled"}
                                                                onClick={onClickPrevious}
                                                                style={{
                                                                    backgroundColor: 'white',
                                                                    borderRadius: "25% 25%"
                                                                }}
                                                            >
                                                                قبلی
                                                            </button>

                                                        </li>
                                                        <li className="page-item" key='next1'>
                                                            <button
                                                                key="next"
                                                                type="button"
                                                                className={activeNext ? "persian-font btn btn btn-outline-danger m-4" : "persian-font btn btn-outline-secondary m-4 disabled"}
                                                                onClick={onClickNext}
                                                                style={{
                                                                    backgroundColor: 'white',
                                                                    borderRadius: "25% 25%"
                                                                }}
                                                            >
                                                                بعدی
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </Grid>
                                        </React.Fragment>
                                    ))}
                                </Stack>
                            </div>
                        </ThemeProvider>
                    </CacheProvider >}
                {!user && <h4>قبل از تست زنی شما باید در سایت ثبت نام کنید</h4>}
            </>
        );
    }
}

export default QuestionBox;