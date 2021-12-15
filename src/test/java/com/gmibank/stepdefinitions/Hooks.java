package com.gmibank.stepdefinitions;

import com.gmibank.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Scenario;
import org.junit.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class Hooks {
    //@Before TestNG deki @BeforeMethod gibidir
    //GLOBAL Hooks annotation
    //her scenario dan once calisir
    @Before
    public void setUp(){
        System.out.println("Hooks class- Setup Method");
    }

    @After

    public void tearDown(Scenario scenario){
        final byte[] screenshot=((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        if (scenario.isFailed()) {
            scenario.attach(screenshot, "image/png","screenshots");
        }

        //  Driver.closeDriver();



    }
}