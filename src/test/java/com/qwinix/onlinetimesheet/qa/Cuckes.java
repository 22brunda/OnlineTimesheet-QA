package com.qwinix.onlinetimesheet.qa;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	format = {"pretty","json:target/cucumber.json","html:target/site/cucumber-pretty"},
	features= {"src/test/resources/Features"},
	glue= {"com.qwinix.onlinetimesheet.qa"}, tags= "@Login",
	monochrome=true
)
public class Cuckes {

}