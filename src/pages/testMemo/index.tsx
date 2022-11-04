import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.less';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import {
  Form,
  FormLayout,
  FormItem,
  FormGrid,
  FormButtonGroup,
  Space,
  Submit,
  Reset,
  Input,
  Password,
  Select,
  TreeSelect,
  DatePicker,
  TimePicker,
  NumberPicker,
  Transfer,
  Cascader,
  Radio,
  Checkbox,
  Switch,
  ArrayCards,
  ArrayCollapse,
  ArrayItems,
  ArrayTable,
  ArrayTabs,
  FormCollapse,
  FormStep,
  FormTab,
  Editable,
  PreviewText,
} from '@formily/antd';
import schema from './schema'

const form = createForm()

const SchemaField = createSchemaField({
  components: {
    Form,
    FormLayout,
    FormItem,
    FormGrid,
    FormButtonGroup,
    Space,
    Submit,
    Reset,
    Input,
    Password,
    Select,
    TreeSelect,
    DatePicker,
    TimePicker,
    NumberPicker,
    Transfer,
    Cascader,
    Radio,
    Checkbox,
    Switch,
    ArrayCards,
    ArrayCollapse,
    ArrayItems,
    ArrayTable,
    ArrayTabs,
    FormCollapse,
    FormStep,
    FormTab,
    Editable,
    PreviewText,
  },
})

const IndexPage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1 className={styles.title}>Parent</h1>
      <button onClick={(e) => { setCount(count+1) }}>加1</button>
      <p>count: {count}</p>
      <FormProvider form={form}>
        <SchemaField
          schema={schema}
        />
      </FormProvider>
    </div>
  );
}

export default IndexPage;
