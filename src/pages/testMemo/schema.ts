import { ISchema } from '@formily/json-schema';

const schema: ISchema = {
  type: 'object',
  properties: {
    layout: {
      type: 'void',
      'x-component': 'FormLayout',
      'x-component-props': {
        labelCol: 6,
        wrapperCol: 18,
        labelAlign: 'left',
        colon: false,
      },
      properties: {
        textInfo: {
          title: '文本内容',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input.TextArea',
        },
        textFontSize: {
          title: '文本字体大小',
          type: 'number',
          default: 12,
          'x-decorator': 'FormItem',
          'x-component': 'Input',
        },
      },
    },
  },
};

export default schema;
