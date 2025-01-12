import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const fimOperations: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options' as NodePropertyTypes, // Use 'options' as NodePropertyTypes
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

export const FIMFields: INodeProperties[] = [
  {
    displayName: 'Code',
    name: 'code',
    type: 'string' as NodePropertyTypes, // Use 'string' as NodePropertyTypes
    required: true,
    default: '',
  },
];