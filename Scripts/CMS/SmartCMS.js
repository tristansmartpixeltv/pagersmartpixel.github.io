

var smartCms = function(ProjectID,Host,ProjectEnvironment,Version,DataTableNames){
    this.ProjectID = ProjectID;
    this.Host = Host;
    this.ProjectEnvironment = 2;
    this.Version = Version;
    this.DatatableNames = DataTableNames;

    this.path =  "JSON/";

   
}






// Load cache and store it within the user's local storage
smartCms.prototype.LoadLocalCache = function(onComplete) {

    var index = 0;

    var Cache = [this.DatatableNames.length];
    
    var self = this;
    
    var OnLocalDataTableCached = (function(currentDatatable, message) {
        
        Cache[index] = currentDatatable;

        index++;

        if (index > self.DatatableNames.length - 1) {
            console.log("Get all datatables completed");
            onComplete(Cache);
        } else {
            self.CacheLocalDatatable(this.DatatableNames[index],this.DatatableNames[index] + ".json", OnLocalDataTableCached);
        }


    });
                               
    this.CacheLocalDatatable(this.DatatableNames[index],this.DatatableNames[index] + ".json", OnLocalDataTableCached);

   

};

//Will cache a datatable from a JSON file into user's local storage
smartCms.prototype.CacheLocalDatatable = function(tableName,jsonFileName, onComplete) {
  
    var self = this;

    $.ajax({
        type: "GET",
        url: this.path + tableName +".json",
        contentType: "application/json; charset=utf-8",
        dataType: "json",    
        success: function(data) {

            console.log(data);
            SmartCMSDataSerializer.Deserialize(data,function(table){     
                      self.SetDataTableInCache(table);
                          console.log(table);
                  onComplete(table,data.Name);
        
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    });  


    /*$.getJSON(, function(json) {
   
        /*if (self.IsTableCached(json)) {
              // Already in cache, return cached table
              jsonTable = SmartCMSDataProvider.GetDataTableWithParameters(tableName);
              console.log("Cached already, returns cached table");
              onComplete(json, tableName);
         }
        else
             SmartCMSDataSerializer.Deserialize(json,function(table){     
                  self.SetDataTableInCache(table);
              onComplete(table,json.Name);
         });




         SmartCMSDataSerializer.Deserialize(encodeURI(json),function(table){     
                  self.SetDataTableInCache(table);
              onComplete(table,json.Name);
    
        });

     });
    */
 
    
};



// Load cache and store it within the user's local storage
smartCms.prototype.LoadCache = function(onComplete) {

    var index = 0;

    var Cache = [this.DatatableNames.length];
    
    var self = this;
    
    var OnDataTableCached = (function(currentDatatable, message) {
        
       
        Cache[index] = currentDatatable;

        index++;

        if (index > self.DatatableNames.length - 1) {
            console.log("Get all datatables completed");
            onComplete(Cache);
        } else {
            self.CacheDataTable(self.DatatableNames[index], OnDataTableCached);
        }


    });
                               
    this.CacheDataTable(this.DatatableNames[index], OnDataTableCached);

   

};









//Will cache a datatable from the CMS into user's local storage
smartCms.prototype.CacheDataTable = function(tableName, onComplete) {

    var jsonTable;
    
    var self = this;

    var urlRequest = this.Host + "/Restful/FindDataTable?projectID=" + this.ProjectID + "&tableName=" + encodeURI(tableName) + "&environment=" + this.ProjectEnvironment.toString() + "&locale=" + "all";

    console.log(urlRequest);
    
   
    // Load and deserialize new cached from CMS
    $.ajax({
        url: urlRequest,
        type: 'GET',
        async: true,
        success: function(data) {
        
        // Parse data, is it a error message or actual json table
        jsonTable = JSON.parse(JSON.stringify(data));    
        
        if (self.IsTableCached(jsonTable)) {

        // Already in cache, return cached table
        jsonTable = SmartCMSDataProvider.GetDataTableWithParameters(tableName);
        console.log("Cached already, returns cached table");
        onComplete(jsonTable, tableName);
        return;
        }
    
        // Ajax Request failed
        if(jsonTable.Result == "Error")
        {
            console.error(data.Message);
            onComplete(null, data.Message);
            return;
        }
            Debug.log(jsonTable);
            
            SmartCMSDataSerializer.Deserialize(jsonTable,function(table){     
                  self.SetDataTableInCache(table);
                  onComplete(table,jsonTable.Name);
                });
        },
        
        error: function(message) {
        console.log(message);
        },


    });


};



smartCms.prototype.SetDataTableInCache = function(table) {

    if (this.EnableCaching) {

        if (this.IsTableCached(table)) {
            console.log(table.Name + " is already cached in database");
            return;
        }


        if (table !== null) {
            var jsonData = JSON.stringify(table);
            localStorage.setItem(table.Name, jsonData );
        } else {
            console.log("Caching and storing " + table.Name + " failed");
        }

    } else {
        console.log("Caching is disabled, cannot save table");
    }


};





smartCms.prototype.IsTableCached = function(table) {

    var timeStamp = SmartCMSDataProvider.GetDataTableTimeStamp(table.Name);
    
    if( timeStamp !== null && timeStamp !== "")
    {
        return table.TimeStamp == String(timeStamp);
    }
    
    return false;
    
};

smartCms.prototype.DeleteCache = function() {
    localStorage.Clear();

};