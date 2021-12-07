package com.gmibank.pages;

import com.gmibank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class US01_Pages {


    public US01_Pages(){
        PageFactory.initElements(Driver.getDriver(),this);
    }


@FindBy(id= "account-menu")
    public WebElement humanHead;

    @FindBy(xpath = "(//a[@class='dropdown-item'])[2]")
    public WebElement registerButonu;

}
