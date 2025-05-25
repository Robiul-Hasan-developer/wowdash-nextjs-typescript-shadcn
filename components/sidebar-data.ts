import {
  House,
  Mail,
  MessageCircleMore,
  CalendarDays,
  ShieldCheck,
  Component
} from "lucide-react";


export const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: House,
      isActive: true,
      items: [
        {
          title: "AI",
          url: "/dashboard",
          circleColor: "bg-primary",
        },
        {
          title: "CRM",
          url: "/crm",
          circleColor: "bg-yellow-500",
        },
        {
          title: "eCommerce",
          url: "/ecommerce",
          circleColor: "bg-cyan-500",
        },
        {
          title: "Cryptocurrency",
          url: "/cryptocurrency",
          circleColor: "bg-red-500",
        },
        {
          title: "Investment",
          url: "/investment",
          circleColor: "bg-green-600",
        },
      ],
    },
    {
      label: "Application",
    },
    {
      title: "Email",
      url: "/email",
      icon: Mail,
    },
    {
      title: "Chat",
      url: "/chat",
      icon: MessageCircleMore,
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: CalendarDays,
    },
    {
      label: "UI Elements",
    },
    {
      title: "Components",
      url: "#",
      icon: Component,
      isActive: true,
      items: [
        {
          title: "Typography",
          url: "/typography",
          circleColor: "bg-primary",
        },
        {
          title: "Colors",
          url: "/colors",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Buttons",
          url: "/buttons",
          circleColor: "bg-green-600",
        },
        {
          title: "Dropdown",
          url: "/dropdown",
          circleColor: "bg-purple-600",
        },
        {
          title: "Alert",
          url: "/alert",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Card",
          url: "/card",
          circleColor: "bg-red-600",
        },
        {
          title: "Avatar",
          url: "/avatar",
          circleColor: "bg-green-600",
        },
        {
          title: "Progress Bar",
          url: "/progress-bar",
          circleColor: "bg-blue-600",
        },
        {
          title: "Tab & Accordion",
          url: "/tab-accordion",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Pagination",
          url: "/pagination",
          circleColor: "bg-red-600",
        },
        {
          title: "Badges",
          url: "/badge",
          circleColor: "bg-blue-600",
        },
        {
          title: "Tooltip & Popover",
          url: "/tooltip",
          circleColor: "bg-slate-900",
        },
      ],
    },

    {
      label: "Pages",
    },
    {
      title: "Authentication",
      url: "#",
      icon: ShieldCheck,
      isActive: true,
      items: [
        {
          title: "Sign In",
          url: "/auth/login",
          circleColor: "bg-primary",
        },
        {
          title: "Sign Up",
          url: "/auth/register",
          circleColor: "bg-yellow-500",
        },
        {
          title: "Forgot Password",
          url: "/auth/forgot-password",
          circleColor: "bg-cyan-500",
        },
      ],
    },
  ],
};