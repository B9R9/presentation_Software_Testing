<!-- 
 k6 run load-test.js

 node lighthouse.js

 npx cypress open

 npx cypress run

 npx vitest run integration.test.js

 npx vitest run unit.test.js -->

# Practical Part: Demonstration of Tests
## **Load Testing with K6**
K6 is an open-source load testing tool designed to simulate user scenarios and test the performance and resilience of an application under load.

Command:
> k6 run load-test.js  

K6 can simulate thousands of users, helping detect performance issues and preparing the application for scenarios like DDoS (Distributed Denial of Service) attacks.

### DDoS Attack and Load Testing
DDoS Attack: A DDoS attack sends massive amounts of requests to a server with the goal of overloading it, making the service unavailable to legitimate users.
Load Testing with K6: Although not malicious, K6 can simulate a similar situation by testing how the application handles sudden spikes in user traffic.
Example Script for K6 (load-test.js):
```JS
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 50 }, // Simulate 50 users after 30 seconds
        { duration: '1m', target: 200 },  // Hold at 200 users for 1 minute
        { duration: '10s', target: 0 },   // Gradually reduce the number of users
    ],
};

export default function () {
    const res = http.get('https://yourwebsite.com');
    check(res, {
        'status was 200': (r) => r.status === 200,
        'response time < 200ms': (r) => r.timings.duration < 200,
    });
    sleep(1);
}
```

### Goal:
Measure your application's resilience under high user load.
Detect bottlenecks and ensure the application remains functional during high traffic peaks.
***
## **Performance Testing with Lighthouse**
Lighthouse is an automated tool for testing the performance of web applications. It generates reports on:
* Performance (loading times, etc.)
* Accessibility (best practices for disabled users)
* SEO (search engine optimization)

Command: 
> node lighthouse.js

Example Lighthouse Script (lighthouse.js):
```JS
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

(async () => {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = { logLevel: 'info', output: 'html', port: chrome.port };
    const runnerResult = await lighthouse('https://yourwebsite.com', options);

    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
    await chrome.kill();
})();
```

### Goal:
Measure the overall performance of your website.
Identify optimization areas to improve speed and efficiency.
***

## **End-to-End Testing with Cypress**
Cypress is an end-to-end testing framework designed to simulate user behavior to ensure the application works as expected.

Commands:
> npx cypress open

Opens the Cypress test runner to run and interact with your tests.
> npx cypress run

 Runs all Cypress tests in headless mode, ideal for CI/CD pipelines.
Example End-to-End Test in Cypress:
```JS
describe('Shopping Cart Test', () => {
    it('adds an item to the cart', () => {
        cy.visit('https://yourwebsite.com');
        cy.get('.add-to-cart').click();
        cy.get('.cart-items').should('contain', '1 item');
    });
});
```

### Goal:
Simulate user actions such as adding items to the cart, making a purchase, and navigating the app.
Ensure that all features work as intended from the user's perspective.
***
## **Integration Testing with Vitest**
Vitest is a fast testing framework focused on integration and unit tests for modern JavaScript frameworks.

Command: 
> npx vitest run integration.test.js

Example Integration Test in Vitest:
```JS
import { getUserData } from '../services/api';

test('fetches user data successfully', async () => {
    const user = await getUserData(1);
    expect(user).toEqual({
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
    });
});
```
### Goal:
Ensure that different components of the application (APIs, databases, etc.) work together.
Validate the flow of data between components.
***
## **Unit Testing with Vitest**
Unit tests focus on testing small, isolated units of code, such as functions or methods.

Command: 
> npx vitest run unit.test.js

Example Unit Test in Vitest:
```JS
import { add } from '../utils/math';

test('correctly adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});
```
### Goal:
Verify that each individual component works as expected.
Prevent bugs in critical functions before they affect other parts of the application.