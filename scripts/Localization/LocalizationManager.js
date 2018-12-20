var CurrentLanguage = null;

var LocalizationManager = function(Datatable,LocalizationKeyCellName,LocalizationValueCellName,DefaultLanguage,Languages){
    this.Datatable = Datatable;
    this.LocalizationKeyCellName = LocalizationKeyCellName;
    this.LocalizationValueCellName = LocalizationValueCellName;
    this.DefaultLanguage = DefaultLanguage;
    this.Languages = Languages;

    this.currentLanguage = null;

    this.Keys = {};

    this.initialize();

};






// initialize code called once per entity
LocalizationManager.prototype.initialize = function() {
    
    this.currentLanguage = "default";
    CurrentLanguage = "default";
    this.localizedDatatable = null;
    this.loadKeysFromCMS();
    this.isInitialized = true;

    this.HTMLElements = document.querySelectorAll('[' + "data-cms-localization" + ']');
    this.localizedHTMLElements = [];
    this.keyAttribute = null;


    for(var i = 0; i < this.HTMLElements.length;i++){
          this.keyAttribute =  this.HTMLElements[i].getAttribute('data-cms-localization');
          this.localizedHTMLElements.push(new LocalizedHTMLElement( this.HTMLElements[i],this.Keys[this.keyAttribute]));
    }
      
    this.changeLanguage(this.DefaultLanguage);
    


};


LocalizationManager.prototype.loadKeysFromCMS = function(){
     
    
    if(this.Datatable !== null)
    {
         var locale = new LocalizedText("","");
        
         for(var i = 0; i < this.Datatable.length; i++)
         {
           
           locale = new LocalizedText(this.Datatable[i][this.LocalizationKeyCellName].default,this.Datatable[i][this.LocalizationValueCellName]);
           
           if( !this.Keys.hasOwnProperty(locale.key))
           {
                this.Keys[locale.key] = locale; 
           }
          
         }
    
    }
    

    //this.app.fire(LocalizationManager.Events.OnInitializedFromCMS);
    
    
    
    
    
    
    
};




LocalizationManager.prototype.changeLanguage = function(language) {
    
        
        //is it a language one of the languages on the current application
        if(this.Languages.indexOf(language) >= 0)
        {
            if(this.currentLanguage != language)
            {
              this.currentLanguage = language;
               CurrentLanguage = language;


               this.localizedHTMLElements.forEach(function(element) {
                     element.changeLanguage(language);
                },this);

            }
        }
        else
        {
        console.log(language + "is not a language used in this application");
        }
        
      
};







// swap method called for script hot-reloading
// inherit your script state here
// LocalizationManager.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/