var LocalizedText = function(key,value)
{
 
    this.key = key;
    this.value = value;
    this.isUpperCase = false;
};

LocalizedText.prototype.setKey = function(key)
{
    this.key = key;
};

LocalizedText.prototype.setValue = function(value)
{
    this.value = value;
};

LocalizedText.prototype.setUpperCase = function(uppercase)
{
    this.isUpperCase = uppercase;
};



LocalizedText.prototype.GetLocalizedValue = function(language)
{
        if(this.value.hasOwnProperty(language)){
            return this.value[language];
        }
        else if (this.value.hasOwnProperty('default')){
            return this.value.default;
        }
        else if(Object.keys(this.value) > 0)
        {
            return this.value[Object.keys(this.value)[0]];
        }
        else
        {
            return null;
        }
    
            
        
};