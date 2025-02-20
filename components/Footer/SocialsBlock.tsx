import {
  LINKEDIN_ICON,
  TWITTER_ICON,
  GITHUB_ICON,
  BLOG_ICON,
} from "@/lib/icons";
import Link from "next/link";

export default function SocialsBlock() {
  return (
    <div className="flexBetween gap-x-6">
      <Link
        target="_blank"
        aria-label="Facebook Social Link"
        href="https://github.com/Muindi6602"
        className=""
      >
        <GITHUB_ICON />
      </Link>

      <Link
        target="_blank"
        aria-label="Hashnode Social Link"
        href="https://hashnode.com/@josehmuindi"
        className=""
      >
        <BLOG_ICON />
      </Link>

      <Link
        target="_blank"
        aria-label="Linkedin Social Link"
        href="https://www.linkedin.com/in/joseph-muindi-mutua-16a289244"
        className=""
      >
        <LINKEDIN_ICON />
      </Link>

      <Link
        target="_blank"
        aria-label="Twitter Social Link"
        href="https://x.com/josehmuindi"
        className=""
      >
        <TWITTER_ICON />
      </Link>
    </div>
  );
}
