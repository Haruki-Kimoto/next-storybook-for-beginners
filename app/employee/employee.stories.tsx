import { Meta, StoryObj } from '@storybook/react';

import Component from './employee';

const meta = {
  title: 'dashboard/Deposit',
  component: Component,
  args: {
    data: [
      {
        id: 'UUID',
        name: 'test1',
        email: 'harukitesutxtxtxtxt@email.com',
        phone: '000-0000-0000',
        initial: 't',
        hiredDate: '2010-04-01',
        color: '#ff0000',
        isCalendarVisible: true,
        role: 'admin',
      },
      {
        id: 'UUID',
        name: 'test2',
        email: 'harukitesutxtxtxtxt@email.com',
        phone: '000-0000-0000',
        initial: 't',
        hiredDate: '2010-04-01',
        color: '#ff0000',
        isCalendarVisible: true,
        role: 'admin',
      },
      {
        id: 'UUID',
        name: 'test3',
        email: 'harukitesutxtxtxtxt@email.com',
        phone: '000-0000-0000',
        initial: 't',
        hiredDate: '2010-04-01',
        color: '#ff0000',
        isCalendarVisible: true,
        role: 'admin',
      },
      {
        id: 'UUID',
        name: 'test4',
        email: 'harukitesutxtxtxtxt@email.com',
        phone: '000-0000-0000',
        initial: 't',
        hiredDate: '2010-04-01',
        color: '#ff0000',
        isCalendarVisible: true,
        role: 'admin',
      },
      {
        id: 'UUID',
        name: 'test5',
        email: 'harukitesutxtxtxtxt@email.com',
        phone: '000-0000-0000',
        initial: 't',
        hiredDate: '2010-04-01',
        color: '#ff0000',
        isCalendarVisible: true,
        role: 'admin',
      },
    ],
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[1024px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Employee: StoryObj<typeof meta> = {};
