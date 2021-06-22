Install cypress:
npm install cypress --save-dev

Run cypress:
./node_modules/.bin/cypress open
 
Install mochawesome reporter:
npm i --save-dev cypress-mochawesome-reporter

Execute Report:
npx cypress run --spec .\cypress\integration\examples\demo.spec.js  --reporter mochawesome
 
