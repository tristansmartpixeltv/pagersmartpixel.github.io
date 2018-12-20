var SmartCMSDataModel = function(datatableName,datatableRow){
    this.datatableName = datatableName;
    this.isInitialized = false;
    this.initialize(datatableName,datatableRow);
    
};


SmartCMSDataModel.prototype.initialize = function(datatableName,datatableRow){
    
     if(datatableRow !== null && datatableRow !== undefined)
     {
         var keys = Object.keys(datatableRow);
         var currentRow;

         for(var i = 0; i < keys.length;i++)
         {
                currentRow = datatableRow[keys[i]];

                //Handling a table reference
                if(currentRow.hasOwnProperty('referenceID'))
                {
                  this.setDataTableReference(keys[i],currentRow);
                }
                else
                  this[keys[i]] = currentRow;     

          }
           this.isInitialized = true;
      }
    
    
    
    
    
};


SmartCMSDataModel.prototype.setContent = function(property,value){
    
    if(this.hasOwnProperty(property))
    {
       this[property] = value; 
    }
    
};

SmartCMSDataModel.prototype.hasProperty = function(property){
    return this.hasOwnProperty(property);
};

SmartCMSDataModel.prototype.setDataTableReference = function(property,datatableReference){
   var currentRow = SmartCMSDataProvider.GetDataTableRowByFixedID(datatableReference.referenceName,datatableReference.referenceID);
    
    if(currentRow !== null && currentRow !== undefined)
    {
        this[property] = currentRow;
    }
 
    
    
   
};