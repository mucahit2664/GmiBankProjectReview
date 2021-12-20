package com.gmibank.pages;

import com.gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CommonPageElements {
    public CommonPageElements() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    //-------- Home Page Elements --------

    @FindBy(id = "account-menu")
    public WebElement loginModule;

    @FindBy(linkText = "Sign in")
    public WebElement homePageSignIn;

//-------- Sign in Page Elements --------

    @FindBy(xpath = "//input[@id='username']")
    public WebElement userName;

    @FindBy(css = "input#password")
    public WebElement password;

    @FindBy(css = "button.btn.btn-primary")
    public WebElement signInButton;

    @FindBy(xpath = "//li[@id=\"account-menu\"]/a")
    public WebElement CurrentUserNameTextBox;

    @FindBy(xpath = "//button[@class='btn btn-secondary']")
    public WebElement cancelButton;

    @FindBy(xpath = "//div[@class='alert alert-danger fade show']")
    public WebElement signInErrorMessage;

    @FindBy(linkText = "Register a new account")
    public  WebElement registerANewAccountButton;

    @FindBy(xpath = "//h1[@id='register-title']/span")
    public  WebElement registrationPageTitle;

    @FindBy(xpath= "//*[@id=\"login-page\"]/div/form/div[2]/div[1]/div[2]/div[1]/div")
    public WebElement usernameInvalidFeedback;

    @FindBy(xpath = "//*[@id=\"login-page\"]/div/form/div[2]/div[1]/div[2]/div[2]/div")
    public WebElement passwordInvalidFeedback;



}
