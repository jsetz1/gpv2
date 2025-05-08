'use client';

import { useState } from 'react';

export default function Page() {
    const [activeView, setActiveView] = useState('dashboard');
    const [activePath, setActivePath] = useState(null);
    const [activeModule, setActiveModule] = useState(0);
    const [activeVaultTab, setActiveVaultTab] = useState('growth');
    const [activeCommunityTab, setActiveCommunityTab] = useState('questions');

    // Sample data
    const paths = [
        {
            id: 1,
            title: 'B2B SaaS Growth',
            description: 'Acquire and retain B2B customers',
            difficulty: 'Medium',
            length: '4 weeks',
            tags: ['New'],
            locked: false,
            progress: 35,
            modules: [
                { title: 'Ideal Customer Profile', completed: true },
                { title: 'Value Proposition', completed: true },
                { title: 'Channel Selection', completed: false },
                { title: 'Acquisition Strategy', completed: false },
                { title: 'Onboarding Optimization', completed: false },
                { title: 'Retention Tactics', completed: false },
            ],
        },
        {
            id: 2,
            title: 'D2C Acquisition',
            description: 'Scale your direct-to-consumer brand',
            difficulty: 'Hard',
            length: '6 weeks',
            tags: [],
            locked: false,
            progress: 0,
            modules: [
                { title: 'Brand Positioning', completed: false },
                { title: 'Paid Social Strategy', completed: false },
                { title: 'Content Marketing', completed: false },
                { title: 'Influencer Partnerships', completed: false },
                { title: 'Conversion Rate Optimization', completed: false },
                { title: 'Referral Programs', completed: false },
            ],
        },
        {
            id: 3,
            title: 'Product-Led Growth',
            description: 'Drive growth through your product',
            difficulty: 'Medium',
            length: '5 weeks',
            tags: [],
            locked: false,
            progress: 0,
            modules: [
                { title: 'PLG Fundamentals', completed: false },
                { title: 'Activation Metrics', completed: false },
                { title: 'Viral Loops', completed: false },
                { title: 'Freemium Strategy', completed: false },
                { title: 'In-app Engagement', completed: false },
                { title: 'Expansion Revenue', completed: false },
            ],
        },
        {
            id: 4,
            title: 'Enterprise Sales',
            description: 'Close larger deals with enterprise clients',
            difficulty: 'Hard',
            length: '8 weeks',
            tags: ['Locked'],
            locked: true,
            progress: 0,
            modules: [],
        },
        {
            id: 5,
            title: 'Marketplace Growth',
            description: 'Balance supply and demand for marketplaces',
            difficulty: 'Expert',
            length: '7 weeks',
            tags: ['Locked'],
            locked: true,
            progress: 0,
            modules: [],
        },
        {
            id: 6,
            title: 'Content Marketing',
            description: 'Build an audience with strategic content',
            difficulty: 'Easy',
            length: '4 weeks',
            tags: ['Locked'],
            locked: true,
            progress: 0,
            modules: [],
        },
    ];

    const vaultItems = {
        growth: [
            {
                id: 1,
                title: 'Cold Email Sequence',
                description: 'High-converting B2B outreach',
                tags: ['Email', 'B2B'],
                locked: false,
            },
            {
                id: 2,
                title: 'Viral Referral Loop',
                description: 'Incentivize user referrals',
                tags: ['Viral', 'Referral'],
                locked: false,
            },
            {
                id: 3,
                title: 'Churn Reduction Playbook',
                description: 'Identify and fix retention issues',
                tags: ['Retention'],
                locked: false,
            },
            {
                id: 4,
                title: 'SEO Content Strategy',
                description: 'Rank for high-intent keywords',
                tags: ['SEO', 'Content'],
                locked: true,
            },
            {
                id: 5,
                title: 'Pricing Optimization',
                description: 'Test and optimize pricing tiers',
                tags: ['Pricing', 'CRO'],
                locked: true,
            },
            {
                id: 6,
                title: 'Product Hunt Launch',
                description: 'Maximize your PH launch day',
                tags: ['Launch'],
                locked: false,
            },
        ],

        ads: [
            {
                id: 1,
                title: 'High-CTR Facebook Ads',
                description: '10 examples with analysis',
                tags: ['Facebook', 'Paid'],
                locked: false,
            },
            {
                id: 2,
                title: 'Google Ads for SaaS',
                description: 'Search campaign templates',
                tags: ['Google', 'SaaS'],
                locked: true,
            },
            {
                id: 3,
                title: 'LinkedIn B2B Campaigns',
                description: 'Lead gen ad examples',
                tags: ['LinkedIn', 'B2B'],
                locked: true,
            },
            {
                id: 4,
                title: 'TikTok Ad Swipe File',
                description: 'Viral D2C ad examples',
                tags: ['TikTok', 'D2C'],
                locked: false,
            },
        ],

        templates: [
            {
                id: 1,
                title: 'Growth Experiment Doc',
                description: 'Track and measure experiments',
                tags: ['Process'],
                locked: false,
            },
            {
                id: 2,
                title: 'Customer Interview Guide',
                description: 'Extract valuable insights',
                tags: ['Research'],
                locked: false,
            },
            {
                id: 3,
                title: 'Marketing Calendar',
                description: 'Plan campaigns and content',
                tags: ['Planning'],
                locked: true,
            },
        ],

        playbooks: [
            {
                id: 1,
                title: 'Zero to 1K MRR',
                description: 'First customers playbook',
                tags: ['Early-stage'],
                locked: true,
            },
            {
                id: 2,
                title: 'Scaling to $100K MRR',
                description: 'Process and team building',
                tags: ['Growth-stage'],
                locked: true,
            },
        ],
    };

    const communityThreads = {
        questions: [
            {
                id: 1,
                title: 'Best way to calculate CAC for multi-channel?',
                author: 'Sarah K.',
                replies: 12,
                time: '2h ago',
            },
            {
                id: 2,
                title: 'Has anyone tested TikTok ads for B2B?',
                author: 'Miguel L.',
                replies: 8,
                time: '5h ago',
            },
            {
                id: 3,
                title: 'Recommendations for churn prediction tools?',
                author: 'Alex W.',
                replies: 15,
                time: '1d ago',
            },
        ],

        experiments: [
            {
                id: 1,
                title: 'We increased trial conversions by 34% with this onboarding change',
                author: 'Chris T.',
                replies: 23,
                time: '3d ago',
            },
            {
                id: 2,
                title: "Failed experiment: Why our referral program didn't work",
                author: 'Jamie B.',
                replies: 17,
                time: '1w ago',
            },
        ],

        feedback: [
            {
                id: 1,
                title: 'Please review our landing page copy [link]',
                author: 'Raj M.',
                replies: 9,
                time: '6h ago',
            },
            {
                id: 2,
                title: 'Are these ad creative concepts compelling? [images]',
                author: 'Dana P.',
                replies: 11,
                time: '2d ago',
            },
        ],

        launches: [
            {
                id: 1,
                title: 'Just launched our new analytics dashboard!',
                author: 'Tyler K.',
                replies: 14,
                time: '4d ago',
            },
            {
                id: 2,
                title: 'Our Product Hunt launch results and learnings',
                author: 'Lisa J.',
                replies: 28,
                time: '2w ago',
            },
        ],

        introductions: [
            {
                id: 1,
                title: 'New member: Growth lead at fintech startup',
                author: 'Emma R.',
                replies: 7,
                time: '1d ago',
            },
            {
                id: 2,
                title: 'Hello from Berlin! Solo founder building CRM tool',
                author: 'Max S.',
                replies: 12,
                time: '3d ago',
            },
        ],
    };

    const renderDashboard = () => (
        <div className="p-8 max-w-6xl mx-auto" data-oid="qtto38i">
            <div className="mb-8" data-oid="p1qpp4x">
                <h1 className="text-3xl font-bold mb-2" data-oid="memqr-m">
                    Welcome back, Alex
                </h1>
                <p className="text-gray-600" data-oid="7abagku">
                    Ready to grow your startup today?
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" data-oid="lppz305">
                <div
                    className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                    data-oid="-u-mj5t"
                >
                    <h2 className="text-xl font-semibold mb-4" data-oid="191dvb2">
                        Continue Your Path
                    </h2>
                    <div className="flex items-center mb-4" data-oid="hccsnbv">
                        <div
                            className="w-full bg-gray-100 rounded-full h-2 mr-2"
                            data-oid="6xptbb_"
                        >
                            <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: '35%' }}
                                data-oid="as067lc"
                            ></div>
                        </div>
                        <span
                            className="text-sm text-gray-500 whitespace-nowrap"
                            data-oid="v.cttoy"
                        >
                            35% complete
                        </span>
                    </div>
                    <div className="flex justify-between items-center" data-oid="p:cjx-x">
                        <div data-oid="yl6.dk9">
                            <h3 className="font-medium" data-oid="6v5i421">
                                B2B SaaS Growth
                            </h3>
                            <p className="text-sm text-gray-500" data-oid="_9m-8lv">
                                Next: Channel Selection
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                setActivePath(paths[0]);
                                setActiveView('pathDetail');
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            data-oid="7_xaqgc"
                        >
                            Continue
                        </button>
                    </div>
                </div>

                <div
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                    data-oid="j85vtg2"
                >
                    <h2 className="text-xl font-semibold mb-4" data-oid="dp5cuj4">
                        Today's Focus
                    </h2>
                    <ul className="space-y-3" data-oid="591cx0u">
                        <li className="flex items-start" data-oid="knt2xye">
                            <div
                                className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5"
                                data-oid="du0ca:s"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    data-oid="gj82e8c"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                        data-oid="7gow9sq"
                                    />
                                </svg>
                            </div>
                            <div data-oid="wre.747">
                                <p className="font-medium" data-oid="f:izu2u">
                                    Complete Channel Selection module
                                </p>
                                <p className="text-sm text-gray-500" data-oid="s6zgg29">
                                    15 min remaining
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start" data-oid="st6-:47">
                            <div
                                className="h-6 w-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-3 mt-0.5"
                                data-oid="ee999ny"
                            >
                                2
                            </div>
                            <div data-oid="qf3vf9d">
                                <p className="font-medium" data-oid="5y-23xm">
                                    Review ad examples in the Vault
                                </p>
                                <p className="text-sm text-gray-500" data-oid="p7-o9dp">
                                    Find inspiration for your campaign
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start" data-oid="tnwfpyp">
                            <div
                                className="h-6 w-6 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center mr-3 mt-0.5"
                                data-oid="ruk9yxb"
                            >
                                3
                            </div>
                            <div data-oid="3g38:-f">
                                <p className="font-medium" data-oid="d_no12i">
                                    Join today's community call
                                </p>
                                <p className="text-sm text-gray-500" data-oid="3r6sq3u">
                                    5:00 PM - Growth Tactics Q&A
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mb-12" data-oid="18bb0h6">
                <h2 className="text-xl font-semibold mb-4" data-oid="a9dttr-">
                    Recommended Path For You
                </h2>
                <div
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                    data-oid="7yog.fz"
                >
                    <div
                        className="flex flex-col md:flex-row justify-between items-start md:items-center"
                        data-oid="5hx5.o1"
                    >
                        <div className="mb-4 md:mb-0" data-oid="m2y2vv:">
                            <div className="flex items-center mb-2" data-oid="vpuhh_:">
                                <h3 className="font-semibold text-lg" data-oid="457_o4f">
                                    Product-Led Growth
                                </h3>
                                <span
                                    className="ml-3 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                                    data-oid="0kl6ge_"
                                >
                                    Recommended
                                </span>
                            </div>
                            <p className="text-gray-600 mb-2" data-oid="8.-6fpa">
                                Drive growth through your product
                            </p>
                            <div
                                className="flex items-center text-sm text-gray-500"
                                data-oid="b:a.cs."
                            >
                                <span className="mr-4" data-oid="glot1jq">
                                    Medium difficulty
                                </span>
                                <span data-oid="ntnbi8_">5 weeks</span>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setActivePath(paths[2]);
                                setActiveView('pathDetail');
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            data-oid="q3iz8v9"
                        >
                            Start Path
                        </button>
                    </div>
                </div>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                data-oid="1q1q1:z"
            >
                <div
                    onClick={() => setActiveView('vault')}
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    data-oid="xrso4g5"
                >
                    <div
                        className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4"
                        data-oid="mxcla.k"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="y2wakp2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                data-oid="25jf0_8"
                            />
                        </svg>
                    </div>
                    <h3 className="font-semibold mb-1" data-oid="-pcvdai">
                        Growth Vault
                    </h3>
                    <p className="text-sm text-gray-500" data-oid="6vfr2ab">
                        460+ tactics and strategies
                    </p>
                </div>

                <div
                    onClick={() => {
                        setActiveView('vault');
                        setActiveVaultTab('ads');
                    }}
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    data-oid="cplg805"
                >
                    <div
                        className="h-12 w-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4"
                        data-oid="0b.lmxi"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="3jno7go"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                data-oid="v483udd"
                            />

                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                                data-oid="xlmuvxt"
                            />
                        </svg>
                    </div>
                    <h3 className="font-semibold mb-1" data-oid="8j5nwng">
                        Ad Vault
                    </h3>
                    <p className="text-sm text-gray-500" data-oid="r6bcbl3">
                        200+ ad examples with analysis
                    </p>
                </div>

                <div
                    onClick={() => {
                        setActiveView('vault');
                        setActiveVaultTab('templates');
                    }}
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    data-oid="_3_cb8q"
                >
                    <div
                        className="h-12 w-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4"
                        data-oid="xbjc02i"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="htqcbyy"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                data-oid="axbedqm"
                            />
                        </svg>
                    </div>
                    <h3 className="font-semibold mb-1" data-oid="mrhb88j">
                        Templates
                    </h3>
                    <p className="text-sm text-gray-500" data-oid=":b:0u7f">
                        Ready-to-use growth documents
                    </p>
                </div>

                <div
                    onClick={() => setActiveView('community')}
                    className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    data-oid="o0tocs4"
                >
                    <div
                        className="h-12 w-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4"
                        data-oid="lbuv1o9"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="tr6eyw."
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                data-oid="9np3zz0"
                            />
                        </svg>
                    </div>
                    <h3 className="font-semibold mb-1" data-oid="zuwmy-.">
                        Community
                    </h3>
                    <p className="text-sm text-gray-500" data-oid="yg5:ai9">
                        Connect with other founders
                    </p>
                </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100" data-oid="m1ydryr">
                <div className="flex items-center" data-oid="l486t7x">
                    <div
                        className="h-10 w-10 rounded-full bg-yellow-400 text-white flex items-center justify-center mr-4"
                        data-oid="uhc7_ii"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            data-oid="k.l5u44"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                data-oid="hvihe-5"
                            />
                        </svg>
                    </div>
                    <div data-oid="f82sn29">
                        <h3 className="font-semibold" data-oid="es94.o-">
                            Upgrade to Pro
                        </h3>
                        <p className="text-sm text-gray-600" data-oid="6pcnev1">
                            Get access to exclusive events, workshops, and expert matchmaking
                        </p>
                    </div>
                    <button
                        className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        data-oid="_8u:ira"
                    >
                        Upgrade
                    </button>
                </div>
            </div>
        </div>
    );

    const renderPaths = () => (
        <div className="p-8 max-w-6xl mx-auto" data-oid="dj.qkf_">
            <div className="mb-8" data-oid="4jrlyob">
                <h1 className="text-3xl font-bold mb-4" data-oid="dvqi16b">
                    Growth Paths
                </h1>
                <p className="text-gray-600" data-oid="yrxfw:7">
                    Step-by-step guides to grow your startup
                </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8" data-oid="5qh9l9l">
                <div className="flex items-center" data-oid="k-.lyja">
                    <span className="text-sm text-gray-500 mr-2" data-oid="jco-bs4">
                        Filter by:
                    </span>
                </div>
                <button
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50"
                    data-oid="1pxksrv"
                >
                    Company Type ▾
                </button>
                <button
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50"
                    data-oid="aa0st_."
                >
                    Channels ▾
                </button>
                <button
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50"
                    data-oid="b2h8guj"
                >
                    Stage ▾
                </button>
                <button
                    className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 rounded-full text-sm ml-auto"
                    data-oid="oj0yqu3"
                >
                    Clear Filters
                </button>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                data-oid="k-6ju_5"
            >
                {paths.map((path) => (
                    <div
                        key={path.id}
                        className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        data-oid="ng7_rqk"
                    >
                        <div className="flex justify-between items-start mb-4" data-oid="e1tx42u">
                            <h3 className="font-semibold text-lg" data-oid="qpui2re">
                                {path.title}
                            </h3>
                            {path.tags.length > 0 && (
                                <div className="flex space-x-2" data-oid="2u141r4">
                                    {path.tags.includes('New') && (
                                        <span
                                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                                            data-oid="e1_k__-"
                                        >
                                            New
                                        </span>
                                    )}
                                    {path.tags.includes('Locked') && (
                                        <span
                                            className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                                            data-oid="0d5pytt"
                                        >
                                            Pro
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                        <p className="text-gray-600 mb-4" data-oid="h7.ivlo">
                            {path.description}
                        </p>
                        <div
                            className="flex items-center text-sm text-gray-500 mb-6"
                            data-oid="sgl060r"
                        >
                            <span className="mr-4" data-oid="1yao.tk">
                                {path.difficulty} difficulty
                            </span>
                            <span data-oid="b96_pu2">{path.length}</span>
                        </div>
                        {path.progress > 0 && (
                            <div className="mb-4" data-oid="p36l-v3">
                                <div className="flex items-center mb-1" data-oid="2c11yf.">
                                    <div
                                        className="w-full bg-gray-100 rounded-full h-2 mr-2"
                                        data-oid="b.s7faa"
                                    >
                                        <div
                                            className="bg-blue-600 h-2 rounded-full"
                                            style={{ width: `${path.progress}%` }}
                                            data-oid="5qlzgez"
                                        ></div>
                                    </div>
                                    <span
                                        className="text-xs text-gray-500 whitespace-nowrap"
                                        data-oid="hb_.hqg"
                                    >
                                        {path.progress}%
                                    </span>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => {
                                if (!path.locked) {
                                    setActivePath(path);
                                    setActiveView('pathDetail');
                                }
                            }}
                            className={`w-full px-4 py-2 rounded-lg transition-colors ${
                                path.locked
                                    ? 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                            data-oid="zw.3hw6"
                        >
                            {path.locked
                                ? 'Upgrade to Unlock'
                                : path.progress > 0
                                  ? 'Continue Path'
                                  : 'Start Path'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPathDetail = () => {
        if (!activePath) return null;

        return (
            <div className="flex h-full" data-oid=".inmfo-">
                <div
                    className="w-64 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto"
                    data-oid="a823d:p"
                >
                    <h2 className="font-semibold text-lg mb-4" data-oid=":9eih0p">
                        {activePath.title}
                    </h2>
                    <div className="mb-6" data-oid="a7j7nhl">
                        <div className="flex items-center mb-1" data-oid="2v9t5qf">
                            <div
                                className="w-full bg-gray-200 rounded-full h-2 mr-2"
                                data-oid="w1ah13n"
                            >
                                <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${activePath.progress}%` }}
                                    data-oid="8ic4czf"
                                ></div>
                            </div>
                            <span
                                className="text-xs text-gray-500 whitespace-nowrap"
                                data-oid="-bp5eq7"
                            >
                                {activePath.progress}%
                            </span>
                        </div>
                    </div>
                    <div className="space-y-1" data-oid="1fg4pfo">
                        {activePath.modules.map((module, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveModule(index)}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                                    activeModule === index
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'hover:bg-gray-100'
                                } ${module.completed ? 'text-gray-400' : ''}`}
                                data-oid="eqzhkcm"
                            >
                                <div className="flex items-center" data-oid="15c1ag6">
                                    {module.completed ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 mr-2 text-green-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            data-oid="uuyy11s"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                                data-oid="3_74is3"
                                            />
                                        </svg>
                                    ) : (
                                        <div
                                            className={`h-4 w-4 rounded-full mr-2 flex items-center justify-center text-xs ${
                                                activeModule === index
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-200 text-gray-600'
                                            }`}
                                            data-oid="lcez5oz"
                                        >
                                            {index + 1}
                                        </div>
                                    )}
                                    {module.title}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex-1 p-8 overflow-y-auto" data-oid="gb4m2:i">
                    <div className="max-w-3xl mx-auto" data-oid="9janzuu">
                        <h1 className="text-2xl font-bold mb-6" data-oid="kgvh0wr">
                            {activePath.modules[activeModule].title}
                        </h1>

                        <div className="prose max-w-none mb-8" data-oid="z_he.8_">
                            <p className="text-gray-600 mb-4" data-oid="9b7lwnh">
                                In this module, you'll learn how to identify and prioritize the most
                                effective marketing channels for your B2B SaaS business.
                            </p>

                            <h3 className="text-xl font-semibold mt-8 mb-4" data-oid=":garokh">
                                Why channel selection matters
                            </h3>
                            <p className="mb-4" data-oid="97:8-er">
                                Choosing the right acquisition channels is critical for efficient
                                growth. Rather than spreading your resources thin across many
                                channels, successful startups focus intensely on 1-2 channels that
                                show the most promise.
                            </p>

                            <div
                                className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6"
                                data-oid="44mzb92"
                            >
                                <h4 className="font-medium text-blue-800 mb-2" data-oid="45kvsf2">
                                    Key Insight
                                </h4>
                                <p className="text-blue-700 text-sm" data-oid="fh6.92g">
                                    Most successful B2B SaaS companies find that content marketing,
                                    SEO, and outbound sales are their highest-ROI channels in the
                                    early stages.
                                </p>
                            </div>

                            <h3 className="text-xl font-semibold mt-8 mb-4" data-oid="g0v8u25">
                                Channel-Market Fit Framework
                            </h3>
                            <p className="mb-4" data-oid="zra.2gc">
                                Use this framework to evaluate potential channels based on:
                            </p>
                            <ul className="list-disc pl-6 mb-6" data-oid="ebvzxmy">
                                <li className="mb-2" data-oid="rc3.jd2">
                                    Customer acquisition cost (CAC)
                                </li>
                                <li className="mb-2" data-oid="by0d.f.">
                                    Scalability potential
                                </li>
                                <li className="mb-2" data-oid="q8wex3o">
                                    Time to results
                                </li>
                                <li className="mb-2" data-oid="wfotfwv">
                                    Targeting precision
                                </li>
                                <li className="mb-2" data-oid="c6i_eg2">
                                    Competitive saturation
                                </li>
                            </ul>

                            <div
                                className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-6"
                                data-oid="8c6lc_v"
                            >
                                <h4 className="font-medium text-yellow-800 mb-2" data-oid="y_1vr44">
                                    Exercise
                                </h4>
                                <p className="text-yellow-700 text-sm mb-3" data-oid="paoca7n">
                                    Complete the Channel Prioritization Matrix for your business:
                                </p>
                                <button
                                    className="px-3 py-1.5 bg-white border border-yellow-200 text-yellow-700 rounded-lg text-sm hover:bg-yellow-100 transition-colors"
                                    data-oid="emoy30z"
                                >
                                    Download Template
                                </button>
                            </div>
                        </div>

                        <div
                            className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200"
                            data-oid="ewj-p_0"
                        >
                            <button
                                className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                                data-oid="7lgx4-."
                            >
                                Previous: Value Proposition
                            </button>
                            <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                data-oid="_gzwn26"
                            >
                                Mark Complete & Continue
                            </button>
                        </div>

                        <div
                            className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200"
                            data-oid="9bowtys"
                        >
                            <h3 className="font-semibold mb-3" data-oid="z:3e5iy">
                                Need help with this module?
                            </h3>
                            <div className="flex space-x-4" data-oid="i_z5tv.">
                                <button
                                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center"
                                    data-oid="trku.uc"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="w3yw94a"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            data-oid="h4plzo4"
                                        />
                                    </svg>
                                    Ask in Community
                                </button>
                                <button
                                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center"
                                    data-oid="3ajd3q_"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="vnrd0n8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            data-oid="ky_u_ez"
                                        />
                                    </svg>
                                    Get AI Guidance
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderVault = () => (
        <div className="p-8 max-w-6xl mx-auto" data-oid="i4.d828">
            <div className="mb-8" data-oid="d3o8tnu">
                <h1 className="text-3xl font-bold mb-4" data-oid="cfw8t-3">
                    Growth Vault
                </h1>
                <p className="text-gray-600" data-oid="9y-pqzn">
                    Proven tactics, templates, and examples to accelerate your growth
                </p>
            </div>

            <div className="flex border-b border-gray-200 mb-8" data-oid="_v6pd6p">
                <button
                    onClick={() => setActiveVaultTab('growth')}
                    className={`px-4 py-3 text-sm font-medium ${
                        activeVaultTab === 'growth'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                    data-oid="8wc787y"
                >
                    Growth Tactics (460)
                </button>
                <button
                    onClick={() => setActiveVaultTab('ads')}
                    className={`px-4 py-3 text-sm font-medium ${
                        activeVaultTab === 'ads'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                    data-oid="822o9oc"
                >
                    Ad Examples (238)
                </button>
                <button
                    onClick={() => setActiveVaultTab('templates')}
                    className={`px-4 py-3 text-sm font-medium ${
                        activeVaultTab === 'templates'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                    data-oid="l0i75dm"
                >
                    Templates (34)
                </button>
                <button
                    onClick={() => setActiveVaultTab('playbooks')}
                    className={`px-4 py-3 text-sm font-medium ${
                        activeVaultTab === 'playbooks'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                    data-oid="b2oi4:p"
                >
                    Playbooks (12)
                </button>
            </div>

            <div className="flex flex-wrap gap-4 mb-8" data-oid="tee9fp:">
                <div className="flex items-center" data-oid="vvrawng">
                    <span className="text-sm text-gray-500 mr-2" data-oid="s_vv1qo">
                        Filter by:
                    </span>
                </div>
                <button
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50"
                    data-oid="7.pzr74"
                >
                    Channel ▾
                </button>
                <button
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50"
                    data-oid="ep7tp4v"
                >
                    Business Type ▾
                </button>
                <button
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-50"
                    data-oid="92gpit0"
                >
                    Difficulty ▾
                </button>
                <div className="ml-auto relative" data-oid="8fmpuzk">
                    <input
                        type="text"
                        placeholder="Search vault..."
                        className="pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        data-oid="sdcxfqz"
                    />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400 absolute left-3 top-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-oid="wyb0ok9"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            data-oid="exh7byu"
                        />
                    </svg>
                </div>
            </div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                data-oid="_4pw_8-"
            >
                {vaultItems[activeVaultTab].map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        data-oid="k.6-::s"
                    >
                        <div className="flex justify-between items-start mb-4" data-oid="sdc00h5">
                            <h3 className="font-semibold" data-oid="g9602xs">
                                {item.title}
                            </h3>
                            {item.locked && (
                                <span
                                    className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                                    data-oid="n8:kp:m"
                                >
                                    Pro
                                </span>
                            )}
                        </div>
                        <p className="text-gray-600 text-sm mb-4" data-oid="9yql5oz">
                            {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6" data-oid="50nvzq.">
                            {item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                                    data-oid="c9674iw"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <button
                            className={`w-full px-4 py-2 rounded-lg transition-colors ${
                                item.locked
                                    ? 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                            data-oid=".wnau7."
                        >
                            {item.locked ? 'Upgrade to Access' : 'View Details'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderCommunity = () => (
        <div className="p-8 max-w-6xl mx-auto" data-oid="e.bi.ep">
            <div className="mb-8" data-oid=".a5e9fg">
                <h1 className="text-3xl font-bold mb-4" data-oid="386sur3">
                    Community
                </h1>
                <p className="text-gray-600" data-oid="fe4kdr-">
                    Connect with other founders and growth experts
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8" data-oid="19mm.t3">
                <div className="md:w-64 flex-shrink-0" data-oid="6gei9gn">
                    <div
                        className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm mb-6"
                        data-oid="19iykz:"
                    >
                        <button
                            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-2"
                            data-oid="2q--y.1"
                        >
                            New Post
                        </button>
                        <button
                            className="w-full px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                            data-oid="atel9q7"
                        >
                            Ask AI Assistant
                        </button>
                    </div>

                    <div
                        className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                        data-oid="eljbu:1"
                    >
                        <h3 className="font-semibold mb-3 px-2" data-oid="c.--a_g">
                            Categories
                        </h3>
                        <nav className="space-y-1" data-oid="mg61732">
                            <button
                                onClick={() => setActiveCommunityTab('questions')}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                                    activeCommunityTab === 'questions'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'hover:bg-gray-100 text-gray-600'
                                }`}
                                data-oid="uo7unap"
                            >
                                Ask a Growth Question
                            </button>
                            <button
                                onClick={() => setActiveCommunityTab('experiments')}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                                    activeCommunityTab === 'experiments'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'hover:bg-gray-100 text-gray-600'
                                }`}
                                data-oid="59jbuog"
                            >
                                Experiment Log
                            </button>
                            <button
                                onClick={() => setActiveCommunityTab('feedback')}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                                    activeCommunityTab === 'feedback'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'hover:bg-gray-100 text-gray-600'
                                }`}
                                data-oid="vli1dd9"
                            >
                                Get Feedback
                            </button>
                            <button
                                onClick={() => setActiveCommunityTab('launches')}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                                    activeCommunityTab === 'launches'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'hover:bg-gray-100 text-gray-600'
                                }`}
                                data-oid="kzqpd26"
                            >
                                Launch Gallery
                            </button>
                            <button
                                onClick={() => setActiveCommunityTab('introductions')}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                                    activeCommunityTab === 'introductions'
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'hover:bg-gray-100 text-gray-600'
                                }`}
                                data-oid="zz1vkcj"
                            >
                                Introductions
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="flex-1" data-oid="gpr62dh">
                    <div
                        className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                        data-oid="av1-8t."
                    >
                        <div
                            className="p-4 border-b border-gray-100 flex justify-between items-center"
                            data-oid="_rz03a3"
                        >
                            <h2 className="font-semibold" data-oid="so3i57w">
                                {activeCommunityTab === 'questions' && 'Ask a Growth Question'}
                                {activeCommunityTab === 'experiments' && 'Experiment Log'}
                                {activeCommunityTab === 'feedback' && 'Get Feedback'}
                                {activeCommunityTab === 'launches' && 'Launch Gallery'}
                                {activeCommunityTab === 'introductions' && 'Introductions'}
                            </h2>
                            <div className="flex items-center" data-oid="_yywju:">
                                <button
                                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors mr-2"
                                    data-oid="3m7il:a"
                                >
                                    Recent ▾
                                </button>
                                <div className="relative" data-oid="3a9hyvi">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="pl-8 pr-4 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        data-oid="r6d2sq6"
                                    />

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400 absolute left-2.5 top-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="454jq_9"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            data-oid="rtk6k1k"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div data-oid="z:jlj9f">
                            {communityThreads[activeCommunityTab].map((thread) => (
                                <div
                                    key={thread.id}
                                    className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                    data-oid="qfn0sex"
                                >
                                    <div className="flex justify-between mb-2" data-oid="wb52qs9">
                                        <h3 className="font-medium" data-oid="lpbz7i1">
                                            {thread.title}
                                        </h3>
                                        <span className="text-xs text-gray-500" data-oid="4yay9f0">
                                            {thread.time}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-sm" data-oid="hu0zm1g">
                                        <span className="text-gray-600 mr-4" data-oid="a9v2tw.">
                                            By {thread.author}
                                        </span>
                                        <span
                                            className="text-gray-500 flex items-center"
                                            data-oid="xsmufrf"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 mr-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                data-oid="xjo7ydd"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                                    data-oid="k.9x5ec"
                                                />
                                            </svg>
                                            {thread.replies} replies
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 text-center" data-oid="p4dj6_6">
                            <button
                                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                                data-oid="utnxc2g"
                            >
                                Load More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col" data-oid="cmhthw6">
            <header
                className="bg-white border-b border-gray-200 sticky top-0 z-10"
                data-oid="vu3yg41"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="6k.ffhu">
                    <div className="flex justify-between h-16" data-oid="jg:-810">
                        <div className="flex" data-oid="o0q7164">
                            <div className="flex-shrink-0 flex items-center" data-oid="9u:u9m3">
                                <svg
                                    className="h-8 w-8 text-blue-600"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    data-oid="4:6-sfe"
                                >
                                    <path
                                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                        data-oid="e--_hq8"
                                    ></path>
                                </svg>
                                <span className="ml-2 text-xl font-semibold" data-oid="xy2utc7">
                                    Demand Curve
                                </span>
                            </div>
                            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8" data-oid="1xx.cw3">
                                <button
                                    onClick={() => setActiveView('dashboard')}
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                        activeView === 'dashboard'
                                            ? 'border-blue-600 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                    data-oid="hoxkqei"
                                >
                                    Dashboard
                                </button>
                                <button
                                    onClick={() => setActiveView('paths')}
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                        activeView === 'paths' || activeView === 'pathDetail'
                                            ? 'border-blue-600 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                    data-oid="yw8css0"
                                >
                                    Growth Paths
                                </button>
                                <button
                                    onClick={() => setActiveView('vault')}
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                        activeView === 'vault'
                                            ? 'border-blue-600 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                    data-oid="clk0-58"
                                >
                                    Vault
                                </button>
                                <button
                                    onClick={() => setActiveView('community')}
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                        activeView === 'community'
                                            ? 'border-blue-600 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                                    data-oid="969xt0j"
                                >
                                    Community
                                </button>
                            </nav>
                        </div>
                        <div className="flex items-center" data-oid="e9n5rzs">
                            <button
                                className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                                data-oid=".g8.m7v"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=":txvs_9"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        data-oid="jwgudoj"
                                    />
                                </svg>
                            </button>
                            <div className="ml-3 relative" data-oid="43l6-wt">
                                <div className="flex items-center" data-oid="5lzh:4i">
                                    <button
                                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none"
                                        data-oid=":9nptr0"
                                    >
                                        <span
                                            className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium"
                                            data-oid="7kk3yrg"
                                        >
                                            A
                                        </span>
                                    </button>
                                    <span
                                        className="ml-2 text-sm font-medium text-gray-700 hidden md:block"
                                        data-oid="hi7os09"
                                    >
                                        Alex Johnson
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 relative overflow-y-auto" data-oid="bneujxd">
                {activeView === 'dashboard' && renderDashboard()}
                {activeView === 'paths' && renderPaths()}
                {activeView === 'pathDetail' && renderPathDetail()}
                {activeView === 'vault' && renderVault()}
                {activeView === 'community' && renderCommunity()}
            </main>
        </div>
    );
}
