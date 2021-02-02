## Nightwatch UI Automation

This is an automation project for Demo UI  that uses a node testing framework called nightwatch to test the web application.

[Nightwatch](http://nightwatchjs.org/)

## Prerequisites

1. [Install node.](https://nodejs.org/en/download/)

2. Run npm install to download the dependencies.

   `npm install`

## To run tests



Install npx if your dependencies are not globally installed `npm install npx`. Each of the following commands should be executed with npx as prefix. E.g `npx nightwatch --tag smoke_QA --env chrome` 



1. Run all the tests only in specific browser.

   npx nightwatch --tag smoke_QA --env chrome, npx nightwatch --tag smoke_QA --env firefox


2. Run only one testcase.

   `npx nightwatch -t [TestFolderName]/[TestFileName] --testcase '[Name of the test case]'`

3. Run with reporter, this will be created in "reports" folder
    
    `npx nightwatch -t [TestFolderName]/selectLineupType.js --reporter html-reporter.js`

4. Run pararell execution

    `npx nightwatch -t [TestFolderName]/selectLineupType.js --reporter html-reporter.js -e firefox, default`

5. Run with tags

    `npx nightwatch --tag TagName`

6. Run with retries

    `npx nightwatch -t [TestFolderName]/smoke_QA --suiteRetries 2`

7. Run in headless mode (Chrome and Firefox)

    `npx nightwatch -t [TestFolderName]/smoke_QA.js --headless` 

8. Run with debug mode: 
    Add "debugger" line inside a nightwatch command:

    `debugger;`

    Outside nightwatch command:

    `client.perform(function(){debugger;});`

    Run the command:

    `npm run testdebug`

9. To debug in VS Code
    Open Debug from Left menu or press (Windows: Ctrl + Shift + D, Mac: Command + Shift + D), then click on Open launch.json button (Looks like setting icon)
    Add below code to launch.json
    
    {
        "version": "0.2.0",
        "configurations": [
            {
            "type": "node",
            "request": "launch",
            "name": "Nightwatch",
            "program": "${workspaceRoot}/node_modules/nightwatch/bin/runner.js",
            "stopOnEntry": false,
            "args": [
                "-t",
                "tests/smoke_qa.js",
                "--testcase",
                "MenuChange Completed - plan does not request menuChange - N"
            ],
            "runtimeExecutable": null,
            "sourceMaps": false
            }
        ]
    }
    
    Set debug points in file
    Select Nightwatch from dropdown and click on Start Debugging button (Looks like play icon)

    **Note*: Change args to run tests as per your convenience*

14. To lint (using ESLint) code on save
    Install ESLint from extentions in VS Code
    Click on Manage button (Looks like setting icon) and click on Configure Extension Settings
    Settings file will open
    In ESLint section enable Auto Fix On Save
