import { NavLink } from 'react-router-dom';

import { navigationItems } from './sidebar.constants';

interface SidebarNavigationProps {
  onNavigate: () => void;
}

export default function SidebarNavigation({
  onNavigate,
}: SidebarNavigationProps) {
  return (
    <nav
      className='flex-1 overflow-y-auto px-3 py-6'
      aria-label='Main navigation'
    >
      <p className='mb-3 px-3 text-[10px] font-semibold uppercase tracking-[1.2px] text-app-secondary-text'>
        Workspace
      </p>

      <div className='space-y-1.5'>
        {navigationItems.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            onClick={onNavigate}
            className={({ isActive }) =>
              [
                'flex h-11 w-full items-center gap-3 rounded-xl px-3',
                'text-sm transition-all duration-200',
                isActive
                  ? 'bg-app-background text-app-primary-text'
                  : 'text-app-secondary-text hover:bg-app-background hover:text-app-primary-text',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={
                    isActive
                      ? 'h-5! w-5! text-[#7568ff]!'
                      : 'h-5! w-5! text-app-secondary-text!'
                  }
                />

                <span className='font-medium'>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
