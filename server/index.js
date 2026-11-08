import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useNavigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "cn";
import { motion, useAnimation } from "motion/react";
import { ArrowUpRight, BrainCircuit, ExternalLink, FileText, Globe, GraduationCap } from "lucide-react";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
// app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
// app/assets/icons/github.tsx
var BODY_VARIANTS = {
	normal: {
		opacity: 1,
		pathLength: 1,
		scale: 1,
		transition: { duration: .3 }
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		scale: [.9, 1],
		transition: { duration: .4 }
	}
};
var TAIL_VARIANTS = {
	normal: {
		pathLength: 1,
		rotate: 0,
		transition: { duration: .3 }
	},
	draw: {
		pathLength: [0, 1],
		rotate: 0,
		transition: { duration: .5 }
	},
	wag: {
		pathLength: 1,
		rotate: [
			0,
			-15,
			15,
			-10,
			10,
			-5,
			5
		],
		transition: {
			duration: 2.5,
			ease: "easeInOut",
			repeat: Number.POSITIVE_INFINITY
		}
	}
};
var GithubIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
	const bodyControls = useAnimation();
	const tailControls = useAnimation();
	const isControlledRef = useRef(false);
	useImperativeHandle(ref, () => {
		isControlledRef.current = true;
		return {
			startAnimation: async () => {
				bodyControls.start("animate");
				await tailControls.start("draw");
				tailControls.start("wag");
			},
			stopAnimation: () => {
				bodyControls.start("normal");
				tailControls.start("normal");
			}
		};
	});
	const handleMouseEnter = useCallback(async (e) => {
		if (isControlledRef.current) onMouseEnter?.(e);
		else {
			bodyControls.start("animate");
			await tailControls.start("draw");
			tailControls.start("wag");
		}
	}, [
		bodyControls,
		onMouseEnter,
		tailControls
	]);
	const handleMouseLeave = useCallback((e) => {
		if (isControlledRef.current) onMouseLeave?.(e);
		else {
			bodyControls.start("normal");
			tailControls.start("normal");
		}
	}, [
		bodyControls,
		tailControls,
		onMouseLeave
	]);
	return /* @__PURE__ */ jsx("div", {
		className: cn(className),
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		...props,
		children: /* @__PURE__ */ jsxs("svg", {
			fill: "none",
			height: size,
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "2",
			viewBox: "0 0 24 24",
			width: size,
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ jsx(motion.path, {
				animate: bodyControls,
				d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
				initial: "normal",
				variants: BODY_VARIANTS
			}), /* @__PURE__ */ jsx(motion.path, {
				animate: tailControls,
				d: "M9 18c-4.51 2-5-2-7-2",
				initial: "normal",
				variants: TAIL_VARIANTS
			})]
		})
	});
});
GithubIcon.displayName = "GithubIcon";
// app/components/Header.tsx
function Header() {
	const navigate = useNavigate();
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-50 w-full border-b border-[#eeeeee] bg-white/90 backdrop-blur-xl",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => navigate("/"),
				className: "group flex items-center gap-2.5",
				children: /* @__PURE__ */ jsxs("span", {
					className: "text-[15px] font-semibold tracking-tight text-[#171717]",
					children: ["Arkadina", /* @__PURE__ */ jsx("span", { className: "text-[#2563eb]" })]
				})
			}), /* @__PURE__ */ jsxs("nav", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ jsx("a", {
						href: "https://github.com/Arkadina",
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "GitHub",
						className: "flex size-9 items-center justify-center rounded-lg text-[#737373] transition-all hover:bg-[#f5f5f5] hover:text-[#171717]",
						children: /* @__PURE__ */ jsx(GithubIcon, { size: 18 })
					}),
					/* @__PURE__ */ jsx("div", { className: "mx-1 h-5 w-px bg-[#eeeeee]" }),
					/* @__PURE__ */ jsxs("button", {
						onClick: () => navigate("/cv.pdf"),
						className: "group flex h-9 items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white px-3.5 text-[13px] font-medium text-[#262626] transition-all hover:border-[#d4d4d4] hover:bg-[#fafafa] active:scale-[0.98]",
						children: [
							/* @__PURE__ */ jsx(FileText, {
								size: 15,
								className: "text-[#737373]"
							}),
							"Curriculum Vitae",
							/* @__PURE__ */ jsx(ArrowUpRight, {
								size: 14,
								className: "text-[#a3a3a3] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							})
						]
					})
				]
			})]
		})
	});
}
// app/components/Main.tsx
var technologies = [
	{
		category: "Code Languages",
		items: [
			"JavaScript",
			"TypeScript",
			"Python",
			"Kotlin",
			"SQL"
		]
	},
	{
		category: "Frontend",
		items: [
			"React.js",
			"Next.js",
			"React Native"
		]
	},
	{
		category: "Backend & Database",
		items: [
			"Node.js",
			"Nest.js",
			"Supabase",
			"Firebase",
			"MongoDB",
			"PostgreSQL",
			"REST APIs"
		]
	},
	{
		category: "AI & Data Science",
		items: [
			"Python",
			"PyTorch",
			"Scikit-learn",
			"YOLO",
			"OpenCV",
			"Pandas",
			"SHAP",
			"PyRadiomics"
		]
	},
	{
		category: "Tools",
		items: [
			"Git",
			"GitHub",
			"Docker",
			"Figma",
			"Linux"
		]
	},
	{
		category: "Languages",
		items: ["Portuguese", "English"]
	}
];
var projects = [
	{
		name: "Highus",
		description: "Educational platform for exam preparation and question management.",
		icon: GraduationCap,
		url: "https://highus.com.br",
		technologies: [
			"Next.js",
			"React",
			"TypeScript",
			"Supabase",
			"PostgreSQL",
			"Edge Functions",
			"Python",
			"PyTorch",
			"OCR",
			"YOLO"
		]
	},
	{
		name: "Cloudsky app",
		description: "A tool used to create, organize, and save passwords with end-to-end encryption. Frontend development using React JS.",
		icon: Globe,
		url: "https://cloudskyapp.com/en",
		technologies: ["TypeScript", "JavaScript"]
	},
	{
		name: "Sixcry",
		description: " private end-to-end cryptography and data encryption service. Frontend development using React JS.",
		icon: Globe,
		url: "https://sixcry.com",
		technologies: ["TypeScript", "JavaScript"]
	},
	{
		name: "OpX Browser",
		description: "Open-source browser project. Frontend development using React Native.",
		icon: Globe,
		url: "https://github.com/opxbrowser",
		technologies: [
			"React Native",
			"TypeScript",
			"JavaScript"
		]
	},
	{
		name: "Dental AI Research",
		description: "Machine learning and computer vision applied to dental radiology and CBCT imaging.",
		icon: BrainCircuit,
		url: "#",
		technologies: [
			"Python",
			"PyTorch",
			"YOLO",
			"Scikit-learn",
			"SHAP"
		]
	}
];
function SectionTitle({ children }) {
	return /* @__PURE__ */ jsx("h2", {
		className: "mb-6 text-lg font-semibold tracking-tight text-neutral-900",
		children
	});
}
function TechStack() {
	return /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx(SectionTitle, { children: "Technologies" }), /* @__PURE__ */ jsx("div", {
		className: "space-y-5",
		children: technologies.map((group) => /* @__PURE__ */ jsxs("div", {
			className: "grid gap-2 sm:grid-cols-[160px_1fr]",
			children: [/* @__PURE__ */ jsx("h3", {
				className: "pt-1 text-sm text-neutral-500",
				children: group.category
			}), /* @__PURE__ */ jsx("div", {
				className: "flex flex-wrap gap-2",
				children: group.items.map((item) => /* @__PURE__ */ jsx("span", {
					className: "rounded-md border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-700 transition hover:border-blue-300 hover:text-blue-600",
					children: item
				}, item))
			})]
		}, group.category))
	})] });
}
function Projects() {
	return /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx(SectionTitle, { children: "Projects" }), /* @__PURE__ */ jsx("div", {
		className: "divide-y divide-neutral-200 border-y border-neutral-200",
		children: projects.map((project) => {
			const Icon = project.icon;
			return /* @__PURE__ */ jsx("article", {
				className: "group py-5",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex size-10 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 transition group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600",
						children: /* @__PURE__ */ jsx(Icon, {
							size: 19,
							strokeWidth: 1.7
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-sm font-semibold text-neutral-900",
									children: project.name
								}), /* @__PURE__ */ jsx("a", {
									href: project.url,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": `Visit ${project.name}`,
									className: "text-neutral-400 transition hover:text-blue-600",
									children: /* @__PURE__ */ jsx(ExternalLink, { size: 15 })
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm leading-6 text-neutral-500",
								children: project.description
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-3 flex flex-wrap gap-1.5",
								children: project.technologies.map((tech) => /* @__PURE__ */ jsx("span", {
									className: "rounded bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-600",
									children: tech
								}, tech))
							})
						]
					})]
				})
			}, project.name);
		})
	})] });
}
function Main() {
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen bg-white text-neutral-900",
		children: /* @__PURE__ */ jsxs("main", {
			className: "mx-auto max-w-7xl space-y-16 px-5 py-14 sm:py-20",
			children: [
				/* @__PURE__ */ jsxs("section", { children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-semibold tracking-tight",
						children: "Arkadina"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 max-w-xl text-sm leading-7 text-neutral-500",
						children: "I started programming as a hobby in 2018, when I used to play Minecraft with my best friend, Hubert Ryan. We worked on automating macros for Minecraft. Since then, I've been teaching myself how to code, continuously learning and never looking back. Together, we founded several technology companies, including Cloudsky, Sixcry, and eventually Highus."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 max-w-xl text-sm leading-7 text-neutral-500",
						children: "I would call myself a software developer interested in building digital products, exploring artificial intelligence and solving problems through technology."
					})
				] }),
				/* @__PURE__ */ jsx(TechStack, {}),
				/* @__PURE__ */ jsx(Projects, {})
			]
		})
	});
}
// app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Portfolio" }, {
		name: "Portfolio",
		content: "Welcome to my Portfolio"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs("main", {
		className: "flex min-h-screen bg-[#F6F6F6] flex-col",
		children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Main, {})]
	});
});
// \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/arkadinaassets/entry.client-ChhaeA7v.js",
		"imports": ["/arkadinaassets/jsx-runtime-7vNEmt-1.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/arkadinaassets/root-CqAnjOA8.js",
			"imports": ["/arkadinaassets/jsx-runtime-7vNEmt-1.js"],
			"css": ["/arkadinaassets/root-gtJy_R20.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/arkadinaassets/home-kYS-4jfy.js",
			"imports": ["/arkadinaassets/jsx-runtime-7vNEmt-1.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/arkadinaassets/manifest-e84207b7.js",
	"version": "e84207b7",
	"sri": void 0
};
// \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_customRouteDiscovery": false,
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var unstable_apiOnly = false;
var unstable_apiServerOrigin = void 0;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/arkadina";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr, unstable_apiOnly, unstable_apiServerOrigin };
