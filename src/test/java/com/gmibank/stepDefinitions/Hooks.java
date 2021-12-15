package com.gmibank.stepDefinitions;

import com.gmibank.utilities.CommonMethods;
import com.gmibank.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;


public class Hooks {
    //@Before TestNG deki @BeforeMethod gibidir
    //GLOBAL Hooks annotation
    //her scenario dan once calisir
    @Before
    public void start(Scenario scenario) {
        System.out.println("Setting up browser...");
        System.out.println("Starting scenario : " + scenario.getName());
        Driver.getDriver();
    }

    @After
    public void end(Scenario scenario) {
        System.out.println("Ending scenario : " + scenario.getName());

        if (scenario.isFailed()) {

            byte[] screenshot = CommonMethods.takeScreenShot("/ScreenShot/" + scenario.getName());
            scenario.attach(screenshot, "image/png", "failedScenario");
        }
        scenario.getStatus();
        Driver.closeDriver();
    }
}
