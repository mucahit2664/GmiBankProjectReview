package com.gmibank.pages;

import com.gmibank.utilities.ConfigurationReader;
import com.gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
CommonPageElements commonPageElements=new CommonPageElements();
    public LoginPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(xpath = "//*[@name='username']")
    public WebElement userName;

    @FindBy(xpath = "//*[@name='password']")
    public WebElement newPassword;

    @FindBy(linkText = "Cancel")
    public WebElement cancelButton;

    @FindBy(xpath = "//*[@type='submit']")
    public WebElement singInLogin;


    public void loginExecution() {

       commonPageElements.menuIcon .click();
        commonPageElements.homePageSignIn.click();
        userName.sendKeys(ConfigurationReader.getProperty("employee_username"));
        newPassword.sendKeys(ConfigurationReader.getProperty("employee_password"));
        singInLogin.click();

    }
}
