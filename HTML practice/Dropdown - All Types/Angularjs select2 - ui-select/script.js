var app = angular.module("myApp", ['ui.select', 'ngSanitize']);
app.controller("myController", function ($scope) {
    $scope.model = {};
    $scope.CountryList = [
        { ID: 91, Name: "India", Code: "IND", SiteID: 8, IsActive: true, Flag: "./Flags/Flag_of_India-256x171.png" },
        { ID: 1, Name: "United States", Code: "USA", SiteID: 15, IsActive: true, Flag: "./Flags/Flag_of_United_States-256x135.png" },
        { ID: 44, Name: "United Kingdom", Code: "UK", SiteID: 22, IsActive: false, Flag: "./Flags/Flag_of_United_Kingdom-256x128.png" },
        { ID: 86, Name: "China", Code: "CHN", SiteID: 5, IsActive: true, Flag: "./Flags/Flag_of_Peoples_Republic_of_China-256x171.png" },
        { ID: 81, Name: "Japan", Code: "JPN", SiteID: 12, IsActive: false, Flag: "./Flags/Flag_of_Japan-256x171.png" },
        { ID: 33, Name: "France", Code: "FRA", SiteID: 18, IsActive: true, Flag: "./Flags/Flag_of_France-256x171.png" },
        { ID: 49, Name: "Germany", Code: "GER", SiteID: 25, IsActive: false, Flag: "./Flags/Flag_of_Germany-256x153.png" },
        { ID: 7, Name: "Russia", Code: "RUS", SiteID: 30, IsActive: true, Flag: "./Flags/Flag_of_Russia-256x171.png" },
        { ID: 39, Name: "Italy", Code: "ITA", SiteID: 40, IsActive: false, Flag: "./Flags/Flag_of_Italy-256x171.png" },
        { ID: 61, Name: "Australia", Code: "AUS", SiteID: 50, IsActive: true, Flag: "./Flags/Flag_of_Australia-256x128.png" }
    ];
    $scope.countryChanged = function(countryID) {
        $scope.model.countryID = countryID;         //again setting to double ensure 
        //$scope.model.countryID = 0;               //set ID to 0 : TO reset a dropdown
    }

    $scope.refreshCountry = function(text) { // on typing it fires
        let str = text;     //input text that we can send at backend for refreshing the options
    }

});
