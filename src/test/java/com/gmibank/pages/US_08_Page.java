package com.gmibank.pages;

import com.gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_08_Page {
    public US_08_Page(){

        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(id="account-menu")
    public WebElement humanFigure;

    @FindBy(id="login-item")
    public WebElement signIn;

    @FindBy(name="username")
    public WebElement userName;

    @FindBy(name="password")
    public WebElement password;

    @FindBy(xpath="//button[@class='btn btn-primary']")
    public WebElement signIn2;

    @FindBy(id = "account-menu")
    public WebElement humanFigure2;

    @FindBy(xpath = "//*[text()='Password']")
    public WebElement passwordIcone;

    @FindBy(xpath = "//input[@name='currentPassword']")
    public WebElement currentPassword;

    @FindBy(id = "newPassword")
    public WebElement newPassword;

    @FindBy(id = "confirmPassword")
    public WebElement confirmPassword;

    @FindBy(xpath = "//*[text()='Save']")
    public WebElement save;

    @FindBy(xpath = "//*[text()='Password changed!']")
    public WebElement passwordChanged;

    @FindBy(xpath = "(//li[@style='background-color: rgb(0, 255, 0);'])[5]")
    public WebElement yesil;

    @FindBy(xpath = "(//li[@style='background-color: rgb(153, 255, 0);'])[4]")
    public WebElement acikYesil;

    @FindBy(xpath = "(//li[@style='background-color: rgb(255, 255, 0);'])[3]")
    public WebElement sari;

    @FindBy(xpath = "(//li[@style='background-color: rgb(255, 153, 0);'])[2]")
    public WebElement turuncu;

    @FindBy(xpath = "//li[@style='background-color: rgb(255, 0, 0);']")
    public WebElement kirmizi;

    @FindBy(xpath = "//*[text()='Your password is required to be at least 4 characters.']")
    public WebElement missingCharactersMessage;

    @FindBy(className = "invalid-feedback")
    public WebElement uyusmayanPasswordMessage;
}
