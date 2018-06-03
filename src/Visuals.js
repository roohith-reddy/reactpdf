import React, { Component } from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import { ResponsiveLine } from '@nivo/line';

let data = [
    {
        "country": "AD",
        "hot dog": 40,
        "hot dogColor": "hsl(221, 70%, 50%)",
        "burger": 27,
        "burgerColor": "hsl(77, 70%, 50%)",
        "sandwich": 70,
        "sandwichColor": "hsl(192, 70%, 50%)",
        "kebab": 33,
        "kebabColor": "hsl(210, 70%, 50%)",
        "fries": 30,
        "friesColor": "hsl(143, 70%, 50%)",
        "donut": 66,
        "donutColor": "hsl(173, 70%, 50%)",
        "junk": 7,
        "junkColor": "hsl(338, 70%, 50%)",
        "sushi": 1,
        "sushiColor": "hsl(44, 70%, 50%)",
        "ramen": 71,
        "ramenColor": "hsl(312, 70%, 50%)",
        "curry": 96,
        "curryColor": "hsl(304, 70%, 50%)",
        "udon": 26,
        "udonColor": "hsl(166, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 61,
        "hot dogColor": "hsl(340, 70%, 50%)",
        "burger": 69,
        "burgerColor": "hsl(176, 70%, 50%)",
        "sandwich": 74,
        "sandwichColor": "hsl(18, 70%, 50%)",
        "kebab": 58,
        "kebabColor": "hsl(142, 70%, 50%)",
        "fries": 87,
        "friesColor": "hsl(149, 70%, 50%)",
        "donut": 82,
        "donutColor": "hsl(122, 70%, 50%)",
        "junk": 46,
        "junkColor": "hsl(297, 70%, 50%)",
        "sushi": 76,
        "sushiColor": "hsl(12, 70%, 50%)",
        "ramen": 100,
        "ramenColor": "hsl(83, 70%, 50%)",
        "curry": 62,
        "curryColor": "hsl(134, 70%, 50%)",
        "udon": 81,
        "udonColor": "hsl(42, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 77,
        "hot dogColor": "hsl(31, 70%, 50%)",
        "burger": 25,
        "burgerColor": "hsl(163, 70%, 50%)",
        "sandwich": 98,
        "sandwichColor": "hsl(72, 70%, 50%)",
        "kebab": 21,
        "kebabColor": "hsl(292, 70%, 50%)",
        "fries": 45,
        "friesColor": "hsl(237, 70%, 50%)",
        "donut": 64,
        "donutColor": "hsl(252, 70%, 50%)",
        "junk": 70,
        "junkColor": "hsl(306, 70%, 50%)",
        "sushi": 40,
        "sushiColor": "hsl(79, 70%, 50%)",
        "ramen": 91,
        "ramenColor": "hsl(259, 70%, 50%)",
        "curry": 80,
        "curryColor": "hsl(195, 70%, 50%)",
        "udon": 84,
        "udonColor": "hsl(136, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 62,
        "hot dogColor": "hsl(285, 70%, 50%)",
        "burger": 46,
        "burgerColor": "hsl(75, 70%, 50%)",
        "sandwich": 10,
        "sandwichColor": "hsl(0, 70%, 50%)",
        "kebab": 58,
        "kebabColor": "hsl(330, 70%, 50%)",
        "fries": 43,
        "friesColor": "hsl(294, 70%, 50%)",
        "donut": 23,
        "donutColor": "hsl(176, 70%, 50%)",
        "junk": 54,
        "junkColor": "hsl(216, 70%, 50%)",
        "sushi": 28,
        "sushiColor": "hsl(119, 70%, 50%)",
        "ramen": 6,
        "ramenColor": "hsl(350, 70%, 50%)",
        "curry": 91,
        "curryColor": "hsl(149, 70%, 50%)",
        "udon": 92,
        "udonColor": "hsl(304, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 68,
        "hot dogColor": "hsl(76, 70%, 50%)",
        "burger": 75,
        "burgerColor": "hsl(43, 70%, 50%)",
        "sandwich": 66,
        "sandwichColor": "hsl(131, 70%, 50%)",
        "kebab": 72,
        "kebabColor": "hsl(19, 70%, 50%)",
        "fries": 16,
        "friesColor": "hsl(331, 70%, 50%)",
        "donut": 72,
        "donutColor": "hsl(116, 70%, 50%)",
        "junk": 59,
        "junkColor": "hsl(50, 70%, 50%)",
        "sushi": 16,
        "sushiColor": "hsl(3, 70%, 50%)",
        "ramen": 65,
        "ramenColor": "hsl(306, 70%, 50%)",
        "curry": 41,
        "curryColor": "hsl(100, 70%, 50%)",
        "udon": 46,
        "udonColor": "hsl(62, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 15,
        "hot dogColor": "hsl(86, 70%, 50%)",
        "burger": 9,
        "burgerColor": "hsl(336, 70%, 50%)",
        "sandwich": 41,
        "sandwichColor": "hsl(350, 70%, 50%)",
        "kebab": 85,
        "kebabColor": "hsl(296, 70%, 50%)",
        "fries": 48,
        "friesColor": "hsl(10, 70%, 50%)",
        "donut": 23,
        "donutColor": "hsl(241, 70%, 50%)",
        "junk": 32,
        "junkColor": "hsl(16, 70%, 50%)",
        "sushi": 30,
        "sushiColor": "hsl(116, 70%, 50%)",
        "ramen": 87,
        "ramenColor": "hsl(190, 70%, 50%)",
        "curry": 78,
        "curryColor": "hsl(16, 70%, 50%)",
        "udon": 68,
        "udonColor": "hsl(116, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 29,
        "hot dogColor": "hsl(319, 70%, 50%)",
        "burger": 36,
        "burgerColor": "hsl(42, 70%, 50%)",
        "sandwich": 77,
        "sandwichColor": "hsl(114, 70%, 50%)",
        "kebab": 61,
        "kebabColor": "hsl(325, 70%, 50%)",
        "fries": 58,
        "friesColor": "hsl(220, 70%, 50%)",
        "donut": 85,
        "donutColor": "hsl(253, 70%, 50%)",
        "junk": 35,
        "junkColor": "hsl(62, 70%, 50%)",
        "sushi": 4,
        "sushiColor": "hsl(98, 70%, 50%)",
        "ramen": 49,
        "ramenColor": "hsl(20, 70%, 50%)",
        "curry": 54,
        "curryColor": "hsl(331, 70%, 50%)",
        "udon": 70,
        "udonColor": "hsl(292, 70%, 50%)"
    },
    {
        "country": "AO",
        "hot dog": 43,
        "hot dogColor": "hsl(273, 70%, 50%)",
        "burger": 77,
        "burgerColor": "hsl(219, 70%, 50%)",
        "sandwich": 3,
        "sandwichColor": "hsl(8, 70%, 50%)",
        "kebab": 35,
        "kebabColor": "hsl(223, 70%, 50%)",
        "fries": 96,
        "friesColor": "hsl(254, 70%, 50%)",
        "donut": 5,
        "donutColor": "hsl(305, 70%, 50%)",
        "junk": 58,
        "junkColor": "hsl(319, 70%, 50%)",
        "sushi": 65,
        "sushiColor": "hsl(262, 70%, 50%)",
        "ramen": 18,
        "ramenColor": "hsl(305, 70%, 50%)",
        "curry": 23,
        "curryColor": "hsl(105, 70%, 50%)",
        "udon": 33,
        "udonColor": "hsl(76, 70%, 50%)"
    },
    {
        "country": "AQ",
        "hot dog": 54,
        "hot dogColor": "hsl(57, 70%, 50%)",
        "burger": 33,
        "burgerColor": "hsl(278, 70%, 50%)",
        "sandwich": 89,
        "sandwichColor": "hsl(26, 70%, 50%)",
        "kebab": 78,
        "kebabColor": "hsl(210, 70%, 50%)",
        "fries": 87,
        "friesColor": "hsl(334, 70%, 50%)",
        "donut": 55,
        "donutColor": "hsl(199, 70%, 50%)",
        "junk": 79,
        "junkColor": "hsl(296, 70%, 50%)",
        "sushi": 26,
        "sushiColor": "hsl(201, 70%, 50%)",
        "ramen": 17,
        "ramenColor": "hsl(134, 70%, 50%)",
        "curry": 1,
        "curryColor": "hsl(169, 70%, 50%)",
        "udon": 48,
        "udonColor": "hsl(151, 70%, 50%)"
    }
]

