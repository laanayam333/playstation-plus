import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { unit } from '../../data';

export default {
  name: 'price',
  title: 'Price',
  type: 'object',
  icon: RiMoneyDollarCircleLine,
  fields: [
    {
      name: 'market',
      title: 'Market',
      type: 'string',
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string',
      options: {
        list: [...unit],
      },
    },
    {
      name: 'monthly',
      title: 'Monthly',
      type: 'number',
    },
    {
      name: 'quarterly',
      title: 'Quarterly',
      type: 'number',
    },
    {
      name: 'yearly',
      title: 'Yearly',
      type: 'number',
    },
  ],
};
