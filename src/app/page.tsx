"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Grid, MessageCircle, Rocket, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Clients",          id: "#clients"},
        {
          name: "Team",          id: "#team"},
        {
          name: "FAQ",          id: "#faq"},
      ]}
      brandName="Social Spark Agency"
      button={{
        text: "Get Started",        href: "#contact"}}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroCarouselLogo
      logoText="Social Spark Agency"
      description="Igniting your brand's presence across all social channels. We craft compelling narratives that captivate audiences and drive measurable results for your business."
      buttons={[
        {
          text: "See Our Work",          href: "#clients"},
        {
          text: "Get a Proposal",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/business-executives-reading-sticky-notes_1170-1720.jpg",          imageAlt: "Social media marketing team brainstorming",          videoAriaLabel: "Social media team collaborating on a strategy"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/employee-coming-ai-startup-office-cto-manager-desk-request-help_482257-125536.jpg",          imageAlt: "Creative content creation for social media",          videoAriaLabel: "Content creators preparing social media visuals"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-team-coworkers-working-project_273609-16177.jpg",          imageAlt: "Social media analytics dashboard showing growth",          videoAriaLabel: "Analyzing social media performance metrics"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-writing-her-journal_23-2150416367.jpg",          imageAlt: "Person scrolling through social media feed",          videoAriaLabel: "Engaging with social media content on a smartphone"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tablet-shows-analytics-data-meeting_482257-120318.jpg",          imageAlt: "Diverse team celebrating social media success",          videoAriaLabel: "Marketing professionals high-fiving after a successful campaign"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/well-known-networking-icons-near-social-network-text-wooden-table_23-2147841378.jpg",          imageAlt: "Global social media network connections",          videoAriaLabel: "Abstract representation of global social media reach"},
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      title="Igniting Your Digital Presence"
      description="At Social Spark Agency, we don't just manage social media; we cultivate vibrant online communities and amplify your brand's voice. Our seasoned experts blend creativity with data-driven strategies to deliver unparalleled engagement and growth across all platforms."
      bulletPoints={[
        {
          title: "Strategic Content",          description: "Crafting narratives that resonate and convert, tailored to your unique brand."},
        {
          title: "Targeted Campaigns",          description: "Precision-driven ad campaigns that reach your ideal audience with maximum impact."},
        {
          title: "Performance Analytics",          description: "Leveraging insights to optimize strategies and ensure continuous growth."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-caucasian-women-working-laptops-drinking-coffee_74855-10459.jpg"
      imageAlt="Modern social media agency office interior"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Global Reach",          description: "Expand your brand's influence to audiences worldwide with expertly localized campaigns.",          bentoComponent: "globe"
        },
        {
          title: "Engagement Growth",          description: "Watch your interactions, followers, and brand loyalty soar with our proven strategies.",          bentoComponent: "animated-bar-chart"
        },
        {
          title: "Content Strategy",          description: "We develop and execute a tailored content plan that speaks directly to your target audience.",          bentoComponent: "reveal-icon",          icon: Grid
        },
        {
          title: "Paid Social Ads",          description: "Maximize your ROI with highly targeted advertising campaigns across all major platforms.",          bentoComponent: "reveal-icon",          icon: Rocket
        },
        {
          title: "Influencer Marketing",          description: "Connect with key opinion leaders to build authentic brand advocacy and reach new markets.",          bentoComponent: "reveal-icon",          icon: Users
        },
        {
          title: "Community Management",          description: "Foster a loyal brand community through active moderation and engaging interaction.",          bentoComponent: "reveal-icon",          icon: MessageCircle
        },
      ]}
      title="Our Full-Spectrum Social Media Services"
      description="From captivating content creation to advanced ad management and real-time analytics, we provide comprehensive solutions designed to elevate your brand's digital footprint."
    />
  </div>

  <div id="clients" data-section="clients">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Global Innovations",        "Fashion Forward Inc.",        "Gourmet Bites Co.",        "Peak Performance Gym",        "Secure Finance Solutions",        "Trendy Market Place",        "Wanderlust Travels"]}
      title="Trusted by Industry Leaders"
      description="We partner with ambitious brands across diverse sectors, delivering impactful social media strategies that consistently exceed expectations."
      speed={60}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "200%+",          description: "Average follower growth for our clients in the first 6 months."},
        {
          id: "m2",          value: "3x",          description: "Increase in engagement rates across managed social profiles."},
        {
          id: "m3",          value: "35%",          description: "Reduction in cost-per-acquisition for paid social campaigns."},
        {
          id: "m4",          value: "95%",          description: "Client retention rate, reflecting our commitment to long-term partnerships."},
      ]}
      title="Tangible Results You Can Count On"
      description="Our strategies are designed for measurable success, driving significant improvements in key performance indicators for our clients."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          handle: "@TechInnovate",          testimonial: "Social Spark Agency transformed our online presence. Their creative campaigns and data insights led to incredible growth. Truly exceptional!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-modern-businesswoman-standing_23-2148204492.jpg",          imageAlt: "Sarah J. from Tech Innovate"},
        {
          id: "2",          name: "Michael C.",          handle: "@FashionForward",          testimonial: "The team at Social Spark is top-notch. They understood our brand vision perfectly and delivered a social strategy that felt authentic and drove sales.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-cafe_1098-13701.jpg",          imageAlt: "Michael C. from Fashion Forward"},
        {
          id: "3",          name: "Emily R.",          handle: "@GourmetBites",          testimonial: "Our restaurant's social media has never been better. Social Spark brought fresh ideas and managed everything seamlessly, attracting more customers than ever.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-with-eyeglasses-smiling-office_329181-14553.jpg",          imageAlt: "Emily R. from Gourmet Bites"},
        {
          id: "4",          name: "David K.",          handle: "@FitnessPro",          testimonial: "Remarkable results! Our engagement rates soared, and our community is more active. Social Spark Agency is a true partner in growth.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pleased-cheerful-young-man-chats-online-with-friends-from-abroad-sits-front-laptop-computer-connected-4g-internet-coffee-shop-wears-optical-glasses-good-vision-likes-his-job_273609-29248.jpg",          imageAlt: "David K. from Fitness Pro"},
        {
          id: "5",          name: "Jessica L.",          handle: "@SecureFinance",          testimonial: "Professional, strategic, and always responsive. Social Spark helped us navigate complex digital landscapes and build trust with our audience.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-looking-photo_23-2148503496.jpg",          imageAlt: "Jessica L. from Secure Finance"},
      ]}
      showRating={true}
      title="What Our Clients Say"
      description="Hear directly from the businesses we've helped achieve their social media goals."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      groups={[
        {
          id: "leadership",          groupTitle: "Leadership Team",          members: [
            {
              id: "member-1",              title: "Alex Chen",              subtitle: "Founder & CEO",              detail: "Over 15 years experience in digital marketing, leading award-winning campaigns.",              imageSrc: "http://img.b2bpic.net/free-photo/young-attractive-student-is-carrying-special-lamp-while-posing-photographer_613910-12972.jpg",              imageAlt: "Alex Chen, Founder & CEO"},
            {
              id: "member-2",              title: "Maria Rodriguez",              subtitle: "Head of Creative",              detail: "A visionary content strategist with a passion for captivating visual storytelling.",              imageSrc: "http://img.b2bpic.net/free-photo/social-media-star-uses-professional-gear-film-vlog-intro_482257-114505.jpg",              imageAlt: "Maria Rodriguez, Head of Creative"},
            {
              id: "member-3",              title: "Ben Carter",              subtitle: "Director of Strategy",              detail: "Specializing in data-driven growth and performance marketing optimization.",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-organizing-live-shop_23-2149947439.jpg",              imageAlt: "Ben Carter, Director of Strategy"},
            {
              id: "member-4",              title: "Sophie Lee",              subtitle: "Community Lead",              detail: "Building vibrant online communities and fostering authentic brand connections.",              imageSrc: "http://img.b2bpic.net/free-photo/merry-young-adult-enjoying-christmas-conversation-video-call-room-decorated-festivity-celebration-talking-woman-preparing-drink-wine-kitchen-with-joyful-ornaments_482257-28400.jpg",              imageAlt: "Sophie Lee, Community Lead"},
          ]
        },
      ]}
      title="Meet the Experts Behind Your Success"
      description="Our diverse team of social media strategists, content creators, and marketing specialists are dedicated to bringing your brand's vision to life."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",          title: "What social media platforms do you cover?",          content: "We cover all major platforms including Facebook, Instagram, X (Twitter), LinkedIn, Pinterest, TikTok, and YouTube, tailoring strategies to where your audience is most active."},
        {
          id: "faq-2",          title: "How do you measure success?",          content: "We track key metrics such as follower growth, engagement rates, website traffic, lead generation, and conversion rates, providing detailed monthly reports."},
        {
          id: "faq-3",          title: "Can you create content for our brand?",          content: "Absolutely! Our in-house creative team specializes in producing high-quality visuals, videos, and compelling copy that aligns with your brand's voice and goals."},
        {
          id: "faq-4",          title: "What is your pricing model?",          content: "Our pricing is customized based on your specific needs, goals, and the scope of services required. We offer various packages and can create a bespoke proposal after a consultation."},
        {
          id: "faq-5",          title: "How long does it take to see results?",          content: "While results vary depending on the campaign and industry, clients typically see noticeable improvements in engagement and reach within 3-6 months. Long-term consistency drives the best outcomes."},
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find answers to common questions about our social media services, processes, and expected results."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Let's Connect"
      title="Ready to Spark Your Social Presence?"
      description="Reach out today for a complimentary consultation and discover how Social Spark Agency can elevate your brand's digital story."
      buttons={[
        {
          text: "Schedule a Consultation",          href: "mailto:info@socialspark.com"},
        {
          text: "Call Us",          href: "tel:+1234567890"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Social Spark Agency"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Content Strategy",              href: "#services"},
            {
              label: "Paid Social Ads",              href: "#services"},
            {
              label: "Influencer Marketing",              href: "#services"},
            {
              label: "Community Management",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Team",              href: "#team"},
            {
              label: "Clients",              href: "#clients"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "LinkedIn",              href: "https://linkedin.com/company/socialsparkagency"},
            {
              label: "Instagram",              href: "https://instagram.com/socialsparkagency"},
            {
              label: "X (Twitter)",              href: "https://twitter.com/socialsparkagency"},
          ],
        },
      ]}
      copyrightText="© 2024 Social Spark Agency. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
