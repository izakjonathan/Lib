import { CircleDollarSign, Layers3, Sparkles } from "lucide-react";
import { AnimatedFlipCard } from "@/components/ui/animated-flip-card";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { EmptyCard } from "@/components/ui/empty-card";
import { FloatingField } from "@/components/ui/floating-field";
import { HoverBlurCards } from "@/components/ui/hover-blur-cards";
import { LoginForm } from "@/components/ui/login-form";
import { NeumorphicButton } from "@/components/ui/neumorphic-button";

export type ComponentEntry = {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: string;
  code: string;
  preview: React.ReactNode;
};

export const componentRegistry: ComponentEntry[] = [
  {
    slug: "neumorphic-button",
    title: "Neumorphic Button",
    category: "Buttons",
    description: "A tactile dark action button with pressed, hover and keyboard-focus states.",
    status: "Accessible",
    code: `<NeumorphicButton icon={<Sparkles size={18} />}>\n  Create project\n</NeumorphicButton>`,
    preview: <NeumorphicButton icon={<Sparkles size={18}/>}>Create project</NeumorphicButton>,
  },
  {
    slug: "empty-card",
    title: "Empty Card",
    category: "Cards",
    description: "A reusable elevated surface for custom content, empty states and compact feature blocks.",
    status: "Responsive",
    code: `<EmptyCard>\n  <div>Your content</div>\n</EmptyCard>`,
    preview: <EmptyCard><span className="empty-card__content"><Layers3 size={30}/><strong>Drop content here</strong><small>Reusable surface primitive.</small></span></EmptyCard>,
  },
  {
    slug: "dashboard-card",
    title: "Dashboard Card",
    category: "Cards",
    description: "A configurable metric card for dashboards, reports and overview screens.",
    status: "Typed props",
    code: `<DashboardCard\n  title="Revenue"\n  value="€24,860"\n  change="12.4%"\n  progress={76}\n  icon={<CircleDollarSign size={16} />}\n/>`,
    preview: <DashboardCard title="Revenue" value="€24,860" change="12.4%" progress={76} icon={<CircleDollarSign size={16}/>} />,
  },
  {
    slug: "animated-flip-card",
    title: "Animated Flip Card",
    category: "Cards",
    description: "A motion-led card with a moving light treatment and hover flip interaction.",
    status: "Motion",
    code: `<AnimatedFlipCard />`,
    preview: <AnimatedFlipCard/>,
  },
  {
    slug: "hover-blur-cards",
    title: "Hover Blur Group",
    category: "Cards",
    description: "A grouped-card interaction that focuses the hovered item and softens neighbouring cards.",
    status: "Group interaction",
    code: `<HoverBlurCards />`,
    preview: <HoverBlurCards/>,
  },
  {
    slug: "floating-field",
    title: "Floating Field",
    category: "Forms",
    description: "A semantic floating-label input with focus, required and validation-ready states.",
    status: "Accessible",
    code: `<FloatingField\n  id="project-name"\n  label="Project name"\n  required\n/>`,
    preview: <div className="field-demo"><FloatingField id="detail-project-name" label="Project name" required /></div>,
  },
  {
    slug: "login-form",
    title: "Login Form",
    category: "Forms",
    description: "A complete dark login surface with semantic fields and reusable form styling.",
    status: "Form pattern",
    code: `<LoginForm />`,
    preview: <LoginForm/>,
  },
];

export function getComponent(slug: string) {
  return componentRegistry.find((item) => item.slug === slug);
}
