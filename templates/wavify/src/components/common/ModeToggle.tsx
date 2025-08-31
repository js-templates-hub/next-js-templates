import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type Props = {
  className?: string;
};
export function ModeToggle(props: Props) {
  const { setTheme } = useTheme();

  return (
    <div className={`flex items-center gap-2 ${props.className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Sun className="h-[1.2rem] w-[1.2rem] text-current dark:hidden" />
          <Moon className="hidden h-[1.2rem] w-[1.2rem] text-current dark:block" />
          <span className="sr-only">Toggle theme</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('light')}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('dark')}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('system')}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
