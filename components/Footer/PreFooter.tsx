import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PreFooter() {
  return (
    <section className="mt-12 py-12 px-3 bg-primary/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold max-w-xl text-center mb-8">
            Prepared to turn your ideas into reality? I&apos;m here to help
          </h2>
          <Link href={"/contact"}>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
