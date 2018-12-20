var LocalizedHTMLElement = function(htmlElement, localizedText)
{
    var self = this;
    
    this.htmlElement = htmlElement;
    this.localizedText = localizedText;
    
    if(CurrentLanguage === null)
        this.changeLanguage('default');
    else
        this.changeLanguage(CurrentLanguage);
    
    
    /*this.app.on(LocalizationManager.Events.OnChangeLanguage,function(language){
        self.changeLanguage(language);
    });*/
    
    
};

LocalizedHTMLElement.prototype.changeLanguage= function(language)
{
    if(this.localizedText !== undefined && this.localizedText !== null)
    {
        if( this.htmlElement !== undefined &&  this.htmlElement !== null)
        {
            var localizedValue = this.localizedText.GetLocalizedValue(language);
            
            if(localizedValue !== null)
                this.setContent(localizedValue);
        }
   
    }
};

LocalizedHTMLElement.prototype.setContent= function(value)
{
    
     if(this.localizedText.isUpperCase)
        value = value.toUpperCase(); 
    
    
    this.htmlElement.innerHTML = value;
    
};

LocalizedHTMLElement.prototype.setUpperCase= function(upperCase)
{
     this.localizedText.setUpperCase(upperCase);
     this.changeLanguage(CurrentLanguage);
    
};



// swap method called for script hot-reloading
// inherit your script state here
// LocalizedHtmlelement.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/