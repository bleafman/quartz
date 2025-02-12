import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌱 Leafman",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff", // Pure white background
          lightgray: "#f1f5f9", // Subtle gray background (slate-100)
          gray: "#94a3b8", // Muted text (slate-400)
          darkgray: "#334155", // Secondary text (slate-700)
          dark: "#0f172a", // Primary text (slate-900)
          secondary: "#059669", // Links and accents (emerald-600)
          tertiary: "#10b981", // Secondary accents (emerald-500)
          highlight: "rgba(16, 185, 129, 0.1)", // Subtle emerald highlight (emerald-500)
          textHighlight: "rgba(5, 150, 105, 0.2)", // Text selection (emerald-600)
        },
        darkMode: {
          light: "#0F172A", // Main background (slate-900)
          lightgray: "#1E293B", // Sidebar (slate-800)
          gray: "#334155", // Hover states (slate-700)
          darkgray: "#94A3B8", // Less prominent text (slate-400)
          dark: "#F8FAFC", // Primary text (slate-50)
          secondary: "#818CF8", // Links and accents (indigo-400)
          tertiary: "#A5B4FC", // Secondary accents (indigo-300)
          highlight: "rgba(255, 255, 255, 0.1)", // Subtle white highlight for hover states
          textHighlight: "rgba(139, 92, 246, 0.3)", // Text selection (violet-500, more visible)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
