const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/individual_services.svelte"),
	() => import("../../../src/routes/taxpayer_resources.svelte"),
	() => import("../../../src/routes/business_services.svelte"),
	() => import("../../../src/routes/refund_options.svelte"),
	() => import("../../../src/routes/special_offers.svelte"),
	() => import("../../../src/routes/testimonials.svelte"),
	() => import("../../../src/routes/contact_us.svelte"),
	() => import("../../../src/routes/about_us.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/individual_services.svelte
	[/^\/individual_services\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/taxpayer_resources.svelte
	[/^\/taxpayer_resources\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/business_services.svelte
	[/^\/business_services\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/refund_options.svelte
	[/^\/refund_options\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/special_offers.svelte
	[/^\/special_offers\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/testimonials.svelte
	[/^\/testimonials\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/contact_us.svelte
	[/^\/contact_us\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/about_us.svelte
	[/^\/about_us\/?$/, [c[0], c[10]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];