/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/upload/route";
exports.ids = ["app/api/upload/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.jsx&appDir=C%3A%5CUsers%5CDD%5COneDrive%5CProgramming%5Cai-rag-frontend%5Cai-rag-demo%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDD%5COneDrive%5CProgramming%5Cai-rag-frontend%5Cai-rag-demo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.jsx&appDir=C%3A%5CUsers%5CDD%5COneDrive%5CProgramming%5Cai-rag-frontend%5Cai-rag-demo%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDD%5COneDrive%5CProgramming%5Cai-rag-frontend%5Cai-rag-demo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_DD_OneDrive_Programming_ai_rag_frontend_ai_rag_demo_src_app_api_upload_route_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/upload/route.jsx */ \"(rsc)/./src/app/api/upload/route.jsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/upload/route\",\n        pathname: \"/api/upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/upload/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\DD\\\\OneDrive\\\\Programming\\\\ai-rag-frontend\\\\ai-rag-demo\\\\src\\\\app\\\\api\\\\upload\\\\route.jsx\",\n    nextConfigOutput,\n    userland: C_Users_DD_OneDrive_Programming_ai_rag_frontend_ai_rag_demo_src_app_api_upload_route_jsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlLmpzeCZhcHBEaXI9QyUzQSU1Q1VzZXJzJTVDREQlNUNPbmVEcml2ZSU1Q1Byb2dyYW1taW5nJTVDYWktcmFnLWZyb250ZW5kJTVDYWktcmFnLWRlbW8lNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0REJTVDT25lRHJpdmUlNUNQcm9ncmFtbWluZyU1Q2FpLXJhZy1mcm9udGVuZCU1Q2FpLXJhZy1kZW1vJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNvRDtBQUNqSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcRERcXFxcT25lRHJpdmVcXFxcUHJvZ3JhbW1pbmdcXFxcYWktcmFnLWZyb250ZW5kXFxcXGFpLXJhZy1kZW1vXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVwbG9hZFxcXFxyb3V0ZS5qc3hcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VwbG9hZC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VwbG9hZFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXBsb2FkL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcRERcXFxcT25lRHJpdmVcXFxcUHJvZ3JhbW1pbmdcXFxcYWktcmFnLWZyb250ZW5kXFxcXGFpLXJhZy1kZW1vXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVwbG9hZFxcXFxyb3V0ZS5qc3hcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.jsx&appDir=C%3A%5CUsers%5CDD%5COneDrive%5CProgramming%5Cai-rag-frontend%5Cai-rag-demo%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDD%5COneDrive%5CProgramming%5Cai-rag-frontend%5Cai-rag-demo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/upload/route.jsx":
/*!**************************************!*\
  !*** ./src/app/api/upload/route.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(request) {\n    try {\n        // Get the file data from the request\n        const formData = await request.formData();\n        const file = formData.get(\"file\");\n        if (!file) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No file provided\"\n            }, {\n                status: 400\n            });\n        }\n        // Get presigned URL\n        const presignedResponse = await fetch(`/api/files/presigned-url?filename=${encodeURIComponent(file.name)}&type=${file.type}`);\n        if (!presignedResponse.ok) {\n            throw new Error(\"Failed to get upload URL\");\n        }\n        const { url, key } = await presignedResponse.json();\n        // Upload to S3\n        const s3Upload = await fetch(url, {\n            method: \"PUT\",\n            body: file,\n            headers: {\n                \"Content-Type\": file.type\n            }\n        });\n        if (!s3Upload.ok) {\n            throw new Error(\"S3 upload failed\");\n        }\n        // Complete upload\n        await fetch(`/api/files/complete-upload?key=${encodeURIComponent(key)}`);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true,\n            key\n        });\n    } catch (error) {\n        console.error(\"Upload error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91cGxvYWQvcm91dGUuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRXBDLGVBQWVDLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLHFDQUFxQztRQUNyQyxNQUFNQyxXQUFXLE1BQU1ELFFBQVFDLFFBQVE7UUFDdkMsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRyxDQUFDO1FBRTFCLElBQUksQ0FBQ0QsTUFBTTtZQUNULE9BQU9KLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBbUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hFO1FBRUEsb0JBQW9CO1FBQ3BCLE1BQU1DLG9CQUFvQixNQUFNQyxNQUM5QixDQUFDLGtDQUFrQyxFQUFFQyxtQkFBbUJQLEtBQUtRLElBQUksRUFBRSxNQUFNLEVBQUVSLEtBQUtTLElBQUksRUFBRTtRQUd4RixJQUFJLENBQUNKLGtCQUFrQkssRUFBRSxFQUFFO1lBQ3pCLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUVBLE1BQU0sRUFBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsR0FBRyxNQUFNUixrQkFBa0JILElBQUk7UUFFakQsZUFBZTtRQUNmLE1BQU1ZLFdBQVcsTUFBTVIsTUFBTU0sS0FBSztZQUNoQ0csUUFBUTtZQUNSQyxNQUFNaEI7WUFDTmlCLFNBQVM7Z0JBQ1AsZ0JBQWdCakIsS0FBS1MsSUFBSTtZQUMzQjtRQUNGO1FBRUEsSUFBSSxDQUFDSyxTQUFTSixFQUFFLEVBQUU7WUFDaEIsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBRUEsa0JBQWtCO1FBQ2xCLE1BQU1MLE1BQU0sQ0FBQywrQkFBK0IsRUFBRUMsbUJBQW1CTSxNQUFNO1FBRXZFLE9BQU9qQixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVnQixTQUFTO1lBQU1MO1FBQUk7SUFDaEQsRUFBRSxPQUFPVixPQUFPO1FBQ2RnQixRQUFRaEIsS0FBSyxDQUFDLGlCQUFpQkE7UUFDL0IsT0FBT1AscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFQyxPQUFPQSxNQUFNaUIsT0FBTztRQUFDLEdBQUc7WUFBRWhCLFFBQVE7UUFBSTtJQUNuRTtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEREXFxPbmVEcml2ZVxcUHJvZ3JhbW1pbmdcXGFpLXJhZy1mcm9udGVuZFxcYWktcmFnLWRlbW9cXHNyY1xcYXBwXFxhcGlcXHVwbG9hZFxccm91dGUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBHZXQgdGhlIGZpbGUgZGF0YSBmcm9tIHRoZSByZXF1ZXN0XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoXCJmaWxlXCIpO1xyXG5cclxuICAgIGlmICghZmlsZSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJObyBmaWxlIHByb3ZpZGVkXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZXQgcHJlc2lnbmVkIFVSTFxyXG4gICAgY29uc3QgcHJlc2lnbmVkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYC9hcGkvZmlsZXMvcHJlc2lnbmVkLXVybD9maWxlbmFtZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWxlLm5hbWUpfSZ0eXBlPSR7ZmlsZS50eXBlfWAsXHJcbiAgICApO1xyXG5cclxuICAgIGlmICghcHJlc2lnbmVkUmVzcG9uc2Uub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCB1cGxvYWQgVVJMXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgdXJsLCBrZXkgfSA9IGF3YWl0IHByZXNpZ25lZFJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAvLyBVcGxvYWQgdG8gUzNcclxuICAgIGNvbnN0IHMzVXBsb2FkID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgYm9keTogZmlsZSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IGZpbGUudHlwZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghczNVcGxvYWQub2spIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUzMgdXBsb2FkIGZhaWxlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb21wbGV0ZSB1cGxvYWRcclxuICAgIGF3YWl0IGZldGNoKGAvYXBpL2ZpbGVzL2NvbXBsZXRlLXVwbG9hZD9rZXk9JHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX1gKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBrZXkgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsImZvcm1EYXRhIiwiZmlsZSIsImdldCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInByZXNpZ25lZFJlc3BvbnNlIiwiZmV0Y2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJuYW1lIiwidHlwZSIsIm9rIiwiRXJyb3IiLCJ1cmwiLCJrZXkiLCJzM1VwbG9hZCIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwic3VjY2VzcyIsImNvbnNvbGUiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/upload/route.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.jsx&appDir=C%3A%5CUsers%5CDD%5COneDrive%5CProgramming%5Cai-rag-frontend%5Cai-rag-demo%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDD%5COneDrive%5CProgramming%5Cai-rag-frontend%5Cai-rag-demo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();