var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


function firefox(website, page, waittime='1000'){

	var driver = new webdriver.Builder().withCapabilities({'marionette': true}).forBrowser('firefox').build()
	console.log("Login into website ---> ", website + page)
	driver.get(website + page)
        driver.sleep(waittime);
        return driver
}

function loadHomePage(driver, website){

        driver.get(website);
        return driver
}

function login(driver, username, password, waittime='5000'){


	console.log("Login with user and password")
	driver.findElement(By.name('username')).sendKeys(username).then(null, handleError);
	driver.findElement(By.name('password')).sendKeys(password , webdriver.Key.ENTER).then(null, handleError);
	driver.sleep(waittime);
	return driver
}

function search_class(driver, searchClass, waittime='5000'){

	driver.findElement(By.className(searchClass)).click().then(null, handleError);
	driver.sleep(waittime);
        return driver
}

function search_xpath(driver, xpath, waittime='1000'){

        driver.findElement(By.xpath(xpath)).click().then(null, handleError);
        driver.sleep(waittime);
        return driver

}

function search_class_sendkey(driver, searchClass, input='testing', waittime='4000'){

	driver.findElement(By.className(searchClass)).sendKeys(input, webdriver.Key.ENTER).then(null, handleError);
	driver.sleep(waittime);
        return driver

}

function quit(driver, waittime='1000'){

	driver.sleep(waittime);
	driver.quit();

}

function search_name(){

//  Can be used later. Additional hook for future purpose

}

function safari(){
/** Hook for supporting safari browser and can be extended when needed
*/
}

function internetExplorer(){
/** Hook for supporting IE browser and can be extended when needed
*/
}

function chrome(){
/** Hook for supporting safari browser and can be extended when needed
*/
}


function handleError(err) {
	//NoSuchElementError: no such element - there is no selector information however
	console.log('\nError with findElement', err.stack);
	throw(err);
}


function complete_workflow() {
	driver = firefox('https://app.tray.io/', 'login');
	driverobj = login(driver, 'traynewuser@gmail.com', 'traytraytray');
	class1 = search_class(driverobj, 'Page-navigation-button___2nr8D6');
	navigate1 = search_class_sendkey(class1, 'input___OxQ4Cz');
	navigate1 = loadHomePage(navigate1, 'https://app.tray.io/');
	navigate2 = search_class(navigate1, 'Options-menu-icon___1iiZar');
	navigate1 =  search_xpath(navigate2, '/html/body/div[1]/div/div/div/div/div/div[2]/div/div/div/div[4]/div[3]/section/div[2]/ul/li[2]/div/div/ul/li[5]/a');
	navigate0 =  search_xpath(navigate1, '//*[@title="Yes"]');
	quit(navigate0);
}


complete_workflow();

