import { GridView, PersonAdd, AutoAwesome } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const navigationItems = [
  {
    label: 'Directory',
    path: '/',
    icon: GridView,
  },
  {
    label: 'Add employee',
    path: '/employees/add',
    icon: PersonAdd,
  },
];

export default function Sidebar() {
  return (
    <aside className='fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-[#252945] bg-[#0c0f24]'>
      {/* Brand */}
      <div className='flex items-center justify-between p-5'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#6e64ff] to-[#a87aff]'>
            <AutoAwesome
              sx={{
                fontSize: 27,
                color: '#fff',
              }}
            />
          </div>
          <div>
            <h2 className='text-sm font-semibold'>INVOICE HUB</h2>

            <p className='text-xs text-slate-400'>People OS</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='flex-1 overflow-y-auto px-3 py-5'>
        <div className='space-y-3'>
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-[#202441] text-white'
                      : 'text-[#9b9eb5] hover:bg-[#171b34] hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      sx={{
                        fontSize: 20,
                        color: isActive ? '#f4f4f8' : '#9b9eb5',
                      }}
                    />

                    <span className='text-[14px] font-normal'>
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Bottom information */}
      <div className='mt-auto rounded-[20px] border border-[#292d49] bg-[#11152c] px-[20px] py-[20px]'>
        <p className='text-[14px] font-medium leading-[20px] text-[#a5a7ba]'>
          Demo data lives in your browser.
        </p>

        <p className='text-[14px] font-medium leading-[20px] text-[#a5a7ba]'>
          Refresh-safe, reset by clearing
        </p>

        <p className='text-[14px] font-medium leading-[20px] text-[#a5a7ba]'>
          storage.
        </p>
      </div>
    </aside>
  );
}
