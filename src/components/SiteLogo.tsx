import sssihlLogo from "@/assets/sssihl-logo.png";

type SiteLogoProps = {
  size?: "sm" | "md";
  className?: string;
};

export function SiteLogo({ size = "sm", className = "" }: SiteLogoProps) {
  const dim = size === "sm" ? "size-10" : "size-12";

  return (
    <img
      src={sssihlLogo}
      alt="Sri Sathya Sai Institute of Higher Learning"
      className={`${dim} shrink-0 rounded-full object-cover shadow-md ${className}`}
    />
  );
}
