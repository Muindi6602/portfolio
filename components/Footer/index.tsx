import Link from "next/link";
import { _siteDetails } from "@/lib/config";
import SocialsBlock from "./SocialsBlock";
import { Separator } from "../ui/separator";
import Gap from "../ui/Gap";

export default function Footer() {
  return (
    <footer className="py-8 bg-neutral-800 text-primary-foreground">
      <div className="maxContainer flexCenter flex-col gap-y-4">
        <figure className="flexBetween gap-4">
          {_siteDetails.menuLinks.map((item) => (
            <Link
              key={item.label}
              href={`${item.link}`}
              className="hover:text-yellow-100 transition-all duration-500 text-sm"
            >
              {item.label}
            </Link>
          ))}
        </figure>
        <SocialsBlock />
        <Gap className="h-2" />
        <Separator />
        <Gap className="h-2" />
        <p className="flexCenter text-xs">
        <span>
  © {new Date().getFullYear()} Muindi. All rights reserved.
</span>

        </p>
      </div>
    </footer>
  );
}
