/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  main: [
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'concepts/overview',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'concepts',
        },
      ],
    },
    {
      type: 'category',
      label: 'Contracts',
      link: {
        type: 'doc',
        id: 'contracts/v4/overview',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'contracts',
        },
      ],
    },
    {
      type: 'category',
      label: 'SDKs',
      link: {
        type: 'doc',
        id: 'sdk/v3/overview',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'sdk',
        },
      ],
    },
    {
      type: 'category',
      label: 'APIs',
      link: {
        type: 'doc',
        id: 'api/subgraph/overview',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'api',
        },
      ],
    },
  ],
}

module.exports = sidebars
