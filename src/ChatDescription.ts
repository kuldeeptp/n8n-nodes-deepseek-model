import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const chatOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options' as NodePropertyTypes, // Use 'options' as NodePropertyTypes
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

export const chatFields: INodeProperties[] = [
  {
    displayName: 'Message',
    name: 'message',
    type: 'string' as NodePropertyTypes, // Use 'string' as NodePropertyTypes
    required: true,
    default: '',
  },
];