import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();
const router = new Router();

app.use((context, next) => {
    context.response.headers.set("Access-Control-Allow-Origin", "*");
    context.response.headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS"
    );
    context.response.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type"
    );
    return next();
});

router.options("/calculate", (context) => {
    context.response.status = 204;
});

export const performOperation = (a, b, operator) => {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return 0;
    }
};

export const calculate = async (data) => {
    let calcul = [];
    let result = 0;
    let number = "";
    const operation = data.value;
    for (let i = 0; i < operation.length; i++) {
        if (["+", "-", "*", "/"].includes(operation[i])) {
            calcul.push(parseFloat(number));
            calcul.push(operation[i]);
            number = "";
        } else {
            number += operation[i];
        }
    }
    calcul.push(parseFloat(number));

    let i = 0;
    while (i < calcul.length) {
        if (calcul[i] === "*" || calcul[i] === "/") {
            const result = performOperation(
                calcul[i - 1],
                calcul[i + 1],
                calcul[i]
            );
            calcul.splice(i - 1, 3, result);
            i -= 1;
        } else {
            i += 1;
        }
    }

    i = 0;
    while (i < calcul.length) {
        if (calcul[i] === "+" || calcul[i] === "-") {
            const result = performOperation(
                calcul[i - 1],
                calcul[i + 1],
                calcul[i]
            );
            calcul.splice(i - 1, 3, result);
            i -= 1;
        } else {
            i += 1;
        }
    }
    return `${calcul[0]}`;
};

router.post("/calculate", async (context) => {
    const body = await context.request.body().value;
    context.response.body = await calculate(body);
});

app.use(router.routes());
app.use(router.allowedMethods());

if (!Deno.env.get("TEST_ENVIRONMENT")) {
    app.listen({ port: 7777 });
}

export default app;
