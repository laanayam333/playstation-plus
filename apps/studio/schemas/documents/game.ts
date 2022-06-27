import { RiGamepadLine } from 'react-icons/ri';

import { console } from '../../data';

export default {
  name: 'game',
  title: 'Game',
  type: 'document',
  icon: RiGamepadLine,
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
      title: 'Release date',
      name: 'releaseDate',
      type: 'date'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'exclusive',
      title: 'Exclusive',
      type: 'boolean',
    },
    {
      name: 'developer',
      title: 'Developer',
      type: 'string',
    },
    {
      name: 'console',
      title: 'Console',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [...console],
          },
        },
      ],
    },
    // // {
    // //   name: 'bio',
    // //   title: 'Bio',
    // //   type: 'array',
    // //   of: [
    // //     {
    // //       title: 'Block',
    // //       type: 'block',
    // //       styles: [{ title: 'Normal', value: 'normal' }],
    // //       lists: [],
    // //     },
    // //   ],
    // // },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