export function HeatMap(props) {
    return (
        <div style={{ height: '500px', width: '500px' }}>
            <ResponsiveHeatMap
                data={data}
                keys={[
                    "hot dog",
                    "burger",
                    "sandwich",
                    "kebab",
                    "fries",
                    "donut",
                    "junk",
                    "sushi",
                    "ramen",
                    "curry",
                    "udon"
                ]}
                indexBy="country"
                margin={{
                    "top": 100,
                    "right": 60,
                    "bottom": 60,
                    "left": 60
                }}
                forceSquare={true}
                axisTop={{
                    "orient": "top",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": -90,
                    "legend": "",
                    "legendOffset": 36
                }}
                axisLeft={{
                    "orient": "left",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "country",
                    "legendPosition": "center",
                    "legendOffset": -40
                }}
                cellOpacity={1}
                cellBorderColor="inherit:darker(0.4)"
                labelTextColor="inherit:darker(1.8)"
                defs={[
                    {
                        "id": "lines",
                        "type": "patternLines",
                        "background": "inherit",
                        "color": "rgba(0, 0, 0, 0.1)",
                        "rotation": -45,
                        "lineWidth": 4,
                        "spacing": 7
                    }
                ]}
                fill={[
                    {
                        "id": "lines"
                    }
                ]}
                animate={true}
                motionStiffness={80}
                motionDamping={9}
                hoverTarget="cell"
                cellHoverOthersOpacity={0.25}
            />
        </div>
    );
}

