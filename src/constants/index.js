const AddOpt = ['+', 'and', 'plus', 'add'];

const SubOpt = ['-', 'minus', 'sub', 'subtract'];

const MultiOpt = ['*', 'x', 'multi', 'multiply'];

const DivideOpt = ['/', 'divide'];

[
  AddOpt,
  SubOpt,
  MultiOpt,
  DivideOpt
].map(item => Object.freeze(item))

export {
  AddOpt,
  SubOpt,
  MultiOpt,
  DivideOpt,
}

export default {
  AddOpt,
  SubOpt,
  MultiOpt,
  DivideOpt,
}