import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: '/xis-lab.github.io/',
    title: 'XIS Lab',
    description: 'Engineering the future of intelligent, connected and secure systems — University of Glasgow',
    lang: 'en-GB',

    head: [
        ['link', { rel: 'icon', href: 'Images/Logo/XIS-logo-white.png' }],
        ['meta', { name: 'theme-color', content: '#1677ff' }],
    ],

    themeConfig: {
        logo: 'Images/Logo/XIS-logo-white.png',
        siteTitle: 'XIS Lab',

        // ── Top Navigation ──────────────────────────────────────────
        nav: [
            { text: 'Home',    link: '/' },
            { text: 'About',   link: '/about' },
            {
                text: 'Research',
                items: [
                    { text: 'Core Research Themes',  link: '/research/Core Research Themes' },
                    { text: 'Flagship Projects',     link: '/research/Flagship Projects' },
                    { text: 'Equipment & Facilities',link: '/research/Equipment & Facilities' },
                ],
            },
            { text: 'Members', link: '/members' },
            {
                text: 'Outputs',
                items: [
                    { text: 'Publications', link: '/outputs/publications' },
                    { text: 'Data Sets',    link: '/outputs/data-sets' },
                    { text: 'Demo Videos',  link: '/outputs/demo-videos' },
                    { text: 'Patents',      link: '/outputs/patents' },
                    { text: 'Spin Outs',    link: '/outputs/spin-outs' },
                ],
            },
            { text: 'Contact', link: '/contact' },
        ],

        // ── Social / Footer links ────────────────────────────────────
        socialLinks: [
            { icon: 'github',   link: 'https://github.com/xis-lab' },
            { icon: 'twitter',  link: 'https://twitter.com/xislab' },
            { icon: 'linkedin', link: 'https://linkedin.com/company/xis-lab' },
        ],

        footer: {
            message: 'James Watt School of Engineering & School of Computing Science',
            copyright: `© ${new Date().getFullYear()} XIS Lab — University of Glasgow`,
        },

        // ── Search ───────────────────────────────────────────────────
        search: {
            provider: 'local',
        },

        // ── Edit link (optional — if you host on GitHub) ─────────────
        editLink: {
            pattern: 'https://github.com/xis-lab/website/edit/main/:path',
            text: 'Edit this page on GitHub',
        },
    },

    // 1. Install Dependencies
    //    https://tailwindcss.com/docs/installation/using-vite
    //    npm install -D tailwindcss @tailwindcss/vite @tailwindcss/typography
    //
    // 2. Configure VitePress (.vitepress/config.mts)
    // 3. Add Tailwind to Your CSS (.vitepress/theme/custom.css)
    // 4. Import the CSS in Your Theme (.vitepress/theme/index.ts)
    // fix: Update tsconfig.json
    //      In your project root tsconfig.json, change the moduleResolution setting:
    vite: {
        plugins: [tailwindcss()],
    },
})
