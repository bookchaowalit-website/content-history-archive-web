import { ThreadView } from "@/components/archive-views";
import { eras } from "@/lib/archive";

export default function Home() {
  return <ThreadView eras={eras} />;
}
