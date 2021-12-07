package com.gmibank.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features="@target/failed.txt"
        ,glue="stepDefinitions"
        ,monochrome=true
)

public class FailedRunner {
}
