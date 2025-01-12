export const fimOperations = [
    {
      displayName: 'Operation',
      name: 'operation',
      type: 'options',
      noDataExpression: true,
      options: [
        {
          name: 'Complete Code',
          value: 'completeCode',
        },
      ],
      default: 'completeCode',
    },
  ];
  
  export const FIMFields = [
    {
      displayName: 'Code',
      name: 'code',
      type: 'string',
      required: true,
      default: '',
    },
  ];