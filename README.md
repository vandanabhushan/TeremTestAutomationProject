# teremTest

How to get this running:
-	Download NodeJS from https://nodejs.org/en/download/
-	Open the file and install Node
-	Install CodeceptJS 
Open a command prompt and type >npm install --save-dev codeceptjs
-	Install Puppeteer
	On the command prompt type >npm install codeceptjs puppeteer -save
- Clone the repo from git




Execute Scripts in Local:

-	Open Cmd promt and from the project directory (C:\FrontendtestsIQ)
>npx codeceptjs run
>npx codeceptjs run –steps // run with steps
>npx codeceptjs run --debug // to debug the steps

-	To Execute and view execution report
	Install Allure - on command prompt type 
	>npm install -g allure-commandline --save-dev

-	Execute scripts with Allure
	>npx codeceptjs run --plugins allure
-	View Report
	>allure serve output

To open the mind map:
The mind map included in the documentation folder need xmind software app to view.
(mind maps helps to pictorially view the details instead of long word documents)
