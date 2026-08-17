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
      <p className='mb-3 px-3 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#62667f]'>
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
                  ? 'bg-[#202441] text-[#f4f5fb]'
                  : 'text-[#9296ad] hover:bg-[#171b34] hover:text-[#f4f5fb]',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  sx={{
                    fontSize: 20,
                    color: isActive ? '#a89cff' : '#9296ad',
                  }}
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
