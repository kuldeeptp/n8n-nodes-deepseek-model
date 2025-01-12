export const chatOperations = [
    {
      displayName: 'Operation',
      name: 'operation',
      type: 'options',
      noDataExpression: true,
      options: [
        {
          name: 'Send Message',
          value: 'sendMessage',
        },
      ],
      default: 'sendMessage',
    },
  ];
  
  export const chatFields = [
    {
      displayName: 'Message',
      name: 'message',
      type: 'string',
      required: true,
      default: '',
    },
  ];