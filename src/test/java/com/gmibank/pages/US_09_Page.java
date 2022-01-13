package com.gmibank.pages;

import com.gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US_09_Page {
    public US_09_Page(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(id="account-menu")
    public WebElement insan;

    @FindBy(id="login-item")
    public WebElement signIn;

    @FindBy(name="username")
    public WebElement username;

    @FindBy(name="password")
    public WebElement password;

    @FindBy(xpath="//button[@class='btn btn-primary']")
    public WebElement signIn2;

    @FindBy(id="entity-menu")
    public WebElement my_operations;

    @FindBy(xpath="//span[contains(text(),'Manage Customers')]")
    public WebElement manage_customers;

    @FindBy(id="jh-create-entity")
    public WebElement create_customer;

    @FindBy(id="search-ssn")
    public WebElement searchSNN;

    @FindBy(xpath="//button[@class='btn btn-secondary']")
    public WebElement searchButton;

    @FindBy(xpath="//div[@class='Toastify__toast-body']")
    public WebElement allert;

    @FindBy(id="tp-customer-firstName")
    public WebElement firstName;

    @FindBy(id="tp-customer-lastName")
    public WebElement lastName;

    @FindBy(id="tp-customer-middleInitial")
    public WebElement middleInitial;

    @FindBy(id="tp-customer-email")
    public WebElement email;

    @FindBy(id="tp-customer-mobilePhoneNumber")
    public WebElement mobilePhoneNumber;

    @FindBy(id="tp-customer-phoneNumber")
    public WebElement phoneNumber;

    @FindBy(id="tp-customer-zipCode")
    public WebElement zipcode;

    @FindBy(id="tp-customer-address")
    public WebElement address;

    @FindBy(id="tp-customer-city")
    public WebElement city;

    @FindBy(id="tp-customer-ssn")
    public WebElement SSN;

    @FindBy(id="tp-customer-createDate")
    public WebElement createDate;

    @FindBy(id="tp-customer-country")
    public WebElement country;

    @FindBy(id="tp-customer-state")
    public WebElement state;
}
