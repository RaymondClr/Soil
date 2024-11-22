import * as _ from "../soil-ts/soil";

function foo() {
    alert("Yoooooo!!!");
}

_.tree.parse({
    style: { margins: 5, alignChildren: ["fill", "fill"] },
    param: ["palette", "", undefined, { resizeable: true }],
    group1: {
        style: { margins: 0, spacing: 0, orientation: "column", alignChildren: ["fill", "fill"] },
        param: ["mainGroup1", undefined, undefined],
        edittext1: {
            style: { preferredSize: [180, 230] },
            param: ["console", undefined, "console", { multiline: true, scrolling: true }],
        },
    },
    group2: {
        style: { orientation: "column", alignChildren: ["fill", "fill"], alignment: ["fill", "bottom"] },
        param: ["paramGroup1", undefined, undefined],
        group1: {
            style: { orientation: "row", alignment: ["fill", "bottom"] },
            param: ["dropdownlistGroup"],
            statictext1: [undefined, [0, 0, 30, 25], "方向"],
            dropdownlist1: {
                style: { alignment: ["fill", ""], selection: 3 }, //定义下拉列表的默认选项
                param: ["direction", [0, 0, 170, 25], ["+x", "-x", "+y", "-y"]],
            },
        },
        group2: {
            style: { spacing: 5, orientation: "row", alignChildren: ["fill", "fill"], alignment: ["fill", "bottom"] },
            param: ["settingGroup"],
            group1: {
                style: { orientation: "column", alignment: ["left", "bottom"] },
                param: ["mainGroup"],
                statictext1: ["time", [0, 0, 30, 25], "时间"],
                statictext2: ["transition", [0, 0, 30, 25], "过渡"],
                statictext3: ["distance", [0, 0, 30, 25], "距离"],
            },
            group2: {
                style: { orientation: "column", alignChildren: ["fill", "fill"] },
                param: ["mainGroup"],
                slider1: ["time", [0, 0, 140, 25], 1, 0, 3],
                slider2: ["transition", [0, 0, 140, 25], 1, 0, 3],
                slider3: ["distance", [0, 0, 140, 25], 1, 0, 3],
            },
            group3: {
                style: { orientation: "column", alignment: ["right", "bottom"] },
                param: ["mainGroup"],
                edittext1: ["time", [0, 0, 45, 25], "10"],
                edittext2: ["transition", [0, 0, 45, 25], "10"],
                edittext3: ["distance", [0, 0, 45, 25], "10"],
            },
        },
    },
    button1: {
        style: { onClick: foo }, //添加事件侦听
        param: ["button", undefined, "添加"],
    },
});
