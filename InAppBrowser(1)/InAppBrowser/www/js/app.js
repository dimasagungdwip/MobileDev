// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
 
.controller("ExampleController", function ($scope) {
 
$scope.openInExternalBrowser = function()
{
 // Open in external browser
 window.open('http://google.com','_system','location=no'); 
};
 
$scope.openInAppBrowser = function()
{
 // Open in app browser
 window.open('http://google.com','_blank','location=no'); 
};
 
$scope.openCordovaWebView = function()
{
 // Open cordova webview if the url is in the whitelist otherwise opens in app browser
 window.open('http://google.com','_self','location=no'); 
};
 
});
