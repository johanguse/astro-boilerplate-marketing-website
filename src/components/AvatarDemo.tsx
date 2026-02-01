import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      
      <Avatar className="h-16 w-16">
        <AvatarFallback className="text-xl">SM</AvatarFallback>
      </Avatar>
      
      <Avatar className="h-20 w-20">
        <AvatarFallback className="text-2xl bg-primary text-primary-foreground">MJ</AvatarFallback>
      </Avatar>
    </div>
  );
}
