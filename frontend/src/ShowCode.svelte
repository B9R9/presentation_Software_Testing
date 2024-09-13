<script>
	import { getCode } from '../utils/showCodeServices.js';

	let code = '';
    async function fetchCode() {
        try {
            code = await getCode();
        } catch (error) {
            console.error("Failed to fetch code:", error);
        }
    }

    // Appeler fetchCode lorsque le composant est monté
    fetchCode();
</script>
<main>
	<h1>calculator.svelte</h1>
	<div class="code-box">
		<pre>
			<code>
	{`${code}`}
			</code>
		</pre>
	</div>
</main>