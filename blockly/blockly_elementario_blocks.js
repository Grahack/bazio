Blockly.Blocks['program'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PROGRAM");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setColour(350);
    this.setTooltip("Contenant pour le programme.");
    this.setHelpUrl("https://grahack.github.io/elementario/index.html#doc-fr");
  }
};

Blockly.Blocks['press'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("press_")
        .appendField(new Blockly.FieldDropdown(
            [["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"],
             ["5","5"], ["6","6"], ["7","7"]]), "button_num")
        .appendField("()");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(350);
    this.setTooltip("Appui sur bouton momentané.");
    this.setHelpUrl("https://grahack.github.io/elementario/index.html#doc-fr");
  }
};

Blockly.Blocks['release'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("release_")
        .appendField(new Blockly.FieldDropdown(
            [["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"],
             ["5","5"], ["6","6"], ["7","7"]]), "button_num")
        .appendField("()");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(350);
    this.setTooltip("Relache du bouton momentané.");
    this.setHelpUrl("https://grahack.github.io/elementario/index.html#doc-fr");
  }
};

Blockly.Blocks['toggle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("toggle_")
        .appendField(new Blockly.FieldDropdown(
            [["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"],
             ["5","5"], ["6","6"], ["7","7"]]), "button_num")
        .appendField("()");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(350);
    this.setTooltip("Action sur un bouton à bascule.");
    this.setHelpUrl("https://grahack.github.io/elementario/index.html#doc-fr");
  }
};

Blockly.Blocks['segment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("segment");
    this.appendValueInput("place")
        .setCheck("Number");
    this.appendValueInput("seg")
        .setCheck(["String", "Number"]);
    this.appendValueInput("on_off")
        .setCheck(["Boolean", "Number"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(350);
    this.setTooltip("Dans le caractère X, allume ou éteind (Z) le segment Y.");
    this.setHelpUrl("https://grahack.github.io/elementario/index.html#doc-fr");
  }
};

Blockly.Blocks['debug'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("debug(");
    this.appendValueInput("info");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(350);
    this.setTooltip("Dans le caractère X, allume ou éteind (Z) le segment Y.");
    this.setHelpUrl("https://grahack.github.io/elementario/index.html#doc-fr");
  }
};

Blockly.Blocks['toggle_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("toggle_state");
    this.setOutput(true, null);
    this.setColour(350);
    this.setTooltip("Liste donnant l’état des boutons à bascule.");
    this.setHelpUrl("https://grahack.github.io/elementario/index.html#doc-fr");
  }
};

Blockly.Blocks['toggle_state_num'] = {
  init: function() {
    this.appendValueInput("num")
        .appendField("toggle_state")
        .setCheck("Number");
    this.setOutput(true, null);
    this.setColour(350);
    this.setTooltip("Liste donnant l’état des boutons à bascule.");
    this.setHelpUrl("https://grahack.github.io/elementario/index.html#doc-fr");
  }
};
