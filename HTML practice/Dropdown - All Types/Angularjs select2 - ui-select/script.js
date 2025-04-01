var app = angular.module("myApp", ['ui.select', 'ngSanitize']);
app.controller("myController", function ($scope) {
    $scope.model = { 
        countryID: 0 
    };
    $scope.CountryList = [
        { ID: 91, Name: "India", Code: "IND", SiteID: 8, IsActive: true },
        { ID: 1, Name: "United States", Code: "USA", SiteID: 15, IsActive: true },
        { ID: 44, Name: "United Kingdom", Code: "UK", SiteID: 22, IsActive: false },
        { ID: 86, Name: "China", Code: "CHN", SiteID: 5, IsActive: true },
        { ID: 81, Name: "Japan", Code: "JPN", SiteID: 12, IsActive: false },
        { ID: 33, Name: "France", Code: "FRA", SiteID: 18, IsActive: true },
        { ID: 49, Name: "Germany", Code: "GER", SiteID: 25, IsActive: false },
        { ID: 7, Name: "Russia", Code: "RUS", SiteID: 30, IsActive: true },
        { ID: 39, Name: "Italy", Code: "ITA", SiteID: 40, IsActive: false },
        { ID: 61, Name: "Australia", Code: "AUS", SiteID: 50, IsActive: true }
    ];
    $scope.countryChanged = function(countryID) {
        $scope.model.countryID = countryID;         //again setting to double ensure 
        //$scope.model.countryID = 0;               //set ID to 0 : TO reset a dropdown
    }

    $scope.refreshCountry = function(text) { // on typing it fires
        let str = text;     //input text that we can send at backend for refreshing the options
    }
});
