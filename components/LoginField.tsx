import type { LucideIcon } from "lucide-react";

type LoginFieldProps = {
  id: string;
  label: string;
  icon: LucideIcon;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
};

export default function LoginField({
  id,
  label,
  icon: Icon,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
}: LoginFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-navy">
        {label}
      </label>
      <div className="relative">
        <Icon
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/40"
        />
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required
          className="form-input"
        />
      </div>
    </div>
  );
}
