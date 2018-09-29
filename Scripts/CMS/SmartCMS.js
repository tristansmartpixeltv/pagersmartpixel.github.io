

var smartCms = function(ProjectID,Host,ProjectEnvironment,Version,DataTableNames){
    this.ProjectID = ProjectID;
    this.Host = Host;
    this.ProjectEnvironment = 2;
    this.Version = Version;
    this.DatatableNames = DataTableNames;

    this.path =  "https://tristansmartpixeltv.github.io/pagersmartpixel.github.io/JSON/";

   
}


var data = "{'Rows':[{'Id':'9dbf8fb4-619a-401f-9564-b3b7e18d32fc','FixedId':'bc0d95e0-6a61-4540-a0db-a2af20e73aa4','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_DISCOVERUS','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'Discover Us !','Values':[],'LocalizedValues':{'en':{'Value':'LET'S GET IN TOUCH !'},'fr':{'Value':'SAUTEZ LE PAS !'}},'IsLocalized':true}],'TimeStamp':1538163994},{'Id':'fac62e41-b35f-4149-a0a4-7b32433558d9','FixedId':'174a4468-57ed-4eb7-a8f5-2ece12736343','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_ABOUTUS','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'ABOUT US'},'fr':{'Value':'À PROPOS DE NOUS'}},'IsLocalized':true}],'TimeStamp':1537972358},{'Id':'7def2a52-adfe-4ce7-b4cf-9507f1a9e5cf','FixedId':'8c7e2105-1825-4f6a-a802-ca0bff3c94c2','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACTUS','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'CONTACT US'},'fr':{'Value':'CONTACTEZ-NOUS'}},'IsLocalized':true}],'TimeStamp':1537925660},{'Id':'4ccb04ac-db44-41dd-a44a-3b3be7980ca2','FixedId':'3f65c737-3966-4899-b567-6c32745009b5','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONNECTWITHUS','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'CONNECT WITH US'},'fr':{'Value':'REJOIGNEZ-NOUS '}},'IsLocalized':true}],'TimeStamp':1538163933},{'Id':'dd84ca2d-f343-4b87-9bd3-efca498dc96a','FixedId':'b764422c-a5f5-49f0-bf6b-c7bbf09b3fd7','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_COPYRIGHT','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'Copyright 2009-2018 SmartPixel.tv'},'fr':{'Value':'Tous droits réservés 2009-2018 SmartPixel.tv'}},'IsLocalized':true}],'TimeStamp':1537925772},{'Id':'623cd94c-0a51-4166-a908-b9d7498127f5','FixedId':'07b00d8a-c48a-4bbb-97ff-66a9b85a3be7','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_ABOUTUS_VIDEODESCRIPTION','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'SMARTPIXEL.TV DESIGNS DIGITAL  & MULTI-TOUCH SOLUTIONS THROUGH 3D IMMERSIVE EXPERIENCES. OUR SOLUTIONS CAN BE DISPLAYED ONTO SHOP WINDOWS, INTERACTIVE TABLES, TOUCH VIDEOWALLS AND LARGE FORMAT TOUCHSCREENS. TRY IT OUT TO BOOST YOUR SALES AND WOW YOUR AUDIENCE!'},'fr':{'Value':'SMARTPIXEL.TV CONÇOIT DES SOLUTIONS NUMÉRIQUES ET MULTI-TOUCH AU SEIN D’UNIVERS 3D. VÉRITABLES EXPÉRIENCES IMMERSIVES, NOS CRÉATIONS SE DÉCLINENT SUR DIFFÉRENTS SUPPORTS TELS QUE DES VITRINES OU DES TABLES INTERACTIVES, DES MURS VIDÉO NUMÉRIQUES, OU DES ÉCRANS TACTILES GRANDS FORMATS. BOOSTEZ VOS VENTES, SIDÉREZ VOS CLIENTS ET RAFLEZ TOUS VOS PROSPECTS ! '}},'IsLocalized':true}],'TimeStamp':1538164086},{'Id':'b4dba945-3a5b-4fc2-94e2-341a2bbb18b2','FixedId':'d9dd388d-e709-43f3-a7be-52fe60ab95dc','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_ABOUTUS_VIEWALLVIDEOS','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'&nbsp; // VIEW ALL VIDEOS'},'fr':{'Value':'&nbsp; //  ACCÉDEZ AUX VIDÉOS'}},'IsLocalized':true}],'TimeStamp':1538163809},{'Id':'fc6bc751-5cac-4e7e-9ad4-1d5466aa40b5','FixedId':'fdbed0d4-b0d3-4283-90e4-dc9e73c8ec34','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_MONTREAL_TITLE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'MONTREAL'},'fr':{'Value':'MONTRÉAL'}},'IsLocalized':true}],'TimeStamp':1537925957},{'Id':'89f80e7a-70c1-4ce8-ab88-6030319f957b','FixedId':'cf6ad986-dd72-4745-bdbe-741200e56621','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_MONTREAL_ADRESS','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'355 Sainte-Catherine Ouest, bureau 411'},'fr':{'Value':'355 Sainte-Catherine Ouest, bureau 411'}},'IsLocalized':true}],'TimeStamp':1538148091},{'Id':'566574fb-a487-40b4-8edb-918963191d21','FixedId':'8dcfd0eb-6379-44dd-88df-cb63e0f25b78','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_MONTREAL_CITY','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'Montreal,QC'},'fr':{'Value':'Montréal,QC'}},'IsLocalized':true}],'TimeStamp':1537926030},{'Id':'06347865-e355-4bb1-84b6-af7c659d1f87','FixedId':'5e90a9bf-b965-4bca-b9a1-67132fa5fa76','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_MONTREAL_ZIPCODE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'H3B 1A5'},'fr':{'Value':'H3B 1A5'}},'IsLocalized':true}],'TimeStamp':1538148108},{'Id':'53932ab8-a0d8-4a5a-afc8-590e6149f1b7','FixedId':'76301475-69f6-4ff2-a094-580264ce66d3','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_PARIS_TITLE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'FRANCE'},'fr':{'Value':'FRANCE'}},'IsLocalized':true}],'TimeStamp':1538158344},{'Id':'774e9dd1-0365-40c3-8ed6-005f529d97bc','FixedId':'f7b932e6-9ad7-4db1-9314-9d1580754f89','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_PARIS_ADRESS','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'1C, avenue Christian Doppler'},'fr':{'Value':'1C, avenue Christian Doppler'}},'IsLocalized':true}],'TimeStamp':1538148048},{'Id':'5fb518be-3720-46d0-9cc8-cb74c358cd00','FixedId':'bfa9370e-8ccc-4036-8de2-92b333b0b92c','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_PARIS_CITY','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'Serris,France'},'fr':{'Value':'Serris,France'}},'IsLocalized':true}],'TimeStamp':1538148637},{'Id':'e8d2f672-22b5-4f95-87aa-73dbf9eac647','FixedId':'9d66edf5-5965-4a45-9d90-16b8440c240e','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_PARIS_ZIPCODE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'77700 '},'fr':{'Value':'77700'}},'IsLocalized':true}],'TimeStamp':1538148659},{'Id':'93f77844-1787-456b-8658-1c19d399d919','FixedId':'9bec7d08-0057-4576-a3fd-a93a0c224d42','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_COLOMBIA_TITLE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'COLOMBIA'},'fr':{'Value':'COLOMBIE'}},'IsLocalized':true}],'TimeStamp':1537926246},{'Id':'fa6f17b4-742b-4549-a28f-560a7745bad0','FixedId':'7458e731-3182-44d9-9d57-78e037a49298','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_COLOMBIA_ADRESS','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'19 Oficina 22 Edificio Emprendu'},'fr':{'Value':'19 Oficina 22 Edificio Emprendu'}},'IsLocalized':true}],'TimeStamp':1537926337},{'Id':'5d6f8a4e-1cfb-4782-8055-8f7afafe826c','FixedId':'896fa4fd-50fa-49ee-a11d-ff15cc6d5ba4','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_COLOMBIA_CITY','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'Bogotá,Colombia'},'fr':{'Value':'Bogotá,Colombia'}},'IsLocalized':true}],'TimeStamp':1537926382},{'Id':'9133b582-d60e-433b-abc7-3afc7a0a063e','FixedId':'c70ce234-b235-4857-97df-56f4a6ad4188','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_COLOMBIA_ZIPCODE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'Cra 13 # 83'},'fr':{'Value':'Cra 13 # 83'}},'IsLocalized':true}],'TimeStamp':1537926438},{'Id':'9c334789-24d9-4faf-bd00-accb37a2a76f','FixedId':'27ba20a6-9584-4900-8b6f-43acf24c92fe','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_TORONTO_TITLE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'TORONTO'},'fr':{'Value':'TORONTO'}},'IsLocalized':true}],'TimeStamp':1537926485},{'Id':'ba420adf-1e6c-4dfe-8380-bdd7bec310d5','FixedId':'3b28b535-af72-428f-8f0d-65448496d31d','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_TORONTO_ADRESS','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'180 John St, Suite 401'},'fr':{'Value':'180 John St, Suite 401'}},'IsLocalized':true}],'TimeStamp':1538148148},{'Id':'431f79c8-7a48-4788-84d7-65a8797c4c9b','FixedId':'59dbf9ce-bdf3-4fe2-8c52-528f5a343df9','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_TORONTO_ZIPCODE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'M5T 1X5'},'fr':{'Value':'M5T 1X5'}},'IsLocalized':true}],'TimeStamp':1538148170},{'Id':'1678ea2c-4733-41ef-9060-cba5bfc632e2','FixedId':'5f8b3afe-3a02-4a12-b0d5-02cab18c3d97','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT_TORONTO_CITY','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'Toronto,Canada'},'fr':{'Value':'Toronto,Canada'}},'IsLocalized':true}],'TimeStamp':1537926648},{'Id':'fd490d2e-34ec-435b-bbf2-67f31cbe9158','FixedId':'5adc43b9-71e9-4d6b-92bc-0e5874141060','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_ABOUT','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'ABOUT'},'fr':{'Value':'À PROPOS DE'}},'IsLocalized':true}],'TimeStamp':1537972507},{'Id':'e908cb45-703a-4432-821c-dc66e8ce61eb','FixedId':'722c06e6-cd3c-425e-a4d9-70a7690d2257','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_US','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'US'},'fr':{'Value':'NOUS'}},'IsLocalized':true}],'TimeStamp':1537972514},{'Id':'9c0e3a67-89fc-4fe9-9de4-885e4c1cdc7c','FixedId':'d4ec2b5c-91ed-48e8-a588-4f3c0b133085','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_SPLASHSCREEN_SLOGAN','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'TOUCH, DIVE AND EXPLORE !'},'fr':{'Value':'TOUCH, DIVE AND EXPLORE !'}},'IsLocalized':true}],'TimeStamp':1538164108},{'Id':'788fbdad-d59e-4715-a068-d084d9151507','FixedId':'f6b37482-86f7-450b-b801-c5cccd8d7450','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_LANGUAGE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'FR'},'fr':{'Value':'EN'}},'IsLocalized':true}],'TimeStamp':1538010504},{'Id':'c96fab00-fc57-4516-863a-f6c44b002871','FixedId':'f080cf13-197e-41fb-b6dd-9ab4778863e2','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_VISITOLDWEBSITE','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'VISIT OLD WEBSITE'},'fr':{'Value':'VISITEZ NOTRE ANCIEN SITE'}},'IsLocalized':true}],'TimeStamp':1538163747},{'Id':'6e6dfbce-bc3e-4183-ab0e-a7cec12abcc9','FixedId':'86e29726-ea5e-478f-834d-7de938f44e16','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CURRENTLY_IN_DEVELOPEMENT','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'This site is currently in development, to know more info...'},'fr':{'Value':'Ce site est actuellement en cours de création. Pour en savoir davantage…'}},'IsLocalized':true}],'TimeStamp':1538163709},{'Id':'fb6c4a3e-7e2b-4cc7-84cf-08435aaaccc3','FixedId':'09868c08-b39f-4ad3-8fd4-dba585b9385e','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_CONTACT','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'CONTACT'},'fr':{'Value':'CONTACTEZ'}},'IsLocalized':true}],'TimeStamp':1538072957},{'Id':'9ddef1fc-3264-4b4b-bc54-7a5d0cdebc69','FixedId':'fd6cd6e1-6f9a-4684-b501-4c7fa8760315','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_HEADER_CONTACT','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'CONTACT US'},'fr':{'Value':'CONTACT'}},'IsLocalized':true}],'TimeStamp':1538164235},{'Id':'825ae3c7-75b3-480a-ad32-fa4aebdee929','FixedId':'0c4ebfc8-6a28-43a7-8f79-7d623264f458','Cells':[{'Name':'Key','Type':'string','Value':'INTRO_HEADER_ABOUT','Values':[],'IsLocalized':false},{'Name':'Text','Type':'string','Value':'','Values':[],'LocalizedValues':{'en':{'Value':'ABOUT US'},'fr':{'Value':'À PROPOS'}},'IsLocalized':true}],'TimeStamp':1538164307}],'TimeStamp':1538164307,'Id':'EMDt3txLk0Wce00NXkO9nn','Name':'LocalizedTexts','DefaultLocale':'default','IncludedLocales':'en|fr'}";



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

   /* $.ajax({
        type: "GET",
        url: this.path + tableName +".json",
        contentType: "application/json; charset=utf-8",
        dataType: "json",    
        success: function(data) {

            console.log(data);
           
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    }); */ 

    var json = JSON.parse(data);
     SmartCMSDataSerializer.Deserialize(json,function(table){     
                          self.SetDataTableInCache(table);
                              console.log(table);
                      onComplete(table,data.Name);
            
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