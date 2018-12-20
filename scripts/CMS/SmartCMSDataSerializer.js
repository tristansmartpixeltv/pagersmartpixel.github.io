var SmartCMSDataSerializer = {};



// Will return the CMS JSON Data to a Model matching the datatable
SmartCMSDataSerializer.Deserialize = function(table,onComplete) {
    
    //Update propreties for cache loading progress
    
    if(table.Rows.length <= 0)
    {
        onComplete(table);
        return;
    }
       
    
    
 
  
    //Cached Properties to build Rows and Cells of table
    var deserializedTable = [table.Rows.length];
    var LanguagesKeys =[];
    var reference;
    var cellProperty;
    var fileList;
    
    //Javascript object prototype that will build model
    
    var model = {};
    
    this.totalNbCells = table.Rows.length * table.Rows[0].Cells.length;
    this.currentNbCells = 0;
    

    for (var i = 0; i < table.Rows.length; i++) {

        model = {};
       
        model["FixedId"] = table.Rows[i].FixedId;
        model["Id"] = table.Rows[i].Id;

        for (var j = 0; j < table.Rows[i].Cells.length; j++) {

            // Take Cell proprety variable and analyze its content, set value in consequence

            cellProperty = table.Rows[i].Cells[j];
            
            switch(cellProperty.Type)
            {
                case "reference":
                
                model[cellProperty.Name] = {};
                
                if(cellProperty.Value !== null && cellProperty.Value !== undefined)
                {
                    reference = cellProperty.Value.split('|');
                    model[cellProperty.Name]['referenceID']= reference[0]; 
                    model[cellProperty.Name]['referenceName'] = reference[1];
                }
                else
                {
                   model[cellProperty.Name]['referenceID']= null; 
                   model[cellProperty.Name]['referenceName'] = null;
                   console.log(cellProperty.Name + " as a table reference is null ");
                }
                
                break;
                case "file":
                     if(!cellProperty.IsLocalized)
                        model[cellProperty.Name] = this.SerializeFile(cellProperty,false)[0];
                    else
                        model[cellProperty.Name] = this.SerializeFile(cellProperty,true);  

                 break;
            
                case "files":
                      model[cellProperty.Name] = this.SerializeFiles(cellProperty);
                break;
                case "string":
                    
                     model[cellProperty.Name] = {};
                   
                    // Take different value if localized or not
                    if(!cellProperty.IsLocalized)
                    {
                        if(cellProperty.Value !== null)
                            model[cellProperty.Name]["default"] =  cellProperty.Value;  
                        else
                            model[cellProperty.Name]["default"] = "Undefined";
                    }
                       
                    else
                    {
                        
                        LanguagesKeys = Object.keys(cellProperty.LocalizedValues);
                        
                        for(var v = 0; v < LanguagesKeys.length;v++)
                        {
                            model[cellProperty.Name][LanguagesKeys[v]] = cellProperty.LocalizedValues[LanguagesKeys[v]].Value;  
                        }
                        
                     
                    }
                    break;
            }

            
             // Update progress event
             this.currentNbCells++;
              
            var progress = (this.currentNbCells / this.totalNbCells) * 100;
            
            
        }
        
  
        deserializedTable[i] = model;
        
    }

    table["Rows"] = deserializedTable;
    
    onComplete(table);

};



SmartCMSDataSerializer.GetFileExtension = function(fileLabel)
{
    if(fileLabel.lastIndexOf('www.youtube.com/embed/') > -1)
    {
        return "youtube"; 
    }
    
    
    return fileLabel.substr(fileLabel.lastIndexOf('.')+1);
    
};


SmartCMSDataSerializer.SerializeFile = function(cellProperty,isLocalized)
{
    var LocalizedValues = [];
    
     var LocalizedFile = {};
     var LocalizedLabel = {};
     var LocalizedURL = {};
     var LocalizedExtension = {}; 
    
     
    if(!isLocalized)
    {
        LocalizedLabel["default"] =  cellProperty.Label;
        LocalizedURL["default"] = cellProperty.URL;
        LocalizedExtension["default"] =  this.GetFileExtension(cellProperty.Label);
        
        LocalizedFile["Label"] = LocalizedLabel;
        LocalizedFile["Url"] = LocalizedURL;
        LocalizedFile["Extension"] = LocalizedExtension;
        
        LocalizedValues.push(LocalizedFile);
        return LocalizedValues;     
    }
    else
    {
        LocalizedValues = [];
        
        var LanguagesKeys = Object.keys(cellProperty.LocalizedValues);
        
         
        for(var v = 0; v < LanguagesKeys.length;v++)
        {
                LocalizedLabel[LanguagesKeys[v]] = cellProperty.LocalizedValues[LanguagesKeys[v]].Label;
                LocalizedURL[LanguagesKeys[v]] = cellProperty.LocalizedValues[LanguagesKeys[v]].URL;
                LocalizedExtension[LanguagesKeys[v]] =  this.GetFileExtension(LocalizedLabel[LanguagesKeys[v]]);
        }
            LocalizedFile["Label"] = LocalizedLabel;
            LocalizedFile["Url"] = LocalizedURL;
            LocalizedFile["Extension"] = LocalizedExtension;
            LocalizedValues.push(LocalizedFile);         
        
         
        return LocalizedValues;
    }


};

SmartCMSDataSerializer.SerializeFiles = function(cellProperty)
{
    var LocalizedValues;
    
    var LocalizedFile = {};
    var LocalizedLabel = {};
    var LocalizedURL = {};
    var LocalizedExtension = {};  
    
 
    
    
     if(!cellProperty.IsLocalized)
     {
         LocalizedValues = [];

        for(var h = 0; h < cellProperty.Values.length; h++)
        { 
             LocalizedFile = {};
             LocalizedLabel = {};
             LocalizedURL = {};
             LocalizedExtension = {};
            
             LocalizedLabel["default"] =  cellProperty.Values[h].Label;
             LocalizedURL["default"] = cellProperty.Values[h].URL;
             LocalizedExtension["default"] =  this.GetFileExtension(cellProperty.Values[h].Label);
            
             LocalizedFile["Label"] = LocalizedLabel;
             LocalizedFile["Url"] = LocalizedURL;
             LocalizedFile["Extension"] = LocalizedExtension;
             LocalizedValues.push(LocalizedFile);  
        }
         
         return LocalizedValues;
         
       }
    
     else
        {
            LocalizedValues = [];
            var LanguagesKeys = Object.keys(cellProperty.LocalizedValues);
            
            for(var u = 0; u < cellProperty.LocalizedValues[LanguagesKeys[0]].Values.length;u++)
            {
             LocalizedFile = {};
             LocalizedLabel = {};
             LocalizedURL = {};
             LocalizedExtension = {};   
            
            for(var v = 0; v < LanguagesKeys.length;v++)
            {
                var currentValue = cellProperty.LocalizedValues[LanguagesKeys[v]].Values[v];
                LocalizedLabel[LanguagesKeys[v]] = currentValue.Label;
                LocalizedURL[LanguagesKeys[v]] = currentValue.URL;
                LocalizedExtension[LanguagesKeys[v]] =  this.GetFileExtension(currentValue.Label);
            }
            LocalizedFile["Label"] = LocalizedLabel;
            LocalizedFile["Url"] = LocalizedURL;
            LocalizedFile["extension"] = LocalizedExtension;
            LocalizedValues.push(LocalizedFile);        
            
            }
            
             

        }
    
    
    return LocalizedValues;

    
};