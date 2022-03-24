// // 引入 css
import "./style/style1.less";
import "./style/style2.css";
import _ from "lodash";
const print = (info) => {
  console.log(info);
};
print("hello webpacdssdk 5");

console.log("window.ENV", ENV);

import { sum } from "./math";
const sumRes = sum(10, 20);
console.log("sumRes", sumRes);

function insertImgElem(imgFile) {
  const img = new Image();
  img.src = imgFile;
  document.body.appendChild(img);
}
import imgFile1 from "./img/1.png";
insertImgElem(imgFile1);
import imgFile2 from "./img/2.jpeg";
insertImgElem(imgFile2);
console.log(_.each);
