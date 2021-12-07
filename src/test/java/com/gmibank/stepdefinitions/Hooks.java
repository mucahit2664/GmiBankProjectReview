package com.gmibank.stepdefinitions;

import com.gmibank.utilities.CommonMethods;
import com.gmibank.utilities.Driver;
import io.cucumber.core.gherkin.Scenario;
import org.junit.After;
import org.junit.Before;

public class Hooks {
    //@Before TestNG deki @BeforeMethod gibidir
    //GLOBAL Hooks annotation
    //her scenario dan once calisir
    @Before
    public void setUp(){
        //System.out.println("Hooks class- Setup Method");
    }

    @After
    public void tearDown(Scenario scenario){
        //System.out.println("Hooks class - tearDown Method ");

        //screenshot almak icin
        //final byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        //screenshotu frameworke bir image olarak yerlestiriyoruz.
        //Her FAIL olan scenario dan sonra screenshot almaliyiz.

        //Scenario basarisiz olursa image ekleyelim
        //if(scenario.isFailed()){
        //    scenario.embed(screenshot,"image/png");
        //  }

        Driver.closeDriver();
    }
}