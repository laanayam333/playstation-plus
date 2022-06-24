import { RiPlaystationLine } from 'react-icons/ri';

export default {
  name: 'plan',
  title: 'Plan',
  type: 'document',
  icon: RiPlaystationLine,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'prices',
      title: 'Prices',
      type: 'array',
      of: [{ type: 'price' }],
    },
    {
      name: 'games',
      title: 'Games',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'game' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
