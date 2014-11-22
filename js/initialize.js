function setUpEnv(){
	var Assets = [
		'css/global.css',
		'css/main.css',
		'views/about.html',
		'views/contact.html',
		'views/profile.html',
		'views/resume.html',
		'views/skills.html',
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/bootstrap/dist/js/bootstrap.min.js',
		'bower_components/angular/angular.js',
		'bower_components/angular-route/angular-route.js',
		'bower_components/angular-animate/angular-animate.js',
		'scripts/app.js',
		'scripts/main.js',
		'scripts/profile.js'
	];

	loadAssets(Assets);
	window.location='main';
}

function loadAssets(assets){

	var len = assets.length;
	if(len===0)
		return;
	for(var i=0;i<len;i++){
		loadAsset(assets[i],i+1,len);
	}

}

function loadAsset(url,index,total){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		updateStatusBar(index,total);
	}
	xhr.open('GET',url,false);
	xhr.send();
}

function updateStatusBar(i,t){
	var loadBar = document.getElementById('loadStatus');
	var loadPercent = parseInt((i/t)*100);
	loadBar.style.width=loadPercent+'%';
	console.log('Width:'+loadPercent);
}

