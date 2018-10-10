var maxScroll = window.screen.height * 2;

var MainParallaxScene = null;

var LocalizationM = null;

var CMS;




window.onload = function(){

	CMS =  new smartCms('51b026a3-ee60-4fb4-b8c5-c673ca10cd5b','https://smartcms.azurewebsites.net',2,2,new Array("LocalizedTexts"));

	CMS.LoadLocalCache(function(table,tableName){
        LocalizationM = new LocalizationManager(table[0].Rows,'Key','Text','en',new Array("fr","en","default"));
    });

	GoToSectionHome();

	MainParallaxScene = new ParallaxScene();
	
	var MainVideoHtmlElement = document.getElementById('section-about-video');
	var MainVideoSourceHtmlElement = MainVideoHtmlElement.getElementsByTagName('source')[0];
	
	console.log(MainVideoHtmlElement);
	console.log(MainVideoSourceHtmlElement);

	
	
	
	if(isUsingInternetExplorer())
	{
			var websiteContactContainer = document.getElementById("content-table");
			var websiteTitle = document.body.getElementsByClassName('section-contact-maintitle title-bold')[0];
			websiteTitle.style.top = '257vh';
			websiteContactContainer.style.top = '257vh';
	}


	
	StartScreenSaver(function(){

		if(!isUsingInternetExplorer())
		{
			if(window.screen.width > 767)
				MainParallaxScene.start();
		}

	});
};


function isUsingInternetExplorer(){



  if (/MSIE 10/i.test(navigator.userAgent)) {
      return true;
  }

  if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
      return true;
  }

  if (/Edge\/\d./i.test(navigator.userAgent)){
     return true;
  }

  return false;

}


function GoToSectionHome(){
	ScrollTo(0);
}


function GoToSectionAboutUs(){
	if(!isUsingInternetExplorer())
		ScrollTo($("#section-about").offset().top - (window.innerHeight/2) + 100);
	else
		ScrollTo($("#section-about").offset().top);
}

function GoToSectionContact(){
	if(!isUsingInternetExplorer())
		ScrollTo($(".section-contact-maintitle").offset().top - (window.innerHeight / 2));
	else
		ScrollTo($(".section-contact-maintitle").offset().top - 100);
}


function ScrollTo(topPosition){

	if(!isUsingInternetExplorer())
	{
		window.scroll({
  		top: topPosition, 
  		left: 0, 
  		behavior: 'smooth' 
		});

	}
	else
	{
		window.scrollTo(0,topPosition);
	}
}

function ChangeApplicationLanguage(){

	if(CurrentLanguage != 'en')
	{
		LocalizationM.changeLanguage('en');
	}
	else
	{
		LocalizationM.changeLanguage('fr');
	}

	
	
}





