import config from "../config"

export function GetSurveyDaysWithLocations(callback) {
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/SurveyDays?filter[include]=selectedSites&filter[include]=location", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    });
};


export function Locations(locationId, callback) {
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/Locations/"+locationId, function (result) {
        var data = result.locationName;
        callback(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    });
};

export function GetSurveyDay(SurveyDayID, callback) { 
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"surveyDays/"+SurveyDayID+"?filter[include]=location", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    });
};

//GET /SurveyDays/{id}/selectedSites
export function GetSurveyDaySelectedSites(SurveyDayID, callback) { 
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/surveyDays/"+SurveyDayID+"/selectedSites", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    });
};


///SurveyDays/{id}/observations
export function GetSurveyDayObservations(SurveyDayID, callback) { 
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/surveyDays/"+SurveyDayID+"/observations", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    });
};


export function GetObservation(observationId, callback) { 
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/Observations/"+observationId+"?filter[include]=volunteers", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    });
};

export function GetObservationBySiteId(SurveyDayID, SiteId, callback) { 
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"surveyDays/"+SurveyDayID+"?filter[where][SiteId]="+SiteId+"filter[include]=selectedSites&filter[include]=location&filter[include]=observations", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    });
};

export function AddSurveyDay(data, callback) {
    $.ajax({
        url         : config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/surveyDays",
        data        : JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        type: 'POST'
    }).done(function(data){
        callback(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
        alert("Failed");
    });
};

export function AddObservation(data, callback) {
    $.ajax({
        url         : config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/Observations",
        data        : JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        type: 'POST'
    }).done(function(data){
        callback(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
        alert("Failed");
    });
};

export function AddSelectedSite(data, callback) {
    $.ajax({
        url         : config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/SelectedSites/SaveSelectedSites",
        data        : JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        type: 'POST'
    }).done(function(data){
        callback(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
        alert("Failed");
    });
};

export function GetLocations(callback) {
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/locations?filter[include]=sites", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    })
}

export function GetSitesByLocation(locationId, callback) {
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/locations/"+locationId+"/sites", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    })
}

export function GetVolunteers(observationId, callback) {
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/volunteers?filter[where][observationId]="+observationId, function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    })
}

export function AddVolunteer(data, callback) {
    $.ajax({
        url         : config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/volunteers",
        data        : JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        type: 'POST'
    }).done(function(data){
        callback(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
        alert("Failed");
    });
};

export function GetReefWatchVolunteers(callback) {
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/reefWatchVolunteers", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    })
}

export function AddReefWatchVolunteer(data, callback) {
    $.ajax({
        url         : config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/reefWatchVolunteers",
        data        : JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        type: 'POST'
    }).done(function(data){
        callback(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
        alert("Failed");
    });
};

export function SaveObservation(observationId, data, callback) {
    $.ajax({
        url         : config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/Observations/"+observationId,
        data        : JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        type: 'PUT'
    }).done(function(data){
        callback(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
        alert("Failed");
    });
};

export function GetPointInterceptObservation(observationId, callback) {
    var rndNumber = Math.floor((Math.random() * 1000)).toString();
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/Observations/"+observationId+"/PointIntercepts?forceRefresh="+rndNumber, function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    })
}

export function GetPointIntercepts(callback) {
    $.get(config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/PointIntercepts", function (result) {
        callback(result);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
    })
}

export function AddPointIntercept(data, callback) {
    $.ajax({
        url         : config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/PointIntercepts",
        data        : JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        type: 'POST'
    }).done(function(data){
        callback(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
        alert("Failed");
    });
};


export function SavePointIntercept(data, callback) {
    $.ajax({
        url         : config.api.hostname + ":"+config.api.port+"/"+config.api.prefix+"/PointIntercepts",
        data        : JSON.stringify(data),
        dataType: "json",
        contentType: "application/json",
        type: 'PUT'
    }).done(function(data){
        callback(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) { 
        alert("Failed");
    });
};
