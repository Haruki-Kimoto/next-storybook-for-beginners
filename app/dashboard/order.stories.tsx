import { Meta, StoryObj } from '@storybook/react';

import Component from './order';

const meta = {
  title: 'dashboard/Order',
  component: Component,
  args: {
    data: [
      {
        id: 1,
        date: '2019-03-16',
        name: 'Elvis Presley',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 312.44,
      },
      {
        id: 2,
        date: '2019-03-16',
        name: 'Paul McCartney',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 866.99,
      },
      {
        id: 3,
        date: '2019-03-16',
        name: 'Tom Scholz',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 100.81,
      },
      {
        id: 4,
        date: '2019-03-16',
        name: 'Michael Jackson',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 654.39,
      },
      {
        id: 5,
        date: '2019-03-15',
        name: 'Bruce Springsteen',
        shipTo: 'Tupelo, MS',
        paymentMethod: 'VISA ⠀•••• 3719',
        amount: 212.79,
      },
    ],
  },
  parameters: {
    layout: 'centored',
  },
  decorators: [
    (Story) => (
      <div className="w-[1000px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Order: StoryObj<typeof meta> = {};
