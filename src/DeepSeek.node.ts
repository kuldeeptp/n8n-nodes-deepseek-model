import type { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';
import { chatFields, chatOperations } from './ChatDescription';
import { FIMFields, fimOperations } from './FIMDescription';

export class DeepSeek implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'DeepSeek',
    name: 'deepSeek',
    icon: { light: 'file:DeepSeek.svg', dark: 'file:DeepSeek.svg' },
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Consume DeepSeek AI',
    defaults: {
      name: 'DeepSeek',
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    credentials: [
      {
        name: 'deepSeekApi',
        required: true,
      },
    ],
    requestDefaults: {
      ignoreHttpStatusErrors: true,
      baseURL: 'https://api.deepseek.com',
    },
    properties: [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
          {
            name: 'Chat',
            value: 'chat',
          },
          {
            name: 'FIM',
            value: 'fim',
          },
        ],
        default: 'chat',
      },
      ...chatOperations,
      ...fimOperations,
      ...chatFields,
      ...FIMFields,
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      const resource = this.getNodeParameter('resource', itemIndex) as string;
      const operation = this.getNodeParameter('operation', itemIndex) as string;

      if (resource === 'chat') {
        if (operation === 'sendMessage') {
          const message = this.getNodeParameter('message', itemIndex) as string;
          const response = await this.helpers.httpRequest({
            method: 'POST',
            url: '/v1/chat/completions',
            body: {
              messages: [{ role: 'user', content: message }],
            },
          });
          returnData.push({ json: response });
        }
      } else if (resource === 'fim') {
        if (operation === 'completeCode') {
          const code = this.getNodeParameter('code', itemIndex) as string;
          const response = await this.helpers.httpRequest({
            method: 'POST',
            url: '/v1/fim/completions',
            body: {
              code,
            },
          });
          returnData.push({ json: response });
        }
      }
    }

    return this.prepareOutputData(returnData);
  }
}