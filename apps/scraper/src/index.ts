import { launch } from '@cloudflare/playwright';

interface Subscription {
	id: number;
	email: string;
	target_url: string;
}

export default {
	// 1. The Scheduled Handler (The Daily Scraper)
	async scheduled(event, env, ctx): Promise<void> {
		console.log(`[${new Date().toISOString()}] Starting Daily Scrape...`);

		// A. Get all users from D1
		// This uses the "DB" binding from your wrangler.jsonc
		const { results } = await env.DB.prepare('SELECT * FROM subscriptions').all<Subscription>();

		if (!results || results.length === 0) {
			console.log('No subscriptions found in database.');
			return;
		}

		// B. Launch the Cloudflare Browser
		// This uses the "MYBROWSER" binding from your wrangler.jsonc
		const browser = await launch(env.MYBROWSER);

		try {
			for (const sub of results) {
				console.log(`Processing ${sub.email} for URL: ${sub.target_url}`);

				// const page = await browser.newPage();

				// C. Navigate to Edmunds
				// We use domcontentloaded to speed things up
				// await page.goto(sub.target_url, { waitUntil: 'domcontentloaded' });

				// // Wait for the listings to appear (adjusting for 2025 selectors)
				// await page.waitForSelector('[data-testid="listing-card"]', { timeout: 10000 });

				// // D. Extract the Data
				// const carData = await page.$$eval('[data-testid="listing-card"]', (cards) => {
				// 	return cards.slice(0, 5).map((card) => {
				// 		const title = card.querySelector('h2')?.textContent?.trim() || 'Unknown Car';
				// 		const price = card.querySelector('.column-price')?.textContent?.trim() || 'Contact for Price';
				// 		const link = (card.querySelector('a') as any)?.href || '';
				// 		return { title, price, link };
				// 	});
				// });

				// // E. Log results (We will add the Email step next)
				// console.log(`Found ${carData.length} cars for ${sub.email}`);
				// console.table(carData);

				// await page.close();
			}
		} catch (err) {
			console.error('Scraping Error:', err);
		} finally {
			await browser.close();
		}
	},

	// 2. The Fetch Handler (For testing via Browser)
	async fetch(request, env, ctx) {
		return new Response("Scraper is active. Run 'wrangler dev' and press 's' to test.");
	},
} satisfies ExportedHandler<Env>;
