const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'Input',
      colour: "350",
      contents: [
        {
          kind: 'block',
          type: 'press'
        },
        {
          kind: 'block',
          type: 'release'
        },
        {
          kind: 'block',
          type: 'toggle'
        }
      ]
    },
    {
      kind: 'category',
      name: 'Output',
      colour: "350",
      contents: [
        {
          kind: 'block',
          type: 'segment',
          inputs: {
            place: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 0
                }
              }
            },
            seg: {
              block: {
                type: 'text',
                fields: {
                  TEXT: "a"
                }
              }
            },
            on_off: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 1
                }
              }
            }
          }
        },
        {
          kind: 'block',
          type: 'debug'
        }
      ]
    },
    {
      kind: 'category',
      name: 'State',
      colour: "350",
      contents: [
        {
          kind: 'block',
          type: 'toggle_state'
        },
        {
          kind: 'block',
          type: 'toggle_state_num',
          inputs: {
            num: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 0
                }
              }
            }
          }
        }
      ]
    },
    {
      kind: 'sep',
    },
    {
      kind: 'category',
      name: 'Logic',
      categorystyle: 'logic_category',
      contents: [
        {
          kind: 'category',
          name: 'If',
          categorystyle: 'logic_category',
          contents: [
            {
              kind: 'block',
              type: 'controls_if',
            },
            {
              kind: 'block',
              type: 'controls_if',
              extraState: {
                hasElse: 'true',
              },
            },
            {
              kind: 'block',
              type: 'controls_if',
              extraState: {
                hasElse: 'true',
                elseIfCount: 1,
              },
            },
          ],
        },
        {
          kind: 'category',
          name: 'Boolean',
          categorystyle: 'logic_category',
          contents: [
            {
              kind: 'block',
              type: 'logic_compare',
            },
            {
              kind: 'block',
              type: 'logic_operation',
            },
            {
              kind: 'block',
              type: 'logic_negate',
            },
            {
              kind: 'block',
              type: 'logic_boolean',
            },
            {
              kind: 'block',
              type: 'logic_null',
            },
            {
              kind: 'block',
              type: 'logic_ternary',
            },
          ],
        },
      ]
    },
    {
      kind: 'category',
      name: 'Loops',
      categorystyle: 'loop_category',
      contents: [
        {
          kind: 'block',
          type: 'controls_repeat_ext',
          inputs: {
            TIMES: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'controls_whileUntil',
        },
        {
          kind: 'block',
          type: 'controls_for',
          fields: {
            VAR: 'i',
          },
          inputs: {
            FROM: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 10,
                },
              },
            },
            BY: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'controls_forEach',
        },
        {
          kind: 'block',
          type: 'controls_flow_statements',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Math',
      categorystyle: 'math_category',
      contents: [
        {
          kind: 'block',
          type: 'math_number',
          fields: {
            NUM: 123,
          },
        },
        {
          kind: 'block',
          type: 'math_arithmetic',
          fields: {
            OP: 'ADD',
          },
        },
        {
          kind: 'block',
          type: 'math_single',
          fields: {
            OP: 'ROOT',
          },
        },
        {
          kind: 'block',
          type: 'math_trig',
          fields: {
            OP: 'SIN',
          },
        },
        {
          kind: 'block',
          type: 'math_constant',
          fields: {
            CONSTANT: 'PI',
          },
        },
        {
          kind: 'block',
          type: 'math_number_property',
          extraState: '<mutation divisor_input="false"></mutation>',
          fields: {
            PROPERTY: 'EVEN',
          },
        },
        {
          kind: 'block',
          type: 'math_round',
          fields: {
            OP: 'ROUND',
          },
        },
        {
          kind: 'block',
          type: 'math_on_list',
          extraState: '<mutation op="SUM"></mutation>',
          fields: {
            OP: 'SUM',
          },
        },
        {
          kind: 'block',
          type: 'math_modulo',
        },
        {
          kind: 'block',
          type: 'math_constrain',
          inputs: {
            LOW: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_random_int',
          inputs: {
            FROM: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'math_random_float',
        },
        {
          kind: 'block',
          type: 'math_atan2',
        },
      ]
    },
    {
      kind: "category",
      name: "Text",
      categorystyle: "text_category",
      contents: [
        {
          'kind': "block",
          'type': "text"
        },
        {
          'kind': "block",
          'type': "text_multiline"
        },
        {
          'kind': "block",
          'type': "text_join"
        },
        {
          'kind': "block",
          'type': "text_append"
        },
        {
          'kind': "block",
          'type': "text_length"
        },
        {
          'kind': "block",
          'type': "text_isEmpty"
        },
        {
          'kind': "block",
          'type': "text_indexOf"
        },
        {
          'kind': "block",
          'type': "text_charAt"
        },
        {
          'kind': "block",
          'type': "text_getSubstring"
        },
        {
          'kind': "block",
          'type': "text_changeCase"
        },
        {
          'kind': "block",
          'type': "text_trim"
        },
        {
          'kind': "block",
          'type': "text_count"
        },
        {
          'kind': "block",
          'type': "text_replace"
        },
        {
          'kind': "block",
          'type': "text_reverse"
        }
      ]
    },
    {
      kind: 'category',
      name: 'Lists',
      categorystyle: 'list_category',
      contents: [
        {
          kind: 'block',
          type: 'lists_create_empty',
        },
        {
          kind: 'block',
          type: 'lists_create_with',
          extraState: {
            itemCount: 3,
          },
        },
        {
          kind: 'block',
          type: 'lists_repeat',
          inputs: {
            NUM: {
              block: {
                type: 'math_number',
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
        {
          kind: 'block',
          type: 'lists_length',
        },
        {
          kind: 'block',
          type: 'lists_isEmpty',
        },
        {
          kind: 'block',
          type: 'lists_indexOf',
          fields: {
            END: 'FIRST',
          },
        },
        {
          kind: 'block',
          type: 'lists_getIndex',
          fields: {
            MODE: 'GET',
            WHERE: 'FROM_START',
          },
        },
        {
          kind: 'block',
          type: 'lists_setIndex',
          fields: {
            MODE: 'SET',
            WHERE: 'FROM_START',
          },
        },
      ]
      },
      {
        kind: 'sep',
      },
      {
        kind: 'category',
        name: 'Variables',
        categorystyle: 'variable_category',
        custom: 'VARIABLE',
      },
      {
        kind: 'category',
        name: 'Functions',
        categorystyle: 'procedure_category',
        custom: 'PROCEDURE',
      }
  ]
};

var blocklyDiv = document.getElementById('blocklyDiv');
const workspace = Blockly.inject(blocklyDiv, {toolbox: toolbox});

var functions_block = workspace.newBlock('program');
functions_block.setDeletable(false);
functions_block.initSvg();
functions_block.moveBy(20, 20);
functions_block.render();

const supportedEvents = new Set([
  Blockly.Events.BLOCK_CHANGE,
  Blockly.Events.BLOCK_CREATE,
  Blockly.Events.BLOCK_DELETE,
  Blockly.Events.BLOCK_MOVE,
]);

workspace.addChangeListener(function(event) {
  // Don't update while changes are happening.
  if (workspace.isDragging()) return;
  // Don't update for unsupported events.
  if (!supportedEvents.has(event.type)) {
      console.log("Ignored event.type is", event.type);
      return;
  }
  var raw_src = Blockly.JavaScript.workspaceToCode(workspace);
  if (typeof raw_src != 'string') {
      console.log("raw_src of type", typeof raw_src);
      return;
  }
  if (raw_src.length == 0) {
      console.log("Empty raw_src!");
      return;
  }
  // Only keep what is between the markers:
  var src = /.*#####([^]*)#####.*/.exec(raw_src)[1];
  console.log(src);
  window.eval(src);  // indirect call to be effective globally
});
