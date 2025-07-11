import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip"

const HoverComponent = ({ children, description }: { children: React.ReactNode, description: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default HoverComponent;
