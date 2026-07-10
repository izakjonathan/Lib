import { ArrowRight, CircleDollarSign, Layers3, Plus, Sparkles } from "lucide-react";
import { ActionButton } from "@/components/ui/action-button";
import { AnimatedFlipCard } from "@/components/ui/animated-flip-card";
import { ButtonShowcase } from "@/components/ui/button-showcase";
import { CheckboxField } from "@/components/ui/checkbox-field";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { EmptyCard } from "@/components/ui/empty-card";
import { FloatingField } from "@/components/ui/floating-field";
import { FormShowcase } from "@/components/ui/form-showcase";
import { HoverBlurCards } from "@/components/ui/hover-blur-cards";
import { LoginForm } from "@/components/ui/login-form";
import { NeumorphicButton } from "@/components/ui/neumorphic-button";
import { SearchField } from "@/components/ui/search-field";
import { SelectField } from "@/components/ui/select-field";
import { TextareaField } from "@/components/ui/textarea-field";
import { ToggleSwitch } from "@/components/ui/toggle-switch";

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
    slug: "action-button",
    title: "Action Button",
    category: "Buttons",
    description: "A typed button primitive with five visual variants, three sizes, icons and a loading state.",
    status: "Six states",
    code: `<ActionButton\n  variant="primary"\n  leftIcon={<Plus size={16} />}\n>\n  Add item\n</ActionButton>`,
    preview: <ActionButton leftIcon={<Plus size={16}/>}>Add item</ActionButton>,
  },
  {
    slug: "button-showcase",
    title: "Button System",
    category: "Buttons",
    description: "The complete action-button family shown together for quick comparison and QA.",
    status: "Variant set",
    code: `<ActionButton>Primary</ActionButton>\n<ActionButton variant="secondary">Secondary</ActionButton>\n<ActionButton variant="outline">Outline</ActionButton>\n<ActionButton variant="ghost">Ghost</ActionButton>\n<ActionButton variant="danger">Delete</ActionButton>\n<ActionButton loading>Saving</ActionButton>`,
    preview: <ButtonShowcase />,
  },
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
    slug: "search-field",
    title: "Search Field",
    category: "Forms",
    description: "A compact search control with semantic input behaviour and responsive width.",
    status: "Search pattern",
    code: `<SearchField placeholder="Search customers…" />`,
    preview: <SearchField placeholder="Search customers…" />,
  },
  {
    slug: "select-field",
    title: "Select Field",
    category: "Forms",
    description: "A styled native select that keeps keyboard support and mobile platform behaviour.",
    status: "Native control",
    code: `<SelectField id="status" aria-label="Status">\n  <option>Draft</option>\n  <option>Active</option>\n</SelectField>`,
    preview: <div className="control-demo"><SelectField id="detail-status" aria-label="Status" defaultValue="active"><option value="draft">Draft</option><option value="active">Active</option><option value="complete">Complete</option></SelectField></div>,
  },
  {
    slug: "textarea-field",
    title: "Textarea Field",
    category: "Forms",
    description: "A labelled multiline control with helper text and a comfortable editing surface.",
    status: "Long form",
    code: `<TextareaField\n  id="notes"\n  aria-label="Notes"\n  placeholder="Add notes…"\n/>`,
    preview: <div className="control-demo"><TextareaField id="detail-notes" aria-label="Notes" placeholder="Add notes…" /></div>,
  },
  {
    slug: "toggle-switch",
    title: "Toggle Switch",
    category: "Forms",
    description: "A stateful switch with a visible status label and an underlying native checkbox.",
    status: "Interactive",
    code: `<ToggleSwitch label="Enable notifications" />`,
    preview: <div className="control-demo"><ToggleSwitch label="Enable notifications" /></div>,
  },
  {
    slug: "checkbox-field",
    title: "Checkbox Field",
    category: "Forms",
    description: "A custom checkbox presentation that retains native form semantics and focus behaviour.",
    status: "Native semantics",
    code: `<CheckboxField label="Remember my choice" />`,
    preview: <div className="control-demo"><CheckboxField label="Remember my choice" defaultChecked /></div>,
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
  {
    slug: "form-showcase",
    title: "Project Brief Form",
    category: "Forms",
    description: "A complete form composition demonstrating fields, selection, toggles and actions together.",
    status: "Composed pattern",
    code: `<FormShowcase />`,
    preview: <FormShowcase />,
  },
  {
    slug: "button-with-icon",
    title: "Button with Icon",
    category: "Buttons",
    description: "An action-button example with balanced trailing icon spacing for forward navigation.",
    status: "Icon support",
    code: `<ActionButton rightIcon={<ArrowRight size={16} />}>\n  Continue\n</ActionButton>`,
    preview: <ActionButton rightIcon={<ArrowRight size={16}/>}>Continue</ActionButton>,
  },
];

export function getComponent(slug: string) {
  return componentRegistry.find((item) => item.slug === slug);
}
