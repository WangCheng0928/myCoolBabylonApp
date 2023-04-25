/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["index"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("const canvas = document.getElementById('renderCanvas'); // Get the canvas element\r\nconst engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine\r\nconst createScene = () => {\r\n  const scene =  new BABYLON.Scene(engine);\r\n  // BABYLON.SceneLoader.ImportMeshAsync(\"\", \"https://assets.babylonjs.com/meshes/\", \"box.babylon\");\r\n  const box = BABYLON.MeshBuilder.CreateBox(\"box\", {});\r\n  box.position.y = 0.5;\r\n  const ground = BABYLON.MeshBuilder.CreateGround('ground', {width: 10, height: 10});\r\n  const bounce = new BABYLON.Sound(\"bounce\", \"sounds/bounce.wav\", scene);\r\n  setInterval(() => bounce.play(), 3000);\r\n  const camera = new BABYLON.ArcRotateCamera(\"camera\", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));\r\n  camera.attachControl(canvas, true);\r\n  const light = new BABYLON.HemisphericLight(\"light\", new BABYLON.Vector3(1, 1, 0));\r\n  return scene;\r\n}\r\n// Add your code here matching the playground format\r\nconst scene = createScene(); //Call the createScene function\r\n// Register a render loop to repeatedly render the scene\r\nengine.runRenderLoop(function () {\r\n  scene.render();\r\n});\r\n// Watch for browser/canvas resize events\r\nwindow.addEventListener('resize', function () {\r\n  engine.resize();\r\n});\n\n//# sourceURL=webpack://demo/./index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./index.js"));
/******/ }
]);