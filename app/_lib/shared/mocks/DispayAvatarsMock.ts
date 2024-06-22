import { DisplayAvatarsProps } from '../components/layout/dashboard/primitives/DisplayAvatars';

export const DISPLAY_AVATARS_MOCK: DisplayAvatarsProps = {
  title: 'Top donors',
  hyperlink: {
    label: 'View',
    redirect: '/admin/donations-history',
  },
  avatars: [
    { name: 'Remy Sharp', src: '/static/images/avatar/1.jpg' },
    { name: 'Travis Howard', src: '/static/images/avatar/2.jpg' },
    { name: 'Cindy Baker', src: '/static/images/avatar/3.jpg' },
    { name: 'Agnes Walker', src: '/static/images/avatar/4.jpg' },
    { name: 'Trevor Henderson', src: '/static/images/avatar/5.jpg' },
    { name: 'Someone Henderson', src: '/static/images/avatar/5.jpg' },
    { name: 'Something Henderson', src: '/static/images/avatar/5.jpg' },
    { name: 'Anyone Henderson', src: '/static/images/avatar/5.jpg' },
  ],
};
