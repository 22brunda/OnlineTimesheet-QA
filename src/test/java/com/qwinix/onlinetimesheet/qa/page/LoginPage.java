package com.qwinix.onlinetimesheet.qa.page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qwinix.onlinetimesheet.qa.BaseDriver;
import com.qwinix.onlinetimesheet.qa.steps.CommonUtil;

public class LoginPage {
	
	CommonUtil objCOM = new CommonUtil();
	
	
	public LoginPage() {
		PageFactory.initElements(BaseDriver.driver, this);
	}
	
	@FindBy(name = "username")
	public WebElement userName;
	
	@FindBy(name = "password")
	public WebElement password;
	
	@FindBy(name = "login")
	public WebElement login;
	
	public void openUrl() {
		
	}
	
	public void login() {
		
	}
	
	
	
}
