import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "",
  seo: {
    title: "Mobile App Landing Template",
    description: "Mobile App Landing Template",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "https://apps.apple.com/us/app/oasis-sleep-well/id6476300242",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com/google",
      facebook: "https://facebook.com/google",
      twitter: "https://x.com/google",
    },
    links: [], 
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download the App Now !",
    subtitle:
      "Let a good story lull you to sleep. Handpicked tales and expert narration create a soothing sleep experience that eases stress and invites dreams. Listen and rest well.",
    screenshots: [
      "/screenshots/1.webp",
      "/screenshots/2.webp",
      "/screenshots/3.webp",
    ],
  },
  home: {
    seo: {
      title: "Mobile App Landing Template",
      description: "Mobile App Landing Template",
    },
    testimonials: {
      id: "testimonials",
      title: "Testimonials",
      subtitle: "Check out a few of our customer stories",
      cards: [
        {
          name: "Alice Johnson",
          comment:
            "Oasis helps me relieve stress and anxiety, breaks my irregular sleep patterns, and helps me fall into deep sleep. I usually fall asleep within 5 minutes.",
        },
        {
          name: "Bob Smith",
          comment:
            "When I can't sleep, I open this app and fall asleep within 5 minutes.",
        },
        {
          name: "Charlie Brown",
          comment:
            "Whenever I need to relax from the stress of work, I meditate with Oasis' soundscapes, which automatically take me to a place that makes me feel happy.",
        },
        {
          name: "Dana White",
          comment:
            "Medication didn't work for me, so I decided to try Oasis. Now, I start and end my day with guided meditation.",
        },
        {
          name: "Eve Adams",
          comment:
            "My brain is always so busy, and it's hard to relax. Now, practicing every day is truly wonderful and healing for me.",
        },
      ],
    },
    partners: {
      title: "Why Oasis?",
      logos: [
        "/misc/companies/apple.svg",
        "/misc/companies/aws.svg",
        "/misc/companies/google.svg",
        "/misc/companies/tumblr.svg",
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How It Works",
      subtitle:
        "Explore our comprehensive step-by-step guide to understand how our process ensures seamless and effective results",
      steps: [
        {
          title: "Choose Your Journey",
          subtitle:
            "Select sleep stories, meditations, or relaxation sounds.",
          image: "/stock/01.webp",
        },
        {
          title: "Set Your Timer",
          subtitle:
            "Drift off effortlessly with auto-shutoff.",
          image: "/stock/02.webp",
        },
        {
          title: "Breathe & Unwind",
          subtitle:
            "Follow expert-guided sessions.",
          image: "/stock/03.webp",
        },
        {
          title: "Track Progress",
          subtitle:
            "Monitor sleep quality and mindfulness streaks.",
          image: "/stock/04.webp",
        },
        {
          title: "Wake Refreshed",
          subtitle:
            "Start your day with renewed energy.",
          image: "/stock/05.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "Transform Your Sleep & Daily Routine",
      subtitle:
        "Immerse yourself in a world of deep relaxation and restorative sleep, crafted by sleep scientists and storytellers.",
      cards: [
        {
          title: "Sleep Anywhere, Anytime",
          subtitle:
            "Stream studio-quality sleep stories and meditations instantly—no downloads, no account required. Compatible with smart speakers, wearables, and bedtime routines.",
          icon: "/3D/link-front-color.webp",
        },
        {
          title: "Sleep Guardians On Call",
          subtitle:
            "Struggling to unwind? Email us at feedback@dcocb.com. We’ll reply within 24 hours—because good sleep can’t wait.",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Effortless Relaxation",
          subtitle:
            "Our minimalist interface lets you find peace in seconds: swipe to choose stories, tap to set sleep timers, breathe with guided visuals.",
          icon: "/3D/roll-brush-front-color.webp",
        },
        {
          title: "Privacy by Design",
          subtitle:
            "Your sleep data never leaves your device. No accounts, no cloud storage, military-grade local encryption—so you can rest without worries.",
          icon: "/3D/sheild-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "How do I start using Oasis to improve my sleep?",
          answer:
            "Just download the app and dive right into our library of sleep stories, meditations, and relaxation sounds—no account needed! Simply pick a session that fits your mood (like calming anxiety or drifting off after a long day) and let the soothing audio guide you.",
        },
        {
          question: "Is Oasis free, or do I need a subscription?",
          answer:
            "Yes, our free content is incredibly rich! You’ll find hundreds of sleep stories, meditations, and calming soundscapes available at no cost. If you’d like to unlock advanced features and access even more premium content, you can opt for a premium subscription.",
        },
        {
          question: "Can I use Oasis without an internet connection?",
          answer:
            "We believe \"great sound deserves to be heard in its full glory\"—which is why every audio is crafted in studio-quality detail. To preserve this immersive experience without burdening your device storage, all content is streamed online. Think of it as a concert hall-level performance, delivered straight to your ears.",
        },
        {
          question: "How does Oasis protect my privacy and data?",
          answer:
            "Your privacy is sacred to us. All your data (like sleep session history) stays securely on your device—never uploaded to the cloud. Even if our servers were compromised, your information remains untouched. Plus, since no account is required, there’s zero risk of personal data leaks. Rest assured, we’ve built security into every step.",
        },
        {
          question: "What if I have technical issues or feedback?",
          answer:
            "Contact our support team anytime via email at feedback@dcocb.com. We typically respond within 24 hours.",
        },
      ],
    },
    header: {
      headline: "Oasis",
      subtitle:
        "Sleep better, reduce stress, lower anxiety, and refocus your mind. Discover a rich collection of sleep stories, guided meditations, breathing exercises, and more.",
      screenshots: [
        "/screenshots/1.webp",
        "/screenshots/2.webp",
        "/screenshots/3.webp",
      ],
      rewards: ["App of the year \n 1st", "Product of the day"],
      usersDescription: "People are loving the app—try it today!",
      headlineMark: [1, 3],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Mobile App Landing Template",
      description: "Privacy Policy",
    },
    content: `# Privacy Policy

**Effective Date:** [2025-04-03]

## Introduction

Welcome to [Oasis] (the "App"). [ZhiYuan Yu] ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App.

## Information We Collect

### 1. Information You Provide
- **Account Information:** When you sign up for our App, we may collect your name, email address, and other contact information.
- **User Content:** We may collect any content you upload, post, or otherwise transmit through the App, including messages, photos, and other media.

### 2. Information We Collect Automatically
- **Usage Data:** We collect information about your interactions with the App, such as the features you use and the time spent on the App.
- **Device Information:** We collect information about the device you use to access the App, including IP address, device type, and operating system.

### 3. Information from Third Parties
- **Third-Party Services:** If you connect to the App through a third-party service (e.g., social media), we may collect information from that service as permitted by their privacy policies.

## How We Use Your Information

We may use the information we collect for the following purposes:
- **To Provide and Maintain Our Service:** We use your information to operate and improve the App.
- **To Communicate with You:** We may use your contact information to send you updates, notifications, and other communications related to the App.
- **To Personalize Your Experience:** We may use your information to personalize your experience with the App and to offer you content tailored to your interests.
- **For Analytics and Research:** We use the information to analyze how our users interact with the App and to improve our services.

## Sharing Your Information

We do not share your personal information with third parties except in the following circumstances:
- **With Your Consent:** We may share your information with third parties if you give us explicit consent to do so.
- **Service Providers:** We may share your information with third-party service providers who perform services on our behalf.
- **Legal Requirements:** We may disclose your information if required by law, or if we believe that such action is necessary to comply with legal obligations, protect our rights, or prevent fraud.

## Your Rights and Choices

- **Access and Correction:** You have the right to access and correct the personal information we hold about you.
- **Data Deletion:** You may request that we delete your personal information by contacting us at [Your Contact Information].
- **Opt-Out:** You may opt out of receiving promotional communications from us by following the instructions in those communications.

## Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee the absolute security of your information.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Privacy Policy.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:


[feedback@dcocb.com]  

`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Mobile App Landing Template",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** [2025-04-03]

## Introduction

This Cookies Policy explains how [ZhiYuan Yu] ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, [Oasis] (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:



[feedback@dcocb.com]  

`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - Mobile App Landing Template",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions

**Effective Date:** [2025-04-03]

## Introduction

Welcome to [Oasis] (the "App"). These Terms and Conditions ("Terms") govern your use of the App provided by [ZhiYuan Yu] ("we," "our," or "us"). By accessing or using our App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.

## Use of the App

### 1. Eligibility
To use our App, you must be at least [Insert Age] years old and capable of entering into a legally binding agreement. By using the App, you represent and warrant that you meet these eligibility requirements.

### 2. User Accounts
- **Registration:** You may be required to create an account to access certain features of the App. You must provide accurate and complete information when creating your account.
- **Account Security:** You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
- **Account Termination:** We reserve the right to terminate or suspend your account at any time, without notice, for any reason, including if we believe you have violated these Terms.

### 3. Prohibited Conduct
You agree not to:
- Use the App for any illegal or unauthorized purpose.
- Interfere with or disrupt the operation of the App or the servers or networks used to make the App available.
- Upload or transmit any viruses, malware, or other harmful code.
- Attempt to gain unauthorized access to any part of the App or to other accounts, systems, or networks connected to the App.

## Intellectual Property

### 1. Ownership
All content and materials available on the App, including but not limited to text, graphics, logos, and software, are the property of [ZhiYuan Yu] or its licensors and are protected by intellectual property laws.

### 2. License
We grant you a limited, non-exclusive, non-transferable license to access and use the App for your personal, non-commercial use. This license is subject to your compliance with these Terms.

### 3. Restrictions
You may not:
- Reproduce, distribute, modify, or create derivative works of any content or materials on the App without our prior written consent.
- Use any data mining, robots, or similar data gathering or extraction methods on the App.

## Disclaimers and Limitation of Liability

### 1. Disclaimers
The App is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the App. We disclaim all warranties, whether express or implied, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 2. Limitation of Liability
To the fullest extent permitted by law, [ZhiYuan Yu] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
- Your use or inability to use the App;
- Any unauthorized access to or use of our servers and/or any personal information stored therein;
- Any bugs, viruses, or other harmful code that may be transmitted to or through the App;
- Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the App.

## Indemnification

You agree to indemnify, defend, and hold harmless [ZhiYuan Yu], its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Jurisdiction] to resolve any legal matter arising from these Terms.

## Changes to These Terms

We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Terms.

## Contact Us

If you have any questions or concerns about these Terms, please contact us at:


[feedback@dcocb.com]  

`,
  },
};

export default templateConfig;
