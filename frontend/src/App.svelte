<script>
    import Router from 'svelte-spa-router';
    import Home from './Home.svelte';
    import CalculatorPage from './calculator.svelte';

    const routes = {
        '/': Home,
        '/calculator': CalculatorPage
    };
</script>

<main>
    <Router {routes} />
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }
	
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>