/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2022-01-04 00:07:33
 * */

import { InputProps, InputValue } from '../input';
import { TagProps } from '../tag';
import { TNode } from '../common';

export interface TdTagInputProps {
  /**
   * 是否可清空
   * @default false
   */
  clearable?: boolean;
  /**
   * 标签过多的情况下，折叠项内容，默认为 `+N`。如果需要悬浮就显示其他内容，可以使用 collapsedItems 自定义。`value` 表示标签值，`collapsedTags` 表示折叠标签值，`count` 表示总标签数量
   */
  collapsedItems?: TNode<{ value: TagInputValue; collapsedTags: TagInputValue; count: number }>;
  /**
   * 透传 Input 输入框组件全部属性
   */
  inputProps?: InputProps;
  /**
   * 左侧文本
   */
  label?: string | TNode;
  /**
   * 最大允许输入的标签数量
   */
  max?: number;
  /**
   * 最小折叠数量，用于标签数量过多的情况下折叠选中项，超出该数值的选中项折叠。值为 0 则表示不折叠
   * @default 0
   */
  minCollapsedNum?: number;
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 是否只读，值为真会隐藏标签移除按钮和输入框
   * @default false
   */
  readonly?: boolean;
  /**
   * 输入框状态
   */
  status?: 'success' | 'warning' | 'error';
  /**
   * 透传 Tag 组件全部属性
   */
  tagProps?: TagProps;
  /**
   * 值
   */
  value?: TagInputValue;
  /**
   * 值，非受控属性
   */
  defaultValue?: TagInputValue;
  /**
   * 自定义标签值呈现内容
   */
  valueDisplay?: string | TNode<{ value: TagInputValue }>;
  /**
   * 值变化时触发，参数 `trigger` 表示数据变化的触发来源
   */
  onChange?: (
    value: TagInputValue,
    context: { trigger: TagInputTriggerSource; index?: number; e: MouseEvent | KeyboardEvent },
  ) => void;
  /**
   * 清空按钮点击时触发
   */
  onClear?: (context: { e: MouseEvent }) => void;
  /**
   * 按键按下 Enter 时触发
   */
  onEnter?: (value: TagInputValue, context: { e: KeyboardEvent; inputValue: InputValue }) => void;
}

export type TagInputValue = Array<string | number>;

export type TagInputTriggerSource = 'enter' | 'tag-delete' | 'backspace' | 'clear';
