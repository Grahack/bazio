javascript.javascriptGenerator.forBlock['program'] = function(block, gen) {
  var statements_action = gen.statementToCode(block, 'action');
  // Add markers to only keep the code which is inside these markers and
  // get rid of the code of the other blocks outside.
  return "#####" + statements_action + "#####";
};

javascript.javascriptGenerator.forBlock['press'] = function(block, gen) {
  var dropdown_button_num = block.getFieldValue('button_num');
  var statements_action = gen.statementToCode(block, 'action');
  var code = 'function press_' + dropdown_button_num + '() {\n';
  code = code + statements_action;
  code = code + '}\n';
  return code;
};

javascript.javascriptGenerator.forBlock['release'] = function(block, gen) {
  var dropdown_button_num = block.getFieldValue('button_num');
  var statements_action = gen.statementToCode(block, 'action');
  var code = 'function release_' + dropdown_button_num + '() {\n';
  code = code + statements_action;
  code = code + '}\n';
  return code;
};

javascript.javascriptGenerator.forBlock['toggle'] = function(block, gen) {
  var dropdown_button_num = block.getFieldValue('button_num');
  var statements_action = gen.statementToCode(block, 'action');
  var code = 'function toggle_' + dropdown_button_num + '() {\n';
  code = code + statements_action;
  code = code + '}\n';
  return code;
};

javascript.javascriptGenerator.forBlock['segment'] = function(block, gen) {
  var value_place = gen.valueToCode(block, 'place', javascript.Order.ATOMIC);
  var value_seg = gen.valueToCode(block, 'seg', javascript.Order.ATOMIC);
  var seg = eval(value_seg);
  var value_on_off = gen.valueToCode(block, 'on_off', javascript.Order.ATOMIC);
  var code = 'segment_' + value_place + '_' + seg + '(' + value_on_off + ');\n';
  return code;
};

javascript.javascriptGenerator.forBlock['debug'] = function(block, gen) {
  var value_info = gen.valueToCode(block, 'info', javascript.Order.ATOMIC);
  var code = 'console.log(' + value_info + ');\n';
  return code;
};

javascript.javascriptGenerator.forBlock['toggle_state'] = function(block, gen) {
  var code = 'toggle_state';
  return [code, javascript.Order.ATOMIC];
};

javascript.javascriptGenerator.forBlock['toggle_state_num'] = function(block, gen) {
  var value_num = gen.valueToCode(block, 'num', javascript.Order.ATOMIC);
  var code = 'toggle_state[' + value_num + ']';
  return [code, javascript.Order.ATOMIC];
};
