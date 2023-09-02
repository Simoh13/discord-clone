import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className=" flex flex-col">
      <p className='text-3xl font-bold'>Hello</p>
      <Button>Click Me</Button>
    </div>
  )
}