let lineData = [
    {
        "id": "whisky",
        "color": "hsl(112, 70%, 50%)",
        "data": [
            {
                "color": "hsl(231, 70%, 50%)",
                "x": "SZ",
                "y": 23
            },
            {
                "color": "hsl(105, 70%, 50%)",
                "x": "LV",
                "y": 22
            },
            {
                "color": "hsl(39, 70%, 50%)",
                "x": "EG",
                "y": 1
            },
            {
                "color": "hsl(275, 70%, 50%)",
                "x": "TH",
                "y": 26
            },
            {
                "color": "hsl(89, 70%, 50%)",
                "x": "MG",
                "y": 16
            },
            {
                "color": "hsl(64, 70%, 50%)",
                "x": "SD",
                "y": 38
            },
            {
                "color": "hsl(93, 70%, 50%)",
                "x": "NR",
                "y": 28
            },
            {
                "color": "hsl(261, 70%, 50%)",
                "x": "FM",
                "y": 15
            },
            {
                "color": "hsl(224, 70%, 50%)",
                "x": "TZ",
                "y": 37
            }
        ]
    },
    {
        "id": "rhum",
        "color": "hsl(338, 70%, 50%)",
        "data": [
            {
                "color": "hsl(213, 70%, 50%)",
                "x": "SZ",
                "y": 3
            },
            {
                "color": "hsl(93, 70%, 50%)",
                "x": "LV",
                "y": 51
            },
            {
                "color": "hsl(14, 70%, 50%)",
                "x": "EG",
                "y": 48
            },
            {
                "color": "hsl(46, 70%, 50%)",
                "x": "TH",
                "y": 56
            },
            {
                "color": "hsl(221, 70%, 50%)",
                "x": "MG",
                "y": 47
            },
            {
                "color": "hsl(280, 70%, 50%)",
                "x": "SD",
                "y": 26
            },
            {
                "color": "hsl(357, 70%, 50%)",
                "x": "NR",
                "y": 40
            },
            {
                "color": "hsl(214, 70%, 50%)",
                "x": "FM",
                "y": 25
            },
            {
                "color": "hsl(136, 70%, 50%)",
                "x": "TZ",
                "y": 44
            }
        ]
    },
    {
        "id": "gin",
        "color": "hsl(202, 70%, 50%)",
        "data": [
            {
                "color": "hsl(268, 70%, 50%)",
                "x": "SZ",
                "y": 15
            },
            {
                "color": "hsl(78, 70%, 50%)",
                "x": "LV",
                "y": 4
            },
            {
                "color": "hsl(73, 70%, 50%)",
                "x": "EG",
                "y": 11
            },
            {
                "color": "hsl(319, 70%, 50%)",
                "x": "TH",
                "y": 20
            },
            {
                "color": "hsl(37, 70%, 50%)",
                "x": "MG",
                "y": 55
            },
            {
                "color": "hsl(202, 70%, 50%)",
                "x": "SD",
                "y": 9
            },
            {
                "color": "hsl(109, 70%, 50%)",
                "x": "NR",
                "y": 23
            },
            {
                "color": "hsl(31, 70%, 50%)",
                "x": "FM",
                "y": 12
            },
            {
                "color": "hsl(346, 70%, 50%)",
                "x": "TZ",
                "y": 57
            }
        ]
    },
    {
        "id": "vodka",
        "color": "hsl(340, 70%, 50%)",
        "data": [
            {
                "color": "hsl(100, 70%, 50%)",
                "x": "SZ",
                "y": 45
            },
            {
                "color": "hsl(346, 70%, 50%)",
                "x": "LV",
                "y": 6
            },
            {
                "color": "hsl(99, 70%, 50%)",
                "x": "EG",
                "y": 18
            },
            {
                "color": "hsl(98, 70%, 50%)",
                "x": "TH",
                "y": 14
            },
            {
                "color": "hsl(274, 70%, 50%)",
                "x": "MG",
                "y": 36
            },
            {
                "color": "hsl(52, 70%, 50%)",
                "x": "SD",
                "y": 37
            },
            {
                "color": "hsl(122, 70%, 50%)",
                "x": "NR",
                "y": 26
            },
            {
                "color": "hsl(107, 70%, 50%)",
                "x": "FM",
                "y": 36
            },
            {
                "color": "hsl(135, 70%, 50%)",
                "x": "TZ",
                "y": 0
            }
        ]
    },
    {
        "id": "cognac",
        "color": "hsl(295, 70%, 50%)",
        "data": [
            {
                "color": "hsl(306, 70%, 50%)",
                "x": "SZ",
                "y": 47
            },
            {
                "color": "hsl(347, 70%, 50%)",
                "x": "LV",
                "y": 15
            },
            {
                "color": "hsl(337, 70%, 50%)",
                "x": "EG",
                "y": 58
            },
            {
                "color": "hsl(89, 70%, 50%)",
                "x": "TH",
                "y": 59
            },
            {
                "color": "hsl(184, 70%, 50%)",
                "x": "MG",
                "y": 19
            },
            {
                "color": "hsl(321, 70%, 50%)",
                "x": "SD",
                "y": 20
            },
            {
                "color": "hsl(81, 70%, 50%)",
                "x": "NR",
                "y": 56
            },
            {
                "color": "hsl(56, 70%, 50%)",
                "x": "FM",
                "y": 11
            },
            {
                "color": "hsl(181, 70%, 50%)",
                "x": "TZ",
                "y": 10
            }
        ]
    }
]

export function LineChart(props) {
    return (
        <div style={{ height: '500px', width: '750px' }}>
            <ResponsiveLine
                data={lineData}
                margin={{
                    "top": 50,
                    "right": 110,
                    "bottom": 50,
                    "left": 60
                }}
                minY="auto"
                stacked={true}
                axisBottom={{
                    "orient": "bottom",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "country code",
                    "legendOffset": 36,
                    "legendPosition": "center"
                }}
                axisLeft={{
                    "orient": "left",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "count",
                    "legendOffset": -40,
                    "legendPosition": "center"
                }}
                dotSize={10}
                dotColor="inherit:darker(0.3)"
                dotBorderWidth={2}
                dotBorderColor="#ffffff"
                enableDotLabel={true}
                dotLabel="y"
                dotLabelYOffset={-12}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                    {
                        "anchor": "bottom-right",
                        "direction": "column",
                        "translateX": 100,
                        "itemWidth": 80,
                        "itemHeight": 20,
                        "symbolSize": 12,
                        "symbolShape": "circle"
                    }
                ]}
            />
        </div>
    );
}