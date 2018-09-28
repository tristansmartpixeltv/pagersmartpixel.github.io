var SmartCMSDataProvider = {};


SmartCMSDataProvider.FileData = function(label, url,extension) {
    this.Label = {"default":label};
    this.Url = {"default" :url};
    this.Extension = {"default":extension};
};


SmartCMSDataProvider.FileDataCollection = function(Files) {
    this.Files = Files;
};


SmartCMSDataProvider.GetDataTable = function(tableName) {

    var datatable = this.GetDataTableWithParameters(tableName);
    var rows = [];
    
    if(datatable !== null)
    {
        for(var i = 0; i < datatable.Rows.length;i++)
        {
            rows.push(new SmartCMSDataModel(tableName,datatable.Rows[i]));
        }
 
        return rows;
       
    }
    
    else
    return null;
};


SmartCMSDataProvider.GetDataTableColumn= function(tableName,columnName) {

    var datatable = this.GetDataTable(tableName);
    var columns = [];
    for(var i = 0; i < datatable.length; i++)
    {
      if(datatable[i][columnName] === undefined)
      {
         console.log("GetDataTableColumn failed: invalid columnName of type: " + columnName);
         break;
      }
      columns.push(datatable[i][columnName]);
    }
    return columns;
};

SmartCMSDataProvider.GetDataTableRowByFixedID= function(tableName,fixedID) {

    var datatable = this.GetDataTable(tableName);
    
    if(datatable !== null && datatable !== undefined)
    {
        for(var i = 0; i < datatable.length; i++)
        {
            if(datatable[i]["FixedId"] === fixedID)
            {
                return datatable[i];
            }
        }
        
        console.log("GetDataTableRowByFixedID failed: invalid fixedID:" + fixedID + " in datatable : " + tableName);
    
    }
    
    console.log("GetDataTableRowByFixedID failed: invalid datatable not found in cache:" + tableName);
 
    
    return null;
};





SmartCMSDataProvider.GetDataTableWithParameters = function(tableName) {

    var datatable = localStorage.getItem(tableName);
    
    var jsonData;

   try
   {
       jsonData = jQuery.parseJSON(datatable);
   }
  catch(err)
  {
        return null;
  }

    return jsonData;

};


SmartCMSDataProvider.GetDataTableTimeStamp = function(tableName) {

    var tableCached = this.GetDataTableWithParameters(tableName);
    
    if(tableCached === null)
        return "";
    else
        return String(tableCached.TimeStamp);

};




